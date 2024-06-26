this.primevue = this.primevue || {};
this.primevue.toastservice = (function (ToastEventBus, usetoast) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ToastEventBus__default = /*#__PURE__*/_interopDefaultLegacy(ToastEventBus);

    var ToastService = {
      install: function install(app) {
        var ToastService = {
          add: function add(message) {
            ToastEventBus__default["default"].emit('add', message);
          },
          remove: function remove(message) {
            ToastEventBus__default["default"].emit('remove', message);
          },
          removeGroup: function removeGroup(group) {
            ToastEventBus__default["default"].emit('remove-group', group);
          },
          removeAllGroups: function removeAllGroups() {
            ToastEventBus__default["default"].emit('remove-all-groups');
          }
        };
        app.config.globalProperties.$toast = ToastService;
        app.provide(usetoast.PrimeVueToastSymbol, ToastService);
      }
    };

    return ToastService;

})(primevue.toasteventbus, primevue.usetoast);
