(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/api/api.service.ts":
    /*!************************************!*\
      !*** ./src/app/api/api.service.ts ***!
      \************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jwt-decode */
      "./node_modules/jwt-decode/lib/index.js");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__); // import {Http, Headers} from '@angular/http';
      // import ResponseContentType;


      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.base = window["cfgApiBaseUrl"];
        }

        _createClass(ApiService, [{
          key: "getDecodedAccessToken",
          value: function getDecodedAccessToken(token) {
            try {
              return jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
            } catch (Error) {
              return null;
            }
          }
        }, {
          key: "login",
          value: function login(user) {
            var url = 'auth/login';
            return this.http.post(this.base + url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAllUsers",
          value: function getAllUsers() {
            var url = 'users/dis';
            return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "getUserById",
          value: function getUserById(id) {
            var url = 'users/';
            return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(updatedProfile) {
            var url = 'users/update/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.post(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'), updatedProfile);
          }
        }, {
          key: "getDepUsers",
          value: function getDepUsers(id) {
            var url = 'depts/';
            return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getOwnUsers",
          value: function getOwnUsers() {
            var url = 'users/dis/true';
            return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "getExUsers",
          value: function getExUsers() {
            var url = 'users/dis/false';
            return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "getUserDocs",
          value: function getUserDocs(id) {
            var url = 'docs/user/';
            return this.http.get(this.base + url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadFileData",
          value: function uploadFileData(data) {
            var url = 'docs/add/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.post(this.base + url + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteFileData",
          value: function deleteFileData(id) {
            var url = 'docs/' + id;
            return this.http["delete"](this.base + url);
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(id, fileToUpload) {
            var url = 'docs/addFile/'; // const headers1 = new HttpHeaders({
            //   'Content-Type': 'multipart/form-data'});
            // const options = { headers: headers1 };
            // const  headers = new  HttpHeaders().set('Content-Type', 'multipart/form-data');
            // const options = { headers };

            console.log(id);
            console.log(fileToUpload);
            var formData = new FormData();
            formData.append('file', fileToUpload.file, fileToUpload.file.name);
            console.log(formData.get('file')); // console.log(headers);

            return this.http.post(this.base + url + id, fileToUpload);
          }
        }, {
          key: "downloadFile",
          value: function downloadFile(filename) {
            var url = 'docs/uploads/';
            return this.http.get(this.base + url + filename, {
              responseType: 'blob'
            });
          }
        }, {
          key: "updateYourPlan",
          value: function updateYourPlan(planId, newPlan) {
            var url = 'plans/update/';
            return this.http.patch(this.base + url + planId, newPlan);
          }
        }, {
          key: "getAcadMethod",
          value: function getAcadMethod() {
            var url = 'academic-method/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "uploadActivity",
          value: function uploadActivity(activity) {
            var url = 'academic-method/add/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.post(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'), activity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateActivity",
          value: function updateActivity(acId, activity) {
            var url = 'academic-method/';
            return this.http.patch(this.base + url + acId + '?jwt_token=' + window.localStorage.getItem('token'), activity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBudget",
          value: function getBudget() {
            var url = 'budget-research/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadBudget",
          value: function uploadBudget(budget) {
            var url = 'budget-research/add/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.post(this.base + url + id, budget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getOrg",
          value: function getOrg() {
            var url = 'org-acts/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadOrg",
          value: function uploadOrg(org) {
            var url = 'org-acts/add/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.post(this.base + url + id, org).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getPublications",
          value: function getPublications() {
            var url = 'publication/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getPublicationsPage",
          value: function getPublicationsPage(query) {
            var url = 'publication/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token') + query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadPub",
          value: function uploadPub(pub) {
            var url = 'publication/add/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.post(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'), pub).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updatePub",
          value: function updatePub(id, pub) {
            var url = 'publication/update/';
            return this.http.patch(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'), pub);
          }
        }, {
          key: "getEvent",
          value: function getEvent() {
            var url = 'event/getAllByUserId';
            var user = {
              event_user_id: this.getDecodedAccessToken(localStorage.getItem('token')).jti
            };
            return this.http.post(this.base + url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadEvent",
          value: function uploadEvent(Event1) {
            var url = 'event/add';
            return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), Event1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateEvent",
          value: function updateEvent(id, event) {
            var url = 'event/update/';
            return this.http.patch(this.base + url + id, event);
          }
        }, {
          key: "getEdu",
          value: function getEdu() {
            var url = 'edu-social/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAllEduPage",
          value: function getAllEduPage(query) {
            var url = 'edu-social/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id + query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadEdu",
          value: function uploadEdu(Edu) {
            var url = 'edu-social/add/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.post(this.base + url + id, Edu).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getPlanPerfomance",
          value: function getPlanPerfomance() {
            var url = 'plan-perform/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadPlanPerfomace",
          value: function uploadPlanPerfomace(planPer) {
            var url = 'plan-perform/add/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.post(this.base + url + id, planPer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updatePlanPerfomance",
          value: function updatePlanPerfomance(planPer) {
            var url = 'plan-perform/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.patch(this.base + url + id, planPer);
          }
        }, {
          key: "getReasearch",
          value: function getReasearch() {
            var url = 'comm-work/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadResearch",
          value: function uploadResearch(research) {
            var url = 'comm-work/add/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.post(this.base + url + id, research).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAllMyDisSovets",
          value: function getAllMyDisSovets(userId) {
            var url = 'dissovet/member/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + userId + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "getSecDisSovet",
          value: function getSecDisSovet() {
            var url = 'dissovet/secretary/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "uploadDisSovet",
          value: function uploadDisSovet(disSovet) {
            var url = 'dissovet/add';
            return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), disSovet);
          }
        }, {
          key: "uploadDisMember",
          value: function uploadDisMember(disId, disMember) {
            var url = 'dissovet/add/memberUser/';
            return this.http.post(this.base + url + disId + '?jwt_token=' + window.localStorage.getItem('token'), disMember);
          }
        }, {
          key: "uploadNewUser",
          value: function uploadNewUser(newUser) {
            var url = 'levye/add';
            return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), newUser);
          }
        }, {
          key: "getScienceProject",
          value: function getScienceProject() {
            var url = 'science-member/user/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "getAllScienceProjects",
          value: function getAllScienceProjects() {
            var url = 'projects/all';
            return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "updateScienceProject",
          value: function updateScienceProject(id, proj) {
            var url = 'projects/update/';
            return this.http.patch(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'), proj);
          }
        }, {
          key: "getAllTeachers",
          value: function getAllTeachers() {
            var url = 'users/teachers';
            return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "addProject",
          value: function addProject(project) {
            var url = 'projects/add/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.post(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'), project);
          }
        }, {
          key: "addMemberToProject",
          value: function addMemberToProject(member) {
            var url = 'science-member/add';
            return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), member);
          }
        }, {
          key: "addRole",
          value: function addRole(role) {
            var url = 'roles/add';
            return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), role);
          }
        }, {
          key: "deleteRole",
          value: function deleteRole(role) {
            var url = 'roles/delete';
            console.log(role);
            return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), role);
          }
        }, {
          key: "getNotifications",
          value: function getNotifications() {
            var url = 'notifications/all/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "addPatent",
          value: function addPatent(patent) {
            var url = 'patent/add';
            return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), patent);
          }
        }, {
          key: "getPatent",
          value: function getPatent() {
            var url = 'patent/getByUserId';
            var userId = {
              ptnt_user_id: this.getDecodedAccessToken(localStorage.getItem('token')).jti
            };
            return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), userId);
          }
        }, {
          key: "getAllPatents",
          value: function getAllPatents(scienceId) {
            var url = 'patent/getAll';
            return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), scienceId);
          }
        }, {
          key: "setPatentStatus",
          value: function setPatentStatus(status) {
            var url = 'patent/updateStatus';
            return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), status);
          }
        }, {
          key: "uploadPatentFile",
          value: function uploadPatentFile(file) {
            console.log('UPLOAD');
            var url = 'https://nir.iitu.kz:8443/saa-uploader/uploadFile';
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'multipart/form-data'
            });
            var formData = new FormData();
            formData.append('file', file);
            console.log(formData);
            return null;
          }
        }, {
          key: "getPubTypeCount",
          value: function getPubTypeCount() {
            var url = 'ratingList/publicationTypeCount';
            return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "getUserDegreeCount",
          value: function getUserDegreeCount() {
            var url = 'ratingList/UserDegreeCount';
            return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "getPublishCount",
          value: function getPublishCount() {
            var url = 'publication/publishedCount';
            return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "getCourses",
          value: function getCourses() {
            var url = 'courses/getByUserId/';
            var id = this.getDecodedAccessToken(localStorage.getItem('token')).jti;
            return this.http.get(this.base + url + id + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "uploadCourse",
          value: function uploadCourse(course) {
            var url = 'courses/add';
            return this.http.post(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'), course);
          }
        }, {
          key: "getCourseCount",
          value: function getCourseCount() {
            var url = 'ratingList/RefresherCourseCount';
            return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "getDisMembersCount",
          value: function getDisMembersCount() {
            var url = 'ratingList/DissovetParticipationsCount';
            return this.http.get(this.base + url + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "getOneDisMembers",
          value: function getOneDisMembers(disId) {
            var url = 'dissovet/getMembers/';
            return this.http.get(this.base + url + disId + '?jwt_token=' + window.localStorage.getItem('token'));
          }
        }, {
          key: "updateDisPosistion",
          value: function updateDisPosistion(user, disId) {
            var url = 'dissovet/updatePositionByDissovet/';
            return this.http.patch(this.base + url + disId, user);
          }
        }, {
          key: "addToExistedDisMem",
          value: function addToExistedDisMem(disMember, disId) {
            var url = 'dissovet/add/memberUser/';
            return this.http.post(this.base + url + disId + '?jwt_token=' + window.localStorage.getItem('token'), disMember);
          }
        }, {
          key: "errorHandler",
          value: function errorHandler(error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message || 'Server Error');
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/api/auth-guard.ts":
    /*!***********************************!*\
      !*** ./src/app/api/auth-guard.ts ***!
      \***********************************/

    /*! exports provided: AuthGuardService */

    /***/
    function srcAppApiAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/api/api.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _services_data_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/data-control.service */
      "./src/app/services/data-control.service.ts");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(apiService, router, http) {
          _classCallCheck(this, AuthGuardService);

          this.apiService = apiService;
          this.router = router;
          this.http = http;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (localStorage.getItem('token')) {
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
        return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_data_control_service__WEBPACK_IMPORTED_MODULE_3__["DataControlService"]));
      };

      AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuardService,
        factory: AuthGuardService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _services_data_control_service__WEBPACK_IMPORTED_MODULE_3__["DataControlService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var _whole_page_whole_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./whole-page/whole-page.component */
      "./src/app/whole-page/whole-page.component.ts");
      /* harmony import */


      var _api_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./api/auth-guard */
      "./src/app/api/auth-guard.ts");

      var routes = [{
        path: '',
        redirectTo: 'whole',
        pathMatch: 'full'
      }, {
        path: 'whole',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | whole-page-whole-page-module */
          "whole-page-whole-page-module").then(__webpack_require__.bind(null,
          /*! ./whole-page/whole-page.module */
          "./src/app/whole-page/whole-page.module.ts")).then(function (m) {
            return m.WholePageModule;
          });
        },
        canActivate: [_api_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, // { path: 'whole', component: WholePageComponent },
      // { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
      {
        path: '**',
        component: _whole_page_whole_page_component__WEBPACK_IMPORTED_MODULE_3__["WholePageComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'GF';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA9 Copyright 2000-2020.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["footer[_ngcontent-%COMP%]{\r\n    font-family: Muli, serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    line-height: 19px;\r\n    background: #212121;\r\n    color: white;\r\n    padding-top: 1rem;\r\n    padding-bottom: 3rem;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpLCBzZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMTIxMjE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var _whole_page_whole_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./whole-page/whole-page.component */
      "./src/app/whole-page/whole-page.component.ts");
      /* harmony import */


      var _whole_page_main_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./whole-page/main/profile/profile.component */
      "./src/app/whole-page/main/profile/profile.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/fesm2015/tabs.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/fesm2015/icon.js");
      /* harmony import */


      var _whole_page_main_profile_password_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./whole-page/main/profile/password/password.component */
      "./src/app/whole-page/main/profile/password/password.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/fesm2015/input.js");
      /* harmony import */


      var _whole_page_main_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./whole-page/main/profile/settings/settings.component */
      "./src/app/whole-page/main/profile/settings/settings.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/fesm2015/select.js");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/badge */
      "./node_modules/@angular/material/fesm2015/badge.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/fesm2015/table.js");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "./node_modules/@angular/material/fesm2015/button-toggle.js");
      /* harmony import */


      var _login_sign_in_dialog_sign_in_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./login/sign-in-dialog/sign-in-dialog.component */
      "./src/app/login/sign-in-dialog/sign-in-dialog.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/fesm2015/paginator.js");
      /* harmony import */


      var _whole_page_teacher_patent_upload_patent_upload_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./whole-page/teacher/patent-upload/patent-upload.component */
      "./src/app/whole-page/teacher/patent-upload/patent-upload.component.ts");
      /* harmony import */


      var _whole_page_teacher_event_upload_event_upload_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./whole-page/teacher/event-upload/event-upload.component */
      "./src/app/whole-page/teacher/event-upload/event-upload.component.ts");
      /* harmony import */


      var _whole_page_teacher_publication_upload_publication_upload_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./whole-page/teacher/publication-upload/publication-upload.component */
      "./src/app/whole-page/teacher/publication-upload/publication-upload.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _whole_page_whole_page_component__WEBPACK_IMPORTED_MODULE_5__["WholePageComponent"], _whole_page_main_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], _whole_page_main_profile_password_password_component__WEBPACK_IMPORTED_MODULE_12__["PasswordComponent"], _whole_page_main_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"], _login_sign_in_dialog_sign_in_dialog_component__WEBPACK_IMPORTED_MODULE_23__["SignInDialogComponent"], _whole_page_teacher_patent_upload_patent_upload_component__WEBPACK_IMPORTED_MODULE_28__["PatentUploadComponent"], _whole_page_teacher_event_upload_event_upload_component__WEBPACK_IMPORTED_MODULE_29__["EventUploadComponent"], _whole_page_teacher_publication_upload_publication_upload_component__WEBPACK_IMPORTED_MODULE_30__["PublicationUploadComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _whole_page_whole_page_component__WEBPACK_IMPORTED_MODULE_5__["WholePageComponent"], _whole_page_main_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], _whole_page_main_profile_password_password_component__WEBPACK_IMPORTED_MODULE_12__["PasswordComponent"], _whole_page_main_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"], _login_sign_in_dialog_sign_in_dialog_component__WEBPACK_IMPORTED_MODULE_23__["SignInDialogComponent"], _whole_page_teacher_patent_upload_patent_upload_component__WEBPACK_IMPORTED_MODULE_28__["PatentUploadComponent"], _whole_page_teacher_event_upload_event_upload_component__WEBPACK_IMPORTED_MODULE_29__["EventUploadComponent"], _whole_page_teacher_publication_upload_publication_upload_component__WEBPACK_IMPORTED_MODULE_30__["PublicationUploadComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/login/login.component.ts":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _sign_in_dialog_sign_in_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sign-in-dialog/sign-in-dialog.component */
      "./src/app/login/sign-in-dialog/sign-in-dialog.component.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "./node_modules/@angular/material/fesm2015/button-toggle.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/fesm2015/input.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/fesm2015/icon.js");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(dialog) {
          _classCallCheck(this, LoginComponent);

          this.dialog = dialog;
          this.inputLogin = '';
        }

        _createClass(LoginComponent, [{
          key: "openDialog",
          value: function openDialog() {
            var L = document.getElementsByClassName('text');
            L[0].style.opacity = '0';
            var dialogRef = this.dialog.open(_sign_in_dialog_sign_in_dialog_component__WEBPACK_IMPORTED_MODULE_1__["SignInDialogComponent"], {
              width: '530px',
              data: this.inputLogin,
              backdropClass: 'dialog-content'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              var L = document.getElementsByClassName('text');
              L[0].style.opacity = '1';
              console.log("Dialog result: ".concat(result));
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 25,
        vars: 1,
        consts: [[1, "container"], [1, "content"], [1, "header"], ["id", "logo"], ["src", "./assets/images/header/logoIITU.png", "alt", "IITU logo"], ["id", "accountName"], ["mat-button", "", 3, "click"], [1, "content-center"], [1, "column"], [2, "width", "55%"], [1, "text"], [1, "join"], ["matInput", "", "placeholder", "Email address", 3, "ngModel", "ngModelChange"], [2, "display", "flex", "align-items", "center", 3, "click"], [1, "btnText"], [2, "vertical-align", "middle"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_6_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " For people interested ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " in science! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-button-toggle-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.inputLogin = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-button-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_mat_button_toggle_click_20_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "JOIN FOR FREE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "keyboard_arrow_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputLogin);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
        styles: [".container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  background: url(\"/assets/images/login/loginBackground.png\") no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 5%;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n}\r\n\r\n#accountName[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n  display: flex;\r\n  height: 250px;\r\n}\r\n\r\n#accountName[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #8F1812;\r\n  border-radius: 9px;\r\n  font-family: Roboto, sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 25px;\r\n  line-height: 30px;\r\n  color: #E8E7E7;\r\n  padding: .5rem 1rem;\r\n  border: none;\r\n}\r\n\r\n.content-center[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  display: flex;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  flex-direction: column;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  padding: 0  6rem 6rem;\r\n  \r\n  \r\n  font-weight: bold;\r\n  font-size: 50px;\r\n  line-height: 60px;\r\n  text-align: center;\r\n  color: rgba(143, 24, 18, 0.9);\r\n}\r\n\r\n.join[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  align-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.btnText[_ngcontent-%COMP%]{\r\nmargin: 0;\r\n  padding: 0;\r\n  font-size: 25px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.join[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  font-family: Ubuntu, sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 36px;\r\n  line-height: 28px;\r\n  text-align: center;\r\n}\r\n\r\n.join[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%] {\r\n  background: #8F1812;\r\n  font-family: Ubuntu, sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 36px;\r\n  line-height: 41px;\r\n  text-align: center;\r\n  padding: .2rem 2rem;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.join[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 80px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUVBQXFFO0VBQ3JFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUNBO0FBQ0EsU0FBUztFQUNQLFVBQVU7RUFDVixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dpbi9sb2dpbkJhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCA1JTtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jbG9nbyBpbWcge1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbiNhY2NvdW50TmFtZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4jYWNjb3VudE5hbWUgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjOEYxODEyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBjb2xvcjogI0U4RTdFNztcclxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQtY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgcGFkZGluZzogMCAgNnJlbSA2cmVtO1xyXG4gIC8qZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjsqL1xyXG4gIC8qZm9udC1zdHlsZTogbm9ybWFsOyovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiYSgxNDMsIDI0LCAxOCwgMC45KTtcclxufVxyXG4uam9pbiB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG5UZXh0e1xyXG5tYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uam9pbiBpbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IFVidW50dSwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uam9pbiBtYXQtYnV0dG9uLXRvZ2dsZSB7XHJcbiAgYmFja2dyb3VuZDogIzhGMTgxMjtcclxuICBmb250LWZhbWlseTogVWJ1bnR1LCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBsaW5lLWhlaWdodDogNDFweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogLjJyZW0gMnJlbTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmpvaW4gbWF0LWJ1dHRvbi10b2dnbGUgaSB7XHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/login/sign-in-dialog/sign-in-dialog.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/login/sign-in-dialog/sign-in-dialog.component.ts ***!
      \******************************************************************/

    /*! exports provided: SignInDialogComponent */

    /***/
    function srcAppLoginSignInDialogSignInDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInDialogComponent", function () {
        return SignInDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/fesm2015/dialog.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _services_data_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/data-control.service */
      "./src/app/services/data-control.service.ts");
      /* harmony import */


      var _api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../api/api.service */
      "./src/app/api/api.service.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function SignInDialogComponent_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login or password are incorrect!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SignInDialogComponent = /*#__PURE__*/function () {
        function SignInDialogComponent(router, service, dialog, data, _api) {
          _classCallCheck(this, SignInDialogComponent);

          this.router = router;
          this.service = service;
          this.dialog = dialog;
          this.data = data;
          this._api = _api;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(SignInDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signIn",
          value: function signIn() {
            var _this = this;

            this._api.login(this.form.value).subscribe(function (res) {
              // console.log(res);
              localStorage.setItem('token', res.token);

              _this.dialog.close();

              _this.router.navigate(['/whole']);
            }, function (error1) {
              _this.error2 = true; // alert('Login or password are incorrect!');

              console.log(error1);
            });
          }
        }]);

        return SignInDialogComponent;
      }();

      SignInDialogComponent.ɵfac = function SignInDialogComponent_Factory(t) {
        return new (t || SignInDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_control_service__WEBPACK_IMPORTED_MODULE_4__["DataControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]));
      };

      SignInDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignInDialogComponent,
        selectors: [["app-sign-in-dialog"]],
        decls: 16,
        vars: 2,
        consts: [[1, "dialog-content"], [1, "mat-typography"], [2, "justify-content", "center", "display", "flex"], ["src", "./assets/images/login/FingerPrint.png", "width", "16%", "alt", ""], [3, "formGroup"], ["src", "./assets/images/login/user.png", "width", "8%", "alt", ""], ["formControlName", "username", "placeholder", "Username", "required", "", 1, "input-dialog", 2, "color", "#FDFDFD"], ["src", "./assets/images/login/passwd.png", "width", "8%", "alt", ""], ["formControlName", "password", "type", "password", "placeholder", "Password", "required", "", 1, "input-dialog", 2, "color", "#FDFDFD"], [4, "ngIf"], [2, "margin", "8rem 4rem 2rem 4rem"], ["id", "sign-in-button", "type", "submit", "value", "Sign in", 3, "click"]],
        template: function SignInDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignInDialogComponent_mat_error_13_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInDialogComponent_Template_input_click_15_listener() {
              return ctx.signIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error2);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: [".mat-dialog-container{\r\n  width: 100%;\r\n  height: 500px;\r\n  background: rgba(248, 96, 96, 0.7);\r\n  box-shadow: 0 4px 60px rgba(239, 156, 156, 0.9);\r\n  border-radius: 23px;\r\n}\r\n#sign-in-button[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  font-family: Ubuntu,sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 22px;\r\n  line-height: 26px;\r\n  background: #FFFCFC;\r\n  border-radius: 40px;\r\n  color: #8F1812;\r\n  border: none;\r\n  padding: 1rem;\r\n}\r\n .mat-form-field-wrapper{\r\n  padding: 0;\r\n}\r\nmat-form-field[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin: 1rem 4rem;\r\n  border-bottom: 1px solid white;\r\n  transform: rotate(0.25deg);\r\n}\r\nmat-form-field[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  margin-left: 3rem;\r\n}\r\n.input-dialog[_ngcontent-%COMP%]{\r\n  margin-left: 1.5rem;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 22px;\r\n}\r\nmat-error[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: large;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vc2lnbi1pbi1kaWFsb2cvc2lnbi1pbi1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLCtDQUErQztFQUMvQyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3NpZ24taW4tZGlhbG9nL3NpZ24taW4tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvZGVlcC8ubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgOTYsIDk2LCAwLjcpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDYwcHggcmdiYSgyMzksIDE1NiwgMTU2LCAwLjkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbn1cclxuI3NpZ24taW4tYnV0dG9ue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBVYnVudHUsc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkNGQztcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGNvbG9yOiAjOEYxODEyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi9kZWVwLy5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAxcmVtIDRyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDAuMjVkZWcpO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkIGltZ3tcclxuICBtYXJnaW4tbGVmdDogM3JlbTtcclxufVxyXG4uaW5wdXQtZGlhbG9ne1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxubWF0LWVycm9ye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sign-in-dialog',
            templateUrl: './sign-in-dialog.component.html',
            styleUrls: ['./sign-in-dialog.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _services_data_control_service__WEBPACK_IMPORTED_MODULE_4__["DataControlService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/data-control.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/services/data-control.service.ts ***!
      \**************************************************/

    /*! exports provided: DataControlService */

    /***/
    function srcAppServicesDataControlServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataControlService", function () {
        return DataControlService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");

      var DataControlService = /*#__PURE__*/function () {
        function DataControlService(http) {
          _classCallCheck(this, DataControlService);

          this.http = http;
        }

        _createClass(DataControlService, [{
          key: "getAllEmployees",
          value: function getAllEmployees() {
            return this.http.get('http://localhost:3000/employees');
          }
        }, {
          key: "updateEmployess",
          value: function updateEmployess(employee) {
            return this.http.put('http://localhost:3000/employees/' + employee.id, employee);
          }
        }, {
          key: "getAllPatents",
          value: function getAllPatents() {
            return this.http.get('http://localhost:3000/patents');
          }
        }, {
          key: "getAllPublications",
          value: function getAllPublications() {
            return this.http.get('http://localhost:3000/publications');
          }
        }, {
          key: "getAllDissets",
          value: function getAllDissets() {
            return this.http.get('http://localhost:3000/dissets');
          }
        }, {
          key: "getDisset",
          value: function getDisset(id) {
            return this.http.get('http://localhost:3000/dissets/' + id);
          }
        }, {
          key: "getUserLogin",
          value: function getUserLogin(data) {
            return this.http.get('http://localhost:3000/users?username=' + data.username + '&password=' + data.password);
          }
        }, {
          key: "getUser",
          value: function getUser(id) {
            return this.http.get('http://localhost:3000/users/' + id);
          }
        }]);

        return DataControlService;
      }();

      DataControlService.ɵfac = function DataControlService_Factory(t) {
        return new (t || DataControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      DataControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DataControlService,
        factory: DataControlService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataControlService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/whole-page/main/profile/password/password.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/whole-page/main/profile/password/password.component.ts ***!
      \************************************************************************/

    /*! exports provided: PasswordComponent */

    /***/
    function srcAppWholePageMainProfilePasswordPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordComponent", function () {
        return PasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/fesm2015/input.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function PasswordComponent_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords don't much");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PasswordComponent = /*#__PURE__*/function () {
        function PasswordComponent(formBuilder) {
          _classCallCheck(this, PasswordComponent);

          this.formBuilder = formBuilder;
          this.passwordCheck = false;
        }

        _createClass(PasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
          }
        }, {
          key: "checkPass",
          value: function checkPass() {
            if (this.form.get('password').value !== this.form.get('confirmPassword').value) {
              // alert('Passwords dont much');
              this.passwordCheck = true;
            }
          }
        }]);

        return PasswordComponent;
      }();

      PasswordComponent.ɵfac = function PasswordComponent_Factory(t) {
        return new (t || PasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      PasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PasswordComponent,
        selectors: [["app-password"]],
        decls: 27,
        vars: 2,
        consts: [[2, "min-height", "100%"], [2, "margin", "2rem"], ["routerLink", "./..", 2, "border", "0", "background", "none", "font-size", "16px"], [2, "display", "inline", "color", "gray"], [1, "content"], [2, "width", "50%"], [3, "formGroup"], [1, "div-input"], [1, "example-full-width"], ["placeholder", "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", "type", "password", "matInput", "", "required", "", "formControlName", "currentPassword"], ["placeholder", "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", "type", "password", "matInput", "", "required", "", "formControlName", "password"], ["placeholder", "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0430\u0440\u043E\u043B\u044F", "type", "password", "matInput", "", "required", "", "formControlName", "confirmPassword"], [4, "ngIf"], [2, "text-align", "center"], ["type", "submit", "value", "\u041F\u041E\u041C\u0415\u041D\u042F\u0422\u042C \u041F\u0410\u0420\u041E\u041B\u042C", 1, "btn", 3, "click"]],
        template: function PasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F > ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u041F\u0430\u0440\u043E\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password Required!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password Required!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password Required!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PasswordComponent_mat_error_24_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordComponent_Template_input_click_26_listener() {
              return ctx.checkPass();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordCheck);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: [".content[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 6rem;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n  font-weight: 500;\r\n}\r\nmat-form-field[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\nmat-label[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n}\r\n.div-input[_ngcontent-%COMP%]{\r\n  margin: 2rem;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n  background: #0CB5A0;\r\n  border: 0;\r\n  border-radius: 20px;\r\n  width: 70%;\r\n  margin: 3rem;\r\n  color: white;\r\n  font-weight: 600;\r\n  padding: 0.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hvbGUtcGFnZS9tYWluL3Byb2ZpbGUvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvd2hvbGUtcGFnZS9tYWluL3Byb2ZpbGUvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA2cmVtO1xyXG59XHJcbmgxe1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxubWF0LWxhYmVse1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmRpdi1pbnB1dHtcclxuICBtYXJnaW46IDJyZW07XHJcbn1cclxuLmJ0bntcclxuICBiYWNrZ3JvdW5kOiAjMENCNUEwO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luOiAzcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-password',
            templateUrl: './password.component.html',
            styleUrls: ['./password.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/whole-page/main/profile/profile.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/whole-page/main/profile/profile.component.ts ***!
      \**************************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function srcAppWholePageMainProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jwt-decode */
      "./node_modules/jwt-decode/lib/index.js");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _services_data_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/data-control.service */
      "./src/app/services/data-control.service.ts");
      /* harmony import */


      var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../api/api.service */
      "./src/app/api/api.service.ts");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/fesm2015/tabs.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/fesm2015/icon.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/fesm2015/table.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/fesm2015/paginator.js");

      function ProfileComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.currentUser.firstName, " ", ctx_r0.currentUser.lastName, "");
        }
      }

      function ProfileComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentUser.email);
        }
      }

      function ProfileComponent_h3_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u044B \u0437\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u044D\u0442\u043E\u0439 \u043A\u0430\u0444\u0435\u0434\u0440\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_17_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var degree_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](degree_r7.degreeName);
        }
      }

      function ProfileComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_17_div_3_Template, 3, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.currentUser.degree);
        }
      }

      function ProfileComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041A\u0430\u0444\u0435\u0434\u0440\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r4.userDepts[0].deptName, " - ", ctx_r4.userDepts[0].userType, "");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-active": a0
        };
      };

      function ProfileComponent_mat_tab_25_a_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_mat_tab_25_a_15_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.setWhichTable(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041C\u043E\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r8.whichTable === 4 ? true : false));
        }
      }

      function ProfileComponent_mat_tab_25_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041E\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_mat_tab_25_div_21_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.from = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0414\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_mat_tab_25_div_21_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r21.to = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.from);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.to);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_header_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2116");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r46.pubId, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_mat_tab_25_div_23_mat_cell_4_div_1_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r46 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.from <= publication_r46.pubYear && ctx_r23.to >= publication_r46.pubYear);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0424\u0430\u0439\u043B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "get_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://nir.iitu.kz/", publication_r49.pubFile, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_mat_tab_25_div_23_mat_cell_7_div_1_Template, 4, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r49 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.from <= publication_r49.pubYear && ctx_r25.to >= publication_r49.pubYear);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0422\u0438\u043F \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r52.pubType, "");
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_mat_tab_25_div_23_mat_cell_10_div_1_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r52 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.from <= publication_r52.pubYear && ctx_r27.to >= publication_r52.pubYear);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u043E\u0430\u0432\u0442\u043E\u0440\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r55.pubCoAuthor, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_mat_tab_25_div_23_mat_cell_13_div_1_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r55 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.from <= publication_r55.pubYear && ctx_r29.to >= publication_r55.pubYear);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r58.pubName, "");
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_mat_tab_25_div_23_mat_cell_16_div_1_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r58 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.from <= publication_r58.pubYear && ctx_r31.to >= publication_r58.pubYear);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_header_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0413\u043E\u0434 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r61.pubYear, "");
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_mat_tab_25_div_23_mat_cell_19_div_1_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r61 = ctx.$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.from <= publication_r61.pubYear && ctx_r33.to >= publication_r61.pubYear);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_header_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0413\u043E\u0440\u043E\u0434 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r64.pubCity, "");
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_mat_tab_25_div_23_mat_cell_22_div_1_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r64 = ctx.$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.from <= publication_r64.pubYear && ctx_r35.to >= publication_r64.pubYear);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_header_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0418\u0437\u0434\u0430\u0442\u0435\u043B\u044C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r67.pubPubName, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_mat_tab_25_div_23_mat_cell_25_div_1_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r67 = ctx.$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.from <= publication_r67.pubYear && ctx_r37.to >= publication_r67.pubYear);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_header_cell_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_28_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", publication_r70.pubPage, " - ", publication_r70.pubEndPage, "");
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_mat_tab_25_div_23_mat_cell_28_div_1_Template, 2, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r70 = ctx.$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.from <= publication_r70.pubYear && ctx_r39.to >= publication_r70.pubYear);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_header_cell_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " URL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r73.pubUrl, "");
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_mat_tab_25_div_23_mat_cell_31_div_1_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r73 = ctx.$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.from <= publication_r73.pubYear && ctx_r41.to >= publication_r73.pubYear);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_header_cell_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DOI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_35_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r76.pubDoi, "");
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_cell_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_mat_tab_25_div_23_mat_cell_35_div_1_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var publication_r76 = ctx.$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.from <= publication_r76.pubYear && ctx_r43.to >= publication_r76.pubYear);
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_header_row_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_23_mat_row_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c1 = function _c1() {
        return [1, 2, 3, 4, 10];
      };

      function ProfileComponent_mat_tab_25_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_mat_tab_25_div_23_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_mat_tab_25_div_23_mat_cell_4_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_mat_tab_25_div_23_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_mat_tab_25_div_23_mat_cell_7_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_mat_tab_25_div_23_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_mat_tab_25_div_23_mat_cell_10_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_mat_tab_25_div_23_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_mat_tab_25_div_23_mat_cell_13_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_mat_tab_25_div_23_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_mat_tab_25_div_23_mat_cell_16_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_mat_tab_25_div_23_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_mat_tab_25_div_23_mat_cell_19_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_mat_tab_25_div_23_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileComponent_mat_tab_25_div_23_mat_cell_22_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_mat_tab_25_div_23_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileComponent_mat_tab_25_div_23_mat_cell_25_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProfileComponent_mat_tab_25_div_23_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileComponent_mat_tab_25_div_23_mat_cell_28_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProfileComponent_mat_tab_25_div_23_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProfileComponent_mat_tab_25_div_23_mat_cell_31_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProfileComponent_mat_tab_25_div_23_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProfileComponent_mat_tab_25_div_23_mat_cell_35_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProfileComponent_mat_tab_25_div_23_mat_header_row_36_Template, 1, 0, "mat-header-row", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProfileComponent_mat_tab_25_div_23_mat_row_37_Template, 1, 0, "mat-row", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-paginator", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_mat_tab_25_div_23_Template_mat_paginator_change_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r80.changeTableList($event);
          })("page", function ProfileComponent_mat_tab_25_div_23_Template_mat_paginator_page_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r82.changeTableList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r10.TeacherPublications);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r10.displayedColumnsPublication);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r10.displayedColumnsPublication);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1))("length", ctx_r10.paginator.length)("pageSize", ctx_r10.paginator.size)("pageIndex", ctx_r10.paginator.page);
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_header_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2116 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r101 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r101.eventId, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0424\u0430\u0439\u043B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r102 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://nir.iitu.kz/", activity_r102.eventFile, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r102.eventName);
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0422\u0438\u043F \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r103 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r103.eventType, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0420\u043E\u043B\u044C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r104 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r104.eventRole, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0430\u0442\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r105 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r105.eventDate, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_header_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r106 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r106.eventName, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_header_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0413\u043E\u0440\u043E\u0434 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r107 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r107.eventCity, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_header_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " URL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r108 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r108.eventUrl, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_header_row_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_24_mat_row_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_mat_tab_25_div_24_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_mat_tab_25_div_24_mat_cell_4_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_mat_tab_25_div_24_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_mat_tab_25_div_24_mat_cell_7_Template, 3, 2, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_mat_tab_25_div_24_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_mat_tab_25_div_24_mat_cell_10_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_mat_tab_25_div_24_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_mat_tab_25_div_24_mat_cell_13_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_mat_tab_25_div_24_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_mat_tab_25_div_24_mat_cell_16_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_mat_tab_25_div_24_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_mat_tab_25_div_24_mat_cell_19_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_mat_tab_25_div_24_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileComponent_mat_tab_25_div_24_mat_cell_22_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_mat_tab_25_div_24_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileComponent_mat_tab_25_div_24_mat_cell_25_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProfileComponent_mat_tab_25_div_24_mat_header_row_26_Template, 1, 0, "mat-header-row", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProfileComponent_mat_tab_25_div_24_mat_row_27_Template, 1, 0, "mat-row", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r11.TeacherEvents);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r11.displayedColumnsEvent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r11.displayedColumnsEvent);
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_header_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2116 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var disset_r124 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", disset_r124.disId, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u044B\u0441\u0448\u0435\u0435 \u0443\u0447\u0435\u0431\u043D\u043E\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var disset_r125 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", disset_r125.disInfo, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0420\u043E\u043B\u044C \u0432 \u0434\u0438\u0441\u0441\u043E\u0432\u0435\u0442\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var disset_r126 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", disset_r126.disRole, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0434\u043E\u043A\u0442\u043E\u0440\u0430\u043D\u0442\u0443\u0440\u044B/ \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var disset_r127 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", disset_r127.specialty, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u0435\u0440\u0438\u043E\u0434 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var disset_r128 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, disset_r128.disStopDate), " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_header_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u043E\u043C\u0435\u0440 \u0438 \u0434\u0430\u0442\u0430 \u043F\u0440\u0438\u043A\u0430\u0437\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var disset_r129 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", disset_r129.ministryOrder, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_header_row_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_25_mat_row_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_mat_tab_25_div_25_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_mat_tab_25_div_25_mat_cell_4_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_mat_tab_25_div_25_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_mat_tab_25_div_25_mat_cell_7_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_mat_tab_25_div_25_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_mat_tab_25_div_25_mat_cell_10_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_mat_tab_25_div_25_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_mat_tab_25_div_25_mat_cell_13_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_mat_tab_25_div_25_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_mat_tab_25_div_25_mat_cell_16_Template, 3, 3, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_mat_tab_25_div_25_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_mat_tab_25_div_25_mat_cell_19_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProfileComponent_mat_tab_25_div_25_mat_header_row_20_Template, 1, 0, "mat-header-row", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_mat_tab_25_div_25_mat_row_21_Template, 1, 0, "mat-row", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r12.TeacherDisSovet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r12.displayedColumnsDisSovet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r12.displayedColumnsDisSovet);
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0422\u0438\u043F \u043F\u0430\u0442\u0435\u043D\u0442\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r157 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patent_r157.ptntType, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u043E\u043C\u0435\u0440 \u043F\u0430\u0442\u0435\u043D\u0442\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r158 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patent_r158.ptntNumber, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u0442\u0440\u0430\u043D\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r159 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patent_r159.ptntCountry, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r160 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patent_r160.ptntIssueDate, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D \u0432 TR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r161 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patent_r161.ptntPublishedTR, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0410\u0432\u0442\u043E\u0440 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r162 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", patent_r162.ptntUser.firstName, " ", patent_r162.ptntUser.lastName, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u0442\u0430\u0442\u0443\u0441 \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r163 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patent_r163.ptntStatus, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0430\u0442\u0430 \u0432\u0432\u043E\u0434\u0430 \u0432 \u0431\u0430\u0437\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r164 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patent_r164.ptntInsertedDate, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_cell_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041A\u0435\u043C \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_28_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", patent_r165.ptntCheckedUser.firstName, " ", patent_r165.ptntCheckedUser.lastName, "");
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_mat_tab_25_div_26_mat_cell_28_p_1_Template, 2, 2, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r165 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", patent_r165.ptntCheckedUser);
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_cell_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " KZ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "get_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r168 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://nir.iitu.kz/", patent_r168.ptntFileUrlKz, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_cell_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RU ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "get_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r169 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://nir.iitu.kz/", patent_r169.ptntFileUrlRu, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_cell_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_cell_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "get_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patent_r170 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://nir.iitu.kz/", patent_r170.ptntFileUrlEn, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_header_row_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_26_mat_row_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_mat_tab_25_div_26_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_mat_tab_25_div_26_mat_cell_4_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_mat_tab_25_div_26_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_mat_tab_25_div_26_mat_cell_7_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_mat_tab_25_div_26_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_mat_tab_25_div_26_mat_cell_10_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_mat_tab_25_div_26_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_mat_tab_25_div_26_mat_cell_13_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_mat_tab_25_div_26_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_mat_tab_25_div_26_mat_cell_16_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_mat_tab_25_div_26_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_mat_tab_25_div_26_mat_cell_19_Template, 2, 2, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_mat_tab_25_div_26_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileComponent_mat_tab_25_div_26_mat_cell_22_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_mat_tab_25_div_26_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileComponent_mat_tab_25_div_26_mat_cell_25_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProfileComponent_mat_tab_25_div_26_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileComponent_mat_tab_25_div_26_mat_cell_28_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProfileComponent_mat_tab_25_div_26_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProfileComponent_mat_tab_25_div_26_mat_cell_31_Template, 4, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProfileComponent_mat_tab_25_div_26_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProfileComponent_mat_tab_25_div_26_mat_cell_34_Template, 4, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProfileComponent_mat_tab_25_div_26_mat_header_cell_36_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProfileComponent_mat_tab_25_div_26_mat_cell_37_Template, 4, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProfileComponent_mat_tab_25_div_26_mat_header_row_38_Template, 1, 0, "mat-header-row", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProfileComponent_mat_tab_25_div_26_mat_row_39_Template, 1, 0, "mat-row", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r13.TeacherPatents);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r13.displayedColumnsPatent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r13.displayedColumnsPatent);
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_header_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var employee_r186 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r186.userId, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0424\u0430\u043C\u0438\u043B\u0438\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var employee_r187 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r187.lastName, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0418\u043C\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var employee_r188 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r188.firstName, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " E-mail ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var employee_r189 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r189.email, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var employee_r190 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r190.description, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_header_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0422\u0438\u043F \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var employee_r191 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r191.userType, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_header_row_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_27_mat_row_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_mat_tab_25_div_27_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_mat_tab_25_div_27_mat_cell_4_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_mat_tab_25_div_27_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_mat_tab_25_div_27_mat_cell_7_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_mat_tab_25_div_27_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_mat_tab_25_div_27_mat_cell_10_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_mat_tab_25_div_27_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_mat_tab_25_div_27_mat_cell_13_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_mat_tab_25_div_27_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_mat_tab_25_div_27_mat_cell_16_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_mat_tab_25_div_27_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_mat_tab_25_div_27_mat_cell_19_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProfileComponent_mat_tab_25_div_27_mat_header_row_20_Template, 1, 0, "mat-header-row", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_mat_tab_25_div_27_mat_row_21_Template, 1, 0, "mat-row", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r14.DepUsers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r14.displayedColumnsDepUsers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r14.displayedColumnsDepUsers);
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0418\u0420\u041D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r225 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r225.scId, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r226 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r226.scName, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0422\u0438\u043F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r227 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r227.scType, " ");
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0420\u0430\u0437\u0434\u0435\u043B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r228 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r228.scPriority);
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r229 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r229.scSubPriority);
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r230 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r230.scSubSubPriority);
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r231 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r231.scExecutor);
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r232 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r232.scCustomer);
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0430\u0443\u0447\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r233 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r233.scDirFullName);
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r234 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r234.scDept);
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0430\u0442\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r235 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, project_r235.scAgrDate));
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r236 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r236.scNum);
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r237 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, project_r237.scStDate));
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0430\u0442\u0430 \u0441\u0434\u0430\u0447\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r238 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, project_r238.scEndDate));
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_cell_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0433\u0440\u0430\u043D\u0442\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_cell_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r239 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r239.scTotalSum);
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_header_row_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_28_mat_row_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_mat_tab_25_div_28_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_mat_tab_25_div_28_mat_cell_4_Template, 2, 1, "mat-cell", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_mat_tab_25_div_28_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_mat_tab_25_div_28_mat_cell_7_Template, 2, 1, "mat-cell", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_mat_tab_25_div_28_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_mat_tab_25_div_28_mat_cell_10_Template, 2, 1, "mat-cell", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_mat_tab_25_div_28_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_mat_tab_25_div_28_mat_cell_13_Template, 3, 1, "mat-cell", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_mat_tab_25_div_28_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_mat_tab_25_div_28_mat_cell_16_Template, 3, 1, "mat-cell", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_mat_tab_25_div_28_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_mat_tab_25_div_28_mat_cell_19_Template, 3, 1, "mat-cell", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_mat_tab_25_div_28_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileComponent_mat_tab_25_div_28_mat_cell_22_Template, 3, 1, "mat-cell", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_mat_tab_25_div_28_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileComponent_mat_tab_25_div_28_mat_cell_25_Template, 3, 1, "mat-cell", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProfileComponent_mat_tab_25_div_28_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileComponent_mat_tab_25_div_28_mat_cell_28_Template, 3, 1, "mat-cell", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProfileComponent_mat_tab_25_div_28_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProfileComponent_mat_tab_25_div_28_mat_cell_31_Template, 3, 1, "mat-cell", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProfileComponent_mat_tab_25_div_28_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProfileComponent_mat_tab_25_div_28_mat_cell_34_Template, 4, 3, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProfileComponent_mat_tab_25_div_28_mat_header_cell_36_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProfileComponent_mat_tab_25_div_28_mat_cell_37_Template, 3, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProfileComponent_mat_tab_25_div_28_mat_header_cell_39_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProfileComponent_mat_tab_25_div_28_mat_cell_40_Template, 4, 3, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProfileComponent_mat_tab_25_div_28_mat_header_cell_42_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ProfileComponent_mat_tab_25_div_28_mat_cell_43_Template, 4, 3, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ProfileComponent_mat_tab_25_div_28_mat_header_cell_45_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProfileComponent_mat_tab_25_div_28_mat_cell_46_Template, 3, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ProfileComponent_mat_tab_25_div_28_mat_header_row_47_Template, 1, 0, "mat-header-row", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ProfileComponent_mat_tab_25_div_28_mat_row_48_Template, 1, 0, "mat-row", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r15.TeacherScienceProjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r15.displayedColumns5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r15.displayedColumns5);
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_header_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2116 \u043F.\u043F.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var course_r263 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r263.courseId);
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0424\u0430\u0439\u043B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "C\u043A\u0430\u0447\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var course_r264 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://nir.iitu.kz/", course_r264.courseFile, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0424\u0418\u041E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var course_r265 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", course_r265.courseUser.firstName, " ", course_r265.courseUser.lastName, " ", course_r265.courseUser.patronymic, "");
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0424\u043E\u0440\u043C\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0438 \u0442\u0435\u043C\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var course_r266 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r266.courseForm);
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0446\u0435\u043D\u0442\u0440 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var course_r267 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r267.courseCenter);
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_header_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u0431\u044A\u0435\u043C \u0447\u0430\u0441\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var course_r268 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r268.courseHours);
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_header_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u0443\u0440\u0441\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var course_r269 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r269.coursePrice);
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_header_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0440\u043E\u043A\u0438 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var course_r270 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", course_r270.startdate, " - ", course_r270.enddate, "");
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_header_cell_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2116 \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430 \u0438 \u0434\u0430\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_cell_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var course_r271 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r271.courseCertificateNumber);
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_header_cell_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0423\u0440\u043E\u0432\u0435\u043D\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_cell_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var course_r272 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r272.courseDegree);
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_header_row_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_29_mat_row_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      function ProfileComponent_mat_tab_25_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_mat_tab_25_div_29_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_mat_tab_25_div_29_mat_cell_4_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_mat_tab_25_div_29_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_mat_tab_25_div_29_mat_cell_7_Template, 3, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_mat_tab_25_div_29_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_mat_tab_25_div_29_mat_cell_10_Template, 2, 3, "mat-cell", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_mat_tab_25_div_29_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_mat_tab_25_div_29_mat_cell_13_Template, 2, 1, "mat-cell", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_mat_tab_25_div_29_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_mat_tab_25_div_29_mat_cell_16_Template, 2, 1, "mat-cell", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_mat_tab_25_div_29_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_mat_tab_25_div_29_mat_cell_19_Template, 2, 1, "mat-cell", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_mat_tab_25_div_29_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileComponent_mat_tab_25_div_29_mat_cell_22_Template, 2, 1, "mat-cell", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_mat_tab_25_div_29_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileComponent_mat_tab_25_div_29_mat_cell_25_Template, 2, 2, "mat-cell", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProfileComponent_mat_tab_25_div_29_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileComponent_mat_tab_25_div_29_mat_cell_28_Template, 2, 1, "mat-cell", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProfileComponent_mat_tab_25_div_29_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProfileComponent_mat_tab_25_div_29_mat_cell_31_Template, 2, 1, "mat-cell", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProfileComponent_mat_tab_25_div_29_mat_header_row_32_Template, 1, 0, "mat-header-row", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProfileComponent_mat_tab_25_div_29_mat_row_33_Template, 1, 0, "mat-row", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r16.TeacherCourses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r16.displayedColumns6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r16.displayedColumns6);
        }
      }

      function ProfileComponent_mat_tab_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041C\u043E\u0438 \u0442\u0430\u0431\u043B\u0438\u0446\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_mat_tab_25_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275);

            var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r274.setWhichTable(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041C\u043E\u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_mat_tab_25_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275);

            var ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r276.setWhichTable(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041C\u043E\u0438 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_mat_tab_25_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275);

            var ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r277.setWhichTable(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041C\u043E\u0438 \u0434\u0438\u0441\u0441\u043E\u0432\u0435\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_mat_tab_25_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275);

            var ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r278.setWhichTable(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041C\u043E\u0438 \u043F\u0430\u0442\u0435\u043D\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_mat_tab_25_a_15_Template, 2, 3, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_mat_tab_25_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275);

            var ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r279.setWhichTable(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041C\u043E\u0438 \u043D\u0430\u0443\u0447\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_mat_tab_25_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275);

            var ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r280.setWhichTable(6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041C\u043E\u0438 \u043A\u0443\u0440\u0441\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_mat_tab_25_div_21_Template, 13, 2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfileComponent_mat_tab_25_div_23_Template, 39, 8, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_mat_tab_25_div_24_Template, 28, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileComponent_mat_tab_25_div_25_Template, 22, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProfileComponent_mat_tab_25_div_26_Template, 40, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProfileComponent_mat_tab_25_div_27_Template, 22, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileComponent_mat_tab_25_div_28_Template, 49, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProfileComponent_mat_tab_25_div_29_Template, 34, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r5.whichTable === 0 ? true : false));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx_r5.whichTable === 1 ? true : false));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx_r5.whichTable === 2 ? true : false));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx_r5.whichTable === 3 ? true : false));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.roles.indexOf("Head_Of_Dept") != 0 - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx_r5.whichTable === 5 ? true : false));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx_r5.whichTable === 6 ? true : false));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.whichTable === 0 ? true : false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.whichTable === 0 ? true : false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.whichTable === 1 ? true : false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.whichTable === 2 ? true : false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.whichTable === 3 ? true : false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.whichTable === 4 ? true : false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.whichTable === 5 ? true : false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.whichTable === 6 ? true : false);
        }
      }

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(http, _api) {
          _classCallCheck(this, ProfileComponent);

          this.http = http;
          this._api = _api;
          this.from = 1900;
          this.to = 2021;
          this.paginator = {
            length: 0,
            size: 1,
            page: 0
          };
          this.TeacherPublications = [];
          this.TeacherEvents = [];
          this.TeacherDisSovet = [];
          this.TeacherPatents = [];
          this.DepUsers = [];
          this.TeacherScienceProjects = [];
          this.TeacherCourses = [];
          this.displayedColumnsPublication = ['pubId', 'File', 'pubType', 'Collaborators', 'Title', 'Year', 'City', 'Publisher', 'Page', 'Url', 'Doi'];
          this.displayedColumnsEvent = ['eventId', 'File', 'eventType', 'eventRole', 'eventTitle', 'eventDate', 'eventCity', 'Url'];
          this.displayedColumnsDisSovet = ['disId', 'university', 'disRole', 'specialty', 'stopDate', 'numberAndDate'];
          this.displayedColumnsPatent = ['ptntId', 'ptntNumber', 'ptntCountry', 'ptntIssueDate', 'ptntPublishedTR', 'ptntOwnerName', 'status', 'insertDate', 'whoCheck', 'kz', 'ru', 'en'];
          this.displayedColumnsDepUsers = ['userId', 'lastName', 'firstName', 'email', 'description', 'userType'];
          this.displayedColumns5 = ['id', 'name', 'type', 'priority', 'subPriority', 'subSubPriority', 'executor', 'customer', 'dirFullName', 'dept', 'agrDate', 'registerNumber', 'startDate', 'endDate', 'totalSum'];
          this.displayedColumns6 = ['courseId', 'File', 'FL', 'form', 'center', 'hours', 'price', 'deadlines', 'certificates', 'level'];
          this.DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
          this.tokenId = this.DecodedToken.jti;
          this.userDepts = [];
          this.roles = [];
          this.whichTable = 0;
        }

        _createClass(ProfileComponent, [{
          key: "getDecodedAccessToken",
          value: function getDecodedAccessToken(token) {
            try {
              return jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token);
            } catch (Error) {
              return null;
            }
          }
        }, {
          key: "onChangePage",
          value: function onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.getTeacherPublications();

            this._api.getUserById(this.tokenId).subscribe(function (res) {
              _this2.currentUser = res;
              _this2.userDepts = res.usersDepts;

              for (var i = 0; i < res.roles.length; i++) {
                _this2.roles.push(res.roles[i].roleName);

                if (res.roles[i].roleName == 'Teacher') {
                  _this2.getTeacherPublications();

                  _this2.getTeacherEvents();

                  _this2.getTeacherDisSovet();

                  _this2.getTeacherPatents();

                  _this2.getTeacherScienceProjects();

                  _this2.getTeacherCourses();
                } else if (res.roles[i].roleName == 'Head_Of_Dept') {
                  _this2.getDepUsers(_this2.userDepts[0].deptId);
                }
              }

              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getTeacherPublications",
          value: function getTeacherPublications() {
            var _this3 = this;

            var query = '?_page=' + this.paginator.page + '&_limit=' + this.paginator.size;

            this._api.getPublicationsPage(query).subscribe(function (res) {
              console.log(res);
              _this3.TeacherPublications = res;

              for (var i = 0; i < res.length; i++) {
                _this3.TeacherPublications[i].pubYear = new Date(res[i].pubYear).getFullYear();
              }

              _this3._api.getPublications().subscribe(function (res2) {
                _this3.paginator.length = res2.length;
              });
            }, function (err) {
              console.log(err);
            }); // this._api.getPublications().subscribe(res => {
            //   console.log(res);
            //   this.TeacherPublications = res;
            // }, err => {
            //   console.log(err);
            // });

          }
        }, {
          key: "changeTableList",
          value: function changeTableList(event) {
            console.log('asda');
            this.paginator.page = event.pageIndex;
            this.paginator.size = event.pageSize;
            this.getTeacherPublications();
          }
        }, {
          key: "getTeacherEvents",
          value: function getTeacherEvents() {
            var _this4 = this;

            this._api.getEvent().subscribe(function (res) {
              console.log(res);
              _this4.TeacherEvents = res;

              for (var i = 0; i < res.length; i++) {
                var year = new Date(res[i].eventDate).getFullYear();
                var month = new Date(res[i].eventDate).getMonth() < 0 ? '0' + (new Date(res[i].eventDate).getMonth() + 1) : new Date(res[i].eventDate).getMonth() + 1;
                var day = new Date(res[i].eventDate).getDate() < 0 ? '0' + new Date(res[i].eventDate).getDate() : new Date(res[i].eventDate).getDate();
                _this4.TeacherEvents[i].eventDate = day + '/' + month + '/' + year;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getTeacherDisSovet",
          value: function getTeacherDisSovet() {
            var _this5 = this;

            this._api.getAllMyDisSovets(this.tokenId).subscribe(function (res) {
              console.log(res);
              _this5.TeacherDisSovet = res;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getTeacherPatents",
          value: function getTeacherPatents() {
            var _this6 = this;

            this._api.getPatent().subscribe(function (res) {
              console.log(res);
              _this6.TeacherPatents = res;

              for (var i = 0; i < res.length; i++) {
                var year = new Date(res[i].ptntInsertedDate).getFullYear();
                var month = new Date(res[i].ptntInsertedDate).getMonth() < 0 ? '0' + (new Date(res[i].ptntInsertedDate).getMonth() + 1) : new Date(res[i].ptntInsertedDate).getMonth() + 1;
                var day = new Date(res[i].ptntInsertedDate).getDate() < 0 ? '0' + new Date(res[i].ptntInsertedDate).getDate() : new Date(res[i].ptntInsertedDate).getDate();
                _this6.TeacherPatents[i].ptntInsertedDate = day + '/' + month + '/' + year;
                var year2 = new Date(res[i].ptntIssueDate).getFullYear();
                var month2 = new Date(res[i].ptntIssueDate).getMonth() < 0 ? '0' + (new Date(res[i].ptntIssueDate).getMonth() + 1) : new Date(res[i].ptntIssueDate).getMonth() + 1;
                var day2 = new Date(res[i].ptntIssueDate).getDate() < 0 ? '0' + new Date(res[i].ptntIssueDate).getDate() : new Date(res[i].ptntIssueDate).getDate();
                _this6.TeacherPatents[i].ptntIssueDate = day2 + '/' + month2 + '/' + year2;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getDepUsers",
          value: function getDepUsers(id) {
            var _this7 = this;

            this._api.getDepUsers(id).subscribe(function (res) {
              console.log(res);

              for (var i = 0; i < res.usersDeptsEntities.length; i++) {
                var tempUser = {
                  userId: res.usersDeptsEntities[i].primaryKey.userEntity.userId,
                  firstName: res.usersDeptsEntities[i].primaryKey.userEntity.firstName,
                  lastName: res.usersDeptsEntities[i].primaryKey.userEntity.lastName,
                  email: res.usersDeptsEntities[i].primaryKey.userEntity.email,
                  description: res.usersDeptsEntities[i].primaryKey.userEntity.description,
                  userType: res.usersDeptsEntities[i].userType
                };

                _this7.DepUsers.push(tempUser);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getTeacherScienceProjects",
          value: function getTeacherScienceProjects() {
            var _this8 = this;

            this._api.getScienceProject().subscribe(function (res) {
              console.log(res);
              _this8.TeacherScienceProjects = res;
            }, function (error1) {
              console.log(error1);
            });
          }
        }, {
          key: "getTeacherCourses",
          value: function getTeacherCourses() {
            var _this9 = this;

            this._api.getCourses().subscribe(function (res) {
              console.log(res);
              _this9.TeacherCourses = res;

              for (var i = 0; i < res.length; i++) {
                var startYear = new Date(res[i].startdate).getFullYear();
                var startmMonth = new Date(res[i].startdate).getMonth() < 0 ? '0' + (new Date(res[i].startdate).getMonth() + 1) : new Date(res[i].startdate).getMonth() + 1;
                var startDay = new Date(res[i].startdate).getDate() < 0 ? '0' + new Date(res[i].startdate).getDate() : new Date(res[i].startdate).getDate();
                _this9.TeacherCourses[i].startdate = startDay + '/' + startmMonth + '/' + startYear;
                var endYear = new Date(res[i].enddate).getFullYear();
                var endMonth = new Date(res[i].enddate).getMonth() < 0 ? '0' + (new Date(res[i].enddate).getMonth() + 1) : new Date(res[i].enddate).getMonth() + 1;
                var endDay = new Date(res[i].enddate).getDate() < 0 ? '0' + new Date(res[i].enddate).getDate() : new Date(res[i].enddate).getDate();
                _this9.TeacherCourses[i].enddate = endDay + '/' + endMonth + '/' + endYear;
              }
            }, function (err) {
              console.log(err);
            });
          } // tslint:disable-next-line:variable-name

        }, {
          key: "setWhichTable",
          value: function setWhichTable(number) {
            if (number !== this.whichTable) {
              this.whichTable = number;
            }
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_control_service__WEBPACK_IMPORTED_MODULE_2__["DataControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 28,
        vars: 6,
        consts: [[1, "content"], ["mat-align-tabs", "center"], ["label", "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"], [1, "Inner"], [2, "width", "33%"], [1, "Img"], [2, "align-items", "center", "display", "flex"], ["style", "width: 100%; display: flex; justify-content: space-between", 4, "ngIf"], ["style", "width: 100%;", 4, "ngIf"], [1, "AddInf"], [1, "left-side"], [2, "margin-bottom", "0"], ["style", "font-weight: bold", 4, "ngIf"], [4, "ngIf"], ["routerLink", "./password", 1, "passwd-btn", "button"], [1, "right-side"], ["class", "", 4, "ngIf"], ["label", "\u041C\u043E\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C", 4, "ngIf"], ["id", "projectName"], [2, "width", "100%", "display", "flex", "justify-content", "space-between"], ["routerLink", "./settings", 2, "cursor", "pointer"], [2, "width", "100%"], [2, "font-weight", "bold"], [2, "font-weight", "bold", "margin-bottom", "0"], [4, "ngFor", "ngForOf"], [1, ""], ["label", "\u041C\u043E\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C"], [1, "managing"], [1, "my-tables"], [1, "nav-head"], [1, "nav-link"], [3, "ngClass", "click"], [3, "ngClass", "click", 4, "ngIf"], [1, "table"], ["class", "sort-div", 4, "ngIf"], [1, "main"], [1, "sort-div"], [1, "form-div"], [1, "label-div"], [1, "input-div"], ["type", "number", 3, "ngModel", "ngModelChange"], [1, "", 3, "dataSource"], ["matColumnDef", "pubId"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "File"], ["matColumnDef", "pubType"], ["matColumnDef", "Collaborators"], ["matColumnDef", "Title"], ["matColumnDef", "Year"], ["matColumnDef", "City"], ["matColumnDef", "Publisher"], ["matColumnDef", "Page"], ["matColumnDef", "Url"], ["matColumnDef", "Doi"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "length", "pageSize", "pageIndex", "change", "page"], ["download", "", 3, "href"], ["color", "primary"], ["matColumnDef", "eventId"], ["matColumnDef", "eventType"], ["matColumnDef", "eventRole"], ["matColumnDef", "eventDate"], ["matColumnDef", "eventTitle"], ["matColumnDef", "eventCity"], ["matColumnDef", "disId"], ["matColumnDef", "university"], ["matColumnDef", "disRole"], ["matColumnDef", "specialty"], ["matColumnDef", "stopDate"], ["matColumnDef", "numberAndDate"], ["matColumnDef", "ptntId"], ["matColumnDef", "ptntNumber"], ["matColumnDef", "ptntCountry"], ["matColumnDef", "ptntIssueDate"], ["matColumnDef", "ptntPublishedTR"], ["matColumnDef", "ptntOwnerName"], ["matColumnDef", "status"], ["matColumnDef", "insertDate"], ["matColumnDef", "whoCheck"], ["matColumnDef", "kz"], ["matColumnDef", "ru"], ["matColumnDef", "en"], ["matColumnDef", "userId"], ["matColumnDef", "lastName"], ["matColumnDef", "firstName"], ["matColumnDef", "email"], ["matColumnDef", "description"], ["matColumnDef", "userType"], ["matColumnDef", "id"], ["class", "Razdely", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "type"], ["matColumnDef", "priority"], ["class", "Razdel", 4, "matHeaderCellDef"], ["class", "Razdel Razdely", 4, "matCellDef"], ["matColumnDef", "subPriority"], ["matColumnDef", "subSubPriority"], ["matColumnDef", "executor"], ["matColumnDef", "customer"], ["matColumnDef", "dirFullName"], ["matColumnDef", "dept"], ["matColumnDef", "agrDate"], ["matColumnDef", "registerNumber"], ["matColumnDef", "startDate"], ["matColumnDef", "endDate"], ["matColumnDef", "totalSum"], [1, "Razdely"], [1, "Razdel"], [1, "Razdel", "Razdely"], ["matColumnDef", "courseId"], ["matColumnDef", "FL"], ["style", "color: darkred!important;", 4, "matCellDef"], ["matColumnDef", "form"], ["matColumnDef", "center"], ["matColumnDef", "hours"], ["matColumnDef", "price"], ["matColumnDef", "deadlines"], ["matColumnDef", "certificates"], ["matColumnDef", "level"], [2, "color", "darkred!important"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_div_8_Template, 5, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_9_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_h3_16_Template, 2, 0, "h3", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileComponent_div_17_Template, 4, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041F\u0430\u0440\u043E\u043B\u044C ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "keyboard_arrow_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_div_24_Template, 5, 2, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileComponent_mat_tab_25_Template, 31, 27, "mat-tab", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "2: oianset osietnoasiedj oino aosietnoin oasiento oaseitnoind oisentoasintoon oisentoiansetoino oiasentoin oi asetin doinae oidnoajosi doinalketn oiwdnota onioiante oaidno");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roles.indexOf("Head_Of_Dept") != 0 - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDepts[0]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roles.indexOf("Teacher") != 0 - 1);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: [".content[_ngcontent-%COMP%]{\r\n  margin: 6rem;\r\n}\r\n .mat-tab-label,  .mat-tab-label-active{\r\n  font-weight: bolder;\r\n  width: 90%;\r\n}\r\n.Inner[_ngcontent-%COMP%]{\r\n  margin: 5rem 2rem;\r\n  display: flex;\r\n  margin-bottom: 2rem!important;\r\n\r\n}\r\n.Img[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  background-image: url('unnamed.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  width: 249px;\r\n  height: 214px;\r\n  background-size: cover;\r\n  -webkit-clip-path: ellipse();\r\n          clip-path: ellipse();\r\n}\r\n.AddInf[_ngcontent-%COMP%]{\r\n  margin: 2rem;\r\n  display: flex;\r\n}\r\n.left-side[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  margin: 2rem;\r\n}\r\n.passwd-btn[_ngcontent-%COMP%]{\r\n  font-weight: bolder;\r\n  cursor: pointer;\r\n  display: inline;\r\n}\r\n.passwd-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  margin: 2px 8px;\r\n}\r\n.right-side[_ngcontent-%COMP%]{\r\n  margin: 7.4rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.managing[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.my-tables[_ngcontent-%COMP%]{\r\n  width: 25%;\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n.nav-head[_ngcontent-%COMP%]{\r\n  margin: 1.5rem 1rem;\r\n}\r\n.nav-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: .5rem;\r\n  font-weight: 600;\r\n  color: #827878;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n  margin: 1.5rem 1rem;\r\n}\r\n.nav-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  display: block;\r\n  text-decoration: none;\r\n  color: black;\r\n  margin: .5rem;\r\n  cursor:pointer\r\n\r\n}\r\n.is-active[_ngcontent-%COMP%] {\r\n  color: #DC5441 !important;\r\n}\r\n.sort-div[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n.form-div[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  margin: 2rem;\r\n  display: flex;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n  font-family: Muli, sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  color: #A8A4A4;\r\n}\r\ninput[_ngcontent-%COMP%]:not(.btn){\r\n  background: #FDFDFD;\r\n  border: 1px solid #0CB5A0;\r\n  box-sizing: border-box;\r\n  border-radius: 8px;\r\n  padding: .7rem 1rem;\r\n  font-family: Ubuntu, sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n.label-div[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 30%;\r\n}\r\n.input-div[_ngcontent-%COMP%] {\r\n  margin-left: 2rem;\r\n  width: 70%;\r\n}\r\n.mat-column-pubId[_ngcontent-%COMP%] {\r\n  flex: 2rem;\r\n  max-width: 3rem;\r\n}\r\n.mat-column-eventId[_ngcontent-%COMP%] {\r\n  flex: 1rem;\r\n  max-width: 3rem;\r\n}\r\n.mat-column-disId[_ngcontent-%COMP%] {\r\n  flex: 1rem;\r\n  max-width: 3rem;\r\n}\r\n.mat-column-courseId[_ngcontent-%COMP%] {\r\n  flex: 1rem;\r\n  max-width: 3rem;\r\n}\r\n.mat-column-Collaborators[_ngcontent-%COMP%] {\r\n  flex: 6rem;\r\n  max-width: 7rem;\r\n}\r\n.mat-column-university[_ngcontent-%COMP%] {\r\n  flex: 9rem;\r\n  max-width: 9rem;\r\n}\r\n.mat-column-File[_ngcontent-%COMP%] {\r\n  flex: 5rem;\r\n  max-width: 5rem;\r\n}\r\n.mat-column-Year[_ngcontent-%COMP%] {\r\n  flex: 3rem;\r\n  max-width: 4rem;\r\n}\r\n.mat-column-Role[_ngcontent-%COMP%] {\r\n  flex: 6rem;\r\n  max-width: 6.5rem;\r\n}\r\n.mat-column-Title[_ngcontent-%COMP%] {\r\n  flex: 6rem;\r\n  max-width: 6rem;\r\n}\r\n.mat-column-eventDate[_ngcontent-%COMP%] {\r\n  flex: 6rem;\r\n  max-width: 6rem;\r\n}\r\n.mat-column-eventCity[_ngcontent-%COMP%] {\r\n  flex: 5rem;\r\n  max-width: 5rem;\r\n}\r\n.mat-column-eventType[_ngcontent-%COMP%] {\r\n  flex: 10rem;\r\n  max-width: 10rem;\r\n}\r\n.mat-column-pubType[_ngcontent-%COMP%] {\r\n  flex: 9rem;\r\n  max-width: 9rem;\r\n}\r\n.mat-column-eventRole[_ngcontent-%COMP%] {\r\n  flex: 8rem;\r\n  max-width: 8rem;\r\n}\r\n.mat-column-eventTitle[_ngcontent-%COMP%] {\r\n  flex: 7rem;\r\n  max-width: 7rem;\r\n}\r\n.mat-column-disRole[_ngcontent-%COMP%] {\r\n  flex: 8rem;\r\n  max-width: 8rem;\r\n}\r\n.mat-column-whoCheck[_ngcontent-%COMP%] {\r\n  flex: 8rem;\r\n  max-width: 8rem;\r\n}\r\n.mat-column-insertDate[_ngcontent-%COMP%] {\r\n  flex: 7rem;\r\n  max-width: 7rem;\r\n}\r\n.mat-column-status[_ngcontent-%COMP%] {\r\n  flex: 7rem;\r\n  max-width: 7rem;\r\n}\r\n.mat-column-ptntOwnerName[_ngcontent-%COMP%] {\r\n  flex: 7rem;\r\n  max-width: 7rem;\r\n}\r\n.mat-column-ptntPublishedTR[_ngcontent-%COMP%] {\r\n  flex: 5rem;\r\n  max-width: 5rem;\r\n}\r\n.mat-column-ptntIssueDate[_ngcontent-%COMP%] {\r\n  flex: 5rem;\r\n  max-width: 5rem;\r\n}\r\n.mat-column-ptntCountry[_ngcontent-%COMP%] {\r\n  flex: 6rem;\r\n  max-width: 6rem;\r\n}\r\n.mat-column-center[_ngcontent-%COMP%] {\r\n  flex: 11rem;\r\n  max-width: 11rem;\r\n}\r\n.mat-column-hours[_ngcontent-%COMP%] {\r\n  flex: 3rem;\r\n  max-width: 3rem;\r\n}\r\n.mat-column-price[_ngcontent-%COMP%] {\r\n  flex: 5rem;\r\n  max-width: 5rem;\r\n}\r\n.mat-column-certificates[_ngcontent-%COMP%] {\r\n  flex: 5rem;\r\n  max-width: 5rem;\r\n}\r\n.mat-column-id[_ngcontent-%COMP%] {\r\n  flex: 5rem;\r\n  max-width: 2rem;\r\n}\r\n.mat-column-name[_ngcontent-%COMP%] {\r\n  flex: 5rem;\r\n  max-width: 4rem;\r\n  margin-right: 1%;\r\n}\r\n.mat-column-type[_ngcontent-%COMP%] {\r\n  flex: 2rem;\r\n  max-width: 2rem;\r\n  margin-right: 1%;\r\n}\r\n.mat-column-priority[_ngcontent-%COMP%] {\r\n  flex: 2rem;\r\n  max-width: 3rem;\r\n  margin-right: 1%;\r\n}\r\n.mat-column-subPriority[_ngcontent-%COMP%] {\r\n  flex: 2rem;\r\n  max-width: 4rem;\r\n  margin-right: 1%;\r\n}\r\n.mat-column-subSubPriority[_ngcontent-%COMP%] {\r\n  flex: 2rem;\r\n  max-width: 4rem;\r\n  margin-right: 1%;\r\n}\r\n.mat-column-executor[_ngcontent-%COMP%] {\r\n  flex: 2rem;\r\n  max-width: 4rem;\r\n  margin-right: 1%;\r\n}\r\n.mat-column-customer[_ngcontent-%COMP%] {\r\n  flex: 2rem;\r\n  max-width: 4rem;\r\n  margin-right: 1%;\r\n}\r\n.mat-column-dirFullName[_ngcontent-%COMP%] {\r\n  flex: 2rem;\r\n  max-width: 4rem;\r\n  margin-right: 1%;\r\n}\r\n.mat-column-dept[_ngcontent-%COMP%] {\r\n  flex: 2rem;\r\n  max-width: 4rem;\r\n  margin-right: 1%;\r\n}\r\n.mat-column-agrDate[_ngcontent-%COMP%] {\r\n  flex: 2rem;\r\n  max-width: 3rem;\r\n  margin-right: 1%;\r\n}\r\n.mat-column-registerNumber[_ngcontent-%COMP%] {\r\n  flex: 2rem;\r\n  max-width: 5rem;\r\n  margin-right: 1%;\r\n}\r\nmat-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n#projectName[_ngcontent-%COMP%] {\r\n  width: 10px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n#projectName[_ngcontent-%COMP%]:hover{\r\n  overflow: visible;\r\n  white-space: normal;\r\n  width: auto;\r\n  position: absolute;\r\n  background-color:#FFF;\r\n}\r\n.Razdely[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n  width: 76.5px !important;\r\n  height: 200px;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n}\r\n.Razdely[_ngcontent-%COMP%]:hover {\r\n  overflow: visible !important;\r\n  white-space: pre-line;\r\n  background: #FFFFFF;\r\n  z-index: 5;\r\n}\r\n.Razdely[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{\r\n  overflow: visible !important;\r\n  white-space: pre-line;\r\n  background: #FFFFFF;\r\n  z-index: 5;\r\n  box-shadow: 0 0 10px rgba(0,0,0,0.5);;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hvbGUtcGFnZS9tYWluL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDZCQUE2Qjs7QUFFL0I7QUFDQTtFQUNFLHNNQUFzTTtFQUN0TSx1RUFBdUU7RUFDdkUsb0NBQThEO0VBQzlELDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYjs7QUFFRjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvd2hvbGUtcGFnZS9tYWluL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgbWFyZ2luOiA2cmVtO1xyXG59XHJcbi9kZWVwLy5tYXQtdGFiLWxhYmVsLCAvZGVlcC8ubWF0LXRhYi1sYWJlbC1hY3RpdmV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbi5Jbm5lcntcclxuICBtYXJnaW46IDVyZW0gMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW0haW1wb3J0YW50O1xyXG5cclxufVxyXG4uSW1ne1xyXG4gIC8qYmFja2dyb3VuZDogdXJsKCdodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9waG90b3MvbmVvbi1oZWFydC1vbi1icmljay13YWxsLXBpY3R1cmUtaWQ4NDgyMzU5MjY/az02Jm09ODQ4MjM1OTI2JnM9NjEyeDYxMiZ3PTAmaD1yZXNPaDJRdDBfd1lJT29MR2Nibkd0dV9yWHc1RGtwX0lzcXJlcld6V0NRPScpIG5vLXJlcGVhdCBjZW50ZXI7Ki9cclxuICAvKmJhY2tncm91bmQ6IHVybCgnLi9zcmMvYXNzZXRzL2ltYWdlcy91bm5hbWVkLmpwZycpIG5vLXJlcGVhdCBjZW50ZXI7Ki9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3VubmFtZWQuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyNDlweDtcclxuICBoZWlnaHQ6IDIxNHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgY2xpcC1wYXRoOiBlbGxpcHNlKCk7XHJcbn1cclxuLkFkZEluZntcclxuICBtYXJnaW46IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubGVmdC1zaWRlIGRpdntcclxuICBtYXJnaW46IDJyZW07XHJcbn1cclxuLnBhc3N3ZC1idG57XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5wYXNzd2QtYnRuIG1hdC1pY29ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDJweCA4cHg7XHJcbn1cclxuLnJpZ2h0LXNpZGV7XHJcbiAgbWFyZ2luOiA3LjRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tYW5hZ2luZ3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5teS10YWJsZXN7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG4udGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5hdi1oZWFke1xyXG4gIG1hcmdpbjogMS41cmVtIDFyZW07XHJcbn1cclxuLm5hdi1oZWFkIGgyIHtcclxuICBtYXJnaW46IC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM4Mjc4Nzg7XHJcbn1cclxuLm5hdi1saW5rIHtcclxuICBtYXJnaW46IDEuNXJlbSAxcmVtO1xyXG59XHJcbi5uYXYtbGluayBhe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luOiAuNXJlbTtcclxuICBjdXJzb3I6cG9pbnRlclxyXG5cclxufVxyXG4uaXMtYWN0aXZlIHtcclxuICBjb2xvcjogI0RDNTQ0MSAhaW1wb3J0YW50O1xyXG59XHJcbi5zb3J0LWRpdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5mb3JtLWRpdntcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmxhYmVse1xyXG4gIGZvbnQtZmFtaWx5OiBNdWxpLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGNvbG9yOiAjQThBNEE0O1xyXG59XHJcbmlucHV0Om5vdCguYnRuKXtcclxuICBiYWNrZ3JvdW5kOiAjRkRGREZEO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwQ0I1QTA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogLjdyZW0gMXJlbTtcclxuICBmb250LWZhbWlseTogVWJ1bnR1LCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ubGFiZWwtZGl2IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uaW5wdXQtZGl2IHtcclxuICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1wdWJJZCB7XHJcbiAgZmxleDogMnJlbTtcclxuICBtYXgtd2lkdGg6IDNyZW07XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWV2ZW50SWQge1xyXG4gIGZsZXg6IDFyZW07XHJcbiAgbWF4LXdpZHRoOiAzcmVtO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kaXNJZCB7XHJcbiAgZmxleDogMXJlbTtcclxuICBtYXgtd2lkdGg6IDNyZW07XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWNvdXJzZUlkIHtcclxuICBmbGV4OiAxcmVtO1xyXG4gIG1heC13aWR0aDogM3JlbTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tQ29sbGFib3JhdG9ycyB7XHJcbiAgZmxleDogNnJlbTtcclxuICBtYXgtd2lkdGg6IDdyZW07XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXVuaXZlcnNpdHkge1xyXG4gIGZsZXg6IDlyZW07XHJcbiAgbWF4LXdpZHRoOiA5cmVtO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1GaWxlIHtcclxuICBmbGV4OiA1cmVtO1xyXG4gIG1heC13aWR0aDogNXJlbTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tWWVhciB7XHJcbiAgZmxleDogM3JlbTtcclxuICBtYXgtd2lkdGg6IDRyZW07XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLVJvbGUge1xyXG4gIGZsZXg6IDZyZW07XHJcbiAgbWF4LXdpZHRoOiA2LjVyZW07XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLVRpdGxlIHtcclxuICBmbGV4OiA2cmVtO1xyXG4gIG1heC13aWR0aDogNnJlbTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZXZlbnREYXRlIHtcclxuICBmbGV4OiA2cmVtO1xyXG4gIG1heC13aWR0aDogNnJlbTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZXZlbnRDaXR5IHtcclxuICBmbGV4OiA1cmVtO1xyXG4gIG1heC13aWR0aDogNXJlbTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZXZlbnRUeXBlIHtcclxuICBmbGV4OiAxMHJlbTtcclxuICBtYXgtd2lkdGg6IDEwcmVtO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1wdWJUeXBlIHtcclxuICBmbGV4OiA5cmVtO1xyXG4gIG1heC13aWR0aDogOXJlbTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZXZlbnRSb2xlIHtcclxuICBmbGV4OiA4cmVtO1xyXG4gIG1heC13aWR0aDogOHJlbTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZXZlbnRUaXRsZSB7XHJcbiAgZmxleDogN3JlbTtcclxuICBtYXgtd2lkdGg6IDdyZW07XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWRpc1JvbGUge1xyXG4gIGZsZXg6IDhyZW07XHJcbiAgbWF4LXdpZHRoOiA4cmVtO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi13aG9DaGVjayB7XHJcbiAgZmxleDogOHJlbTtcclxuICBtYXgtd2lkdGg6IDhyZW07XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWluc2VydERhdGUge1xyXG4gIGZsZXg6IDdyZW07XHJcbiAgbWF4LXdpZHRoOiA3cmVtO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zdGF0dXMge1xyXG4gIGZsZXg6IDdyZW07XHJcbiAgbWF4LXdpZHRoOiA3cmVtO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1wdG50T3duZXJOYW1lIHtcclxuICBmbGV4OiA3cmVtO1xyXG4gIG1heC13aWR0aDogN3JlbTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tcHRudFB1Ymxpc2hlZFRSIHtcclxuICBmbGV4OiA1cmVtO1xyXG4gIG1heC13aWR0aDogNXJlbTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tcHRudElzc3VlRGF0ZSB7XHJcbiAgZmxleDogNXJlbTtcclxuICBtYXgtd2lkdGg6IDVyZW07XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXB0bnRDb3VudHJ5IHtcclxuICBmbGV4OiA2cmVtO1xyXG4gIG1heC13aWR0aDogNnJlbTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tY2VudGVyIHtcclxuICBmbGV4OiAxMXJlbTtcclxuICBtYXgtd2lkdGg6IDExcmVtO1xyXG59XHJcbi5tYXQtY29sdW1uLWhvdXJzIHtcclxuICBmbGV4OiAzcmVtO1xyXG4gIG1heC13aWR0aDogM3JlbTtcclxufVxyXG4ubWF0LWNvbHVtbi1wcmljZSB7XHJcbiAgZmxleDogNXJlbTtcclxuICBtYXgtd2lkdGg6IDVyZW07XHJcbn1cclxuLm1hdC1jb2x1bW4tY2VydGlmaWNhdGVzIHtcclxuICBmbGV4OiA1cmVtO1xyXG4gIG1heC13aWR0aDogNXJlbTtcclxufVxyXG4ubWF0LWNvbHVtbi1pZCB7XHJcbiAgZmxleDogNXJlbTtcclxuICBtYXgtd2lkdGg6IDJyZW07XHJcbn1cclxuLm1hdC1jb2x1bW4tbmFtZSB7XHJcbiAgZmxleDogNXJlbTtcclxuICBtYXgtd2lkdGg6IDRyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG4ubWF0LWNvbHVtbi10eXBlIHtcclxuICBmbGV4OiAycmVtO1xyXG4gIG1heC13aWR0aDogMnJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcbi5tYXQtY29sdW1uLXByaW9yaXR5IHtcclxuICBmbGV4OiAycmVtO1xyXG4gIG1heC13aWR0aDogM3JlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcbi5tYXQtY29sdW1uLXN1YlByaW9yaXR5IHtcclxuICBmbGV4OiAycmVtO1xyXG4gIG1heC13aWR0aDogNHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcbi5tYXQtY29sdW1uLXN1YlN1YlByaW9yaXR5IHtcclxuICBmbGV4OiAycmVtO1xyXG4gIG1heC13aWR0aDogNHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcbi5tYXQtY29sdW1uLWV4ZWN1dG9yIHtcclxuICBmbGV4OiAycmVtO1xyXG4gIG1heC13aWR0aDogNHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcbi5tYXQtY29sdW1uLWN1c3RvbWVyIHtcclxuICBmbGV4OiAycmVtO1xyXG4gIG1heC13aWR0aDogNHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcbi5tYXQtY29sdW1uLWRpckZ1bGxOYW1lIHtcclxuICBmbGV4OiAycmVtO1xyXG4gIG1heC13aWR0aDogNHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcbi5tYXQtY29sdW1uLWRlcHQge1xyXG4gIGZsZXg6IDJyZW07XHJcbiAgbWF4LXdpZHRoOiA0cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbn1cclxuLm1hdC1jb2x1bW4tYWdyRGF0ZSB7XHJcbiAgZmxleDogMnJlbTtcclxuICBtYXgtd2lkdGg6IDNyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG4ubWF0LWNvbHVtbi1yZWdpc3Rlck51bWJlciB7XHJcbiAgZmxleDogMnJlbTtcclxuICBtYXgtd2lkdGg6IDVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG5tYXQtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNwcm9qZWN0TmFtZSB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbiNwcm9qZWN0TmFtZTpob3ZlcntcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkY7XHJcbn1cclxuLlJhemRlbHkge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDc2LjVweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5SYXpkZWx5OmhvdmVyIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuLlJhemRlbHk6aG92ZXIgcHtcclxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjUpOztcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
          }]
        }], function () {
          return [{
            type: _services_data_control_service__WEBPACK_IMPORTED_MODULE_2__["DataControlService"]
          }, {
            type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/whole-page/main/profile/settings/settings.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/whole-page/main/profile/settings/settings.component.ts ***!
      \************************************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function srcAppWholePageMainProfileSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jwt-decode */
      "./node_modules/jwt-decode/lib/index.js");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../api/api.service */
      "./src/app/api/api.service.ts");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent(_api, fb, _snackBar) {
          _classCallCheck(this, SettingsComponent);

          this._api = _api;
          this.fb = fb;
          this._snackBar = _snackBar;
          this.DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
          this.tokenId = this.DecodedToken.jti;
        }

        _createClass(SettingsComponent, [{
          key: "getDecodedAccessToken",
          value: function getDecodedAccessToken(token) {
            try {
              return jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
            } catch (Error) {
              return null;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.updateProfileForm = this.fb.group({
              firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              patronymic: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });

            this._api.getUserById(this.tokenId).subscribe(function (res) {
              console.log(res);
              _this10.updateProfileForm = _this10.fb.group({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                patronymic: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res.patronymic, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              });
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(message, action) {
            this._api.updateProfile(this.updateProfileForm.value).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });

            this._snackBar.open(message, action, {
              duration: 2000
            });
          }
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SettingsComponent,
        selectors: [["app-settings"]],
        decls: 40,
        vars: 1,
        consts: [[2, "min-height", "100%"], [2, "margin", "2rem"], ["routerLink", "./..", 2, "border", "0", "background", "none", "font-size", "16px"], [2, "display", "inline", "color", "gray"], [1, "content"], [2, "width", "70%"], [3, "formGroup"], [1, "forma"], ["placeholder", "First Name", "type", "text", "matInput", "", "required", "", "formControlName", "firstName"], ["placeholder", "Last Name", "type", "text", "matInput", "", "required", "", "formControlName", "lastName"], ["placeholder", "Patronymic", "type", "text", "matInput", "", "required", "", "formControlName", "patronymic"], ["placeholder", "E-mail", "type", "text", "matInput", "", "required", "", "formControlName", "email"], [2, "text-align", "center", "margin", "5%"], ["color", "primary", "routerLink", "/..", "type", "submit", "mat-stroked-button", "", 3, "click"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F > ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0418\u043C\u044F: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "First Name Required!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last Name Required!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Patronymic Required!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "E-mail: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "E-mail Required!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_38_listener() {
              return ctx.updateProfile("Successfully changed", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateProfileForm);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: [".content[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 8rem;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n  font-family: Muli, sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 20px;\r\n  color: #A8A4A4;\r\n    width: 200px;\r\n    margin-right: 5%;\r\n}\r\ninput[_ngcontent-%COMP%]:not(.btn){\r\n  background: #FDFDFD;\r\n  \r\n  box-sizing: border-box;\r\n  border-radius: 8px;\r\n  padding: .5rem 1rem;\r\n  font-family: Ubuntu, sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 20px;\r\n  width: 100%;\r\n}\r\n.form-div[_ngcontent-%COMP%]{\r\n  margin: 2rem;\r\n  display: flex;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.input-div[_ngcontent-%COMP%]{\r\n  margin-left: 2rem;\r\n  width: 70%;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n  background: #0CB5A0;\r\n  border: 0;\r\n  border-radius: 8px;\r\n  margin-top: 5rem;\r\n  color: white;\r\n  font-family: Ubuntu, sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 20px;\r\n  padding: .8rem 1.2rem;\r\n}\r\nmat-form-field[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n}\r\n.forma[_ngcontent-%COMP%]{\r\n    horiz-align: right;\r\n    text-align: right;\r\n    width: 55%;\r\n    margin-left: 15%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hvbGUtcGFnZS9tYWluL3Byb2ZpbGUvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBLGNBQWM7QUFDZCx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLCtCQUErQjtBQUMvQixnQkFBZ0I7QUFDaEIsSUFBSTtBQUNKO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3dob2xlLXBhZ2UvbWFpbi9wcm9maWxlL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogOHJlbTtcclxufVxyXG5sYWJlbHtcclxuICBmb250LWZhbWlseTogTXVsaSwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNBOEE0QTQ7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbmlucHV0Om5vdCguYnRuKXtcclxuICBiYWNrZ3JvdW5kOiAjRkRGREZEO1xyXG4gIC8qYm9yZGVyOiAxcHggc29saWQgIzBDQjVBMDsqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFVidW50dSwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZvcm0tZGl2e1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi8qLmxhYmVsLWRpdnsqL1xyXG4vKiAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xyXG4vKiAgZGlzcGxheTogZmxleDsqL1xyXG4vKiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsqL1xyXG4vKiAgd2lkdGg6IDMwJTsqL1xyXG4vKn0qL1xyXG4uaW5wdXQtZGl2e1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuLmJ0bntcclxuICBiYWNrZ3JvdW5kOiAjMENCNUEwO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFVidW50dSwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogLjhyZW0gMS4ycmVtO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG4uZm9ybWF7XHJcbiAgICBob3Jpei1hbGlnbjogcmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css']
          }]
        }], function () {
          return [{
            type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/whole-page/teacher/event-upload/event-upload.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/whole-page/teacher/event-upload/event-upload.component.ts ***!
      \***************************************************************************/

    /*! exports provided: EventUploadComponent */

    /***/
    function srcAppWholePageTeacherEventUploadEventUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventUploadComponent", function () {
        return EventUploadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/fesm2015/dialog.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");

      var EventUploadComponent = /*#__PURE__*/function () {
        function EventUploadComponent() {
          _classCallCheck(this, EventUploadComponent);
        }

        _createClass(EventUploadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onEventFileSelected",
          value: function onEventFileSelected(event) {
            this.selectedEventFile = event.target.files[0];
            console.log(this.selectedEventFile);
          }
        }]);

        return EventUploadComponent;
      }();

      EventUploadComponent.ɵfac = function EventUploadComponent_Factory(t) {
        return new (t || EventUploadComponent)();
      };

      EventUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EventUploadComponent,
        selectors: [["app-event-upload"]],
        decls: 13,
        vars: 2,
        consts: [["mat-dialog-title", ""], ["enctype", "multipart/form-data"], ["for", "Pubfile"], ["type", "file", "id", "Pubfile", 3, "change"], ["mat-button", "", "mat-dialog-close", "", 3, "disabled", "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", "false"]],
        template: function EventUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventUploadComponent_Template_input_change_7_listener($event) {
              return ctx.onEventFileSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedEventFile)("mat-dialog-close", ctx.selectedEventFile);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dob2xlLXBhZ2UvdGVhY2hlci9ldmVudC11cGxvYWQvZXZlbnQtdXBsb2FkLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventUploadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-event-upload',
            templateUrl: './event-upload.component.html',
            styleUrls: ['./event-upload.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/whole-page/teacher/patent-upload/patent-upload.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/whole-page/teacher/patent-upload/patent-upload.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: PatentUploadComponent */

    /***/
    function srcAppWholePageTeacherPatentUploadPatentUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatentUploadComponent", function () {
        return PatentUploadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/fesm2015/dialog.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");

      var _c0 = function _c0(a0, a1, a2) {
        return [a0, a1, a2];
      };

      var PatentUploadComponent = /*#__PURE__*/function () {
        function PatentUploadComponent() {
          _classCallCheck(this, PatentUploadComponent);
        }

        _createClass(PatentUploadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onRUPatentFileChange",
          value: function onRUPatentFileChange(event) {
            console.log(event);

            if (event.target.files.length > 0) {
              var file = event.target.files[0];
            }

            this.PatentFileRu = event.target.files[0];
          }
        }, {
          key: "onKZPatentFileChange",
          value: function onKZPatentFileChange(event) {
            console.log(event);

            if (event.target.files.length > 0) {
              var file = event.target.files[0];
            }

            this.PatentFileKz = event.target.files[0];
          }
        }, {
          key: "onENPatentFileChange",
          value: function onENPatentFileChange(event) {
            console.log(event);

            if (event.target.files.length > 0) {
              var file = event.target.files[0];
            }

            this.PatentFileEn = event.target.files[0];
          }
        }]);

        return PatentUploadComponent;
      }();

      PatentUploadComponent.ɵfac = function PatentUploadComponent_Factory(t) {
        return new (t || PatentUploadComponent)();
      };

      PatentUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PatentUploadComponent,
        selectors: [["app-patent-upload"]],
        decls: 23,
        vars: 6,
        consts: [["mat-dialog-title", ""], ["enctype", "multipart/form-data"], ["for", "EnPatent"], ["type", "file", "id", "EnPatent", 3, "change"], ["for", "KzPatent"], ["type", "file", "id", "KzPatent", 3, "change"], ["for", "RuPatent"], ["type", "file", "id", "RuPatent", 3, "change"], ["mat-button", "", "mat-dialog-close", "", 3, "disabled", "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", "", "mat-dialog-close", "false"]],
        template: function PatentUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B(EN)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PatentUploadComponent_Template_input_change_7_listener($event) {
              return ctx.onENPatentFileChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B(KZ)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PatentUploadComponent_Template_input_change_12_listener($event) {
              return ctx.onKZPatentFileChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B(RU)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PatentUploadComponent_Template_input_change_17_listener($event) {
              return ctx.onRUPatentFileChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.PatentFileRu && ctx.PatentFileEn && ctx.PatentFileKz))("mat-dialog-close", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.PatentFileEn, ctx.PatentFileKz, ctx.PatentFileRu));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dob2xlLXBhZ2UvdGVhY2hlci9wYXRlbnQtdXBsb2FkL3BhdGVudC11cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatentUploadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-patent-upload',
            templateUrl: './patent-upload.component.html',
            styleUrls: ['./patent-upload.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/whole-page/teacher/publication-upload/publication-upload.component.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/whole-page/teacher/publication-upload/publication-upload.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: PublicationUploadComponent */

    /***/
    function srcAppWholePageTeacherPublicationUploadPublicationUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicationUploadComponent", function () {
        return PublicationUploadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/fesm2015/dialog.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");

      var PublicationUploadComponent = /*#__PURE__*/function () {
        function PublicationUploadComponent() {
          _classCallCheck(this, PublicationUploadComponent);

          this.selectedPublicationFile = null;
        }

        _createClass(PublicationUploadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onPubFileSelected",
          value: function onPubFileSelected(event) {
            this.selectedPublicationFile = event.target.files[0];
            console.log(this.selectedPublicationFile);
          }
        }]);

        return PublicationUploadComponent;
      }();

      PublicationUploadComponent.ɵfac = function PublicationUploadComponent_Factory(t) {
        return new (t || PublicationUploadComponent)();
      };

      PublicationUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PublicationUploadComponent,
        selectors: [["app-publication-upload"]],
        decls: 13,
        vars: 2,
        consts: [["mat-dialog-title", ""], ["enctype", "multipart/form-data"], ["for", "Pubfile"], ["type", "file", "id", "Pubfile", 3, "change"], ["mat-button", "", "mat-dialog-close", "", 3, "disabled", "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", "", "mat-dialog-close", "false"]],
        template: function PublicationUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PublicationUploadComponent_Template_input_change_7_listener($event) {
              return ctx.onPubFileSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedPublicationFile)("mat-dialog-close", ctx.selectedPublicationFile);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dob2xlLXBhZ2UvdGVhY2hlci9wdWJsaWNhdGlvbi11cGxvYWQvcHVibGljYXRpb24tdXBsb2FkLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationUploadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-publication-upload',
            templateUrl: './publication-upload.component.html',
            styleUrls: ['./publication-upload.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/whole-page/whole-page.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/whole-page/whole-page.component.ts ***!
      \****************************************************/

    /*! exports provided: WholePageComponent */

    /***/
    function srcAppWholePageWholePageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WholePageComponent", function () {
        return WholePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jwt-decode */
      "./node_modules/jwt-decode/lib/index.js");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _services_data_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data-control.service */
      "./src/app/services/data-control.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api/api.service */
      "./src/app/api/api.service.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/badge */
      "./node_modules/@angular/material/fesm2015/badge.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/fesm2015/sidenav.js");

      function WholePageComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0413\u043E\u0434\u043E\u0432\u043E\u0439 \u043F\u043B\u0430\u043D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WholePageComponent_a_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WholePageComponent_hr_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        }
      }

      function WholePageComponent_a_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u041E\u043F\u041D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WholePageComponent_hr_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        }
      }

      function WholePageComponent_a_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u044F \u0434\u0438\u0441\u0441\u043E\u0432\u0435\u0442\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          exact: true
        };
      };

      var WholePageComponent = /*#__PURE__*/function () {
        function WholePageComponent(service, router, _api) {
          _classCallCheck(this, WholePageComponent);

          this.service = service;
          this.router = router;
          this._api = _api;
          this.showFiller = false;
          this.userRoles = [];
          this.DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
          this.tokenId = this.DecodedToken.jti;
        }

        _createClass(WholePageComponent, [{
          key: "getDecodedAccessToken",
          value: function getDecodedAccessToken(token) {
            try {
              return jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token);
            } catch (Error) {
              return null;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this._api.getUserById(this.tokenId).subscribe(function (res) {
              _this11.currentUser = res;
              _this11.name = res.username;

              for (var i = 0; i < res.roles.length; i++) {
                _this11.userRoles.push(res.roles[i].roleName);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "logOut",
          value: function logOut() {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            this.router.navigate(['/login']);
          }
        }]);

        return WholePageComponent;
      }();

      WholePageComponent.ɵfac = function WholePageComponent_Factory(t) {
        return new (t || WholePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_control_service__WEBPACK_IMPORTED_MODULE_2__["DataControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
      };

      WholePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WholePageComponent,
        selectors: [["app-whole-page"]],
        decls: 50,
        vars: 10,
        consts: [[1, "wrapper"], [1, "beforeHeader"], ["id", "logo"], ["src", "./assets/images/header/logoIITU.png", "width", "40%", "alt", "IITU logo"], ["id", "accountName"], ["src", "./assets/images/header/accountLabel.png", "width", "10%", "height", "10%", "alt", "Account label", 2, "margin-top", "2%"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "text", 2, "margin-top", "7%"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [2, "width", "50%", "display", "flex", "height", "100%", "margin-left", "30%"], [1, "navButton"], ["routerLinkActive", "active-link", "mat-button", "", "routerLink", "./", 1, "navTool", 3, "routerLinkActiveOptions"], ["class", "navButton", 4, "ngIf"], [1, "navButton", "dropdown-menu"], ["id", "dropDownMenu", "routerLinkActive", "active-link", "mat-button", "", 1, "navTool"], [1, "options"], ["routerLinkActive", "active-link", "class", "navTool", "mat-button", "", "routerLink", "./teacher", 4, "ngIf"], [4, "ngIf"], ["routerLinkActive", "active-link", "class", "navTool", "mat-button", "", "routerLink", "./opportunities", 4, "ngIf"], ["routerLinkActive", "active-link", "class", "navTool", "mat-button", "", "routerLink", "./secretary-of-the-diss-council", 4, "ngIf"], ["id", "headerSettings", 2, "width", "5%"], [1, "jai"], [1, "notifications"], ["matBadge", "5", "matBadgeColor", "warn", "matBadgePosition", "below after", 1, "material-icons-outlined", 3, "click"], [1, "notifications-drawer"], ["drawer", ""], [1, "polygon"], [1, "notifications-list"], [1, "notif-inner"], [2, "width", "25%"], [1, "notif-img"], [1, "notif-message"], ["href", "#"], [2, "color", "#FFFFFF"], ["routerLinkActive", "active-link", "mat-button", "", "routerLink", "./yearPlan", 1, "navTool"], ["routerLinkActive", "active-link", "mat-button", "", "routerLink", "./teacher", 1, "navTool"], ["routerLinkActive", "active-link", "mat-button", "", "routerLink", "./opportunities", 1, "navTool"], ["routerLinkActive", "active-link", "mat-button", "", "routerLink", "./secretary-of-the-diss-council", 1, "navTool"]],
        template: function WholePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", null, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WholePageComponent_Template_button_click_11_listener() {
              return ctx.logOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Log out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WholePageComponent_div_19_Template, 3, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, WholePageComponent_a_24_Template, 2, 0, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WholePageComponent_hr_25_Template, 1, 0, "hr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WholePageComponent_a_26_Template, 2, 0, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, WholePageComponent_hr_27_Template, 1, 0, "hr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, WholePageComponent_a_28_Template, 2, 0, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WholePageComponent_Template_i_click_32_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

              return _r7.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " notifications ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-drawer", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Jennifer:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, perferendis? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0440\u0443\u0441");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "router-outlet");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRoles.indexOf("Teacher") != 0 - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRoles.indexOf("Teacher") != 0 - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRoles.indexOf("Teacher") != 0 - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRoles.indexOf("Science_Dept") != 0 - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRoles.indexOf("Science_Dept") != 0 - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRoles.indexOf("Science_Secretary_Dissovet") != 0 - 1);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadge"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatDrawer"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: [".container[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n#logo[_ngcontent-%COMP%]{\r\n  width: 30%;\r\n  height: 100%;\r\n}\r\n.beforeHeader[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  margin: 1% 5%;\r\n  display: flex;\r\n  padding: 0;\r\n}\r\n#accountName[_ngcontent-%COMP%]{\r\n  width: 30%;\r\n  height: 100%;\r\n  display: flex;\r\n  margin-left: 55%;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n  margin-left: 2%;\r\n  font-size: 120%;\r\n}\r\nmat-toolbar[_ngcontent-%COMP%]{\r\n  background: #212121;\r\n  margin-top: 1%;\r\n}\r\n.navTool[_ngcontent-%COMP%]{\r\n  line-height: 24px !important;\r\n  white-space: pre-line;\r\n  text-align: center;\r\n  color: #FFFFFF;\r\n  max-width: 200px;\r\n}\r\n.active-link[_ngcontent-%COMP%]{\r\n  background-color: #0CB5A0;\r\n  height: 100%;\r\n  width: 100%;\r\n  \r\n}\r\n.navButton[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 23%;\r\n  margin: 0;\r\n  text-align: center;\r\n  border: 0.1px solid gray;\r\n  box-sizing: border-box;\r\n}\r\nmat-toolbar-row[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  \r\n  text-align: center;\r\n}\r\n.navButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding-top: 10%;\r\n}\r\n#headerSettings[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  \r\n}\r\n.jai[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin-right: 80%;\r\n}\r\n.notifications[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n.notifications[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n  font-size: 36px;\r\n}\r\n.material-icons-outlined[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n.polygon[_ngcontent-%COMP%]{\r\n  z-index: 10;\r\n  position: absolute;\r\n  left: 1180px;\r\n  top: 150px;\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 15px solid transparent;\r\n  border-right: 15px solid transparent;\r\n  border-bottom: 20px solid #fff;\r\n}\r\n.notifications-list[_ngcontent-%COMP%]{\r\n  z-index: 9;\r\n  position: absolute;\r\n  width: 500px;\r\n  height: 560px;\r\n  left: 880px;\r\n  top: 165px;\r\n  background: #FFFFFF;\r\n  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.9);\r\n}\r\n.notif-img[_ngcontent-%COMP%]{\r\n  background: url('https://media.istockphoto.com/photos/neon-heart-on-brick-wall-picture-id848235926?k=6&m=848235926&s=612x612&w=0&h=resOh2Qt0_wYIOoLGcbnGtu_rXw5Dkp_IsqrerWzWCQ=') no-repeat center;\r\n  width: 68px;\r\n  height: 56px;\r\n  background-size: cover;\r\n  -webkit-clip-path: ellipse();\r\n          clip-path: ellipse();\r\n}\r\n.notif-inner[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin: 2rem;\r\n  padding-bottom: 2rem;\r\n  border-bottom: 1px solid rgba(9, 9, 9, 0.2);\r\n}\r\n.notif-message[_ngcontent-%COMP%]{\r\n  font-family: Roboto, sans-serif;\r\n  font-style: normal;\r\n  font-size: 14px;\r\n  width: 66%;\r\n  white-space: pre-line;\r\n  line-height: 17px;\r\n}\r\n.notif-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  line-height: 15px;\r\n}\r\n.options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  border-radius: 0;\r\n  padding: 0.4rem;\r\n  z-index: 5;\r\n}\r\n.options[_ngcontent-%COMP%]{\r\n  display: none;\r\n  background-color: #0CB5A0;\r\n}\r\n.options[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n  margin: 0 .6rem;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]:hover   .options[_ngcontent-%COMP%]{\r\n  display: block;\r\n  z-index: 15;\r\n}\r\n#dropDownMenu[_ngcontent-%COMP%]:hover{\r\n  background-color: #0CB5A0;\r\n  z-index: 15;\r\n}\r\n@media (max-width: 1200px) {\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    max-width: 970px;\r\n  }\r\n}\r\n@media (max-width: 970px) {\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    max-width: 750px;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    max-width: none;\r\n    display: block;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hvbGUtcGFnZS93aG9sZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0VBQ2IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxrTUFBa007RUFDbE0sV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd2hvbGUtcGFnZS93aG9sZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiNsb2dve1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5iZWZvcmVIZWFkZXJ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDElIDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4jYWNjb3VudE5hbWV7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogNTUlO1xyXG59XHJcbi50ZXh0e1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBmb250LXNpemU6IDEyMCU7XHJcbn1cclxubWF0LXRvb2xiYXJ7XHJcbiAgYmFja2dyb3VuZDogIzIxMjEyMTtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG4ubmF2VG9vbHtcclxuICBsaW5lLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG4uYWN0aXZlLWxpbmt7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDQjVBMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLypwYWRkaW5nOiAyJTsqL1xyXG59XHJcbi5uYXZCdXR0b257XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAyMyU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDAuMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5tYXQtdG9vbGJhci1yb3d7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLypwYWRkaW5nOiAwIDMwJTsqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdkJ1dHRvbiBhIHtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG4jaGVhZGVyU2V0dGluZ3N7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKm1hcmdpbi1sZWZ0OiA1MCU7Ki9cclxufVxyXG5cclxuLmphaXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogODAlO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uc3tcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnMgLm1hdGVyaWFsLWljb25zLW91dGxpbmVke1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVke1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucG9seWdvbntcclxuICB6LWluZGV4OiAxMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTE4MHB4O1xyXG4gIHRvcDogMTUwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICNmZmY7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnMtbGlzdHtcclxuICB6LWluZGV4OiA5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA1NjBweDtcclxuICBsZWZ0OiA4ODBweDtcclxuICB0b3A6IDE2NXB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC45KTtcclxufVxyXG4ubm90aWYtaW1ne1xyXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vcGhvdG9zL25lb24taGVhcnQtb24tYnJpY2std2FsbC1waWN0dXJlLWlkODQ4MjM1OTI2P2s9NiZtPTg0ODIzNTkyNiZzPTYxMng2MTImdz0wJmg9cmVzT2gyUXQwX3dZSU9vTEdjYm5HdHVfclh3NURrcF9Jc3FyZXJXeldDUT0nKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIHdpZHRoOiA2OHB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGNsaXAtcGF0aDogZWxsaXBzZSgpO1xyXG59XHJcbi5ub3RpZi1pbm5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg5LCA5LCA5LCAwLjIpO1xyXG59XHJcbi5ub3RpZi1tZXNzYWdle1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogNjYlO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICBsaW5lLWhlaWdodDogMTdweDtcclxufVxyXG4ubm90aWYtbWVzc2FnZSBhe1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuLm9wdGlvbnMgYXtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcbi5vcHRpb25ze1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDQjVBMDtcclxufVxyXG4ub3B0aW9ucyBocntcclxuICBtYXJnaW46IDAgLjZyZW07XHJcbn1cclxuLmRyb3Bkb3duLW1lbnU6aG92ZXIgLm9wdGlvbnN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgei1pbmRleDogMTU7XHJcbn1cclxuI2Ryb3BEb3duTWVudTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMENCNUEwO1xyXG4gIHotaW5kZXg6IDE1O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBtYXgtd2lkdGg6IDk3MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk3MHB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WholePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-whole-page',
            templateUrl: './whole-page.component.html',
            styleUrls: ['./whole-page.component.css']
          }]
        }], function () {
          return [{
            type: _services_data_control_service__WEBPACK_IMPORTED_MODULE_2__["DataControlService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\77773\Documents\AngularProjects\На всякий случай\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map