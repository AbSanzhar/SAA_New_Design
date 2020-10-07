import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import pdfMake from 'pdfmake/build/pdfmake';
import {ApiService} from '../../api/api.service';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {StartEndDateValidator} from '../../shared/start-end-date.validator';
import {Packer} from 'docx';
import {saveAs} from 'file-saver';
import {DocumentCreator} from './rate-list-generator';
import * as $ from 'jquery';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PublicationUploadComponent} from './publication-upload/publication-upload.component';
import {EventUploadComponent} from './event-upload/event-upload.component';
import {PatentUploadComponent} from './patent-upload/patent-upload.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AddProjectMemberDialogComponent} from './add-project-member-dialog/add-project-member-dialog.component';
import {CourseUploadComponent} from './course-upload/course-upload.component';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {CountriesService} from '../../services/countries.service';
import {ScienceListGenerator} from './ScienceListGenerator';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {LanguageService} from '../../services/language.service';
import {Form} from 'docx/build/file/drawing/inline/graphic/graphic-data/pic/shape-properties/form';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
    selector: 'app-teachers',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

    TeacherPublications: any[] = [];
    userID;
    activityTypeId = 1;

    get f() {
        return this.eventForm.controls;
    }

    data: string;

    constructor(private formBuilder: FormBuilder,
                // tslint:disable-next-line:variable-name
                private _api: ApiService,
                public dialog: MatDialog,
                // tslint:disable-next-line:variable-name
                private _snackBar: MatSnackBar,
                private http: HttpClient,
                private service: CountriesService,
                // tslint:disable-next-line:variable-name
                @Inject(MAT_DIALOG_DATA) public _data: any,
                // tslint:disable-next-line:variable-name
                private _dialog: MatDialogRef<TeacherComponent>,
                private langService: LanguageService) {
        this.data = _data;

        this.filteredCoAuthorsFullNames = this.coAuthorsCtrl.valueChanges.pipe(
            startWith(null),
            map((fruit: string | null) => fruit ? this._filter(fruit) : this.allCoAuthorsFullNames.slice()));


        this.publicationForm = formBuilder.group({
            pubPublishedId: new FormControl('', Validators.required),
            pubTypeId: new FormControl('', Validators.required),
            pubCoAuthor: [],
            pubName: new FormControl('', Validators.required),
            pubYear: new FormControl('', Validators.required),
            pubPubName: new FormControl('', Validators.required),
            pubCity: new FormControl('', Validators.required),
            pubPage: new FormControl(''),
            pubEndPage: new FormControl(''),
            pubUrl: new FormControl(''),
            pubDoi: new FormControl(''),
            pubFile: new FormControl('', Validators.required),
            pubScopusUrl: ''
        });

        this.eventForm = formBuilder.group({
            event_type_id: new FormControl(''),
            event_role_id: new FormControl(''),
            event_name: new FormControl('', Validators.required),
            event_city: new FormControl('', Validators.required),
            event_url: new FormControl(''),
            event_date: new FormControl('', Validators.required),
            event_file: new FormControl('', Validators.required),
            event_user_id: this.IdToken
        });

        this.newProjForm = formBuilder.group({
            scIrn: new FormControl('', Validators.required),
            scName: new FormControl('', Validators.required),
            scType: new FormControl('', Validators.required),
            scPriority: new FormControl('', Validators.required),
            scSubPriority: new FormControl('', Validators.required),
            scSubSubPriority: new FormControl(''),
            scExecutor: new FormControl('', Validators.required),
            scCustomer: new FormControl('', Validators.required),
            scAgrDate: new FormControl('', Validators.required),
            scNum: new FormControl('', Validators.required),
            scStDate: new FormControl('', Validators.required),
            scEndDate: new FormControl('', Validators.required),
            scTotalSum: new FormControl('', Validators.required),
            scDept: new FormControl('', Validators.required),
            scDirector: new FormControl('', Validators.required)
        }, {validators: StartEndDateValidator});

        this.teacherCourseForm = formBuilder.group({
            userId: Number(this.IdToken),
            courseFormId: new FormControl('', Validators.required),
            courseTopic: new FormControl('', Validators.required),
            courseCenter: new FormControl('', Validators.required),
            courseHours: new FormControl('', Validators.required),
            coursePrice: new FormControl('', Validators.required),
            startdate: new FormControl('', Validators.required),
            enddate: new FormControl('', Validators.required),
            certificateNumber: new FormControl('', Validators.required),
            certificateDate: new FormControl('', Validators.required),
            courseDegreeId: new FormControl('', Validators.required),
            courseFile: new FormControl('', Validators.required)
        });

        this.patentForm = formBuilder.group({
            ptnt_number: new FormControl('', Validators.required),
            ptnt_country: new FormControl('', Validators.required),
            ptnt_type_id: new FormControl('', Validators.required),
            ptnt_published_TR: new FormControl('', Validators.required),
            ptnt_user_id: [this.IdToken],
            ptnt_status_id: new FormControl('1'),
            ptnt_issue_date: new FormControl('', Validators.required),
            ptnt_inserted_date: [new Date()],
            ptnt_file: new FormControl('', Validators.required),
            ptnt_file_name: new FormControl('', Validators.required),
        });

        this.exhibitionForm = formBuilder.group({
            ex_name: new FormControl(''),
            ex_date: new FormControl('', Validators.required),
            ex_place: new FormControl('', Validators.required),
            ex_type_id: new FormControl('', Validators.required),
            ex_role_id: new FormControl('', Validators.required),
            ex_level_id: new FormControl('', Validators.required),
            user_id: this.IdToken
        });

        this.awardForm = formBuilder.group({
            awardName: new FormControl('', Validators.required),
            awardTypeId: new FormControl('', Validators.required),
            awardDate: new FormControl('', Validators.required),
            awardBy: new FormControl('', Validators.required),
            awardUserId: new FormControl(this.IdToken)
        });

        this.activity1Form = formBuilder.group({
            activity_user_id: new FormControl(this.IdToken),
            activity_type_id: new FormControl('1', Validators.required),
            activity_name: new FormControl('', Validators.required),
            activity_from_date: new FormControl('', Validators.required),
            activity_to_date: new FormControl('', Validators.required),
        });

        this.activity2Form = formBuilder.group({
            activity_user_id: new FormControl(this.IdToken),
            activity_type_id: new FormControl('2', Validators.required),
            activity_name: new FormControl('', Validators.required),
            activity_from_date: new FormControl('', Validators.required),
            activity_to_date: new FormControl('', Validators.required),
        });

        this.activity3Form = formBuilder.group({
            activity_user_id: new FormControl(this.IdToken),
            activity_type_id: new FormControl('3', Validators.required),
            activity_role_id: new FormControl('', Validators.required),
            activity_name: new FormControl('', Validators.required),
            activity_from_date: new FormControl('', Validators.required),
            activity_to_date: new FormControl('', Validators.required),
            activity_file: new FormControl('', Validators.required)
        });

        this.activity4Form = formBuilder.group({
            activity_user_id: new FormControl(this.IdToken),
            activity_type_id: new FormControl('4', Validators.required),
            activity_name: new FormControl('', Validators.required),
            activity_from_date: new FormControl('', Validators.required),
            activity_to_date: new FormControl('', Validators.required),
        });

    }

  fileToUpload: File = null;
  allUsers: any[] = [];
  allCountries: any;
  private name: any;
  publicationForm: FormGroup;
  eventForm: FormGroup;
  newProjForm: FormGroup;
  teacherCourseForm: FormGroup;
  patentForm: FormGroup;
  exhibitionForm: FormGroup;
  awardForm: FormGroup;
  activity1Form: FormGroup;
  activity2Form: FormGroup;
  activity3Form: FormGroup;
  activity4Form: FormGroup;
  PubTypeCounts;
  UserDegreeCounts;
  publishCount;
  courceCount;
  disMembersCount;
  exhibitionCount;
  awardCount;
  selectedPublicationFile: File = null;
  selectedEventFile: File = null;
  selectedValue: string;
  selectedValue3: string;
  selectedValue19: string;
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public IdToken = this.DecodedToken.jti;
  public publications = [];
  private PatentFileRu: any;
  private PatentFileKz: any;
  private PatentFileEn: any;
  private PatentLinkRu: any;
  private PatentLinkKz: any;
  private PatentLinkEn: any;
  private selectedCourseFile: File = null;
  private selectedActivityFile: File = null;

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  coAuthorsCtrl = new FormControl();
  filteredCoAuthorsFullNames: Observable<string[]>;
  coAuthorsFullNames: string[] = [];
  allCoAuthorsFullNames: string[] = [];
  allCoAuthors: any[] = [];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

    div: Sourse[] = [
        {value: '1', viewValue: 'Information systems'},
        {value: '2', viewValue: 'RET'}
    ];

    years: number[] = [];
    yy: number;


    awardTypes: Sourse[] = [
        // {
        //     value: 'Награда международного уровня',
        //     viewValue: 'Награда международного уровня'
        // },
        // {
        //     value: 'Премия международного уровня',
        //     viewValue: 'Премия международного уровня'
        // },
        // {
        //     value: 'Государственная премия в области науки',
        //     viewValue: 'Государственная премия в области науки'
        // },
        // {
        //     value: 'Именные научные премии',
        //     viewValue: 'Именные научные премии'
        // },
        // {
        //     value: 'Государственные научные стипендии',
        //     viewValue: 'Государственные научные стипендии'
        // },
        // {
        //     value: 'Стипендии молодым ученым',
        //     viewValue: 'Стипендии молодым ученым'
        // },
        // {
        //     value: 'Иные стипендии',
        //     viewValue: 'Иные стипендии'
        // },
    ];


    elements: Sourse[] = [
        // {value: 'Материалы конференции', viewValue: 'Материалы конференции'},
        // {value: 'Монография', viewValue: 'Монография'},
        // {value: 'Учебник', viewValue: 'Учебник'},
        // {value: 'Пособие', viewValue: 'Пособие'},
        // {value: 'Охранный документ', viewValue: 'Охранный документ'},
        // {value: 'Периодическое издание', viewValue: 'Периодическое издание'},
    ];

    elements0: Sourse[] = [
        {value: 'МОН РК', viewValue: 'МОН РК'},
        {
            value: 'Учебно-методическое объединение (УМО) по специальности',
            viewValue: 'Учебно-методическое объединение (УМО) по специальности'
        },
        {value: 'Ученый совет университета (УС)', viewValue: 'Ученый совет университета (УС)'},
    ];

    elements1: Sourse[] = [
        {
            value: 'в международных рецензируемых научных журналах(по JCR, или имеющих в базе данных Scopus, в Web of Science)',
            viewValue: 'в международных рецензируемых научных журналах(по JCR, или имеющих в базе данных Scopus, в Web of Science)'
        },
        {
            value: 'в научных журналах, индексируемых РИНЦ и других международных базах с ненулевым импакт-фактором',
            viewValue: 'в научных журналах, индексируемых РИНЦ и других международных базах с ненулевым импакт-фактором'
        },
        {value: 'в научных изданиях, рекомендованных КОКСОН МОН РК', viewValue: 'в научных изданиях, рекомендованных КОКСОН МОН РК'},
        {
            value: 'в материалах конференций, форумов, съездов, симпозиумов, конгрессов',
            viewValue: 'в материалах конференций, форумов, съездов, симпозиумов, конгрессов'
        },
    ];

    elements2: Sourse[] = [
        // {value: 'Конференция', viewValue: 'Конференция'},
        // {value: 'Форум', viewValue: 'Форум'},
        // {value: 'Семинар', viewValue: 'Семинар'},
    ];

    elements3: Sourse[] = [
        // {value: 'Председатель', viewValue: 'Председатель'},
        // {value: 'Участник', viewValue: 'Участник'},
        // {value: 'Слушатель', viewValue: 'Слушатель'},
        // {value: 'Секретарь/Модератор', viewValue: 'Секретарь/Модератор'},
    ];

    elements4: Sourse[] = [
        // {value: '1', viewValue: 'Отчественный'},
        // {value: '2', viewValue: 'Зарубежный'},
    ];

    // elements5: Sourse[] = [
    //   {value: '1', viewValue: 'Казахстан'},
    // ];

    exhibitionLevels: Sourse[] = [ ];
    exhibitionTypes: Sourse[] = [ ];
    exhibitionRoles: Sourse[] = [ ];
    activityRoles: Sourse[] = [];



    dividers: Sourse[] = [
        {value: '1. Энергетика и машиностроение', viewValue: '1. Энергетика и машиностроение'},
        {
            value: '2. Рациональное использование природных ресурсов, в том числе водных ресурсов, геология, переработка, новые материалы и технология, безопасные изделия и конструкции',
            viewValue: '2. Рациональное использование природных ресурсов, в том числе водных ресурсов, геология, переработка, новые материалы и технология, безопасные изделия и конструкции'
        },
        {
            value: '3. Информационные, телекоммуникационные и космические технологии, научные исследования в области естественных наук',
            viewValue: '3. Информационные, телекоммуникационные и космические технологии, научные исследования в области естественных наук'
        },
        {
            value: '4. Устойчивое развитие агропромышленного комплекса и безопасность сельско-хозяйственной продукции',
            viewValue: '4. Устойчивое развитие агропромышленного комплекса и безопасность сельско-хозяйственной продукции'
        },
        {value: '5. Наука о жизни и здоровье', viewValue: '5. Наука о жизни и здоровье'},
        {
            value: '6.  Научные основы «Мәңгілік ел» (образование XXI века, фундаментальные и прикладные исследования в области гуманитарных наук)',
            viewValue: '6.  Научные основы «Мәңгілік ел» (образование XXI века, фундаментальные и прикладные исследования в области гуманитарных наук)'
        },
        {value: '7. Национальная безопасность и оборона', viewValue: '7. Национальная безопасность и оборона'},
        {value: '8. Научные исследования в области естественных наук', viewValue: '8. Научные исследования в области естественных наук'},
    ];

    array1: Sourse[] = [
        {
            value: '1.1. Тепло- и электроэнергетика и влияние энергетического сектора на окружающую среду, энергосбережение',
            viewValue: '1.1. Тепло- и электроэнергетика и влияние энергетического сектора на окружающую среду, энергосбережение'
        },
        {
            value: '1.2. Альтернативная энергетика и технологии: возобновляемые источники энергии, ядерная и водородная энергетика другие источники энергии',
            viewValue: '1.2. Альтернативная энергетика и технологии: возобновляемые источники энергии, ядерная и водородная энергетика другие источники энергии'
        },
        {
            value: '1.3.Транспортное, сельскохозяйственное, нефтегазовое и горно-металлургическое машиностроение',
            viewValue: '1.3.Транспортное, сельскохозяйственное, нефтегазовое и горно-металлургическое машиностроение'
        }
    ];

    array2: Sourse[] = [
        {
            value: '2.1. Прикладные исследования в области химической науки',
            viewValue: '2.1. Прикладные исследования в области химической науки '
        },
        {
            value: '2.2. Исследования в области наук о земле',
            viewValue: '2.2. Исследования в области наук о земле '
        },
        {
            value: '2.3. Геология и разработка месторождений полезных ископаемых ',
            viewValue: '2.3. Геология и разработка месторождений полезных ископаемых'
        },
        {
            value: '2.4. Комплексное использование минерального сырья',
            viewValue: '2.4. Комплексное использование минерального сырья'
        },
        {
            value: '2.5. Управление водными, почвенными и биологическими ресурсами',
            viewValue: '2.5. Управление водными, почвенными и биологическими ресурсами'
        },
        {
            value: '2.6. Мониторинг объектов окружающей среды и «зеленые» технологии',
            viewValue: '2.6. Мониторинг объектов окружающей среды и «зеленые» технологии'
        },
        {
            value: '2.7. Комплексная переработка углеводородного сырья',
            viewValue: '2.7. Комплексная переработка углеводородного сырья'
        },
        {
            value: '2.8. Композиционные материалы',
            viewValue: '2.8. Композиционные материалы'
        },
        {
            value: '2.9. Наноматериалы и нанотехнологии',
            viewValue: '2.9. Наноматериалы и нанотехнологии'
        },
        {
            value: '2.10. Биомедицинские материалы и биологически активные вещества',
            viewValue: '2.10. Биомедицинские материалы и биологически активные вещества'
        },
        {
            value: '2.11.Новые материалы многоцелевого назначения на основе природного сырья и техногенных отходов',
            viewValue: '2.11.Новые материалы многоцелевого назначения на основе природного сырья и техногенных отходов'
        },
        {
            value: '2.12. Промышленная биотехнология',
            viewValue: '2.12. Промышленная биотехнология'
        },
        {
            value: '2.13.Производство и обработка металлов и материалов',
            viewValue: '2.13.Производство и обработка металлов и материалов'
        },
        {
            value: '2.14.Системы очистки сточных вод, газоочистки и пылеулавливания',
            viewValue: '2.14.Системы очистки сточных вод, газоочистки и пылеулавливания'
        },
        {
            value: '2.15.Системы по переработке промышленных и бытовых отходов',
            viewValue: '2.15.Системы по переработке промышленных и бытовых отходов'
        },
        {
            value: '2.16. Системы снижения уровня выбросов парниковых газов',
            viewValue: '2.16. Системы снижения уровня выбросов парниковых газов'
        },
        {
            value: '2.17. Применения альтернативных источников энергии',
            viewValue: '2.17. Применения альтернативных источников энергии'
        },
        {
            value: '2.18. Геоинформационные системы в окружающей среде',
            viewValue: '2.18. Геоинформационные системы в окружающей среде'
        },
        {
            value: '2.19. Информационные системы производства продукции и материалов',
            viewValue: '2.19. Информационные системы производства продукции и материалов'
        },
        {
            value: '2.20. Каталитические системы и технологии',
            viewValue: '2.20. Каталитические системы и технологии'
        },
        {
            value: '2.21. Полимерные материалы со специальными свойствами',
            viewValue: '2.21. Полимерные материалы со специальными свойствами'
        },
        {
            value: '2.22.Архитектура, строительные технологии, материалы и конструкции',
            viewValue: '2.22.Архитектура, строительные технологии, материалы и конструкции'
        }
    ];

    array3: Sourse[] = [
        {
            value: '3.1. Интеллектуальные информационные технологии',
            viewValue: '3.1. Интеллектуальные информационные технологии'
        },
        {
            value: '3.2. Телекоммуникационные технологии',
            viewValue: '3.2. Телекоммуникационные технологии'
        },
        {
            value: '3.3. Космические технологии',
            viewValue: '3.3. Космические технологии'
        },
        {
            value: '3.4. Высокопроизводительные вычислительные технологии',
            viewValue: '3.4. Высокопроизводительные вычислительные технологии'
        },
        {
            value: '3.5. Методы и системы информационной безопасности и защиты данных',
            viewValue: '3.5. Методы и системы информационной безопасности и защиты данных'
        }
    ];

    array31: Sourse[] = [
        {
            value: '3.1.1. Интеллектуальные системы управления и принятия решений (в том числе в режиме реального времени)',
            viewValue: '3.1.1. Интеллектуальные системы управления и принятия решений (в том числе в режиме реального времени)'
        },
        {
            value: '3.1.2. Речевые технологии и компьютерная лингвистика',
            viewValue: '3.1.2. Речевые технологии и компьютерная лингвистика'
        },
        {
            value: '3.1.3. Распознавание образов и обработка изображений',
            viewValue: '3.1.3. Распознавание образов и обработка изображений'
        },
        {
            value: '3.1.4. Биоинформатика',
            viewValue: '3.1.4. Биоинформатика'
        },
        {
            value: '3.1.5. Машинное обучение',
            viewValue: '3.1.5. Машинное обучение'
        },
        {
            value: '3.1.6. Интеллектуальные робототехнические системы',
            viewValue: '3.1.6. Интеллектуальные робототехнические системы'
        },
        {
            value: '3.1.7. Интеллектуальные информационные технологии макроэкономической политики, фондовых и финансовых рынков',
            viewValue: '3.1.7. Интеллектуальные информационные технологии макроэкономической политики, фондовых и финансовых рынков'
        },
        {
            value: '3.1.8. Смарт технологии в научных и электронных образовательных процессах',
            viewValue: '3.1.8. Смарт технологии в научных и электронных образовательных процессах'
        },
        {
            value: '3.1.9. Основы новых технологий для индустрии: системы дополненной и виртуальной реальности, 3D-принтинг и другое аддитивное производство, Интернет вещей',
            viewValue: '3.1.9. Основы новых технологий для индустрии: системы дополненной и виртуальной реальности, 3D-принтинг и другое аддитивное производство, Интернет вещей'
        }
    ];

    array32: Sourse[] = [
        {
            value: '3.2.1. Управление и оптимизация в системах связи, сетях передачи данных (в том числе мультисервисных платформах: мобильных и игровых интернет технологиях))',
            viewValue: '3.2.1. Управление и оптимизация в системах связи, сетях передачи данных (в том числе мультисервисных платформах: мобильных и игровых интернет технологиях))'
        },
        {
            value: '3.2.2. Технологии и программно-технические средства в телекоммуникационных системах',
            viewValue: '3.2.2. Технологии и программно-технические средства в телекоммуникационных системах'
        },
        {
            value: '3.2.3. Информационно-коммуникационные системы для онлайн-торговли, цифрового банкинга и других цифровых сервисов',
            viewValue: '3.2.3. Информационно-коммуникационные системы для онлайн-торговли, цифрового банкинга и других цифровых сервисов'
        }
    ];

    array33: Sourse[] = [
        {
            value: '3.3.1. Мониторинг и прогноз космических и геодинамических процессов, природных ресурсов и дистанционного зондирования Земли',
            viewValue: '3.3.1. Мониторинг и прогноз космических и геодинамических процессов, природных ресурсов и дистанционного зондирования Земли'
        },
        {
            value: '3.3.2. Технологии разработки аппаратно-программных средств и приборов для космической техники и наземно-космической инфраструктуры',
            viewValue: '3.3.2. Технологии разработки аппаратно-программных средств и приборов для космической техники и наземно-космической инфраструктуры'
        },
        {
            value: '3.3.3. Развитие научной и экспериментальной базы исследований дальнего и ближнего космоса',
            viewValue: '3.3.3. Развитие научной и экспериментальной базы исследований дальнего и ближнего космоса'
        }
    ];

    array34: Sourse[] = [
        {
            value: '3.4.1. Облачные, параллельные и распределенные вычисления',
            viewValue: '3.4.1. Облачные, параллельные и распределенные вычисления'
        },
        {
            value: '3.4.2. Технологии больших данных',
            viewValue: '3.4.2. Технологии больших данных'
        },
        {
            value: '3.4.3. Геоинформационные технологии и системы',
            viewValue: '3.4.3. Геоинформационные технологии и системы'
        },
        {
            value: '3.4.4.Архитектура и технологии проектирования технического обеспечения вычислительных систем',
            viewValue: '3.4.4.Архитектура и технологии проектирования технического обеспечения вычислительных систем'
        },
        {
            value: '3.4.5. Информационно-поисковые системы',
            viewValue: '3.4.5. Информационно-поисковые системы'
        }
    ];

    array35: Sourse[] = [
        {
            value: '3.5.1. Методы и алгоритмы обеспечения информационной безопасности сложных систем и данных',
            viewValue: '3.5.1. Методы и алгоритмы обеспечения информационной безопасности сложных систем и данных'
        },
        {
            value: '3.5.2. Технологии и программно-технические средства защиты информации',
            viewValue: '3.5.2. Технологии и программно-технические средства защиты информации'
        }
    ];

    // array36: Sourse[] = [
    //     {
    //         value: '3.6.1. Фундаментальные и прикладные исследования в области математики',
    //         viewValue: '3.6.1. Фундаментальные и прикладные исследования в области математики'
    //     },
    //     {
    //         value: '3.6.2.Фундаментальные и прикладные исследования в области физики и астрономии',
    //         viewValue: '3.6.2.Фундаментальные и прикладные исследования в области физики и астрономии'
    //     },
    //     {
    //         value: '3.6.3. Фундаментальные и прикладные исследования в области информатики',
    //         viewValue: '3.6.3. Фундаментальные и прикладные исследования в области информатики'
    //     },
    //     {
    //         value: '3.6.4. Математическое и компьютерное моделирования в области механики',
    //         viewValue: '3.6.4. Математическое и компьютерное моделирования в области механики'
    //     }
    // ];

    array4: Sourse[] = [
        {value: '4.1. Развитие интенсивного животноводства', viewValue: '4.1. Развитие интенсивного животноводства'},
        {value: '4.2. Обеспечение ветеринарной безопасности', viewValue: '4.2. Обеспечение ветеринарной безопасности'},
        {value: '4.3. Интенсивное земледелие и растениеводство', viewValue: '4.3. Интенсивное земледелие и растениеводство'},
        {value: '4.4. Обеспечение фитосанитарной безопасности', viewValue: '4.4. Обеспечение фитосанитарной безопасности'},
        {
            value: '4.5. Переработка и хранение сельскохозяйственной продукции и сырья',
            viewValue: '4.5. Переработка и хранение сельскохозяйственной продукции и сырья'
        },
        {
            value: '4.6. Техническое обеспечение модернизации агропромышленного комплекса',
            viewValue: '4.6. Техническое обеспечение модернизации агропромышленного комплекса'
        },
        {value: '4.7. Устойчивое развитие сельских территорий', viewValue: '4.7. Устойчивое развитие сельских территорий'}
    ];

    array5: Sourse[] = [
        {
            value: '5.1. Биотехнологии в сельском хозяйстве и охране окружающей среды',
            viewValue: '5.1. Биотехнологии в сельском хозяйстве и охране окружающей среды'
        },
        {value: '5.2. Биотехнологии в медицине', viewValue: '5.2. Биотехнологии в медицине'},
        {
            value: '5.3. Развитие отечественной фармацевтической науки и промышленной биотехнологии',
            viewValue: '5.3. Развитие отечественной фармацевтической науки и промышленной биотехнологии'
        }
    ];

    array51: Sourse[] = [
        {
            value: '5.1.1. Маркер-опосредованная и геномная  селекция для улучшения хозяйственно-ценных признаков растений и животных',
            viewValue: '5.1.1. Маркер-опосредованная и геномная  селекция для улучшения хозяйственно-ценных признаков растений и животных'
        },
        {
            value: '5.1.2. Технология геномного редактирования для целенаправленного мутагенеза в геномах растений и животных',
            viewValue: '5.1.2. Технология геномного редактирования для целенаправленного мутагенеза в геномах растений и животных'
        },
        {
            value: '5.1.3. Биотехнология для создания биоудобрений и биологических препаратов для борьбы с болезнями сельскохозяйственных  растений',
            viewValue: '5.1.3. Биотехнология для создания биоудобрений и биологических препаратов для борьбы с болезнями сельскохозяйственных  растений'
        },
        {
            value: '5.1.4. Молекулярно-генетические и клеточные технологии для создания вакцин, био- и лекарственных препаратов и диагностических тест-систем нового поколения',
            viewValue: '5.1.4. Молекулярно-генетические и клеточные технологии для создания вакцин, био- и лекарственных препаратов и диагностических тест-систем нового поколения'
        },
        {
            value: '5.1.5. Биотехнологии для сохранения и воспроизводства биоразнобразия естественных экосистем',
            viewValue: '5.1.5. Биотехнологии для сохранения и воспроизводства биоразнобразия естественных экосистем'
        },
        {
            value: '5.1.6. Биотехнологии для реабилитации техногенно-нарушенных экосистем, очистки сточных вод и почв от промышленных и агропромышленных загрязнений',
            viewValue: '5.1.6. Биотехнологии для реабилитации техногенно-нарушенных экосистем, очистки сточных вод и почв от промышленных и агропромышленных загрязнений'
        },
        {
            value: '5.1.7. Инновационные биотехнологии получения альтернативных источников энергии',
            viewValue: '5.1.7. Инновационные биотехнологии получения альтернативных источников энергии'
        },
        {
            value: '5.1.8. Информационные технологии в биологии, сельском хозяйстве и экологии',
            viewValue: '5.1.8. Информационные технологии в биологии, сельском хозяйстве и экологии'
        }
    ];

    array52: Sourse[] = [
        {
            value: '5.2.1.  Развитие клеточных технологий и тканевой инженерии для медицины',
            viewValue: '5.2.1.  Развитие клеточных технологий и тканевой инженерии для медицины'
        },
        {
            value: '5.2.2. Молекулярно-генетические, геномные технологии и биоинформатика для развития персонализированной медицины',
            viewValue: '5.2.2. Молекулярно-генетические, геномные технологии и биоинформатика для развития персонализированной медицины'
        },
        {
            value: '5.2.3. Мультиомные и молекулярные технологии для досимптомной диагностики, профилактики и лечения заболеваний',
            viewValue: '5.2.3. Мультиомные и молекулярные технологии для досимптомной диагностики, профилактики и лечения заболеваний'
        },
        {
            value: '5.2.4. Новые технологии и биологически активные субстанции для решения проблем анте- и постнатального развития, старения, продления жизни человека',
            viewValue: '5.2.4. Новые технологии и биологически активные субстанции для решения проблем анте- и постнатального развития, старения, продления жизни человека'
        },
        {
            value: '5.2.5. Новые биотехнологии получения био- и лекарственных препаратов для превентивной медицины',
            viewValue: '5.2.5. Новые биотехнологии получения био- и лекарственных препаратов для превентивной медицины'
        },
        {
            value: '5.2.6. Эпидемиология. Молекулярно-генетические, геномные технологии и биоинформатика для эпидемиологического контроля за инфекционными заболеваниями',
            viewValue: '5.2.6. Эпидемиология. Молекулярно-генетические, геномные технологии и биоинформатика для эпидемиологического контроля за инфекционными заболеваниями'
        },
    ];

    array53: Sourse[] = [
        {
            value: '5.3.1. Разработка оригинальных лекарственных и профилактических препаратов, изделий медицинского назначения, оборудований и приборов для медицины и ветеринарии, технологии их производства, доклинические и клинические исследования',
            viewValue: '5.3.1. Разработка оригинальных лекарственных и профилактических препаратов, изделий медицинского назначения, оборудований и приборов для медицины и ветеринарии, технологии их производства, доклинические и клинические исследования'
        },
        {
            value: '5.3.2.Технологии получения ценных компонентов из растительного, животного и минерального сырья биотехнологическими методами',
            viewValue: '5.3.2.Технологии получения ценных компонентов из растительного, животного и минерального сырья биотехнологическими методами'
        },
        {
            value: '5.3.3.Технология получения штаммов-продуцентов биопрепаратов, ферментов белков и аминокислот для сельского хозяйства, пищевой и перерабатывающей промышленности',
            viewValue: '5.3.3.Технология получения штаммов-продуцентов биопрепаратов, ферментов белков и аминокислот для сельского хозяйства, пищевой и перерабатывающей промышленности'
        },
        {
            value: '5.3.4.Технологии глубокой переработки сырья с использованием микроорганизмов и/или ферментов, биологически активных субстанций',
            viewValue: '5.3.4.Технологии глубокой переработки сырья с использованием микроорганизмов и/или ферментов, биологически активных субстанций'
        }
    ];

    array6: Sourse[] = [
        {
            value: '6.1.Фундаментальные, прикладные, междисциплинарные исследования в области общественных наук',
            viewValue: '6.1.Фундаментальные, прикладные, междисциплинарные исследования в области общественных наук'
        },
        {
            value: '6.2.Фундаментальные, прикладные, междисциплинарные исследования проблем образования, науки, культуры и спорта в XXI веке',
            viewValue: '6.2.Фундаментальные, прикладные, междисциплинарные исследования проблем образования, науки, культуры и спорта в XXI веке'
        },
        {
            value: '6.3. Фундаментальные, прикладные, междисциплинарные исследования в области гуманитарных наук',
            viewValue: '6.3. Фундаментальные, прикладные, междисциплинарные исследования в области гуманитарных наук'
        }
    ];

    array61: Sourse[] = [
        {
            value: '6.1.1. Исследование актуальных экономических, институциональных проблем устойчивого развития и технологической модернизации экономики, Индустрии 4.0, предпринимательства',
            viewValue: '6.1.1. Исследование актуальных экономических, институциональных проблем устойчивого развития и технологической модернизации экономики, Индустрии 4.0, предпринимательства'
        },
        {
            value: '6.1.2. Исследование в области социальной модернизации, демографии, человеческого потенциала, рынка труда и трудовых отношений',
            viewValue: '6.1.2. Исследование в области социальной модернизации, демографии, человеческого потенциала, рынка труда и трудовых отношений'
        },
        {
            value: '6.1.3. Исследования в области социологии, политологии, права и институциональной модернизации  ',
            viewValue: '6.1.3. Исследования в области социологии, политологии, права и институциональной модернизации  '
        },
        {
            value: '6.1.4. Исследование актуальных проблем современных международных отношений, глобальных и региональных геополитических, геоэкономических процессов',
            viewValue: '6.1.4. Исследование актуальных проблем современных международных отношений, глобальных и региональных геополитических, геоэкономических процессов'
        }
    ];

    array62: Sourse[] = [
        {
            value: '6.2.1. Исследования в области модернизации образования и науки. Культурное наследие и современная культура Казахстана в глобальном мире',
            viewValue: '6.2.1. Исследования в области модернизации образования и науки. Культурное наследие и современная культура Казахстана в глобальном мире'
        },
        {
            value: '6.2.2. Исследования в области физической культуры и спорта',
            viewValue: '6.2.2. Исследования в области физической культуры и спорта'
        }
    ];

    array63: Sourse[] = [
        {
            value: '6.3.1. Новое гуманитарное знание. Синергетические исследования в области гуманитарных наук',
            viewValue: '6.3.1. Новое гуманитарное знание. Синергетические исследования в области гуманитарных наук'
        },
        {
            value: '6.3.2. Туған жер. Общенациональное единство, мир и согласие',
            viewValue: '6.3.2. Туған жер. Общенациональное единство, мир и согласие'
        },
        {
            value: '6.3.3. Духовные святыни Казахстана. Сакральная география Казахстана',
            viewValue: '6.3.3. Духовные святыни Казахстана. Сакральная география Казахстана'
        },
        {
            value: '6.3.4.Общность истории, культуры и языка. Современная Казахстанская культура в глобальном мире',
            viewValue: '6.3.4.Общность истории, культуры и языка. Современная Казахстанская культура в глобальном мире'
        },
        {
            value: '6.3.5. Семь граней Великой степи: наследие и истоки духовной модернизации общества',
            viewValue: '6.3.5. Семь граней Великой степи: наследие и истоки духовной модернизации общества'
        },
        {
            value: '6.3.6. Абаеведение. Творческое наследие Абая в системе современного общественно-гуманитарного знания',
            viewValue: '6.3.6. Абаеведение. Творческое наследие Абая в системе современного общественно-гуманитарного знания'
        },
        {
            value: '6.3.7. Фарабиеведение',
            viewValue: '6.3.7. Фарабиеведение'
        },
        {
            value: '6.3.8. Исследования по Золотой орде',
            viewValue: '6.3.8. Исследования по Золотой орде'
        }
    ];

    array7: Sourse[] = [
        {
            value: '7.1. Фундаментальные научные  исследования',
            viewValue: '7.1. Фундаментальные научные  исследования'
        },
        {
            value: '7.2. Прикладные научные исследования',
            viewValue: '7.2. Прикладные научные исследования'
        },
        {
            value: '7.3. Развитие оборонно-промышленного комплекса, вооружения и военной техники, военно-космических технологий',
            viewValue: '7.3. Развитие оборонно-промышленного комплекса, вооружения и военной техники, военно-космических технологий'
        },
        {
            value: '7.4. Противодействие терроризму и экстремизму, разведывательная и контрразведывательная деятельность',
            viewValue: '7.4. Противодействие терроризму и экстремизму, разведывательная и контрразведывательная деятельность'
        },
        {
            value: '7.5. Обеспечение деятельности правоохранительных органов',
            viewValue: '7.5. Обеспечение деятельности правоохранительных органов'
        },
    ];

    array71: Sourse[] = [
        {
            value: '7.1.1. Общая теория национальной безопасности государства',
            viewValue: '7.1.1. Общая теория национальной безопасности государства'
        }
    ];

    array72: Sourse[] = [
        {
            value: '7.2.1. Обеспечение информационной безопасности',
            viewValue: '7.2.1. Обеспечение информационной безопасности'
        },
        {
            value: '7.2.2. Исследования в области военной безопасности и военного искусства',
            viewValue: '7.2.2. Исследования в области военной безопасности и военного искусства'
        }
    ];

    array8: Sourse[] = [
        {
            value: '8.1. Фундаментальные и прикладные исследования в области математики и механики',
            viewValue: '8.1. Фундаментальные и прикладные исследования в области математики и механики'
        },
        {
            value: '8.2. Фундаментальные и прикладные исследования в области физики и астрономии',
            viewValue: '8.2. Фундаментальные и прикладные исследования в области физики и астрономии'
        },
        {
            value: '8.3. Фундаментальные и прикладные исследования в области химии',
            viewValue: '8.3. Фундаментальные и прикладные исследования в области химии'
        },
        {
            value: '8.4. Фундаментальные исследования в области информатики',
            viewValue: '8.4. Фундаментальные исследования в области информатики'
        },
        {
            value: '8.5. Фундаментальные исследования в области биологии животных, растений и микроорганизмов',
            viewValue: '8.5. Фундаментальные исследования в области биологии животных, растений и микроорганизмов'
        },
        {
            value: '8.6. Фундаментальные исследования в области биомедицины',
            viewValue: '8.6. Фундаментальные исследования в области биомедицины'
        },
        {
            value: '8.7. Фундаментальные исследования в области охраны окружающей среды',
            viewValue: '8.7. Фундаментальные исследования в области охраны окружающей среды'
        },
        {
            value: '8.8. Фундаментальные исследования в области популяционной генетики человека',
            viewValue: '8.8. Фундаментальные исследования в области популяционной генетики человека'
        },
    ];

    level = [ ];

    courseForms = [ ];


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.coAuthorsFullNames.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.coAuthorsCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.coAuthorsFullNames.indexOf(fruit);

    if (index >= 0) {
      this.coAuthorsFullNames.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.coAuthorsFullNames.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.coAuthorsCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(filterValue);
    console.log(this.coAuthorsFullNames);

    return this.allCoAuthorsFullNames.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  getYear() {
    const today = new Date();
    this.yy = today.getFullYear();
    for (let i = (this.yy - 100); i <= this.yy; i++){
      this.years.push(i);
    }
  }


    getDecodedAccessToken(token: string): any {
        try {
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    }


  ngOnInit(): void {
      this.langService.currentLanguage.subscribe(lang => {
          this.getPublicationType(lang);
          this.getPublicationPublished(lang);
          this.getEventTypes(lang);
          this.getEventRoles(lang);
          this.getPatentTypes(lang);
          this.getCourseDegree(lang);
          this.getCourseForm(lang);
          this.getExhibitionLevels(lang);
          this.getExhibitionRoles(lang);
          this.getExhibitionTypes(lang);
          this.getAwardTypes(lang);
          this.getActivityTypes(lang);
          this.getActivityRoles(lang);
      });
      // this.getTeacherPublications();
      this.getAllUsers();
      this.getAllCountries();
      this._api.getAllTeachers().subscribe(
        res => {
          console.log(res);
            // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < res.length; i++) {
            this.allCoAuthorsFullNames.push(res[i].lastName  + ' ' + res[i].firstName + ' ' + res[i].patronymic);
            const coAuthor = {
              fullName: res[i].lastName + ' ' +  res[i].firstName + ' ' + res[i].patronymic,
              userId: res[i].userId
            };
            this.allCoAuthors.push(coAuthor);
          }
          console.log(this.allCoAuthors);
        }
    );
      this.getYear();
      this._api.getPubTypeCount().subscribe(
        res => {
          console.log(res);
          this.PubTypeCounts = res;
        },
        err => {
          console.log(err);
        }
    );

      this._api.getUserDegreeCount().subscribe(
            res => {
                console.log(res);
                this.UserDegreeCounts = res;
            },
            err => {
                console.log(err);
            }
        );
      this._api.getPublishCount().subscribe(
            res => {
                console.log(res);
                this.publishCount = res;
            },
            err => {
                console.log(err);
            }
        );
      this._api.getCourseCount().subscribe(
            res => {
                console.log(res);
                this.courceCount = res;
            }, err => {
                console.log(err);
            }
        );
      this._api.getDisMembersCount().subscribe(
            res => {
                console.log(res);
                this.disMembersCount = res;
            }, err => {
                console.log(err);
            }
        );
      this._api.getExhibitionCount().subscribe(
          res => {
              this.exhibitionCount = res;
          }
      );
      this._api.getRatingListAwardsCount().subscribe(
          res => {
              this.awardCount = res;
          }
      );
      this._api.getUserById(this.IdToken).subscribe(
            res => {
                this.name = res.firstName.charAt(0) + '.' +  res.patronymic.charAt(0) + '.' + res.lastName;
                this.userID = res.userId;
            },
            err => {
                console.log(err);
            }
        );
    }

    getAllUsers() {
      this._api.getOwnUsers().subscribe(
          res => {
              console.log(res);
              // tslint:disable-next-line:prefer-for-of
              for (let i = 0; i < res.length; i++) {
                  const tempUser = {
                      name: res[i].firstName + ' ' + res[i].lastName,
                      userId: res[i].userId
                  };
                  this.allUsers.push(tempUser);
              }
          }, err => {
              console.log(err);
          }
      );
    }

    getDocumentDefinition() {
        return {
            content: [
                {text: 'Форма № 16.', style: 'subheader'},
                {
                    text: '*СПИСОК\n' +
                        'научных и учебно-методических работ\n' +
                        '',
                    bold: false,
                    fontSize: 14,
                    alignment: 'center',
                    margin: [0, 0, 0, 20],
                    fontFamily: 'Times New Roman'
                },
                {
                    table: {
                        headerRows: 1,
                        widths: ['auto', 'auto', '*', '*', '*', '*'],
                        body: [
                            ['№\nп/п', 'Наименование\nработы, ее вид', 'Форма\nработы',
                                'Выходные данные', 'Объем\nв п.л.\nили с.\n', 'Соавторы'],
                            ['1', '2', '3', '4', '5', '6'],
                            [{text: '**а) научные работы', colSpan: 6, alignment: 'center'}, '', '', '', '', ''],
                            // tslint:disable-next-line:max-line-length
                            [this.publications[0].pubId - 1, this.publications[0].pubName, 'Печ.', this.publications[0].pubCity, this.publications[0].pubPage, this.publications[0].pubCoAuthor],
                            [{
                                text: '**б) авторские свидетельства, дипломы, патенты, лицензии и т.п.',
                                colSpan: 6,
                                alignment: 'center'
                            }, '', '', '', '', ''],
                            [{text: '**в) учебно-методические работы', colSpan: 6, alignment: 'center'}, '', '', '', '', ''],
                        ]
                    }
                },
                {
                    text: '\n\n\n'
                },
                {
                    alignment: 'justify',
                    columns: [
                        {
                            width: '*',
                            text: 'Соискатель:\n\n' +

                                'Список верен:\n' +
                                'Научный консультант\n' +
                                '…………………\n' +
                                'профессор (доцент)\n\n' +

                                'Зав. кафедрой \n' +
                                '…………………\n' +
                                'профессор (доцент)\n\n' +

                                'Декан\n' +
                                '…………..факультета\n' +
                                '(Директор … института…)\n' +
                                'профессор (доцент)\n\n' +
                                '' +
                                'Ученый секретарь\n' +
                                'ученого совета университета\n' +
                                'профессор\n'
                        },
                        {
                            width: '*',
                            text: '(подпись)\n\n\n(подпись)\n\n\n\n\n(подпись)\n\n\n\n\n(подпись)\n\n\n\n\n(подпись)'
                        },
                        {
                            width: '*',
                            text: '\n\n\nИ.О. Фамилия\n\n\n\n\nИ.О. Фамилия\n\n\n\n\nИ.О. Фамилия\n\n\n\n\nИ.О. Фамилия'
                        }
                    ]


                },
            ],
            styles: {
                fontSize: 14,
                // fontFamily: 'Times New Roman',
                border: 'white',
                margin: [5, 2, 10, 20],
                subheader: {
                    alignment: 'right'
                }
            }
        };
    }

  // sendCoAuthors() {
  //   let coAuthorsIds = [];
  //   for (let i = 0; i < this.allCoAuthors.length; i++) {
  //     for (let j = 0; j < this.coAuthorsFullNames.length; j++) {
  //       if(this.coAuthorsFullNames[j] == this.allCoAuthors[i].fullName) {
  //         coAuthorsIds.push(this.allCoAuthors[i].userId);
  //       }
  //     }
  //   }
  //   coAuthorsIds = Array.from(new Set(coAuthorsIds));
  //   console.log(coAuthorsIds);
  // }

    getPublicationType(lang) {
      this._api.getPublicationType(lang).subscribe(
          res => {
              console.log(res);
              for(let i = 0; i < res.length; i++) {
                  let temp = {
                    value: res[i].type_id,
                    viewValue: res[i].type_name
                  };
                  this.elements[i] = temp;
              }
          }, err => {
              console.log(err);
          }
      );
    }

    getPublicationPublished(lang) {
      this._api.getPublicationPublished(lang).subscribe(
          res => {
              console.log(res);
              for (let i = 0; i < res.length; i++) {
                  let temp = {
                      value: res[i].place_id,
                      viewValue: res[i].place_name
                  }
                  this.elements1[i] = temp;
              }
          }, err => {
              console.log(err);
          }
      );
    }

    getEventTypes(lang) {
      this._api.getEventTypes(lang).subscribe(
          res => {
              console.log(res);
              for(let i = 0; i < res.length; i++) {
                  let temp = {
                      value: res[i].type_id,
                      viewValue: res[i].type_name
                  };
                  this.elements2[i] = temp;
              }
          }, err => {
              console.log(err);
          }
      );
    }

    getEventRoles(lang) {
        this._api.getEventRoles(lang).subscribe(
            res => {
                console.log(res);
                for(let i = 0; i < res.length; i++) {
                    let temp = {
                        value: res[i].role_id,
                        viewValue: res[i].role_name
                    };
                    this.elements3[i] = temp;
                }
            }, err => {
                console.log(err);
            }
        );
    }

    getPatentTypes(lang) {
      this._api.getPatentTypes(lang).subscribe(
          res => {
              console.log(res);
              for(let i = 0; i < res.length; i++) {
                  let temp = {
                    value: res[i].type_id,
                    viewValue: res[i].type_name
                  };
                  this.elements4[i] = temp;
              }
          }, err => {
              console.log(err);
          }
      );
    }

    getCourseDegree(lang) {
      this._api.getCourseDegree(lang).subscribe(
          res => {
              console.log(res);
              for(let i = 0; i < res.length; i++) {
                  let temp = {
                    value: parseInt(res[i].degree_id),
                    viewValue: res[i].degree_name
                  };
                  this.level[i] = temp;
              }
          }, err => {
              console.log(err);
          }
      );
    }

    getCourseForm(lang) {
      this._api.getCourseForm(lang).subscribe(
          res => {
              console.log(res);
              for(let i = 0; i < res.length; i++) {
                  let temp = {
                      value: parseInt(res[i].form_id),
                      viewValue: res[i].form_name
                  }
                  this.courseForms[i] = temp;
              }
              console.log(this.courseForms);
          }, err => {
              console.log(err);
          }
      );
    }

    getExhibitionLevels(lang) {
      this._api.getExhibitionLevels(lang).subscribe(
          res => {
              console.log(res);
              for (let i = 0; i < res.length; i++) {
                  let temp = {
                      value: res[i].exLevelId,
                      viewValue: res[i].exLevelRu,
                  }
                  this.exhibitionLevels[i] = temp;
              }
          }, err => console.log(err)
      );
    }

    getExhibitionRoles(lang) {
      this._api.getExhibitionRoles(lang).subscribe(
          res => {
              console.log(res);
              for (let i = 0; i < res.length; i++) {
                  let temp = {
                      value: res[i].exRoleId,
                      viewValue: res[i].exRoleRu,
                  }
                  this.exhibitionRoles[i] = temp;
              }
          }, err => console.log(err)
      );
    }

    getExhibitionTypes(lang) {
      this._api.getExhibitionTypes(lang).subscribe(
          res => {
              console.log(res);
              for (let i = 0; i < res.length; i++) {
                  let temp = {
                      value: res[i].exTypeId,
                      viewValue: res[i].exTypeRu
                  };
                  this.exhibitionTypes[i] = temp;
              }
          }, err => console.log(err)
      );
    }

    getAwardTypes(lang) {
      this._api.getAwardsTypes(lang).subscribe(
          res => {
              console.log(res);
              for (let i = 0; i < res.length; i++) {
                  let temp;
                  if(lang == 'kz' || lang == 'en') {
                      temp = {
                          value: res[i].awardTypeId,
                          viewValue: res[i]['awardTypeName' + String(lang)[0].toUpperCase() + String(lang)[1]]
                      };
                  } else {
                      temp = {
                          value: res[i].awardTypeId,
                          viewValue: res[i].awardTypeName
                      };
                  }
                  this.awardTypes[i] = temp;
              }
          }, err => console.log(err)
      );
    }

    getActivityTypes(lang) {
      this._api.getTeacherActivityTypes(lang).subscribe(
          res => {
              console.log(res);
          }, err => console.log(err)
      );
    }

    getActivityRoles(lang) {
      this._api.getActivityRoles(lang).subscribe(
          res => {
              console.log(res);
              for (let i = 0; i < res.length; i++) {
                  let temp = {
                      value: res[i].activityRoleId,
                      viewValue: res[i].activityRoleName
                  };
                  this.activityRoles[i] = temp;
              }
          }, err => console.log(err)
      );
    }

  sendTeacherPublication(message: string, action: string) {
      let coAuthorsIds = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.allCoAuthors.length; i++) {
          // tslint:disable-next-line:prefer-for-of
          for (let j = 0; j < this.coAuthorsFullNames.length; j++) {
              // tslint:disable-next-line:triple-equals
              if (this.coAuthorsFullNames[j] == this.allCoAuthors[i].fullName) {
                  coAuthorsIds.push(this.allCoAuthors[i].userId);
              }
          }
      }
      coAuthorsIds = Array.from(new Set(coAuthorsIds));
      console.log(coAuthorsIds);
      this.publicationForm.patchValue({
          pubCoAuthor: coAuthorsIds,
      });

      //   this._api.uploadPub(this.publicationForm.value).subscribe(
      //     res => {
      //       console.log(res);
      //     }, err => {
      //       console.log(err);
      //     }
      // );
      if (this.publicationForm.valid) {
          // this.publicationForm.reset();
          this._snackBar.open(message, action, {
              duration: 2000,
          });
          this._dialog.close(this.publicationForm.value);
      }

  }

    sendTeacherEvent(message: string, action: string) {
        if (this.eventForm.valid) {
            // this._api.uploadEvent(this.eventForm.value).subscribe(
            //     res => {
            //         console.log(res);
            //     }, err => {
            //         console.log(err);
            //     }
            // );
            // this.eventForm.reset();
            this._snackBar.open(message, action, {
                duration: 2000,
            });
            this._dialog.close(this.eventForm.value);
        }
    }

    sendTeacherPatent(message: string, action: string) {
        if (this.patentForm.valid) {
            this.patentForm.patchValue({
                // ptnt_file_kz: this.PatentLinkKz,
                ptnt_file_en: this.PatentLinkEn,
                // ptnt_file_ru: this.PatentLinkRu,
                // ptnt_file_name_ru: this.PatentFileRu.name,
                // ptnt_file_name_kz: this.PatentFileKz.name,
                ptnt_file_name_en: this.PatentFileEn.name,
            });
            // console.log(this.patentForm.value);
            // this._api.addPatent(this.patentForm.value).subscribe(res => {
            //     console.log(res);
            // }, error1 => {
            //     console.log(error1);
            // });
            // this.patentForm.reset();
            this._snackBar.open(message, action, {
                duration: 2000,
            });
            this._dialog.close(this.patentForm.value);
        }
    }

    sendTeacherCourse(message: string, action: string) {
        if (this.teacherCourseForm.valid) {
            console.log(this.teacherCourseForm.value);
            // this._api.uploadCourse(this.teacherCourseForm.value).subscribe(
            //     res => {
            //         console.log(res);
            //     }, err => {
            //         console.log(err);
            //     }
            // );
            // this.teacherCourseForm.reset();
            this._snackBar.open(message, action, {
                duration: 2000,
            });
            this._dialog.close(this.teacherCourseForm.value);
        }
    }

    sendTeacherAward(message: string, action: string) {
        if (this.awardForm.valid) {
            this._snackBar.open(message, action, {
                duration: 2000,
            });
            this._dialog.close(this.awardForm.value);
        }
    }

    sendTeacherActivity1(message: string, action: string) {
        if (this.activity1Form.valid) {
            this._snackBar.open(message, action, {
                duration: 2000,
            });
            this._dialog.close(this.activity1Form.value);
        }
    }

    sendTeacherActivity2(message: string, action: string) {
        if (this.activity2Form.valid) {
            this._snackBar.open(message, action, {
                duration: 2000,
            });
            this._dialog.close(this.activity2Form.value);
        }
    }

    sendTeacherActivity3(message: string, action: string) {
        if (this.activity3Form.valid) {
            this._snackBar.open(message, action, {
                duration: 2000,
            });
            this._dialog.close(this.activity3Form.value);
        }
    }

    sendTeacherActivity4(message: string, action: string) {
        if (this.activity4Form.valid) {
            this._snackBar.open(message, action, {
                duration: 2000,
            });
            this._dialog.close(this.activity4Form.value);
        }
    }

    sendTeacherExhibition(message: string, action: string) {
        if (this.exhibitionForm.valid) {
            // this._api.uploadEvent(this.eventForm.value).subscribe(
            //     res => {
            //         console.log(res);
            //     }, err => {
            //         console.log(err);
            //     }
            // );
            // this.eventForm.reset();
            this._snackBar.open(message, action, {
                duration: 2000,
            });
            this._dialog.close(this.exhibitionForm.value);
        }
    }


    // public download(): void {
    //     const documentCreator = new DocumentCreator();
    //     // tslint:disable-next-line:max-line-length
    //     const doc = DocumentCreator.create(this.PubTypeCounts, this.UserDegreeCounts, this.publishCount, this.courceCount, this.disMembersCount, this.exhibitionCount, this.awardCount);
    //
    //     Packer.toBlob(doc).then(blob => {
    //         console.log(blob);
    //         saveAs(blob, 'Рейтинг лист.docx');
    //         console.log('Document created successfully');
    //     });
    // }

    public download2(): void {
      console.log(this.TeacherPublications);
      const  documentCreator = new ScienceListGenerator();
      const doc = documentCreator.create(this.name, this.TeacherPublications);
      Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, 'Список научных трудов.docx');
            console.log('Document created successfully');
        });
    }

    uploadPublicationFile() {
        const formData = new FormData();
        let pubLink;
        formData.append('file', this.selectedPublicationFile);
        $.ajax({
            url: 'https://nir.iitu.kz:8443/saa-uploader/uploadPublicationFile',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            async: false,
            // tslint:disable-next-line:only-arrow-functions
        }).done(function(data) {
            const obj = JSON.parse(data);
            console.log(obj);
            pubLink = obj.filePath;
        });
        this.publicationForm.patchValue({
            pubFile: pubLink
        });
        console.log(pubLink);
    }

    uploadEventFile() {
        const formData = new FormData();
        let EventLink;
        formData.append('file', this.selectedEventFile);
        $.ajax({
            url: 'https://nir.iitu.kz:8443/saa-uploader/uploadEventFile',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            async: false,
            // tslint:disable-next-line:only-arrow-functions
        }).done(function(data) {
            const obj = JSON.parse(data);
            console.log(obj);
            EventLink = obj.filePath;
        });
        this.eventForm.patchValue({
            event_file: EventLink
        });
        console.log(EventLink);
    }

    openUploadEventDialog() {
        const EventDialog = this.dialog.open(EventUploadComponent);
        EventDialog.afterClosed().subscribe(
            res => {
                if (typeof res !== 'undefined' && res !== 'false') {
                    this.selectedEventFile = res;
                    console.log(this.selectedEventFile);
                    this.uploadEventFile();
                }
                console.log(`Result is ${res}`);
            }
        );
    }

    uploadPatentFiles() {
        let linkEN;
        const formDataEN = new FormData();
        formDataEN.append('file', this.PatentFileEn);
        $.ajax({
            url: 'https://nir.iitu.kz:8443/saa-uploader/uploadPatentFile',
            type: 'POST',
            data: formDataEN,
            processData: false,
            contentType: false,
            async: false,
            // tslint:disable-next-line:only-arrow-functions
        }).done(function(data) {
            const obj = JSON.parse(data);
            console.log(obj);
            linkEN = obj.filePath;
        });
        this.PatentLinkEn = linkEN;

        console.log(this.PatentLinkRu);

        this.patentForm.patchValue({
            ptnt_file: this.PatentLinkEn,
            ptnt_file_name: this.PatentFileEn.name,
        });
    }

    openAddMemberDialog() {
        const ScienceMemberRef = this.dialog.open(AddProjectMemberDialogComponent);
        ScienceMemberRef.afterClosed().subscribe(
            res => {
                if (typeof res !== 'undefined' && res !== 'false') {
                    this.sendProject(res);
                    this._dialog.close(this.newProjForm.value);
                }
            }
        );
    }

    uploadCourseFile() {
        const formData = new FormData();
        let CourseLink;
        formData.append('file', this.selectedCourseFile);
        $.ajax({
            url: 'https://nir.iitu.kz:8443/saa-uploader/certificate',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            async: false,
            // tslint:disable-next-line:only-arrow-functions
        }).done(function(data) {
            const obj = JSON.parse(data);
            console.log(obj);
            CourseLink = obj.filePath;
        });
        this.teacherCourseForm.patchValue({
            courseFile: CourseLink
        });
        console.log(CourseLink);
    }

    uploadActivity3File() {
        const formData = new FormData();
        let CourseLink;
        formData.append('file', this.selectedActivityFile);
        $.ajax({
            url: 'https://nir.iitu.kz:8443/saa-uploader/activity',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            async: false,
            // tslint:disable-next-line:only-arrow-functions
        }).done(function(data) {
            const obj = JSON.parse(data);
            console.log(obj);
            CourseLink = obj.filePath;
        });
        this.activity3Form.patchValue({
            activity_file: CourseLink
        });
        console.log(CourseLink);
    }

    sendProject(newProjMemForm) {
        this._api.addProject(this.newProjForm.value).subscribe(
            res => {
                const control = newProjMemForm.controls.ScienceMember as FormArray;
                const members = control.value;
                const mainMember = {
                    scAddDate: new Date(),
                    scRole: 'Научный руководитель',
                    scId: res.scId,
                    userId: this.IdToken
                };
                this._api.addMemberToProject(mainMember).subscribe(
                    res => {
                        console.log(res);
                    },
                    err => {
                        console.log(err);
                    }
                );
                for (let i = 0; i < control.length; i++) {
                    if (members[i].scRole === 'Ведущий научный сотрудник') {
                        const role = {
                            userId: members[i].userId,
                            roleName: 'Leading_Researcher'
                        };
                        this._api.addRole(role).subscribe(
                            res1 => {
                                console.log(res1);
                            },
                            err => {
                                console.log(err);
                            }
                        );
                    } else if (members[i].scRole === 'Старший научный сотрудник') {
                        const role = {
                            userId: members[i].userId,
                            roleName: 'Senior_Researcher'
                        };
                        this._api.addRole(role).subscribe(
                            res1 => {
                                console.log(res1);
                            },
                            err => {
                                console.log(err);
                            }
                        );
                    } else if (members[i].scRole === 'Младший научный сотрудник') {
                        const role = {
                            userId: members[i].userId,
                            roleName: 'Junior_Researcher'
                        };
                        this._api.addRole(role).subscribe(
                            res1 => {
                                console.log(res1);
                            },
                            err => {
                                console.log(err);
                            }
                        );
                    }
                    members[i].scId = res.scId;
                    this._api.addMemberToProject(members[i]).subscribe(
                        result => {
                            console.log(result);
                        },
                        error => {
                            console.log(error);
                        }
                    );
                }
            },
            err => {
                console.log(err);
            }
        );
    }


    onEventFileChange(event) {

        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.eventForm.patchValue({
                fileSource: file
            });
            this.selectedEventFile = file;
            console.log(this.selectedEventFile);
            this.uploadEventFile();
        }

    }

    onPubFileChange(event) {

        if (event.target.files.length > 0) {
            const file = event.target.files[0] as File;
            this.publicationForm.patchValue({
                fileSource: file
            });
            this.selectedPublicationFile = file;
            console.log(this.selectedPublicationFile);
            this.uploadPublicationFile();
        }

    }

    onPatentFileChange(event) {

        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.patentForm.patchValue({
                fileSource: file
            });
            this.PatentFileEn = file;
            console.log(this.PatentFileEn);
            this.uploadPatentFiles();
        }

    }

    onScienceProjFileChange(event) {

        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.teacherCourseForm.patchValue({
                fileSource: file
            });
            this.selectedCourseFile = file;
            console.log(this.selectedCourseFile);
            this.uploadCourseFile();
        }

    }

    onActivity3ProjFileChange(event) {

        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.activity3Form.patchValue({
                activity_file: file
            });
            this.selectedActivityFile = file;
            console.log(this.selectedActivityFile);
            this.uploadActivity3File();
        }

    }

    getAllCountries() {
        this.service.getAllCountries().subscribe(res => {
                this.allCountries = res;
            },
            error => {
                console.error(error);
            });
    }
}

interface Sourse {
    value: string;
    viewValue: string;
}
