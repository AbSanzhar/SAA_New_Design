import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import {CookieService} from '../services/cookie.service';
// import {Http, Headers} from '@angular/http';
// import ResponseContentType;

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  private base =  window['cfgApiBaseUrl'];
  // private base = 'http://localhost:8077/';

  table: number;

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  login(user): Observable<any> {

    const url = 'auth/login';
    return this.http.post<any>(this.base + url, user)
      .pipe(catchError(this.errorHandler));
  }
  //не рабочий метод
  // getAllUsers(): Observable<any> {
  //   const url = 'users/dis';
  //   return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
  // }
  getUserById(id: number): Observable<any> {
    const url = 'users/';
    return this.http.get<any>(this.base + url + id  + '?jwt_token=' + window.localStorage.getItem('token'))
      .pipe(catchError(this.errorHandler));
  }
  updateProfile(updatedProfile): Observable<any> {
    const url = 'users/update/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.post<any>(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'), updatedProfile);
  }
  getDepUsers(id: number): Observable<any> {
    const url = 'depts/';
    return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'))
      .pipe(catchError(this.errorHandler));

  }
  getOwnUsers(): Observable<any> {
    const url = 'users/dis/true';
    return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
  }
  getExUsers(): Observable<any> {
    const url = 'users/dis/false';
    return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
  }
  getUserDocs(id: number): Observable<any> {
    const url = 'docs/user/';
    return this.http.get<any>(this.base + url + id)
      .pipe(catchError(this.errorHandler));
  }

  uploadFileData(data): Observable<any> {
    const url = 'docs/add/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.post<any>(this.base + url + id,  data).
    pipe(catchError(this.errorHandler));
  }

  deleteFileData(id: number): Observable<any> {
    const url = 'docs/' + id;
    return this.http.delete<any>(this.base + url);
  }

  uploadFile(id , fileToUpload): Observable<any> {
    const url = 'docs/addFile/';
    // const headers1 = new HttpHeaders({
    //   'Content-Type': 'multipart/form-data'});
    // const options = { headers: headers1 };
    // const  headers = new  HttpHeaders().set('Content-Type', 'multipart/form-data');
    // const options = { headers };
    console.log(id);
    console.log(fileToUpload);
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload.file, fileToUpload.file.name);
    console.log(formData.get('file'));
    // console.log(headers);
    return this.http.post<any>(this.base + url + id, fileToUpload);
  }

  downloadFile(filename): Observable<Blob> {
    const url = 'docs/uploads/';
    return this.http.get<Blob>(this.base + url + filename, { responseType: 'blob' as 'json' });
  }

  updateYourPlan(planId, newPlan): Observable<any> {
    const url = 'plans/update/';
    return this.http.patch<any>(this.base + url + planId, newPlan);
  }

  getAcadMethod(): Observable<any> {
    const url = 'academic-method/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get<any>(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  uploadActivity(activity): Observable<any> {
    const url = 'academic-method/add/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.post<any>(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'), activity).
    pipe(catchError(this.errorHandler));
  }

  updateActivity(acId, activity): Observable<any> {
    const url = 'academic-method/';
    return this.http.patch<any>(this.base + url + acId + '?jwt_token=' + window.localStorage.getItem('token'), activity).
    pipe(catchError(this.errorHandler));
  }

  deleteActivity(acId): Observable<any> {
    const url = 'academic-method/';
    return this.http.delete(this.base + url + acId + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getBudget(): Observable<any> {
    const url = 'budget-research/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get<any>(
        this.base + url + id + '?jwt_token='
        + window.localStorage.getItem('token')).pipe(catchError(this.errorHandler));
  }

  uploadBudget(budget): Observable<any> {
    const url = 'budget-research/add/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.post<any>(this.base + url + id, budget).
    pipe(catchError(this.errorHandler));
  }

  updateBudget(budId, budget): Observable<any> {
    const url = 'budget-research/';
    return this.http.patch<any>(this.base + url + budId, budget);
  }

  deleteBudget(budId): Observable<any> {
    const url = 'budget-research/';
    return this.http.delete(this.base + url + budId);
  }

  getOrg(): Observable<any> {
    const url = 'org-acts/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get<any>(this.base + url + id).pipe(catchError(this.errorHandler));
  }

  uploadOrg(org): Observable<any> {
    const url = 'org-acts/add/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.post<any>(this.base + url + id, org).pipe(catchError(this.errorHandler));
  }

  updateOrg(orgId, org): Observable<any> {
    const url = 'org-acts/';
    console.log(org);
    return this.http.patch<any>(this.base + url + orgId + '?jwt_token=' + window.localStorage.getItem('token'), org);
  }

  deleteOrg(orgId): Observable<any> {
    const url = 'org-acts/';
    return this.http.delete(this.base + url + orgId);
  }

  getPublications(): Observable<any> {
    const url = 'publication/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get<any>(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token')).pipe(catchError(this.errorHandler));
  }

  getPublicationsPage(query, lang): Observable<any> {
    const url = 'publication/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get<any>(
        this.base + url + id + '/' + lang + '/' + '?jwt_token='
        + window.localStorage.getItem('token') + query).pipe(catchError(this.errorHandler));
  }

  uploadPub(pub): Observable<any> {
    const url = 'publication/add/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.post<any>(
        this.base + url + id + '?jwt_token='
        + window.localStorage.getItem('token'), pub).pipe(catchError(this.errorHandler));
  }

  updatePub(id, pub): Observable<any> {
    const url = 'publication/update/';
    return this.http.patch<any>(
        this.base + url + id + '?jwt_token='
        + window.localStorage.getItem('token'), pub);
  }

  getEvent(lang): Observable<any> {
    const url = 'event/getAllByUserId/';
    const user = {
      event_user_id : this.getDecodedAccessToken(localStorage.getItem('token')).jti
    };
    return this.http.post<any>(this.base + url + lang, user).pipe(catchError(this.errorHandler));
  }
  uploadEvent(Event1): Observable<any> {
    const url = 'event/add';
    return this.http.post<any>(
        this.base + url + '?jwt_token='
        + window.localStorage.getItem('token'), Event1).pipe(catchError(this.errorHandler));
  }
  updateEvent(id, event): Observable<any> {
    const url = 'event/update/';
    return this.http.patch<any>(this.base + url + id, event);
  }

  getEdu(): Observable<any> {
    const url = 'edu-social/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get<any>(this.base + url + id).pipe(catchError(this.errorHandler));
  }

  getAllEduPage(query): Observable<any> {
    const url = 'edu-social/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get<any>(this.base + url + id + query).pipe(catchError(this.errorHandler));
  }

  uploadEdu(Edu): Observable<any> {
    const url = 'edu-social/add/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.post<any>(this.base + url + id, Edu).pipe(catchError(this.errorHandler));
  }

  updateEdu(eduId, edu): Observable<any> {
    const url = 'edu-social/';
    return this.http.patch<any>(this.base + url + eduId, edu);
  }

  deleteEdu(eduId): Observable<any> {
    const url = 'edu-social/';
    return this.http.delete<any>(this.base + url + eduId);
  }

  getPlanPerfomance(): Observable<any> {
    const url = 'plan-perform/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get<any>(this.base + url + id).pipe(catchError(this.errorHandler));
  }

  uploadPlanPerfomace(planPer): Observable<any> {
    const url = 'plan-perform/add/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.post<any>(this.base + url + id, planPer).pipe(catchError(this.errorHandler));
  }

  updatePlanPerfomance(ppId, planPer): Observable<any> {
    const url = 'plan-perform/';
    return this.http.patch<any>(this.base + url + ppId, planPer);
  }

  deletePlanPerfomance(ppId): Observable<any> {
    const url = 'plan-perform/';
    return this.http.delete<any>(this.base + url + ppId);
  }

  getReasearch(): Observable<any> {
    const url = 'comm-work/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get<any>(this.base + url + id).pipe(catchError(this.errorHandler));
  }

  uploadResearch(research): Observable<any> {
    const url = 'comm-work/add/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.post<any>(this.base + url + id, research).pipe(catchError(this.errorHandler));
  }

  updateResearch(commId, research): Observable<any> {
    const url = 'comm-work/';
    return this.http.patch<any>(this.base + url + commId, research);
  }

  deleteResearch(commId): Observable<any> {
    const url = 'comm-work/';
    return this.http.delete<any>(this.base + url + commId);
  }


  getAllMyDisSovets(userId, lang): Observable<any> {
    const url = 'dissovet/member/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get(this.base + url + userId + '/' + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getSecDisSovet(lang): Observable<any> {
    const url = 'dissovet/secretary/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get(this.base + url + id + '/' + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }
  uploadDisSovet(disSovet): Observable<any> {
    const url = 'dissovet/add';
    return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), disSovet);
  }

  uploadDisMember(disId, disMember): Observable<any> {
    const url = 'dissovet/add/memberUser/';
    return this.http.post(this.base + url + disId + '?jwt_token=' + window.localStorage.getItem('token'), disMember);
  }
  uploadNewUser(newUser): Observable<any> {
    const url = 'levye/add';
    return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), newUser);
  }

  getScienceProject(): Observable<any> {
    const url = 'science-member/user/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'));
  }
  getAllScienceProjects(lang): Observable<any> {
    const url = 'projects/all/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }
  updateScienceProject(id, proj): Observable<any> {
    const url = 'projects/update/';
    return this.http.patch(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'), proj);
  }


  getAllTeachers(): Observable<any> {
    const url = 'users/teachers';
    return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  addProject(project): Observable<any> {
    const url = 'projects/add/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.post(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'), project);
  }
  addMemberToProject(member): Observable<any> {
    const url = 'science-member/add';
    return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), member);
  }

  addRole(role): Observable<any> {
    const url = 'roles/add';
    return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), role);
  }
  deleteRole(role): Observable<any> {
    const url = 'roles/delete';
    console.log(role);
    return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), role);
  }

  getNotifications(): Observable<any> {
    const url = 'notifications/all/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  addPatent(patent): Observable<any> {
    const url = 'patent/add';
    return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), patent);
  }

  getPatent(lang): Observable<any> {
    const url = 'patent/getByUserId/';
    const userId = {
      ptnt_user_id: this.getDecodedAccessToken(localStorage.getItem('token')).jti
    };
    return this.http.post(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'), userId);
  }

  getAllPatents(scienceId, lang): Observable<any> {
    const url = 'patent/getAll/';
    return this.http.post(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'), scienceId);
  }

  setPatentStatus(status): Observable<any> {
    const url = 'patent/updateStatus';
    return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), status);
  }

  uploadPatentFile(file): Observable<any> {
    console.log('UPLOAD');
    const url = 'https://nir.iitu.kz:8443/saa-uploader/uploadFile';
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'multipart/form-data',
    });
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);
    return null;
  }

  getPubTypeCount(): Observable<any> {
    const url = 'ratingList/publicationTypeCount';
    return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getUserDegreeCount(): Observable<any> {
    const url = 'ratingList/UserDegreeCount';
    return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getPublishCount(): Observable<any> {
    const url = 'publication/publishedCount';
    return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getCourses(lang): Observable<any> {
    const url = 'courses/getByUserId/';
    const id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
    return this.http.get(this.base + url + id + '/' + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  uploadCourse(course): Observable<any> {
    const url = 'courses/add';
    return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), course);
  }

  getCourseCount(): Observable<any> {
    const url = 'ratingList/RefresherCourseCount';
    return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getDisMembersCount(): Observable<any> {
    const url = 'ratingList/DissovetParticipationsCount';
    return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getOneDisMembers(disId, lang): Observable<any> {
    const url = 'dissovet/';
    return this.http.get(this.base + url + disId + '/' + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  updateDisPosistion(user, disId): Observable<any> {
    const url = 'dissovet/updatePositionByDissovet/';
    return this.http.patch(this.base + url + disId, user);
  }

  addToExistedDisMem(disMember, disId): Observable <any> {
    const url = 'dissovet/add/memberUser/';
    return this.http.post(this.base + url + disId + '?jwt_token=' + window.localStorage.getItem('token'), disMember);
  }

  getCoAuthorsPublications(userId, lang): Observable<any> {
    const url = 'publication/coAuthor/';
    return this.http.get(this.base + url + userId + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  updatePublicationStatus(publicationStatus): Observable<any> {
    const url = 'publication/updateStatus';
    return this.http.patch(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), publicationStatus);
  }

  getAllPublications(lang): Observable<any> {
    const url = 'publication/showAll/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getPublicationType(lang): Observable<any> {
    const url = 'publication/type/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getPublicationPublished(lang): Observable<any> {
    const url = 'publication/published/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getEventTypes(lang): Observable<any> {
    const url = 'event/getTypes/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getEventRoles(lang): Observable<any> {
    const url = 'event/getRoles/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getPatentTypes(lang): Observable<any> {
    const url = 'patent/getTypes/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getCourseDegree(lang): Observable<any> {
    const url = 'courses/getDegrees/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getCourseForm(lang): Observable<any> {
    const url = 'courses/getForms/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getAllUniversites(lang): Observable<any> {
    const url = 'dissovet/getUniversities/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getDisPositions(lang): Observable<any> {
    const url = 'dissovet/getMemberPositions/';
    return this.http.get<any>(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getDisMemberType(lang): Observable<any> {
    const url = 'dissovet/getMemberType/';
    return this.http.get<any>(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getOneScienceProject(userId, lang): Observable<any> {
    const url = 'projects/sc/';
    return this.http.get<any>(this.base + url + userId + '/' + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  uploadProfilePhoto(userId, profilePhoto): Observable<any> {
    const url = 'users/updatePhoto/';
    return this.http.patch(this.base + url + userId + '?jwt_token=' + window.localStorage.getItem('token'), profilePhoto);
  }

  getExhibitionLevels(lang): Observable<any> {
    const url = 'exhibition/getLevel/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getExhibitionTypes(lang): Observable<any> {
    const url = 'exhibition/getType/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getExhibitionRoles(lang): Observable<any> {
    const url = 'exhibition/getRole/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  uploadExhibition(exhibition): Observable<any> {
    const url = 'exhibition/add';
    return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), exhibition);
  }

  getExhibitions(userId): Observable<any> {
    const url = 'exhibition/getByUser/';
    return this.http.get(this.base + url + userId + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getExhibitionCount(): Observable<any> {
    const url = 'ratingList/ExhibitionLevel';
    return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getAwardsTypes(lang): Observable<any> {
    const url = 'awards/getTypes/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  uploadTeacherAward(award): Observable<any> {
    const url = 'awards/add';
    return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), award);
  }

  getTeacherAwards(userId): Observable<any> {
    const url = 'awards/getByUser/';
    return this.http.get(this.base + url + userId + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getRatingListAwardsCount(): Observable<any> {
    const url = 'ratingList/Awards';
    return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getTeacherActivityTypes(lang): Observable<any> {
    const url = 'activity/getTypes/';
    return this.http.get(this.base + url + lang + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  getTeacherActivities(userId): Observable<any> {
    const url = 'activity/getByUser/';
    return this.http.get(this.base + url + userId + '?jwt_token=' + window.localStorage.getItem('token'));
  }

  uploadTeacherActivity(activity): Observable<any> {
    const url = 'activity/add';
    return this.http.post(this.base + url, activity);
  }

  getRatingListActivities(): Observable<any> {
    const url = 'ratingList/Activity';
    return this.http.get(this.base + url);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

}
