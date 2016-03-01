'use strict';

angular.module('kcoffey-app.login')
.service('Session', function() {
    this.create = function (token, userId, loginDate, ttl) {
        this.token = token;
        this.userId = userId;
        this.loginDate = loginDate;
        this.ttl = ttl;
    };
    this.destroy = function () {
        this.token = null;
        this.userId = null;
        this.loginDate = null;
        this.ttl = null;
    };
});