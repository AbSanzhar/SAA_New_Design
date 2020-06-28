import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import pdfMake from 'pdfmake/build/pdfmake';
import {ApiService} from '../../api/api.service';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {StartEndDateValidator} from '../../shared/start-end-date.validator';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { DocumentCreator } from './rate-list-generator';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as $ from 'jquery';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PublicationUploadComponent} from './publication-upload/publication-upload.component';
import {EventUploadComponent} from './event-upload/event-upload.component';
import {PatentUploadComponent} from './patent-upload/patent-upload.component';
@Component({
  selector: 'app-teachers',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  publicationForm: FormGroup;
  eventForm: FormGroup;
  newProjForm: FormGroup;
  teacherCourseForm: FormGroup;
  patentForm: FormGroup;
  PubTypeCounts;
  UserDegreeCounts;
  publishCount;
  courceCount;
  disMembersCount;
  selectedPublicationFile: File = null;
  selectedEventFile: File = null;
  selectedValue: string;
  selectedValue1: string;
  selectedValue2: string;
  selectedValue3: string;
  selectedValue4: string;
  selectedValue5: string;
  selectedValue6: string;
  selectedValue7: string;
  selectedValue8: string;
  selectedValue9: string;
  selectedValue10: string;
  selectedValue11: string;
  selectedValue12: string;
  selectedValue13: string;
  selectedValue14: string;
  selectedValue15: string;
  selectedValue16: string;
  selectedValue17: string;
  selectedValue18: string;
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

  constructor(private formBuilder: FormBuilder,
              private _api: ApiService,
              public dialog: MatDialog) {
    this.publicationForm = formBuilder.group({
      pubPublished: new FormControl('', Validators.required),
      pubType: new FormControl('', Validators.required),
      pubCoAuthor: new FormControl(''),
      pubName: new FormControl('', Validators.required),
      pubYear: new FormControl('', Validators.required),
      pubPubName: new FormControl('', Validators.required),
      pubCity: new FormControl('', Validators.required),
      pubPage: new FormControl('', Validators.required),
      pubEndPage: new FormControl('', Validators.required),
      pubUrl: new FormControl(''),
      pubDoi: new FormControl(''),
      pubFile: new FormControl('', Validators.required)
    });

    this.eventForm = formBuilder.group({
      event_type: new FormControl(''),
      event_role: new FormControl(''),
      event_name: new FormControl('', Validators.required),
      event_city: new FormControl('', Validators.required),
      event_url: new FormControl(''),
      event_date: new FormControl('', Validators.required),
      event_file: new FormControl('', Validators.required),
      event_user_id: this.IdToken
    });

    this.newProjForm = formBuilder.group({
      scId: new FormControl('', Validators.required),
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
      scFirstName: new FormControl('Вы научный руководитель', Validators.required),
      scDept: new FormControl('', Validators.required),
      scDirector: this.IdToken
    }, {validators: StartEndDateValidator});

    this.teacherCourseForm = formBuilder.group({
      courseId: new FormControl('', Validators.required),
      userId: new FormControl(this.IdToken, Validators.required),
      courseForm: new FormControl('', Validators.required),
      courseCenter: new FormControl('', Validators.required),
      courseHours: new FormControl('', Validators.required),
      coursePrice: new FormControl('', Validators.required),
      startdate: new FormControl('2015-11-26', Validators.required),
      enddate: '2015-11-26',
      certificateNumber: new FormControl('', Validators.required),
      certificateDate: '2015-11-26',
      courseDegree: this.courseDegree
    });

    this.patentForm = formBuilder.group({
      ptnt_number: new FormControl('', Validators.required),
      ptnt_country_id: new FormControl('', Validators.required),
      ptnt_type_id: new FormControl('', Validators.required),
      ptnt_published_TR: new FormControl('', Validators.required),
      ptnt_user_id: [this.IdToken],
      ptnt_status_id: new FormControl('1'),
      ptnt_issue_date: new FormControl('', Validators.required),
      ptnt_inserted_date: [new Date()],
      ptnt_file_kz: '',
      ptnt_file_en: '',
      ptnt_file_ru: '',
      ptnt_file_name_ru: '',
      ptnt_file_name_kz: '',
      ptnt_file_name_en: '',
    });

  }

  div: Sourse[] = [
    {value: '1', viewValue: 'Information systems'},
    {value: '2', viewValue: 'RET'}
  ];

  elements: Sourse[] = [
    {value: 'Материалы конференции', viewValue: 'Материалы конференции'},
    {value: 'Монография', viewValue: 'Монография'},
    {value: 'Учебник', viewValue: 'Учебник'},
    {value: 'Пособие', viewValue: 'Пособие'},
    {value: 'Охранный документ', viewValue: 'Охранный документ'},
    {value: 'Периодическое издание', viewValue: 'Периодическое издание'},
  ];

  elements0: Sourse[] = [
    {value: 'МОН РК', viewValue: 'МОН РК'},
    {value: 'Учебно-методическое объединение (УМО) по специальности', viewValue: 'Учебно-методическое объединение (УМО) по специальности'},
    {value: 'Ученый совет университета (УС)', viewValue: 'Ученый совет университета (УС)'},
  ];

  elements1: Sourse[] = [
    {value: 'в международных рецензируемых научных журналах(по JCR, или имеющих в базе данных Scopus, в Web of Science)', viewValue: 'в международных рецензируемых научных журналах(по JCR, или имеющих в базе данных Scopus, в Web of Science)'},
    {value: 'в научных журналах, индексируемых РИНЦ и других международных базах с ненулевым импакт-фактором', viewValue: 'в научных журналах, индексируемых РИНЦ и других международных базах с ненулевым импакт-фактором'},
    {value: 'в научных изданиях, рекомендованных КОКСОН МОН РК', viewValue: 'в научных изданиях, рекомендованных КОКСОН МОН РК'},
    {value: 'в материалах конференций, форумов, съездов, симпозиумов, конгрессов', viewValue: 'в материалах конференций, форумов, съездов, симпозиумов, конгрессов'},
  ];

  elements2: Sourse[] = [
    {value: 'Конференция', viewValue: 'Конференция'},
    {value: 'Форум', viewValue: 'Форум'},
    {value: 'Семинар', viewValue: 'Семинар'},
  ];

  elements3: Sourse[] = [
    {value: 'Председатель', viewValue: 'Председатель'},
    {value: 'Участник', viewValue: 'Участник'},
    {value: 'Слушатель', viewValue: 'Слушатель'},
    {value: 'Секретарь/Модератор', viewValue: 'Секретарь/Модератор'},
  ];

  elements4: Sourse[] = [
    {value: '1', viewValue: 'Отчественный'},
    {value: '2', viewValue: 'Зарубежный'},
  ];

  elements5: Sourse[] = [
    {value: '1', viewValue: 'Казахстан'},
  ];

  dividers: Sourse[] = [
    {value: 'element-0', viewValue: '1. Энергетика и машиностроение'},
    {
      value: 'element-1',
      viewValue: '2. Рациональное использование природных ресурсов, в том числе водных ресурсов, геология, переработка, новые материалы и технология, безопасные изделия и конструкции'
    },
    {
      value: 'element-2',
      viewValue: '3. Информационные, телекоммуникационные и космические технологии, научные исследования в области естественных наук'
    },
    {value: 'element-3', viewValue: '4. Устойчивое развитие агропромышленного комплекса и безопасность сельско-хозяйственной продукции'},
    {value: 'element-4', viewValue: '5. Наука о жизни и здоровье'},
    {
      value: 'element-5',
      viewValue: '6.  Научные основы «Мәңгілік ел» (образование XXI века, фундаментальные и прикладные исследования в области гуманитарных наук)'
    },
    {value: 'element-6', viewValue: '7. Национальная безопасность и оборона)'},
  ];

  array1: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '1.1. Тепло- и электроэнергетика и влияние энергетического сектора на окружающую среду, энергосбережение'
    },
    {
      value: 'element-1',
      viewValue: '1.2. Альтернативная энергетика и технологии: возобновляемые источники энергии, ядерная и водородная энергетика другие источники энергии'
    },
    {value: 'element-2', viewValue: '1.3.Транспортное, сельскохозяйственное, нефтегазовое и горно-металлургическое машиностроение'}
  ];

  array2: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '2.1. Фундаментальные и прикладные исследования в области химической науки'
    },
    {
      value: 'element-1',
      viewValue: '2.2. Фундаментальные и прикладные научные исследования в области почвенной науки'
    },
    {
      value: 'element-2',
      viewValue: '2.3. Геология и разработка месторождений полезных ископаемых'
    },
    {
      value: 'element-3',
      viewValue: '2.4. Комплексное использование минерального сырья'
    },
    {
      value: 'element-4',
      viewValue: '2.5. Управление водными, почвенными и биологическими ресурсами'
    },
    {
      value: 'element-5',
      viewValue: '2.6. Мониторинг объектов окружающей среды и «зеленые» технологии'
    },
    {
      value: 'element-6',
      viewValue: '2.7. Комплексная переработка углеводородного сырья'
    },
    {
      value: 'element-7',
      viewValue: '2.8. Композиционные материалы'
    },
    {
      value: 'element-8',
      viewValue: '2.9. Наноматериалы и нанотехнологии'
    },
    {
      value: 'element-9',
      viewValue: '2.10. Биомедицинские материалы и биологически активные вещества'
    },
    {
      value: 'element-10',
      viewValue: '2.11.Новые материалы многоцелевого назначения на основе природного сырья и техногенных отходов'
    },
    {
      value: 'element-11',
      viewValue: '2.12. Промышленная биотехнология'
    },
    {
      value: 'element-12',
      viewValue: '2.13.Технологии получения штаммов продуцентов биопрепаратов'
    },
    {
      value: 'element-13',
      viewValue: '2.14.Системы поиска, разведки и разработки МПИ'
    },
    {
      value: 'element-14',
      viewValue: '2.15.Системы обогащения, комплексного извлечения, переработки природного и техногенного рудного сырья'
    },
    {
      value: 'element-15',
      viewValue: '2.16. Добыча и использование нерудных полезных ископаемых'
    },
    {
      value: 'element-15',
      viewValue: '2.16. Добыча и использование нерудных полезных ископаемых'
    },
    {
      value: 'element-16',
      viewValue: '2.17. Производство и обработка металлов и материалов'
    },
    {
      value: 'element-17',
      viewValue: '2.18. Системы эффективного водопользования'
    },
    {
      value: 'element-18',
      viewValue: '2.19. Системы очистки сточных вод, газоочистки и пылеулавливания'
    },
    {
      value: 'element-19',
      viewValue: '2.20. Системы по переработке промышленных и бытовых отходов'
    },
    {
      value: 'element-20',
      viewValue: '2.21. Системы поддержания биологического разнообразия'
    },
    {
      value: 'element-21',
      viewValue: '2.22.Системы снижения уровня выбросов парниковых газов и применения альтернативных источников энергии'
    },
    {
      value: 'element-22',
      viewValue: '2.23. Системы по предотвращению опустынивания и деградации земель'
    },
    {
      value: 'element-23',
      viewValue: '2.24. Информационные системы и база данных'
    },
    {
      value: 'element-24',
      viewValue: '2.25. Каталитические системы и технологии'
    },
    {
      value: 'element-25',
      viewValue: '2.26. Полимерные материалы со специальными свойствам'
    },
    {
      value: 'element-25',
      viewValue: '2.27. Функциональные материалы для текстильной и легкой промышленности'
    },
    {
      value: 'element-25',
      viewValue: '2.28. Новые строительные конструкции зданий и сооружений, технологии производства строительных материалов и изделий, сейсмостойкое строительство и безопасность сооружений, новейшие архитектурные формы\''
    },
  ];

  array3: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '3.1. Интеллектуальные информационные технологии'
    },
    {
      value: 'element-1',
      viewValue: '3.2. Телекоммуникационные технологии'
    },
    {
      value: 'element-2',
      viewValue: '3.3. Космические технологии'
    },
    {
      value: 'element-3',
      viewValue: '3.4. Высокопроизводительные вычислительные технологии'
    },
    {
      value: 'element-4',
      viewValue: '3.5. Методы и системы информационной безопасности и защиты данных'
    },
    {
      value: 'element-5',
      viewValue: '3.6. Научные исследования в области естественных наук'
    },
    {
      value: 'element-6',
      viewValue: '2.7. Комплексная переработка углеводородного сырья'
    }
  ];

  array31: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '3.1.1. Интеллектуальные системы управления и принятия решений (в том числе в режиме реального времени)'
    },
    {
      value: 'element-1',
      viewValue: '3.1.2. Речевые технологии и компьютерная лингвистика'
    },
    {
      value: 'element-2',
      viewValue: '3.1.3. Распознавание образов и обработка изображений'
    },
    {
      value: 'element-3',
      viewValue: '3.1.4. Машинное обучение (machine learning)'
    },
    {
      value: 'element-4',
      viewValue: '3.1.5. Интеллектуальные робототехнические системы'
    },
    {
      value: 'element-5',
      viewValue: '3.1.6. Смарт технологии в науке и образовании'
    },
    {
      value: 'element-6',
      viewValue: '3.1.7. Основы новых технологий для индустрии: системы дополненной и виртуальной реальности, 3D-принтинг и другое аддитивное производство. Интернет вещей'
    }
  ];

  array32: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '3.2.1. Управление и оптимизация в системах связи, сетях передачи данных (в том числе мультисервисных платформах: мобильных и игровых интернет технологиях))'
    },
    {
      value: 'element-1',
      viewValue: '3.2.2. Информационно-коммуникационные системы для онлайн-торговли, цифрового банкинга и других цифровых сервисов'
    }
  ];

  array33: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '3.3.1. Технологии разработки аппаратно-программных средств и приборов для космической техники и наземно-космической инфраструктуры'
    },
    {
      value: 'element-1',
      viewValue: '3.3.2. Развитие научной и экспериментальной базы исследований дальнего и ближнего космоса'
    }
  ];

  array34: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '3.4.1. Облачные, параллельные и распределенные вычисления'
    },
    {
      value: 'element-1',
      viewValue: '3.4.2. Bid-data и data mining технологии'
    },
    {
      value: 'element-2',
      viewValue: '3.4.3.Архитектура и технологии проектирования технического обеспечения вычислительных систем'
    },
    {
      value: 'element-3',
      viewValue: '3.4.4. Информационно-поисковые системы'
    }
  ];

  array35: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '3.5.1. Методы и алгоритмы обеспечения информационной безопасности сложных систем и данных'
    },
    {
      value: 'element-1',
      viewValue: '3.5.2. Технологии и программно-технические средства защиты информации'
    }
  ];

  array36: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '3.6.1. Фундаментальные и прикладные исследования в области математики'
    },
    {
      value: 'element-1',
      viewValue: '3.6.2.Фундаментальные и прикладные исследования в области физики и астрономии'
    },
    {
      value: 'element-2',
      viewValue: '3.6.3. Фундаментальные и прикладные исследования в области информатики'
    },
    {
      value: 'element-3',
      viewValue: '3.6.4. Математическое и компьютерное моделирования в области механики'
    }
  ];

  array4: Sourse[] = [
    {value: 'element-0', viewValue: '4.1. Развитие интенсивного животноводства'},
    {value: 'element-1', viewValue: '4.2. Обеспечение ветеринарной безопасности'},
    {value: 'element-2', viewValue: '4.3. Интенсивное земледелие и растениеводство'},
    {value: 'element-3', viewValue: '4.4. Обеспечение фитосанитарной безопасности'},
    {value: 'element-4', viewValue: '4.5. Переработка и хранение сельскохозяйственной продукции и сырья'},
    {value: 'element-5', viewValue: '4.6. Техническое обеспечение модернизации агропромышленного комплекса'},
    {value: 'element-6', viewValue: '4.7. Устойчивое развитие сельских территорий'}
  ];

  array5: Sourse[] = [
    {value: 'element-0', viewValue: '5.1. Биотехнологии в сельском хозяйстве и охране окружающей среды'},
    {value: 'element-1', viewValue: '5.2. Биотехнологии в медицине'},
    {value: 'element-2', viewValue: '5.3. Развитие отечественной фармацевтической науки и промышленной биотехнологии'}
  ];

  array51: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '5.1.1. Технология геномного редактирования, маркер-сопутствующая и геномная  селекция для улучшения хозяйственно-ценных признаков растений и животных'
    },
    {
      value: 'element-1',
      viewValue: '5.1.2. Биотехнология для создания биоудобрений и биологических препаратов для борьбы с болезнями сельскохозяйственных растений'
    },
    {
      value: 'element-2',
      viewValue: '5.1.3. Молекулярно-генетические и клеточные технологии для создания вакцин, био- и лекарственных препаратов и диагностических тест-систем нового поколения'
    },
    {value: 'element-3', viewValue: '5.1.4. Биотехнологии для сохранения и воспроизводства биоразнобразия естественных экосистем'},
    {
      value: 'element-4',
      viewValue: '5.1.5. Биотехнологии для реабилитации техногенно-нарушенных экосистем, очистки сточных вод и почв от промышленных и агропромышленных загрязнений'
    },
    {value: 'element-5', viewValue: '5.1.6. Инновационные биотехнологии получения альтернативных источников энергии'},
    {value: 'element-6', viewValue: '5.1.7. Информационные технологии в биологии, сельском хозяйстве и экологии'}
  ];

  array52: Sourse[] = [
    {value: 'element-0', viewValue: '5.2.1.  Развитие клеточных технологий и тканевой инженерии для медицины'},
    {
      value: 'element-1',
      viewValue: '5.2.2. Молекулярно-генетические, геномные технологии и биоинформатика для развития персонализированной медицины'
    },
    {
      value: 'element-2',
      viewValue: '5.2.3. Мультиомные и молекулярные технологии для досимптомной диагностики, профилактики и лечения заболеваний'
    },
    {
      value: 'element-3',
      viewValue: '5.2.4. Новые технологии и биологически активные субстанции для решения проблем анте- и постнатального развития, старения, продления жизни человека'
    },
    {value: 'element-4', viewValue: '5.2.5. Новые биотехнологии получения био- и лекарственных препаратов для превентивной медицины'},
  ];

  array53: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '5.3.1. Разработка оригинальных лекарственных и профилактических препаратов, изделий медицинского назначения, оборудований и приборов для медицины и ветеринарии, технологии их производства, доклинические и клинические исследования'
    },
    {
      value: 'element-1',
      viewValue: '5.3.2.Технологии получения ценных компонентов из растительного, животного и минерального сырья биотехнологическими методами'
    },
    {
      value: 'element-2',
      viewValue: '5.3.3.Технология получения штаммов-продуцентов биопрепаратов, ферментов белков и аминокислот для сельского хозяйства, пищевой и перерабатывающей промышленности'
    },
    {
      value: 'element-3',
      viewValue: '5.3.4.Технологии глубокой переработки сырья с использованием микроорганизмов и/или ферментов, биологически активных субстанций'
    }
  ];

  array6: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '6.1.Фундаментальные и прикладные исследования в области социально-экономических и гуманитарных наук'
    },
    {
      value: 'element-1',
      viewValue: '6.2. Фундаментальные и прикладные исследования проблем образования ХХІ века'
    },
    {
      value: 'element-2',
      viewValue: '6.3. Фундаментальные и прикладные исследования проблем модернизации общественного сознания'
    }
  ];

  array61: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '6.1.1. Исследование социально-экономических условий развития наукоемких конкурентоспособных производств (экономик)'
    },
    {
      value: 'element-1',
      viewValue: '6.1.2. Исследование в области реализации социальной и экономической политики государства в современных условиях'
    },
    {
      value: 'element-2',
      viewValue: '6.1.3. Актуальные проблемы социальных и общественно-гуманитарных наук и междисциплинарные исследования'
    },
    {
      value: 'element-3',
      viewValue: '6.1.4. Исследования в области культуры, традиций, ценностей в условиях модернизации общества и государства'
    },
    {
      value: 'element-3',
      viewValue: '6.1.5. ІІІ-я технологическая модернизация экономики, Индустрия 4.0, промышленная и технологическая политика, инновационная экономика, научное, креативное и социальное предпринимательство'
    }
  ];

  array63: Sourse[] = [
    {
      value: 'element-0',
      viewValue: '6.3.1. Новое гуманитарное знание'
    },
    {
      value: 'element-1',
      viewValue: '6.3.2. Туған жер. Общенациональное единство, мир и согласие'
    },
    {
      value: 'element-2',
      viewValue: '6.3.3. Духовные святыни Казахстана. Сакральная география Казахстана'
    },
    {
      value: 'element-3',
      viewValue: '6.3.4.Общность истории, культуры и языка. Современная Казахстанская культура в глобальном мире'
    },
    {
      value: 'element-3',
      viewValue: '6.3.5. Рухани жаңғыру және Ұлы даланың жеті қыры'
    }
  ];

  array7: Sourse[] = [
    {value: 'element-0', viewValue: '7.1. Разработка технических средств в интересах национальной безопасности и обороны'},
  ];

  level: Sourse[] = [
    {
      value: 'Международный',
      viewValue: 'Международный'
    },
    {
      value: 'Республиканский',
      viewValue: 'Республиканский'
    }
  ];
  courseDegree = new FormControl(this.level[1].value);


  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }


  ngOnInit(): void {
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
  }

  generatePdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();

    switch (action) {
      case 'open':
        pdfMake.createPdf(documentDefinition).open();
        break;
      case 'print':
        pdfMake.createPdf(documentDefinition).print();
        break;
      case 'download':
        pdfMake.createPdf(documentDefinition).download();
        break;

      default:
        pdfMake.createPdf(documentDefinition).open();
        break;
    }
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

  sendTeacherPublication() {
    this._api.uploadPub(this.publicationForm.value).subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
    );
  }

  sendTeacherEvent() {
    this._api.uploadEvent(this.eventForm.value).subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
    );
  }

  sendTeacherPatent() {
    this.patentForm.patchValue({
      ptnt_file_kz: this.PatentLinkKz,
      ptnt_file_en: this.PatentLinkEn,
      ptnt_file_ru: this.PatentLinkRu,
      ptnt_file_name_ru: this.PatentFileRu.name,
      ptnt_file_name_kz: this.PatentFileKz.name,
      ptnt_file_name_en: this.PatentFileEn.name,
    });
    console.log(this.patentForm.value);
    this._api.addPatent(this.patentForm.value).subscribe(res => {
      console.log(res);
    }, error1 => {
      console.log(error1);
    });
  }

  sendTeacherCourse() {
    console.log(this.teacherCourseForm.value);
    this._api.uploadCourse(this.teacherCourseForm.value).subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
    );
  }

  public download(): void {
    const documentCreator = new DocumentCreator();
    const doc = DocumentCreator.create(this.PubTypeCounts, this.UserDegreeCounts, this.publishCount, this.courceCount, this.disMembersCount);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "Рейтинг лист.docx");
      console.log("Document created successfully");
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

  openUploadPubDialog() {
    let dialogRef = this.dialog.open(PublicationUploadComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (typeof  res != 'undefined' && res != 'false') {
        this.selectedPublicationFile = res;
        console.log(this.selectedPublicationFile);
        this.uploadPublicationFile();
      }
      console.log(`Result is ${res}`);
    });
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
    let EventDialog = this.dialog.open(EventUploadComponent);
    EventDialog.afterClosed().subscribe(
        res => {
          if (typeof  res != 'undefined' && res != 'false') {
            this.selectedEventFile = res;
            console.log(this.selectedEventFile);
            this.uploadEventFile();
          }
          console.log(`Result is ${res}`);
        }
    );
  }

  openUploadPatentDialog() {
    let PatentDialog = this.dialog.open(PatentUploadComponent);
    PatentDialog.afterClosed().subscribe(
        res => {
          if (typeof  res != 'undefined' && res != 'false') {
            this.PatentFileEn = res[0];
            this.PatentFileKz = res[1];
            this.PatentFileRu = res[2];
            this.uploadPatentFiles();
          }
          console.log(res);
        }
    );
  }

  uploadPatentFiles() {
    console.log('12345');
    console.log(this.PatentFileRu);
    console.log(this.PatentFileKz);
    console.log(this.PatentFileEn);
    const formData = new FormData();
    let linkRu;
    formData.append('file', this.PatentFileRu);
    $.ajax({
      url: 'https://nir.iitu.kz:8443/saa-uploader/uploadPatentFile',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      async: false,
    }).done(function(data) {
      const obj = JSON.parse(data);
      console.log(obj);
      linkRu = obj.filePath;
    });
    this.PatentLinkRu = linkRu;
    let linkKZ;
    const formDataKZ = new FormData();
    formDataKZ.append('file', this.PatentFileKz);
    $.ajax({
      url: 'https://nir.iitu.kz:8443/saa-uploader/uploadPatentFile',
      type: 'POST',
      data: formDataKZ,
      processData: false,
      contentType: false,
      async: false,
    }).done(function(data) {
      const obj = JSON.parse(data);
      console.log(obj);
      linkKZ = obj.filePath;
    });
    this.PatentLinkKz = linkKZ;
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
    }).done(function(data) {
      const obj = JSON.parse(data);
      console.log(obj);
      linkEN = obj.filePath;
    });
    this.PatentLinkEn = linkEN;

    console.log(this.PatentLinkRu);

    this.patentForm.patchValue({
      ptnt_file_kz: this.PatentLinkKz,
      ptnt_file_en: this.PatentLinkEn,
      ptnt_file_ru: this.PatentLinkRu,
      ptnt_file_name_ru: this.PatentFileRu.name,
      ptnt_file_name_kz: this.PatentFileKz.name,
      ptnt_file_name_en: this.PatentFileEn.name,
    });
  }

}

interface Sourse {
  value: string;
  viewValue: string;
}
