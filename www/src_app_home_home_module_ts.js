"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 7356:
/*!**********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/camera-preview/dist/esm/definitions.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8449:
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/camera-preview/dist/esm/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraPreview": () => (/* binding */ CameraPreview)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7356);

const CameraPreview = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('CameraPreview', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_camera-preview_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7346)).then(m => new m.CameraPreviewWeb()),
});




/***/ }),

/***/ 2960:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var D_Tests_captura_de_cedula_captura_C_C_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,D_Tests_captura_de_cedula_captura_C_C_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,D_Tests_captura_de_cedula_captura_C_C_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,D_Tests_captura_de_cedula_captura_C_C_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,D_Tests_captura_de_cedula_captura_C_C_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,D_Tests_captura_de_cedula_captura_C_C_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,D_Tests_captura_de_cedula_captura_C_C_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,D_Tests_captura_de_cedula_captura_C_C_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,D_Tests_captura_de_cedula_captura_C_C_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 3949);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/components.module */ 9400);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Tests_captura_de_cedula_captura_C_C_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let HomePage = class HomePage {
    constructor() {
        this.initData();
    }
    initData() {
        this.title = 'Presentación';
        this.text = 'Posiciona tu cedula de forma horizontal claramente en el recuadro';
        this.index = 0;
        this.presentation = true;
        this.isClose = false;
        this.images = [];
    }
    changeStep(event) {
        this.index = event;
        if (this.index === 1) {
            this.title = 'Respaldo de tu cédula';
        }
    }
    next() {
        this.presentation = false;
        this.title = 'Frente de tu cédula';
    }
    getImages(event) {
        this.images = event;
        this.title = 'Lista de capturas';
    }
    changeState(event) {
        this.isClose = event;
    }
    setTransparency() {
        return this.presentation || this.index >= 2 || this.isClose ? '' : 'transparent';
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _D_Tests_captura_de_cedula_captura_C_C_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 8304:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/cc-capture/cc-capture.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CcCaptureComponent": () => (/* binding */ CcCaptureComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Tests_captura_de_cedula_captura_C_C_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cc_capture_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cc-capture.component.html */ 1550);
/* harmony import */ var _cc_capture_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cc-capture.component.scss */ 3161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _capacitor_community_camera_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor-community/camera-preview */ 8449);





let CcCaptureComponent = class CcCaptureComponent {
    constructor() {
        this.text = '';
        this.step = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.imagesArray = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.isClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.images = [];
        this.cameraActive = false;
        this.icon = 'person-outline';
        this.setConfigPreview();
        this.setConfigPicture();
        this.openCamera();
    }
    openCamera() {
        _capacitor_community_camera_preview__WEBPACK_IMPORTED_MODULE_2__.CameraPreview.start(this.cameraPreviewOptions);
        this.cameraActive = true;
        this.isClose.emit(false);
    }
    captureImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield _capacitor_community_camera_preview__WEBPACK_IMPORTED_MODULE_2__.CameraPreview.capture(this.cameraPreviewPictureOptions);
            const base64PictureData = `data:image/jpeg;base64,${result.value}`;
            this.image = base64PictureData;
            this.stopCamera();
        });
    }
    next() {
        this.images.push(this.image);
        this.index = this.images.length;
        this.step.emit(this.index);
        this.icon = 'finger-print-outline';
        if (this.index < 2) {
            this.openCamera();
        }
        if (this.index === 2) {
            this.imagesArray.emit(this.images);
        }
    }
    stopCamera() {
        _capacitor_community_camera_preview__WEBPACK_IMPORTED_MODULE_2__.CameraPreview.stop();
        this.cameraActive = false;
        this.isClose.emit(true);
    }
    clear() {
        this.image = null;
        this.openCamera();
    }
    ngOnDestroy() {
        this.stopCamera();
    }
    setConfigPreview() {
        this.cameraPreviewOptions = {
            y: 90,
            x: 10,
            height: 240,
            width: window.screen.width - 20,
            toBack: true,
            position: 'rear',
            parent: 'cameraPreview',
            className: 'cameraPreview',
        };
    }
    setConfigPicture() {
        this.cameraPreviewPictureOptions = {
            quality: 100,
        };
    }
};
CcCaptureComponent.ctorParameters = () => [];
CcCaptureComponent.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    imagesArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    isClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
CcCaptureComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cc-capture',
        template: _D_Tests_captura_de_cedula_captura_C_C_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cc_capture_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cc_capture_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CcCaptureComponent);



/***/ }),

/***/ 9400:
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _cc_capture_cc_capture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cc-capture/cc-capture.component */ 8304);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);





let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_cc_capture_cc_capture_component__WEBPACK_IMPORTED_MODULE_0__.CcCaptureComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        ],
        exports: [_cc_capture_cc_capture_component__WEBPACK_IMPORTED_MODULE_0__.CcCaptureComponent]
    })
], ComponentsModule);



/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" >\r\n  <ion-toolbar [ngClass]=\"setTransparency()\">\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"setTransparency()\">\r\n\r\n  <div *ngIf=\"presentation\" class=\"presentation\">\r\n    <h4>Procederemos a hacer capturas de tu cedula, da clic en aceptar para continuar</h4>\r\n    <ion-button (click)=\"next()\" expand=\"block\" >\r\n      Aceptar\r\n    </ion-button>\r\n  </div>\r\n\r\n  <div *ngIf=\"!presentation && index < 2\" class=\"capture-container\">\r\n    <app-cc-capture\r\n      [text]=\"text\"\r\n      (step)=\"changeStep($event)\"\r\n      (imagesArray)=\"getImages($event)\"\r\n      (isClose)=\"changeState($event)\"\r\n    >\r\n    </app-cc-capture>\r\n  </div>\r\n\r\n  <div *ngIf=\" index >= 2 && images\" class=\"final\">\r\n    <div class=\"imag\" *ngFor=\"let image of images\">\r\n      <ion-img  [src]=\"image\"></ion-img>\r\n    </div>\r\n\r\n    <ion-button (click)=\"initData()\" expand=\"block\" class=\"btnReset\">\r\n      Reiniciar\r\n    </ion-button>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 1550:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/cc-capture/cc-capture.component.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<div id=\"cameraPreview\" class=\"cameraPreview\" >\r\n  <div *ngIf=\"cameraActive\">\r\n    <div class=\"view\">\r\n      <div class=\"view__icon\" [ngClass]=\"index === 1 ? 'left' : 'right'\">\r\n        <ion-icon [name]=\"icon\" ></ion-icon>\r\n      </div>\r\n      <div class=\"barcode\" *ngIf=\"index === 1\">\r\n        <img src=\"assets/images/barcode-outline.png\" alt=\"\" class=\"barcode__icon\">\r\n      </div>\r\n      \r\n    </div>\r\n\r\n    <p class=\"text\">{{text}}</p>\r\n    <ion-icon class=\"icons\" id=\"capture\" (click)=\"captureImage()\" name=\"radio-button-on-outline\"></ion-icon>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"image && !cameraActive\">\r\n  <div class=\"imag\">\r\n    <ion-img [src]=\"image\"></ion-img>\r\n  </div>\r\n  <ion-icon class=\"icons\" id=\"success\" color=\"success\" name=\"checkmark-outline\" (click)=\"next()\"></ion-icon>\r\n  <ion-icon class=\"icons\" id=\"delete\" color=\"danger\" name=\"close-outline\" (click)=\"clear()\"></ion-icon>\r\n</div>\r\n");

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".transparent {\n  --ion-background-color: transparent!important;\n  --background: transparent !important;\n  --color: white;\n}\n\n.presentation {\n  margin-top: 50%;\n  padding: 10%;\n  text-align: center;\n}\n\n.presentation ion-button {\n  margin-top: 40px;\n}\n\n.capture-container {\n  background-color: transparent !important;\n}\n\n.btnReset {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFBRTtFQUNFLGdCQUFBO0FBRUo7O0FBRUE7RUFDRSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0MsaUJBQUE7QUFDRCIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc3BhcmVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnByZXNlbnRhdGlvbntcclxuICBtYXJnaW4tdG9wOiA1MCU7XHJcbiAgcGFkZGluZzogMTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXB0dXJlLWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG5SZXNldHtcclxuIG1hcmdpbi10b3A6IDEwMHB4XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3161:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/cc-capture/cc-capture.component.scss ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".text {\n  position: absolute;\n  text-align: center;\n  font-size: 16px;\n  top: 50%;\n  padding: 30px;\n}\n\n.icons {\n  position: absolute;\n  bottom: 25px;\n  z-index: 11;\n  width: 50px;\n  height: 50px;\n}\n\n.right {\n  margin-left: 54%;\n  margin-top: 13%;\n  font-size: 152px;\n  width: 42%;\n  height: 66%;\n}\n\n.left {\n  font-size: 90px;\n  margin-left: 8%;\n  width: 25%;\n  height: 40%;\n  margin-top: 6%;\n}\n\n.view {\n  position: absolute;\n  height: 241px;\n  left: 10px;\n  width: calc(100vw - 20px);\n  border: 1.5px solid #44c963;\n  margin-top: 11.5%;\n}\n\n.view__icon {\n  border: 1px solid #44c963;\n  border-radius: 10px;\n}\n\n.view__icon ion-icon {\n  opacity: 0.5;\n  color: black;\n}\n\n.barcode {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 25px;\n}\n\n.barcode__icon {\n  width: 86%;\n  height: 60px;\n}\n\n#capture {\n  left: 40%;\n  width: 72px;\n  height: 72px;\n}\n\n#success {\n  right: 20px;\n}\n\n#delete {\n  left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNjLWNhcHR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUlFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFNQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtBQUhGIiwiZmlsZSI6ImNjLWNhcHR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5pY29ucyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjVweDtcclxuICB6LWluZGV4OiAxMTtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5yaWdodHtcclxuICBtYXJnaW4tbGVmdDogNTQlO1xyXG4gIG1hcmdpbi10b3A6IDEzJTtcclxuICBmb250LXNpemU6IDE1MnB4O1xyXG4gIHdpZHRoOiA0MiU7IFxyXG4gIGhlaWdodDogNjYlOyBcclxufVxyXG5cclxuLmxlZnR7XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4JTtcclxuICB3aWR0aDogMjUlOyBcclxuICBoZWlnaHQ6IDQwJTsgXHJcbiAgbWFyZ2luLXRvcDogNiU7XHJcbn1cclxuXHJcbi52aWV3e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDI0MXB4OyBcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7IFxyXG4gIGJvcmRlcjogMS41cHggc29saWQgIzQ0Yzk2MzsgXHJcbiAgbWFyZ2luLXRvcDogMTEuNSU7XHJcblxyXG4gICZfX2ljb257XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDRjOTYzOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgaW9uLWljb257XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJhcmNvZGV7XHJcbiAgZGlzcGxheTpmbGV4OyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgJl9faWNvbntcclxuICAgIHdpZHRoOiA4NiU7IFxyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuI2NhcHR1cmUge1xyXG4gIGxlZnQ6IGNhbGMoNDAlKTtcclxuICB3aWR0aDogNzJweDtcclxuICBoZWlnaHQ6IDcycHg7XHJcbn1cclxuXHJcbiNzdWNjZXNzIHtcclxuICByaWdodDogMjBweDtcclxufVxyXG5cclxuI2RlbGV0ZSB7XHJcbiAgbGVmdDogMjBweDtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map