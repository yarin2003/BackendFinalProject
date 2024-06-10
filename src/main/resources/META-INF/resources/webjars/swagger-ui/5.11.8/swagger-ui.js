!function webpackUniversalModuleDefinition(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.SwaggerUICore = t() : e.SwaggerUICore = t()
}(this, (() => (() => {
    "use strict";
    var e = {
        158: e => {
            e.exports = require("buffer")
        }
    }, t = {};

    function __webpack_require__(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var n = t[r] = {exports: {}};
        return e[r](n, n.exports, __webpack_require__), n.exports
    }

    __webpack_require__.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return __webpack_require__.d(t, {a: t}), t
    }, __webpack_require__.d = (e, t) => {
        for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    };
    var r = {};
    return (() => {
        __webpack_require__.d(r, {default: () => jo});
        var e = {};
        __webpack_require__.r(e), __webpack_require__.d(e, {
            CLEAR: () => V,
            CLEAR_BY: () => L,
            NEW_AUTH_ERR: () => D,
            NEW_SPEC_ERR: () => $,
            NEW_SPEC_ERR_BATCH: () => K,
            NEW_THROWN_ERR: () => T,
            NEW_THROWN_ERR_BATCH: () => J,
            clear: () => clear,
            clearBy: () => clearBy,
            newAuthErr: () => newAuthErr,
            newSpecErr: () => newSpecErr,
            newSpecErrBatch: () => newSpecErrBatch,
            newThrownErr: () => newThrownErr,
            newThrownErrBatch: () => newThrownErrBatch
        });
        var t = {};
        __webpack_require__.r(t), __webpack_require__.d(t, {
            AUTHORIZE: () => ge,
            AUTHORIZE_OAUTH2: () => Se,
            CONFIGURE_AUTH: () => _e,
            LOGOUT: () => ye,
            PRE_AUTHORIZE_OAUTH2: () => fe,
            RESTORE_AUTHORIZATION: () => ve,
            SHOW_AUTH_POPUP: () => he,
            VALIDATE: () => Ee,
            authPopup: () => authPopup,
            authorize: () => authorize,
            authorizeAccessCodeWithBasicAuthentication: () => authorizeAccessCodeWithBasicAuthentication,
            authorizeAccessCodeWithFormParams: () => authorizeAccessCodeWithFormParams,
            authorizeApplication: () => authorizeApplication,
            authorizeOauth2: () => authorizeOauth2,
            authorizeOauth2WithPersistOption: () => authorizeOauth2WithPersistOption,
            authorizePassword: () => authorizePassword,
            authorizeRequest: () => authorizeRequest,
            authorizeWithPersistOption: () => authorizeWithPersistOption,
            configureAuth: () => configureAuth,
            logout: () => logout,
            logoutWithPersistOption: () => logoutWithPersistOption,
            persistAuthorizationIfNeeded: () => persistAuthorizationIfNeeded,
            preAuthorizeImplicit: () => preAuthorizeImplicit,
            restoreAuthorization: () => restoreAuthorization,
            showDefinitions: () => showDefinitions
        });
        var a = {};
        __webpack_require__.r(a), __webpack_require__.d(a, {
            authorized: () => Oe,
            definitionsForRequirements: () => definitionsForRequirements,
            definitionsToAuthorize: () => xe,
            getConfigs: () => Ne,
            getDefinitionsByNames: () => getDefinitionsByNames,
            isAuthorized: () => isAuthorized,
            shownDefinitions: () => Ce
        });
        var n = {};
        __webpack_require__.r(n), __webpack_require__.d(n, {
            TOGGLE_CONFIGS: () => Je,
            UPDATE_CONFIGS: () => Te,
            loaded: () => actions_loaded,
            toggle: () => toggle,
            update: () => update
        });
        var s = {};
        __webpack_require__.r(s), __webpack_require__.d(s, {
            downloadConfig: () => downloadConfig,
            getConfigByUrl: () => getConfigByUrl
        });
        var o = {};
        __webpack_require__.r(o), __webpack_require__.d(o, {get: () => get});
        var l = {};
        __webpack_require__.r(l), __webpack_require__.d(l, {transform: () => transform});
        var c = {};
        __webpack_require__.r(c), __webpack_require__.d(c, {transform: () => parameter_oneof_transform});
        var i = {};
        __webpack_require__.r(i), __webpack_require__.d(i, {allErrors: () => Ze, lastError: () => et});
        var p = {};
        __webpack_require__.r(p), __webpack_require__.d(p, {
            SHOW: () => ot,
            UPDATE_FILTER: () => nt,
            UPDATE_LAYOUT: () => at,
            UPDATE_MODE: () => st,
            changeMode: () => changeMode,
            show: () => actions_show,
            updateFilter: () => updateFilter,
            updateLayout: () => updateLayout
        });
        var m = {};
        __webpack_require__.r(m), __webpack_require__.d(m, {
            current: () => current,
            currentFilter: () => currentFilter,
            isShown: () => isShown,
            showSummary: () => ct,
            whatMode: () => whatMode
        });
        var u = {};
        __webpack_require__.r(u), __webpack_require__.d(u, {taggedOperations: () => taggedOperations});
        var d = {};
        __webpack_require__.r(d), __webpack_require__.d(d, {
            requestSnippetGenerator_curl_bash: () => requestSnippetGenerator_curl_bash,
            requestSnippetGenerator_curl_cmd: () => requestSnippetGenerator_curl_cmd,
            requestSnippetGenerator_curl_powershell: () => requestSnippetGenerator_curl_powershell
        });
        var h = {};
        __webpack_require__.r(h), __webpack_require__.d(h, {
            getActiveLanguage: () => mt,
            getDefaultExpanded: () => ut,
            getGenerators: () => pt,
            getSnippetGenerators: () => getSnippetGenerators
        });
        var g = {};
        __webpack_require__.r(g), __webpack_require__.d(g, {
            allowTryItOutFor: () => allowTryItOutFor,
            basePath: () => Pr,
            canExecuteScheme: () => canExecuteScheme,
            consumes: () => kr,
            consumesOptionsFor: () => consumesOptionsFor,
            contentTypeValues: () => contentTypeValues,
            currentProducesFor: () => currentProducesFor,
            definitions: () => jr,
            externalDocs: () => wr,
            findDefinition: () => findDefinition,
            getOAS3RequiredRequestBodyContentType: () => getOAS3RequiredRequestBodyContentType,
            getParameter: () => getParameter,
            hasHost: () => Lr,
            host: () => Mr,
            info: () => vr,
            isMediaTypeSchemaPropertiesEqual: () => isMediaTypeSchemaPropertiesEqual,
            isOAS3: () => _r,
            lastError: () => ur,
            mutatedRequestFor: () => mutatedRequestFor,
            mutatedRequests: () => Vr,
            operationScheme: () => operationScheme,
            operationWithMeta: () => operationWithMeta,
            operations: () => Nr,
            operationsWithRootInherited: () => Tr,
            operationsWithTags: () => $r,
            parameterInclusionSettingFor: () => parameterInclusionSettingFor,
            parameterValues: () => parameterValues,
            parameterWithMeta: () => parameterWithMeta,
            parameterWithMetaByIdentity: () => parameterWithMetaByIdentity,
            parametersIncludeIn: () => parametersIncludeIn,
            parametersIncludeType: () => parametersIncludeType,
            paths: () => xr,
            produces: () => Ar,
            producesOptionsFor: () => producesOptionsFor,
            requestFor: () => requestFor,
            requests: () => Dr,
            responseFor: () => responseFor,
            responses: () => Kr,
            schemes: () => Rr,
            security: () => Ir,
            securityDefinitions: () => qr,
            semver: () => Cr,
            spec: () => spec,
            specJS: () => fr,
            specJson: () => yr,
            specJsonWithResolvedSubtrees: () => Er,
            specResolved: () => Sr,
            specResolvedSubtree: () => specResolvedSubtree,
            specSource: () => gr,
            specStr: () => hr,
            tagDetails: () => tagDetails,
            taggedOperations: () => selectors_taggedOperations,
            tags: () => Jr,
            url: () => dr,
            validOperationMethods: () => Or,
            validateBeforeExecute: () => validateBeforeExecute,
            validationErrors: () => validationErrors,
            version: () => br
        });
        var y = {};
        __webpack_require__.r(y), __webpack_require__.d(y, {
            CLEAR_REQUEST: () => ca,
            CLEAR_RESPONSE: () => la,
            CLEAR_VALIDATE_PARAMS: () => ia,
            LOG_REQUEST: () => oa,
            SET_MUTATED_REQUEST: () => sa,
            SET_REQUEST: () => na,
            SET_RESPONSE: () => aa,
            SET_SCHEME: () => da,
            UPDATE_EMPTY_PARAM_INCLUSION: () => ta,
            UPDATE_JSON: () => Zr,
            UPDATE_OPERATION_META_VALUE: () => pa,
            UPDATE_PARAM: () => ea,
            UPDATE_RESOLVED: () => ma,
            UPDATE_RESOLVED_SUBTREE: () => ua,
            UPDATE_SPEC: () => Yr,
            UPDATE_URL: () => Qr,
            VALIDATE_PARAMS: () => ra,
            changeConsumesValue: () => changeConsumesValue,
            changeParam: () => changeParam,
            changeParamByIdentity: () => changeParamByIdentity,
            changeProducesValue: () => changeProducesValue,
            clearRequest: () => clearRequest,
            clearResponse: () => clearResponse,
            clearValidateParams: () => clearValidateParams,
            execute: () => actions_execute,
            executeRequest: () => executeRequest,
            invalidateResolvedSubtreeCache: () => invalidateResolvedSubtreeCache,
            logRequest: () => logRequest,
            parseToJson: () => parseToJson,
            requestResolvedSubtree: () => requestResolvedSubtree,
            resolveSpec: () => resolveSpec,
            setMutatedRequest: () => setMutatedRequest,
            setRequest: () => setRequest,
            setResponse: () => setResponse,
            setScheme: () => setScheme,
            updateEmptyParamInclusion: () => updateEmptyParamInclusion,
            updateJsonSpec: () => updateJsonSpec,
            updateResolved: () => updateResolved,
            updateResolvedSubtree: () => updateResolvedSubtree,
            updateSpec: () => updateSpec,
            updateUrl: () => updateUrl,
            validateParams: () => validateParams
        });
        var f = {};
        __webpack_require__.r(f), __webpack_require__.d(f, {
            executeRequest: () => wrap_actions_executeRequest,
            updateJsonSpec: () => wrap_actions_updateJsonSpec,
            updateSpec: () => wrap_actions_updateSpec,
            validateParams: () => wrap_actions_validateParams
        });
        var S = {};
        __webpack_require__.r(S), __webpack_require__.d(S, {
            Button: () => Button,
            Col: () => Col,
            Collapse: () => Collapse,
            Container: () => Container,
            Input: () => Input,
            Link: () => Link,
            Row: () => Row,
            Select: () => Select,
            TextArea: () => TextArea
        });
        var E = {};
        __webpack_require__.r(E), __webpack_require__.d(E, {
            JsonSchemaArrayItemFile: () => JsonSchemaArrayItemFile,
            JsonSchemaArrayItemText: () => JsonSchemaArrayItemText,
            JsonSchemaForm: () => JsonSchemaForm,
            JsonSchema_array: () => JsonSchema_array,
            JsonSchema_boolean: () => JsonSchema_boolean,
            JsonSchema_object: () => JsonSchema_object,
            JsonSchema_string: () => JsonSchema_string
        });
        var _ = {};
        __webpack_require__.r(_), __webpack_require__.d(_, {
            basePath: () => Cn,
            consumes: () => xn,
            definitions: () => _n,
            findDefinition: () => En,
            hasHost: () => vn,
            host: () => bn,
            produces: () => On,
            schemes: () => Nn,
            securityDefinitions: () => wn,
            validOperationMethods: () => wrap_selectors_validOperationMethods
        });
        var v = {};
        __webpack_require__.r(v), __webpack_require__.d(v, {definitionsToAuthorize: () => kn});
        var w = {};
        __webpack_require__.r(w), __webpack_require__.d(w, {
            callbacksOperations: () => qn,
            findSchema: () => findSchema,
            isOAS3: () => selectors_isOAS3,
            isOAS30: () => selectors_isOAS30,
            isSwagger2: () => selectors_isSwagger2,
            servers: () => In
        });
        var b = {};
        __webpack_require__.r(b), __webpack_require__.d(b, {
            CLEAR_REQUEST_BODY_VALIDATE_ERROR: () => Yn,
            CLEAR_REQUEST_BODY_VALUE: () => Qn,
            SET_REQUEST_BODY_VALIDATE_ERROR: () => Gn,
            UPDATE_ACTIVE_EXAMPLES_MEMBER: () => Fn,
            UPDATE_REQUEST_BODY_INCLUSION: () => Bn,
            UPDATE_REQUEST_BODY_VALUE: () => Un,
            UPDATE_REQUEST_BODY_VALUE_RETAIN_FLAG: () => zn,
            UPDATE_REQUEST_CONTENT_TYPE: () => Wn,
            UPDATE_RESPONSE_CONTENT_TYPE: () => Hn,
            UPDATE_SELECTED_SERVER: () => Ln,
            UPDATE_SERVER_VARIABLE_VALUE: () => Xn,
            clearRequestBodyValidateError: () => clearRequestBodyValidateError,
            clearRequestBodyValue: () => clearRequestBodyValue,
            initRequestBodyValidateError: () => initRequestBodyValidateError,
            setActiveExamplesMember: () => setActiveExamplesMember,
            setRequestBodyInclusion: () => setRequestBodyInclusion,
            setRequestBodyValidateError: () => setRequestBodyValidateError,
            setRequestBodyValue: () => setRequestBodyValue,
            setRequestContentType: () => setRequestContentType,
            setResponseContentType: () => setResponseContentType,
            setRetainRequestBodyValueFlag: () => setRetainRequestBodyValueFlag,
            setSelectedServer: () => setSelectedServer,
            setServerVariableValue: () => setServerVariableValue
        });
        var C = {};
        __webpack_require__.r(C), __webpack_require__.d(C, {
            activeExamplesMember: () => ss,
            hasUserEditedBody: () => rs,
            requestBodyErrors: () => ns,
            requestBodyInclusionSetting: () => as,
            requestBodyValue: () => es,
            requestContentType: () => os,
            responseContentType: () => ls,
            selectDefaultRequestBodyValue: () => selectDefaultRequestBodyValue,
            selectedServer: () => Zn,
            serverEffectiveValue: () => ps,
            serverVariableValue: () => cs,
            serverVariables: () => is,
            shouldRetainRequestBodyValue: () => ts,
            validOperationMethods: () => us,
            validateBeforeExecute: () => ms,
            validateShallowRequired: () => validateShallowRequired
        });
        const x = require("deep-extend");
        var O = __webpack_require__.n(x);
        const N = require("react");
        var k = __webpack_require__.n(N);
        const A = require("redux"), I = require("immutable");
        var q = __webpack_require__.n(I);
        const j = require("redux-immutable"), P = require("serialize-error"), M = require("lodash/merge");
        var R = __webpack_require__.n(M);
        const T = "err_new_thrown_err", J = "err_new_thrown_err_batch", $ = "err_new_spec_err",
            K = "err_new_spec_err_batch", D = "err_new_auth_err", V = "err_clear", L = "err_clear_by";

        function newThrownErr(e) {
            return {type: T, payload: (0, P.serializeError)(e)}
        }

        function newThrownErrBatch(e) {
            return {type: J, payload: e}
        }

        function newSpecErr(e) {
            return {type: $, payload: e}
        }

        function newSpecErrBatch(e) {
            return {type: K, payload: e}
        }

        function newAuthErr(e) {
            return {type: D, payload: e}
        }

        function clear(e = {}) {
            return {type: V, payload: e}
        }

        function clearBy(e = (() => !0)) {
            return {type: L, payload: e}
        }

        const U = function makeWindow() {
                var e = {
                    location: {}, history: {}, open: () => {
                    }, close: () => {
                    }, File: function () {
                    }, FormData: function () {
                    }
                };
                if ("undefined" == typeof window) return e;
                try {
                    e = window;
                    for (var t of ["File", "Blob", "FormData"]) t in window && (e[t] = window[t])
                } catch (e) {
                    console.error(e)
                }
                return e
            }(), z = require("@braintree/sanitize-url"),
            B = (require("lodash/camelCase"), require("lodash/upperFirst"), require("lodash/memoize"));
        var F = __webpack_require__.n(B);
        const W = require("lodash/find");
        var H = __webpack_require__.n(W);
        const X = require("lodash/some");
        var G = __webpack_require__.n(X);
        const Y = require("lodash/eq");
        var Q = __webpack_require__.n(Y);
        const Z = require("lodash/isFunction");
        var ee = __webpack_require__.n(Z);
        const te = require("css.escape");
        var re = __webpack_require__.n(te);
        const ae = require("randombytes");
        var ne = __webpack_require__.n(ae);
        const se = require("sha.js");
        var oe = __webpack_require__.n(se);
        const le = q().Set.of("type", "format", "items", "default", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "uniqueItems", "enum", "multipleOf");

        function getParameterSchema(e, {isOAS3: t} = {}) {
            if (!q().Map.isMap(e)) return {schema: q().Map(), parameterContentMediaType: null};
            if (!t) return "body" === e.get("in") ? {
                schema: e.get("schema", q().Map()),
                parameterContentMediaType: null
            } : {schema: e.filter(((e, t) => le.includes(t))), parameterContentMediaType: null};
            if (e.get("content")) {
                const t = e.get("content", q().Map({})).keySeq().first();
                return {schema: e.getIn(["content", t, "schema"], q().Map()), parameterContentMediaType: t}
            }
            return {schema: e.get("schema") ? e.get("schema", q().Map()) : q().Map(), parameterContentMediaType: null}
        }

        var ce = __webpack_require__(158).Buffer;
        const ie = "default", isImmutable = e => q().Iterable.isIterable(e);

        function objectify(e) {
            return isObject(e) ? isImmutable(e) ? e.toJS() : e : {}
        }

        function fromJSOrdered(e) {
            if (isImmutable(e)) return e;
            if (e instanceof U.File) return e;
            if (!isObject(e)) return e;
            if (Array.isArray(e)) return q().Seq(e).map(fromJSOrdered).toList();
            if (ee()(e.entries)) {
                const t = function createObjWithHashedKeys(e) {
                    if (!ee()(e.entries)) return e;
                    const t = {}, r = "_**[]", a = {};
                    for (let n of e.entries()) if (t[n[0]] || a[n[0]] && a[n[0]].containsMultiple) {
                        if (!a[n[0]]) {
                            a[n[0]] = {
                                containsMultiple: !0,
                                length: 1
                            }, t[`${n[0]}${r}${a[n[0]].length}`] = t[n[0]], delete t[n[0]]
                        }
                        a[n[0]].length += 1, t[`${n[0]}${r}${a[n[0]].length}`] = n[1]
                    } else t[n[0]] = n[1];
                    return t
                }(e);
                return q().OrderedMap(t).map(fromJSOrdered)
            }
            return q().OrderedMap(e).map(fromJSOrdered)
        }

        function normalizeArray(e) {
            return Array.isArray(e) ? e : [e]
        }

        function isFn(e) {
            return "function" == typeof e
        }

        function isObject(e) {
            return !!e && "object" == typeof e
        }

        function isFunc(e) {
            return "function" == typeof e
        }

        function isArray(e) {
            return Array.isArray(e)
        }

        const pe = F();

        function objMap(e, t) {
            return Object.keys(e).reduce(((r, a) => (r[a] = t(e[a], a), r)), {})
        }

        function objReduce(e, t) {
            return Object.keys(e).reduce(((r, a) => {
                let n = t(e[a], a);
                return n && "object" == typeof n && Object.assign(r, n), r
            }), {})
        }

        function systemThunkMiddleware(e) {
            return ({dispatch: t, getState: r}) => t => r => "function" == typeof r ? r(e()) : t(r)
        }

        function validateValueBySchema(e, t, r, a, n) {
            if (!t) return [];
            let s = [], o = t.get("nullable"), l = t.get("required"), c = t.get("maximum"), i = t.get("minimum"),
                p = t.get("type"), m = t.get("format"), u = t.get("maxLength"), d = t.get("minLength"),
                h = t.get("uniqueItems"), g = t.get("maxItems"), y = t.get("minItems"), f = t.get("pattern");
            const S = r || !0 === l, E = null != e;
            if (o && null === e || !p || !(S || E && "array" === p || !(!S && !E))) return [];
            let _ = "string" === p && e, v = "array" === p && Array.isArray(e) && e.length,
                w = "array" === p && q().List.isList(e) && e.count();
            const b = [_, v, w, "array" === p && "string" == typeof e && e, "file" === p && e instanceof U.File, "boolean" === p && (e || !1 === e), "number" === p && (e || 0 === e), "integer" === p && (e || 0 === e), "object" === p && "object" == typeof e && null !== e, "object" === p && "string" == typeof e && e].some((e => !!e));
            if (S && !b && !a) return s.push("Required field is not provided"), s;
            if ("object" === p && (null === n || "application/json" === n)) {
                let r = e;
                if ("string" == typeof e) try {
                    r = JSON.parse(e)
                } catch (e) {
                    return s.push("Parameter string value must be valid JSON"), s
                }
                t && t.has("required") && isFunc(l.isList) && l.isList() && l.forEach((e => {
                    void 0 === r[e] && s.push({propKey: e, error: "Required property not found"})
                })), t && t.has("properties") && t.get("properties").forEach(((e, t) => {
                    const o = validateValueBySchema(r[t], e, !1, a, n);
                    s.push(...o.map((e => ({propKey: t, error: e}))))
                }))
            }
            if (f) {
                let t = ((e, t) => {
                    if (!new RegExp(t).test(e)) return "Value must follow pattern " + t
                })(e, f);
                t && s.push(t)
            }
            if (y && "array" === p) {
                let t = ((e, t) => {
                    if (!e && t >= 1 || e && e.length < t) return `Array must contain at least ${t} item${1 === t ? "" : "s"}`
                })(e, y);
                t && s.push(t)
            }
            if (g && "array" === p) {
                let t = ((e, t) => {
                    if (e && e.length > t) return `Array must not contain more then ${t} item${1 === t ? "" : "s"}`
                })(e, g);
                t && s.push({needRemove: !0, error: t})
            }
            if (h && "array" === p) {
                let t = ((e, t) => {
                    if (e && ("true" === t || !0 === t)) {
                        const t = (0, I.fromJS)(e), r = t.toSet();
                        if (e.length > r.size) {
                            let e = (0, I.Set)();
                            if (t.forEach(((r, a) => {
                                t.filter((e => isFunc(e.equals) ? e.equals(r) : e === r)).size > 1 && (e = e.add(a))
                            })), 0 !== e.size) return e.map((e => ({
                                index: e,
                                error: "No duplicates allowed."
                            }))).toArray()
                        }
                    }
                })(e, h);
                t && s.push(...t)
            }
            if (u || 0 === u) {
                let t = ((e, t) => {
                    if (e.length > t) return `Value must be no longer than ${t} character${1 !== t ? "s" : ""}`
                })(e, u);
                t && s.push(t)
            }
            if (d) {
                let t = ((e, t) => {
                    if (e.length < t) return `Value must be at least ${t} character${1 !== t ? "s" : ""}`
                })(e, d);
                t && s.push(t)
            }
            if (c || 0 === c) {
                let t = ((e, t) => {
                    if (e > t) return `Value must be less than ${t}`
                })(e, c);
                t && s.push(t)
            }
            if (i || 0 === i) {
                let t = ((e, t) => {
                    if (e < t) return `Value must be greater than ${t}`
                })(e, i);
                t && s.push(t)
            }
            if ("string" === p) {
                let t;
                if (t = "date-time" === m ? (e => {
                    if (isNaN(Date.parse(e))) return "Value must be a DateTime"
                })(e) : "uuid" === m ? (e => {
                    if (e = e.toString().toLowerCase(), !/^[{(]?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}[)}]?$/.test(e)) return "Value must be a Guid"
                })(e) : (e => {
                    if (e && "string" != typeof e) return "Value must be a string"
                })(e), !t) return s;
                s.push(t)
            } else if ("boolean" === p) {
                let t = (e => {
                    if ("true" !== e && "false" !== e && !0 !== e && !1 !== e) return "Value must be a boolean"
                })(e);
                if (!t) return s;
                s.push(t)
            } else if ("number" === p) {
                let t = (e => {
                    if (!/^-?\d+(\.?\d+)?$/.test(e)) return "Value must be a number"
                })(e);
                if (!t) return s;
                s.push(t)
            } else if ("integer" === p) {
                let t = (e => {
                    if (!/^-?\d+$/.test(e)) return "Value must be an integer"
                })(e);
                if (!t) return s;
                s.push(t)
            } else if ("array" === p) {
                if (!v && !w) return s;
                e && e.forEach(((e, r) => {
                    const o = validateValueBySchema(e, t.get("items"), !1, a, n);
                    s.push(...o.map((e => ({index: r, error: e}))))
                }))
            } else if ("file" === p) {
                let t = (e => {
                    if (e && !(e instanceof U.File)) return "Value must be a file"
                })(e);
                if (!t) return s;
                s.push(t)
            }
            return s
        }

        const btoa = e => {
            let t;
            return t = e instanceof ce ? e : ce.from(e.toString(), "utf-8"), t.toString("base64")
        }, me = {
            operationsSorter: {
                alpha: (e, t) => e.get("path").localeCompare(t.get("path")),
                method: (e, t) => e.get("method").localeCompare(t.get("method"))
            }, tagsSorter: {alpha: (e, t) => e.localeCompare(t)}
        }, buildFormData = e => {
            let t = [];
            for (let r in e) {
                let a = e[r];
                void 0 !== a && "" !== a && t.push([r, "=", encodeURIComponent(a).replace(/%20/g, "+")].join(""))
            }
            return t.join("&")
        }, shallowEqualKeys = (e, t, r) => !!H()(r, (r => Q()(e[r], t[r])));

        function sanitizeUrl(e) {
            return "string" != typeof e || "" === e ? "" : (0, z.sanitizeUrl)(e)
        }

        function requiresValidationURL(e) {
            return !(!e || e.indexOf("localhost") >= 0 || e.indexOf("127.0.0.1") >= 0 || "none" === e)
        }

        const createDeepLinkPath = e => "string" == typeof e || e instanceof String ? e.trim().replace(/\s/g, "%20") : "",
            escapeDeepLinkPath = e => re()(createDeepLinkPath(e).replace(/%20/g, "_")),
            getExtensions = e => e.filter(((e, t) => /^x-/.test(t))),
            getCommonExtensions = e => e.filter(((e, t) => /^pattern|maxLength|minLength|maximum|minimum/.test(t)));

        function deeplyStripKey(e, t, r = (() => !0)) {
            if ("object" != typeof e || Array.isArray(e) || null === e || !t) return e;
            const a = Object.assign({}, e);
            return Object.keys(a).forEach((e => {
                e === t && r(a[e], e) ? delete a[e] : a[e] = deeplyStripKey(a[e], t, r)
            })), a
        }

        function stringify(e) {
            if ("string" == typeof e) return e;
            if (e && e.toJS && (e = e.toJS()), "object" == typeof e && null !== e) try {
                return JSON.stringify(e, null, 2)
            } catch (t) {
                return String(e)
            }
            return null == e ? "" : e.toString()
        }

        function paramToIdentifier(e, {returnAll: t = !1, allowHashes: r = !0} = {}) {
            if (!q().Map.isMap(e)) throw new Error("paramToIdentifier: received a non-Im.Map parameter as input");
            const a = e.get("name"), n = e.get("in");
            let s = [];
            return e && e.hashCode && n && a && r && s.push(`${n}.${a}.hash-${e.hashCode()}`), n && a && s.push(`${n}.${a}`), s.push(a), t ? s : s[0] || ""
        }

        function paramToValue(e, t) {
            return paramToIdentifier(e, {returnAll: !0}).map((e => t[e])).filter((e => void 0 !== e))[0]
        }

        function b64toB64UrlEncoded(e) {
            return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
        }

        const isEmptyValue = e => !e || !(!isImmutable(e) || !e.isEmpty()), idFn = e => e;

        class Store {
            constructor(e = {}) {
                O()(this, {
                    state: {},
                    plugins: [],
                    pluginsOptions: {},
                    system: {configs: {}, fn: {}, components: {}, rootInjects: {}, statePlugins: {}},
                    boundSystem: {},
                    toolbox: {}
                }, e), this.getSystem = this._getSystem.bind(this), this.store = function configureStore(e, t, r) {
                    return function createStoreWithMiddleware(e, t, r) {
                        let a = [systemThunkMiddleware(r)];
                        const n = U.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || A.compose;
                        return (0, A.createStore)(e, t, n((0, A.applyMiddleware)(...a)))
                    }(e, t, r)
                }(idFn, (0, I.fromJS)(this.state), this.getSystem), this.buildSystem(!1), this.register(this.plugins)
            }

            getStore() {
                return this.store
            }

            register(e, t = !0) {
                var r = combinePlugins(e, this.getSystem(), this.pluginsOptions);
                systemExtend(this.system, r), t && this.buildSystem();
                callAfterLoad.call(this.system, e, this.getSystem()) && this.buildSystem()
            }

            buildSystem(e = !0) {
                let t = this.getStore().dispatch, r = this.getStore().getState;
                this.boundSystem = Object.assign({}, this.getRootInjects(), this.getWrappedAndBoundActions(t), this.getWrappedAndBoundSelectors(r, this.getSystem), this.getStateThunks(r), this.getFn(), this.getConfigs()), e && this.rebuildReducer()
            }

            _getSystem() {
                return this.boundSystem
            }

            getRootInjects() {
                return Object.assign({
                    getSystem: this.getSystem,
                    getStore: this.getStore.bind(this),
                    getComponents: this.getComponents.bind(this),
                    getState: this.getStore().getState,
                    getConfigs: this._getConfigs.bind(this),
                    Im: q(),
                    React: k()
                }, this.system.rootInjects || {})
            }

            _getConfigs() {
                return this.system.configs
            }

            getConfigs() {
                return {configs: this.system.configs}
            }

            setConfigs(e) {
                this.system.configs = e
            }

            rebuildReducer() {
                this.store.replaceReducer(function buildReducer(e) {
                    return function allReducers(e) {
                        let t = Object.keys(e).reduce(((t, r) => (t[r] = function makeReducer(e) {
                            return (t = new I.Map, r) => {
                                if (!e) return t;
                                let a = e[r.type];
                                if (a) {
                                    const e = wrapWithTryCatch(a)(t, r);
                                    return null === e ? t : e
                                }
                                return t
                            }
                        }(e[r]), t)), {});
                        if (!Object.keys(t).length) return idFn;
                        return (0, j.combineReducers)(t)
                    }(objMap(e, (e => e.reducers)))
                }(this.system.statePlugins))
            }

            getType(e) {
                let t = e[0].toUpperCase() + e.slice(1);
                return objReduce(this.system.statePlugins, ((r, a) => {
                    let n = r[e];
                    if (n) return {[a + t]: n}
                }))
            }

            getSelectors() {
                return this.getType("selectors")
            }

            getActions() {
                return objMap(this.getType("actions"), (e => objReduce(e, ((e, t) => {
                    if (isFn(e)) return {[t]: e}
                }))))
            }

            getWrappedAndBoundActions(e) {
                return objMap(this.getBoundActions(e), ((e, t) => {
                    let r = this.system.statePlugins[t.slice(0, -7)].wrapActions;
                    return r ? objMap(e, ((e, t) => {
                        let a = r[t];
                        return a ? (Array.isArray(a) || (a = [a]), a.reduce(((e, t) => {
                            let newAction = (...r) => t(e, this.getSystem())(...r);
                            if (!isFn(newAction)) throw new TypeError("wrapActions needs to return a function that returns a new function (ie the wrapped action)");
                            return wrapWithTryCatch(newAction)
                        }), e || Function.prototype)) : e
                    })) : e
                }))
            }

            getWrappedAndBoundSelectors(e, t) {
                return objMap(this.getBoundSelectors(e, t), ((t, r) => {
                    let a = [r.slice(0, -9)], n = this.system.statePlugins[a].wrapSelectors;
                    return n ? objMap(t, ((t, r) => {
                        let s = n[r];
                        return s ? (Array.isArray(s) || (s = [s]), s.reduce(((t, r) => {
                            let wrappedSelector = (...n) => r(t, this.getSystem())(e().getIn(a), ...n);
                            if (!isFn(wrappedSelector)) throw new TypeError("wrapSelector needs to return a function that returns a new function (ie the wrapped action)");
                            return wrappedSelector
                        }), t || Function.prototype)) : t
                    })) : t
                }))
            }

            getStates(e) {
                return Object.keys(this.system.statePlugins).reduce(((t, r) => (t[r] = e.get(r), t)), {})
            }

            getStateThunks(e) {
                return Object.keys(this.system.statePlugins).reduce(((t, r) => (t[r] = () => e().get(r), t)), {})
            }

            getFn() {
                return {fn: this.system.fn}
            }

            getComponents(e) {
                const t = this.system.components[e];
                return Array.isArray(t) ? t.reduce(((e, t) => t(e, this.getSystem()))) : void 0 !== e ? this.system.components[e] : this.system.components
            }

            getBoundSelectors(e, t) {
                return objMap(this.getSelectors(), ((r, a) => {
                    let n = [a.slice(0, -9)];
                    return objMap(r, (r => (...a) => {
                        let s = wrapWithTryCatch(r).apply(null, [e().getIn(n), ...a]);
                        return "function" == typeof s && (s = wrapWithTryCatch(s)(t())), s
                    }))
                }))
            }

            getBoundActions(e) {
                e = e || this.getStore().dispatch;
                const t = this.getActions(),
                    process = e => "function" != typeof e ? objMap(e, (e => process(e))) : (...t) => {
                        var r = null;
                        try {
                            r = e(...t)
                        } catch (e) {
                            r = {type: T, error: !0, payload: (0, P.serializeError)(e)}
                        } finally {
                            return r
                        }
                    };
                return objMap(t, (t => (0, A.bindActionCreators)(process(t), e)))
            }

            getMapStateToProps() {
                return () => Object.assign({}, this.getSystem())
            }

            getMapDispatchToProps(e) {
                return t => O()({}, this.getWrappedAndBoundActions(t), this.getFn(), e)
            }
        }

        function combinePlugins(e, t, r) {
            if (isObject(e) && !isArray(e)) return R()({}, e);
            if (isFunc(e)) return combinePlugins(e(t), t, r);
            if (isArray(e)) {
                const a = "chain" === r.pluginLoadType ? t.getComponents() : {};
                return e.map((e => combinePlugins(e, t, r))).reduce(systemExtend, a)
            }
            return {}
        }

        function callAfterLoad(e, t, {hasLoaded: r} = {}) {
            let a = r;
            return isObject(e) && !isArray(e) && "function" == typeof e.afterLoad && (a = !0, wrapWithTryCatch(e.afterLoad).call(this, t)), isFunc(e) ? callAfterLoad.call(this, e(t), t, {hasLoaded: a}) : isArray(e) ? e.map((e => callAfterLoad.call(this, e, t, {hasLoaded: a}))) : a
        }

        function systemExtend(e = {}, t = {}) {
            if (!isObject(e)) return {};
            if (!isObject(t)) return e;
            t.wrapComponents && (objMap(t.wrapComponents, ((r, a) => {
                const n = e.components && e.components[a];
                n && Array.isArray(n) ? (e.components[a] = n.concat([r]), delete t.wrapComponents[a]) : n && (e.components[a] = [n, r], delete t.wrapComponents[a])
            })), Object.keys(t.wrapComponents).length || delete t.wrapComponents);
            const {statePlugins: r} = e;
            if (isObject(r)) for (let e in r) {
                const a = r[e];
                if (!isObject(a)) continue;
                const {wrapActions: n, wrapSelectors: s} = a;
                if (isObject(n)) for (let r in n) {
                    let a = n[r];
                    Array.isArray(a) || (a = [a], n[r] = a), t && t.statePlugins && t.statePlugins[e] && t.statePlugins[e].wrapActions && t.statePlugins[e].wrapActions[r] && (t.statePlugins[e].wrapActions[r] = n[r].concat(t.statePlugins[e].wrapActions[r]))
                }
                if (isObject(s)) for (let r in s) {
                    let a = s[r];
                    Array.isArray(a) || (a = [a], s[r] = a), t && t.statePlugins && t.statePlugins[e] && t.statePlugins[e].wrapSelectors && t.statePlugins[e].wrapSelectors[r] && (t.statePlugins[e].wrapSelectors[r] = s[r].concat(t.statePlugins[e].wrapSelectors[r]))
                }
            }
            return O()(e, t)
        }

        function wrapWithTryCatch(e, {logErrors: t = !0} = {}) {
            return "function" != typeof e ? e : function (...r) {
                try {
                    return e.call(this, ...r)
                } catch (e) {
                    return t && console.error(e), null
                }
            }
        }

        const ue = require("url-parse");
        var de = __webpack_require__.n(ue);
        const he = "show_popup", ge = "authorize", ye = "logout", fe = "pre_authorize_oauth2", Se = "authorize_oauth2",
            Ee = "validate", _e = "configure_auth", ve = "restore_authorization";

        function showDefinitions(e) {
            return {type: he, payload: e}
        }

        function authorize(e) {
            return {type: ge, payload: e}
        }

        const authorizeWithPersistOption = e => ({authActions: t}) => {
            t.authorize(e), t.persistAuthorizationIfNeeded()
        };

        function logout(e) {
            return {type: ye, payload: e}
        }

        const logoutWithPersistOption = e => ({authActions: t}) => {
            t.logout(e), t.persistAuthorizationIfNeeded()
        }, preAuthorizeImplicit = e => ({authActions: t, errActions: r}) => {
            let {auth: a, token: n, isValid: s} = e, {schema: o, name: l} = a, c = o.get("flow");
            delete U.swaggerUIRedirectOauth2, "accessCode" === c || s || r.newAuthErr({
                authId: l,
                source: "auth",
                level: "warning",
                message: "Authorization may be unsafe, passed state was changed in server Passed state wasn't returned from auth server"
            }), n.error ? r.newAuthErr({
                authId: l,
                source: "auth",
                level: "error",
                message: JSON.stringify(n)
            }) : t.authorizeOauth2WithPersistOption({auth: a, token: n})
        };

        function authorizeOauth2(e) {
            return {type: Se, payload: e}
        }

        const authorizeOauth2WithPersistOption = e => ({authActions: t}) => {
            t.authorizeOauth2(e), t.persistAuthorizationIfNeeded()
        }, authorizePassword = e => ({authActions: t}) => {
            let {schema: r, name: a, username: n, password: s, passwordType: o, clientId: l, clientSecret: c} = e,
                i = {grant_type: "password", scope: e.scopes.join(" "), username: n, password: s}, p = {};
            switch (o) {
                case"request-body":
                    !function setClientIdAndSecret(e, t, r) {
                        t && Object.assign(e, {client_id: t});
                        r && Object.assign(e, {client_secret: r})
                    }(i, l, c);
                    break;
                case"basic":
                    p.Authorization = "Basic " + btoa(l + ":" + c);
                    break;
                default:
                    console.warn(`Warning: invalid passwordType ${o} was passed, not including client id and secret`)
            }
            return t.authorizeRequest({
                body: buildFormData(i),
                url: r.get("tokenUrl"),
                name: a,
                headers: p,
                query: {},
                auth: e
            })
        };
        const authorizeApplication = e => ({authActions: t}) => {
            let {schema: r, scopes: a, name: n, clientId: s, clientSecret: o} = e,
                l = {Authorization: "Basic " + btoa(s + ":" + o)},
                c = {grant_type: "client_credentials", scope: a.join(" ")};
            return t.authorizeRequest({body: buildFormData(c), name: n, url: r.get("tokenUrl"), auth: e, headers: l})
        }, authorizeAccessCodeWithFormParams = ({auth: e, redirectUrl: t}) => ({authActions: r}) => {
            let {schema: a, name: n, clientId: s, clientSecret: o, codeVerifier: l} = e, c = {
                grant_type: "authorization_code",
                code: e.code,
                client_id: s,
                client_secret: o,
                redirect_uri: t,
                code_verifier: l
            };
            return r.authorizeRequest({body: buildFormData(c), name: n, url: a.get("tokenUrl"), auth: e})
        }, authorizeAccessCodeWithBasicAuthentication = ({auth: e, redirectUrl: t}) => ({authActions: r}) => {
            let {schema: a, name: n, clientId: s, clientSecret: o, codeVerifier: l} = e,
                c = {Authorization: "Basic " + btoa(s + ":" + o)},
                i = {grant_type: "authorization_code", code: e.code, client_id: s, redirect_uri: t, code_verifier: l};
            return r.authorizeRequest({body: buildFormData(i), name: n, url: a.get("tokenUrl"), auth: e, headers: c})
        }, authorizeRequest = e => ({
                                        fn: t,
                                        getConfigs: r,
                                        authActions: a,
                                        errActions: n,
                                        oas3Selectors: s,
                                        specSelectors: o,
                                        authSelectors: l
                                    }) => {
            let c, {
                body: i,
                query: p = {},
                headers: m = {},
                name: u,
                url: d,
                auth: h
            } = e, {additionalQueryStringParams: g} = l.getConfigs() || {};
            if (o.isOAS3()) {
                let e = s.serverEffectiveValue(s.selectedServer());
                c = de()(d, e, !0)
            } else c = de()(d, o.url(), !0);
            "object" == typeof g && (c.query = Object.assign({}, c.query, g));
            const y = c.toString();
            let f = Object.assign({
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest"
            }, m);
            t.fetch({
                url: y,
                method: "post",
                headers: f,
                query: p,
                body: i,
                requestInterceptor: r().requestInterceptor,
                responseInterceptor: r().responseInterceptor
            }).then((function (e) {
                let t = JSON.parse(e.data), r = t && (t.error || ""), s = t && (t.parseError || "");
                e.ok ? r || s ? n.newAuthErr({
                    authId: u,
                    level: "error",
                    source: "auth",
                    message: JSON.stringify(t)
                }) : a.authorizeOauth2WithPersistOption({auth: h, token: t}) : n.newAuthErr({
                    authId: u,
                    level: "error",
                    source: "auth",
                    message: e.statusText
                })
            })).catch((e => {
                let t = new Error(e).message;
                if (e.response && e.response.data) {
                    const r = e.response.data;
                    try {
                        const e = "string" == typeof r ? JSON.parse(r) : r;
                        e.error && (t += `, error: ${e.error}`), e.error_description && (t += `, description: ${e.error_description}`)
                    } catch (e) {
                    }
                }
                n.newAuthErr({authId: u, level: "error", source: "auth", message: t})
            }))
        };

        function configureAuth(e) {
            return {type: _e, payload: e}
        }

        function restoreAuthorization(e) {
            return {type: ve, payload: e}
        }

        const persistAuthorizationIfNeeded = () => ({authSelectors: e, getConfigs: t}) => {
                if (!t().persistAuthorization) return;
                const r = e.authorized().toJS();
                localStorage.setItem("authorized", JSON.stringify(r))
            }, authPopup = (e, t) => () => {
                U.swaggerUIRedirectOauth2 = t, U.open(e)
            }, we = {
                [he]: (e, {payload: t}) => e.set("showDefinitions", t),
                [ge]: (e, {payload: t}) => {
                    let r = (0, I.fromJS)(t), a = e.get("authorized") || (0, I.Map)();
                    return r.entrySeq().forEach((([t, r]) => {
                        if (!isFunc(r.getIn)) return e.set("authorized", a);
                        let n = r.getIn(["schema", "type"]);
                        if ("apiKey" === n || "http" === n) a = a.set(t, r); else if ("basic" === n) {
                            let e = r.getIn(["value", "username"]), n = r.getIn(["value", "password"]);
                            a = a.setIn([t, "value"], {
                                username: e,
                                header: "Basic " + btoa(e + ":" + n)
                            }), a = a.setIn([t, "schema"], r.get("schema"))
                        }
                    })), e.set("authorized", a)
                },
                [Se]: (e, {payload: t}) => {
                    let r, {auth: a, token: n} = t;
                    a.token = Object.assign({}, n), r = (0, I.fromJS)(a);
                    let s = e.get("authorized") || (0, I.Map)();
                    return s = s.set(r.get("name"), r), e.set("authorized", s)
                },
                [ye]: (e, {payload: t}) => {
                    let r = e.get("authorized").withMutations((e => {
                        t.forEach((t => {
                            e.delete(t)
                        }))
                    }));
                    return e.set("authorized", r)
                },
                [_e]: (e, {payload: t}) => e.set("configs", t),
                [ve]: (e, {payload: t}) => e.set("authorized", (0, I.fromJS)(t.authorized))
            }, be = require("reselect"), state = e => e,
            Ce = (0, be.createSelector)(state, (e => e.get("showDefinitions"))),
            xe = (0, be.createSelector)(state, (() => ({specSelectors: e}) => {
                let t = e.securityDefinitions() || (0, I.Map)({}), r = (0, I.List)();
                return t.entrySeq().forEach((([e, t]) => {
                    let a = (0, I.Map)();
                    a = a.set(e, t), r = r.push(a)
                })), r
            })), getDefinitionsByNames = (e, t) => ({specSelectors: e}) => {
                console.warn("WARNING: getDefinitionsByNames is deprecated and will be removed in the next major version.");
                let r = e.securityDefinitions(), a = (0, I.List)();
                return t.valueSeq().forEach((e => {
                    let t = (0, I.Map)();
                    e.entrySeq().forEach((([e, a]) => {
                        let n, s = r.get(e);
                        "oauth2" === s.get("type") && a.size && (n = s.get("scopes"), n.keySeq().forEach((e => {
                            a.contains(e) || (n = n.delete(e))
                        })), s = s.set("allowedScopes", n)), t = t.set(e, s)
                    })), a = a.push(t)
                })), a
            }, definitionsForRequirements = (e, t = (0, I.List)()) => ({authSelectors: e}) => {
                const r = e.definitionsToAuthorize() || (0, I.List)();
                let a = (0, I.List)();
                return r.forEach((e => {
                    let r = t.find((t => t.get(e.keySeq().first())));
                    r && (e.forEach(((t, a) => {
                        if ("oauth2" === t.get("type")) {
                            const n = r.get(a);
                            let s = t.get("scopes");
                            I.List.isList(n) && I.Map.isMap(s) && (s.keySeq().forEach((e => {
                                n.contains(e) || (s = s.delete(e))
                            })), e = e.set(a, t.set("scopes", s)))
                        }
                    })), a = a.push(e))
                })), a
            }, Oe = (0, be.createSelector)(state, (e => e.get("authorized") || (0, I.Map)())),
            isAuthorized = (e, t) => ({authSelectors: e}) => {
                let r = e.authorized();
                return I.List.isList(t) ? !!t.toJS().filter((e => -1 === Object.keys(e).map((e => !!r.get(e))).indexOf(!1))).length : null
            }, Ne = (0, be.createSelector)(state, (e => e.get("configs"))),
            execute = (e, {authSelectors: t, specSelectors: r}) => ({path: a, method: n, operation: s, extras: o}) => {
                let l = {
                    authorized: t.authorized() && t.authorized().toJS(),
                    definitions: r.securityDefinitions() && r.securityDefinitions().toJS(),
                    specSecurity: r.security() && r.security().toJS()
                };
                return e({path: a, method: n, operation: s, securities: l, ...o})
            }, loaded = (e, t) => r => {
                const {getConfigs: a, authActions: n} = t, s = a();
                if (e(r), s.persistAuthorization) {
                    const e = localStorage.getItem("authorized");
                    e && n.restoreAuthorization({authorized: JSON.parse(e)})
                }
            }, wrap_actions_authorize = (e, t) => r => {
                e(r);
                if (t.getConfigs().persistAuthorization) try {
                    const [{schema: e, value: t}] = Object.values(r), a = "apiKey" === e.get("type"),
                        n = "cookie" === e.get("in");
                    a && n && (document.cookie = `${e.get("name")}=${t}; SameSite=None; Secure`)
                } catch (e) {
                    console.error("Error persisting cookie based apiKey in document.cookie.", e)
                }
            }, wrap_actions_logout = (e, t) => r => {
                const a = t.getConfigs(), n = t.authSelectors.authorized();
                try {
                    a.persistAuthorization && Array.isArray(r) && r.forEach((e => {
                        const t = n.get(e, {}), r = "apiKey" === t.getIn(["schema", "type"]),
                            a = "cookie" === t.getIn(["schema", "in"]);
                        if (r && a) {
                            const e = t.getIn(["schema", "name"]);
                            document.cookie = `${e}=; Max-Age=-99999999`
                        }
                    }))
                } catch (e) {
                    console.error("Error deleting cookie based apiKey from document.cookie.", e)
                }
                e(r)
            }, ke = require("prop-types");
        var Ae = __webpack_require__.n(ke);
        const Ie = require("lodash/omit");
        var qe = __webpack_require__.n(Ie);

        class LockAuthIcon extends k().Component {
            mapStateToProps(e, t) {
                return {state: e, ownProps: qe()(t, Object.keys(t.getSystem()))}
            }

            render() {
                const {getComponent: e, ownProps: t} = this.props, r = e("LockIcon");
                return k().createElement(r, t)
            }
        }

        const je = LockAuthIcon;

        class UnlockAuthIcon extends k().Component {
            mapStateToProps(e, t) {
                return {state: e, ownProps: qe()(t, Object.keys(t.getSystem()))}
            }

            render() {
                const {getComponent: e, ownProps: t} = this.props, r = e("UnlockIcon");
                return k().createElement(r, t)
            }
        }

        const Pe = UnlockAuthIcon;

        function auth() {
            return {
                afterLoad(e) {
                    this.rootInjects = this.rootInjects || {}, this.rootInjects.initOAuth = e.authActions.configureAuth, this.rootInjects.preauthorizeApiKey = preauthorizeApiKey.bind(null, e), this.rootInjects.preauthorizeBasic = preauthorizeBasic.bind(null, e)
                },
                components: {
                    LockAuthIcon: je,
                    UnlockAuthIcon: Pe,
                    LockAuthOperationIcon: je,
                    UnlockAuthOperationIcon: Pe
                },
                statePlugins: {
                    auth: {
                        reducers: we,
                        actions: t,
                        selectors: a,
                        wrapActions: {authorize: wrap_actions_authorize, logout: wrap_actions_logout}
                    }, configs: {wrapActions: {loaded}}, spec: {wrapActions: {execute}}
                }
            }
        }

        function preauthorizeBasic(e, t, r, a) {
            const {authActions: {authorize: n}, specSelectors: {specJson: s, isOAS3: o}} = e,
                l = o() ? ["components", "securitySchemes"] : ["securityDefinitions"], c = s().getIn([...l, t]);
            return c ? n({[t]: {value: {username: r, password: a}, schema: c.toJS()}}) : null
        }

        function preauthorizeApiKey(e, t, r) {
            const {authActions: {authorize: a}, specSelectors: {specJson: n, isOAS3: s}} = e,
                o = s() ? ["components", "securitySchemes"] : ["securityDefinitions"], l = n().getIn([...o, t]);
            return l ? a({[t]: {value: r, schema: l.toJS()}}) : null
        }

        const Me = require("js-yaml");
        var Re = __webpack_require__.n(Me);
        const parseYamlConfig = (e, t) => {
            try {
                return Re().load(e)
            } catch (e) {
                return t && t.errActions.newThrownErr(new Error(e)), {}
            }
        }, Te = "configs_update", Je = "configs_toggle";

        function update(e, t) {
            return {type: Te, payload: {[e]: t}}
        }

        function toggle(e) {
            return {type: Je, payload: e}
        }

        const actions_loaded = () => () => {
            }, downloadConfig = e => t => {
                const {fn: {fetch: r}} = t;
                return r(e)
            }, getConfigByUrl = (e, t) => ({specActions: r}) => {
                if (e) return r.downloadConfig(e).then(next, next);

                function next(a) {
                    a instanceof Error || a.status >= 400 ? (r.updateLoadingStatus("failedConfig"), r.updateLoadingStatus("failedConfig"), r.updateUrl(""), console.error(a.statusText + " " + e.url), t(null)) : t(parseYamlConfig(a.text))
                }
            }, get = (e, t) => e.getIn(Array.isArray(t) ? t : [t]), $e = {
                [Te]: (e, t) => e.merge((0, I.fromJS)(t.payload)), [Je]: (e, t) => {
                    const r = t.payload, a = e.get(r);
                    return e.set(r, !a)
                }
            },
            Ke = {getLocalConfig: () => parseYamlConfig('---\nurl: "https://petstore.swagger.io/v2/swagger.json"\ndom_id: "#swagger-ui"\nvalidatorUrl: "https://validator.swagger.io/validator"\n')};

        function configsPlugin() {
            return {
                statePlugins: {
                    spec: {actions: s, selectors: Ke},
                    configs: {reducers: $e, actions: n, selectors: o}
                }
            }
        }

        const setHash = e => e ? history.pushState(null, null, `#${e}`) : window.location.hash = "",
            De = require("zenscroll");
        var Ve = __webpack_require__.n(De);
        const Le = "layout_scroll_to", Ue = "layout_clear_scroll";
        const ze = {
            fn: {
                getScrollParent: function getScrollParent(e, t) {
                    const r = document.documentElement;
                    let a = getComputedStyle(e);
                    const n = "absolute" === a.position, s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
                    if ("fixed" === a.position) return r;
                    for (let t = e; t = t.parentElement;) if (a = getComputedStyle(t), (!n || "static" !== a.position) && s.test(a.overflow + a.overflowY + a.overflowX)) return t;
                    return r
                }
            }, statePlugins: {
                layout: {
                    actions: {
                        scrollToElement: (e, t) => r => {
                            try {
                                t = t || r.fn.getScrollParent(e), Ve().createScroller(t).to(e)
                            } catch (e) {
                                console.error(e)
                            }
                        },
                        scrollTo: e => ({type: Le, payload: Array.isArray(e) ? e : [e]}),
                        clearScrollTo: () => ({type: Ue}),
                        readyToScroll: (e, t) => r => {
                            const a = r.layoutSelectors.getScrollToKey();
                            q().is(a, (0, I.fromJS)(e)) && (r.layoutActions.scrollToElement(t), r.layoutActions.clearScrollTo())
                        },
                        parseDeepLinkHash: e => ({layoutActions: t, layoutSelectors: r, getConfigs: a}) => {
                            if (a().deepLinking && e) {
                                let a = e.slice(1);
                                "!" === a[0] && (a = a.slice(1)), "/" === a[0] && (a = a.slice(1));
                                const n = a.split("/").map((e => e || "")),
                                    s = r.isShownKeyFromUrlHashArray(n), [o, l = "", c = ""] = s;
                                if ("operations" === o) {
                                    const e = r.isShownKeyFromUrlHashArray([l]);
                                    l.indexOf("_") > -1 && (console.warn("Warning: escaping deep link whitespace with `_` will be unsupported in v4.0, use `%20` instead."), t.show(e.map((e => e.replace(/_/g, " "))), !0)), t.show(e, !0)
                                }
                                (l.indexOf("_") > -1 || c.indexOf("_") > -1) && (console.warn("Warning: escaping deep link whitespace with `_` will be unsupported in v4.0, use `%20` instead."), t.show(s.map((e => e.replace(/_/g, " "))), !0)), t.show(s, !0), t.scrollTo(s)
                            }
                        }
                    },
                    selectors: {
                        getScrollToKey: e => e.get("scrollToKey"), isShownKeyFromUrlHashArray(e, t) {
                            const [r, a] = t;
                            return a ? ["operations", r, a] : r ? ["operations-tag", r] : []
                        }, urlHashArrayFromIsShownKey(e, t) {
                            let [r, a, n] = t;
                            return "operations" == r ? [a, n] : "operations-tag" == r ? [a] : []
                        }
                    },
                    reducers: {
                        [Le]: (e, t) => e.set("scrollToKey", q().fromJS(t.payload)),
                        [Ue]: e => e.delete("scrollToKey")
                    },
                    wrapActions: {
                        show: (e, {getConfigs: t, layoutSelectors: r}) => (...a) => {
                            if (e(...a), t().deepLinking) try {
                                let [e, t] = a;
                                e = Array.isArray(e) ? e : [e];
                                const n = r.urlHashArrayFromIsShownKey(e);
                                if (!n.length) return;
                                const [s, o] = n;
                                if (!t) return setHash("/");
                                2 === n.length ? setHash(createDeepLinkPath(`/${encodeURIComponent(s)}/${encodeURIComponent(o)}`)) : 1 === n.length && setHash(createDeepLinkPath(`/${encodeURIComponent(s)}`))
                            } catch (e) {
                                console.error(e)
                            }
                        }
                    }
                }
            }
        }, Be = require("react-immutable-proptypes");
        var Fe = __webpack_require__.n(Be);
        const operation_wrapper = (e, t) => class OperationWrapper extends k().Component {
            onLoad = e => {
                const {operation: r} = this.props, {tag: a, operationId: n} = r.toObject();
                let {isShownKey: s} = r.toObject();
                s = s || ["operations", a, n], t.layoutActions.readyToScroll(s, e)
            };

            render() {
                return k().createElement("span", {ref: this.onLoad}, k().createElement(e, this.props))
            }
        }, operation_tag_wrapper = (e, t) => class OperationTagWrapper extends k().Component {
            onLoad = e => {
                const {tag: r} = this.props, a = ["operations-tag", r];
                t.layoutActions.readyToScroll(a, e)
            };

            render() {
                return k().createElement("span", {ref: this.onLoad}, k().createElement(e, this.props))
            }
        };

        function deep_linking() {
            return [ze, {
                statePlugins: {
                    configs: {
                        wrapActions: {
                            loaded: (e, t) => (...r) => {
                                e(...r);
                                const a = decodeURIComponent(window.location.hash);
                                t.layoutActions.parseDeepLinkHash(a)
                            }
                        }
                    }
                }, wrapComponents: {operation: operation_wrapper, OperationTag: operation_tag_wrapper}
            }]
        }

        const We = require("lodash/reduce");
        var He = __webpack_require__.n(We);

        function transform(e) {
            return e.map((e => {
                let t = "is not of a type(s)", r = e.get("message").indexOf(t);
                if (r > -1) {
                    let t = e.get("message").slice(r + 19).split(",");
                    return e.set("message", e.get("message").slice(0, r) + function makeNewMessage(e) {
                        return e.reduce(((e, t, r, a) => r === a.length - 1 && a.length > 1 ? e + "or " + t : a[r + 1] && a.length > 2 ? e + t + ", " : a[r + 1] ? e + t + " " : e + t), "should be a")
                    }(t))
                }
                return e
            }))
        }

        const Xe = require("lodash/get");
        var Ge = __webpack_require__.n(Xe);

        function parameter_oneof_transform(e, {jsSpec: t}) {
            return e
        }

        const Ye = [l, c];

        function transformErrors(e) {
            let t = {jsSpec: {}}, r = He()(Ye, ((e, r) => {
                try {
                    return r.transform(e, t).filter((e => !!e))
                } catch (t) {
                    return console.error("Transformer error:", t), e
                }
            }), e);
            return r.filter((e => !!e)).map((e => (!e.get("line") && e.get("path"), e)))
        }

        let Qe = {line: 0, level: "error", message: "Unknown error"};
        const Ze = (0, be.createSelector)((e => e), (e => e.get("errors", (0, I.List)()))),
            et = (0, be.createSelector)(Ze, (e => e.last()));

        function err(t) {
            return {
                statePlugins: {
                    err: {
                        reducers: {
                            [T]: (e, {payload: t}) => {
                                let r = Object.assign(Qe, t, {type: "thrown"});
                                return e.update("errors", (e => (e || (0, I.List)()).push((0, I.fromJS)(r)))).update("errors", (e => transformErrors(e)))
                            },
                            [J]: (e, {payload: t}) => (t = t.map((e => (0, I.fromJS)(Object.assign(Qe, e, {type: "thrown"})))), e.update("errors", (e => (e || (0, I.List)()).concat((0, I.fromJS)(t)))).update("errors", (e => transformErrors(e)))),
                            [$]: (e, {payload: t}) => {
                                let r = (0, I.fromJS)(t);
                                return r = r.set("type", "spec"), e.update("errors", (e => (e || (0, I.List)()).push((0, I.fromJS)(r)).sortBy((e => e.get("line"))))).update("errors", (e => transformErrors(e)))
                            },
                            [K]: (e, {payload: t}) => (t = t.map((e => (0, I.fromJS)(Object.assign(Qe, e, {type: "spec"})))), e.update("errors", (e => (e || (0, I.List)()).concat((0, I.fromJS)(t)))).update("errors", (e => transformErrors(e)))),
                            [D]: (e, {payload: t}) => {
                                let r = (0, I.fromJS)(Object.assign({}, t));
                                return r = r.set("type", "auth"), e.update("errors", (e => (e || (0, I.List)()).push((0, I.fromJS)(r)))).update("errors", (e => transformErrors(e)))
                            },
                            [V]: (e, {payload: t}) => {
                                if (!t || !e.get("errors")) return e;
                                let r = e.get("errors").filter((e => e.keySeq().every((r => {
                                    const a = e.get(r), n = t[r];
                                    return !n || a !== n
                                }))));
                                return e.merge({errors: r})
                            },
                            [L]: (e, {payload: t}) => {
                                if (!t || "function" != typeof t) return e;
                                let r = e.get("errors").filter((e => t(e)));
                                return e.merge({errors: r})
                            }
                        }, actions: e, selectors: i
                    }
                }
            }
        }

        function opsFilter(e, t) {
            return e.filter(((e, r) => -1 !== r.indexOf(t)))
        }

        function filter() {
            return {fn: {opsFilter}}
        }

        const tt = require("@babel/runtime-corejs3/helpers/extends");
        var rt = __webpack_require__.n(tt);
        const arrow_up = ({
                              className: e = null,
                              width: t = 20,
                              height: r = 20,
                              ...a
                          }) => k().createElement("svg", rt()({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                className: e,
                width: t,
                height: r,
                "aria-hidden": "true",
                focusable: "false"
            }, a), k().createElement("path", {d: "M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z"})),
            arrow_down = ({
                              className: e = null,
                              width: t = 20,
                              height: r = 20,
                              ...a
                          }) => k().createElement("svg", rt()({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                className: e,
                width: t,
                height: r,
                "aria-hidden": "true",
                focusable: "false"
            }, a), k().createElement("path", {d: "M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z"})),
            arrow = ({
                         className: e = null,
                         width: t = 20,
                         height: r = 20,
                         ...a
                     }) => k().createElement("svg", rt()({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                className: e,
                width: t,
                height: r,
                "aria-hidden": "true",
                focusable: "false"
            }, a), k().createElement("path", {d: "M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z"})),
            components_close = ({
                                    className: e = null,
                                    width: t = 20,
                                    height: r = 20,
                                    ...a
                                }) => k().createElement("svg", rt()({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                className: e,
                width: t,
                height: r,
                "aria-hidden": "true",
                focusable: "false"
            }, a), k().createElement("path", {d: "M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z"})),
            copy = ({
                        className: e = null,
                        width: t = 15,
                        height: r = 16,
                        ...a
                    }) => k().createElement("svg", rt()({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 15 16",
                className: e,
                width: t,
                height: r,
                "aria-hidden": "true",
                focusable: "false"
            }, a), k().createElement("g", {transform: "translate(2, -1)"}, k().createElement("path", {
                fill: "#ffffff",
                fillRule: "evenodd",
                d: "M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
            }))), lock = ({
                              className: e = null,
                              width: t = 20,
                              height: r = 20,
                              ...a
                          }) => k().createElement("svg", rt()({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                className: e,
                width: t,
                height: r,
                "aria-hidden": "true",
                focusable: "false"
            }, a), k().createElement("path", {d: "M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z"})),
            unlock = ({
                          className: e = null,
                          width: t = 20,
                          height: r = 20,
                          ...a
                      }) => k().createElement("svg", rt()({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                className: e,
                width: t,
                height: r,
                "aria-hidden": "true",
                focusable: "false"
            }, a), k().createElement("path", {d: "M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z"})),
            icons = () => ({
                components: {
                    ArrowUpIcon: arrow_up,
                    ArrowDownIcon: arrow_down,
                    ArrowIcon: arrow,
                    CloseIcon: components_close,
                    CopyIcon: copy,
                    LockIcon: lock,
                    UnlockIcon: unlock
                }
            }), at = "layout_update_layout", nt = "layout_update_filter", st = "layout_update_mode", ot = "layout_show";

        function updateLayout(e) {
            return {type: at, payload: e}
        }

        function updateFilter(e) {
            return {type: nt, payload: e}
        }

        function actions_show(e, t = !0) {
            return e = normalizeArray(e), {type: ot, payload: {thing: e, shown: t}}
        }

        function changeMode(e, t = "") {
            return e = normalizeArray(e), {type: st, payload: {thing: e, mode: t}}
        }

        const lt = {
                [at]: (e, t) => e.set("layout", t.payload),
                [nt]: (e, t) => e.set("filter", t.payload),
                [ot]: (e, t) => {
                    const r = t.payload.shown, a = (0, I.fromJS)(t.payload.thing);
                    return e.update("shown", (0, I.fromJS)({}), (e => e.set(a, r)))
                },
                [st]: (e, t) => {
                    let r = t.payload.thing, a = t.payload.mode;
                    return e.setIn(["modes"].concat(r), (a || "") + "")
                }
            }, current = e => e.get("layout"), currentFilter = e => e.get("filter"),
            isShown = (e, t, r) => (t = normalizeArray(t), e.get("shown", (0, I.fromJS)({})).get((0, I.fromJS)(t), r)),
            whatMode = (e, t, r = "") => (t = normalizeArray(t), e.getIn(["modes", ...t], r)),
            ct = (0, be.createSelector)((e => e), (e => !isShown(e, "editor"))),
            taggedOperations = (e, t) => (r, ...a) => {
                let n = e(r, ...a);
                const {fn: s, layoutSelectors: o, getConfigs: l} = t.getSystem(), c = l(), {maxDisplayedTags: i} = c;
                let p = o.currentFilter();
                return p && !0 !== p && "true" !== p && "false" !== p && (n = s.opsFilter(n, p)), i && !isNaN(i) && i >= 0 && (n = n.slice(0, i)), n
            };

        function plugins_layout() {
            return {statePlugins: {layout: {reducers: lt, actions: p, selectors: m}, spec: {wrapSelectors: u}}}
        }

        function logs({configs: e}) {
            const t = {debug: 0, info: 1, log: 2, warn: 3, error: 4}, getLevel = e => t[e] || -1;
            let {logLevel: r} = e, a = getLevel(r);

            function log(e, ...t) {
                getLevel(e) >= a && console[e](...t)
            }

            return log.warn = log.bind(null, "warn"), log.error = log.bind(null, "error"), log.info = log.bind(null, "info"), log.debug = log.bind(null, "debug"), {rootInjects: {log}}
        }

        let it = !1;

        function on_complete() {
            return {
                statePlugins: {
                    spec: {
                        wrapActions: {
                            updateSpec: e => (...t) => (it = !0, e(...t)),
                            updateJsonSpec: (e, t) => (...r) => {
                                const a = t.getConfigs().onComplete;
                                return it && "function" == typeof a && (setTimeout(a, 0), it = !1), e(...r)
                            }
                        }
                    }
                }
            }
        }

        const extractKey = e => {
                const t = "_**[]";
                return e.indexOf(t) < 0 ? e : e.split(t)[0].trim()
            }, escapeShell = e => "-d " === e || /^[_\/-]/g.test(e) ? e : "'" + e.replace(/'/g, "'\\''") + "'",
            escapeCMD = e => "-d " === (e = e.replace(/\^/g, "^^").replace(/\\"/g, '\\\\"').replace(/"/g, '""').replace(/\n/g, "^\n")) ? e.replace(/-d /g, "-d ^\n") : /^[_\/-]/g.test(e) ? e : '"' + e + '"',
            escapePowershell = e => "-d " === e ? e : /\n/.test(e) ? '@"\n' + e.replace(/"/g, '\\"').replace(/`/g, "``").replace(/\$/, "`$") + '\n"@' : /^[_\/-]/g.test(e) ? e : "'" + e.replace(/"/g, '""').replace(/'/g, "''") + "'";
        const curlify = (e, t, r, a = "") => {
                let n = !1, s = "";
                const addWords = (...e) => s += " " + e.map(t).join(" "),
                    addWordsWithoutLeadingSpace = (...e) => s += e.map(t).join(" "), addNewLine = () => s += ` ${r}`,
                    addIndent = (e = 1) => s += "  ".repeat(e);
                let o = e.get("headers");
                if (s += "curl" + a, e.has("curlOptions") && addWords(...e.get("curlOptions")), addWords("-X", e.get("method")), addNewLine(), addIndent(), addWordsWithoutLeadingSpace(`${e.get("url")}`), o && o.size) for (let t of e.get("headers").entries()) {
                    addNewLine(), addIndent();
                    let [e, r] = t;
                    addWordsWithoutLeadingSpace("-H", `${e}: ${r}`), n = n || /^content-type$/i.test(e) && /^multipart\/form-data$/i.test(r)
                }
                const l = e.get("body");
                if (l) if (n && ["POST", "PUT", "PATCH"].includes(e.get("method"))) for (let [e, t] of l.entrySeq()) {
                    let r = extractKey(e);
                    addNewLine(), addIndent(), addWordsWithoutLeadingSpace("-F"), t instanceof U.File && "string" == typeof t.valueOf() ? addWords(`${r}=${t.data}${t.type ? `;type=${t.type}` : ""}`) : t instanceof U.File ? addWords(`${r}=@${t.name}${t.type ? `;type=${t.type}` : ""}`) : addWords(`${r}=${t}`)
                } else if (l instanceof U.File) addNewLine(), addIndent(), addWordsWithoutLeadingSpace(`--data-binary '@${l.name}'`); else {
                    addNewLine(), addIndent(), addWordsWithoutLeadingSpace("-d ");
                    let t = l;
                    I.Map.isMap(t) ? addWordsWithoutLeadingSpace(function getStringBodyOfMap(e) {
                        let t = [];
                        for (let [r, a] of e.get("body").entrySeq()) {
                            let e = extractKey(r);
                            a instanceof U.File ? t.push(`  "${e}": {\n    "name": "${a.name}"${a.type ? `,\n    "type": "${a.type}"` : ""}\n  }`) : t.push(`  "${e}": ${JSON.stringify(a, null, 2).replace(/(\r\n|\r|\n)/g, "\n  ")}`)
                        }
                        return `{\n${t.join(",\n")}\n}`
                    }(e)) : ("string" != typeof t && (t = JSON.stringify(t)), addWordsWithoutLeadingSpace(t))
                } else l || "POST" !== e.get("method") || (addNewLine(), addIndent(), addWordsWithoutLeadingSpace("-d ''"));
                return s
            }, requestSnippetGenerator_curl_powershell = e => curlify(e, escapePowershell, "`\n", ".exe"),
            requestSnippetGenerator_curl_bash = e => curlify(e, escapeShell, "\\\n"),
            requestSnippetGenerator_curl_cmd = e => curlify(e, escapeCMD, "^\n"),
            request_snippets_selectors_state = e => e || (0, I.Map)(),
            pt = (0, be.createSelector)(request_snippets_selectors_state, (e => {
                const t = e.get("languages"), r = e.get("generators", (0, I.Map)());
                return !t || t.isEmpty() ? r : r.filter(((e, r) => t.includes(r)))
            })), getSnippetGenerators = e => ({fn: t}) => pt(e).map(((e, r) => {
                const a = (e => t[`requestSnippetGenerator_${e}`])(r);
                return "function" != typeof a ? null : e.set("fn", a)
            })).filter((e => e)),
            mt = (0, be.createSelector)(request_snippets_selectors_state, (e => e.get("activeLanguage"))),
            ut = (0, be.createSelector)(request_snippets_selectors_state, (e => e.get("defaultExpanded"))),
            dt = require("react-copy-to-clipboard"), ht = require("react-syntax-highlighter/dist/esm/light");
        var gt = __webpack_require__.n(ht);
        const yt = require("react-syntax-highlighter/dist/esm/languages/hljs/javascript");
        var ft = __webpack_require__.n(yt);
        const St = require("react-syntax-highlighter/dist/esm/languages/hljs/json");
        var Et = __webpack_require__.n(St);
        const _t = require("react-syntax-highlighter/dist/esm/languages/hljs/xml");
        var vt = __webpack_require__.n(_t);
        const wt = require("react-syntax-highlighter/dist/esm/languages/hljs/bash");
        var bt = __webpack_require__.n(wt);
        const Ct = require("react-syntax-highlighter/dist/esm/languages/hljs/yaml");
        var xt = __webpack_require__.n(Ct);
        const Ot = require("react-syntax-highlighter/dist/esm/languages/hljs/http");
        var Nt = __webpack_require__.n(Ot);
        const kt = require("react-syntax-highlighter/dist/esm/languages/hljs/powershell");
        var At = __webpack_require__.n(kt);
        const It = require("react-syntax-highlighter/dist/esm/styles/hljs/agate");
        var qt = __webpack_require__.n(It);
        const jt = require("react-syntax-highlighter/dist/esm/styles/hljs/arta");
        var Pt = __webpack_require__.n(jt);
        const Mt = require("react-syntax-highlighter/dist/esm/styles/hljs/monokai");
        var Rt = __webpack_require__.n(Mt);
        const Tt = require("react-syntax-highlighter/dist/esm/styles/hljs/nord");
        var Jt = __webpack_require__.n(Tt);
        const $t = require("react-syntax-highlighter/dist/esm/styles/hljs/obsidian");
        var Kt = __webpack_require__.n($t);
        const Dt = require("react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night");
        var Vt = __webpack_require__.n(Dt);
        const Lt = require("react-syntax-highlighter/dist/esm/styles/hljs/idea");
        var Ut = __webpack_require__.n(Lt);
        gt().registerLanguage("json", Et()), gt().registerLanguage("js", ft()), gt().registerLanguage("xml", vt()), gt().registerLanguage("yaml", xt()), gt().registerLanguage("http", Nt()), gt().registerLanguage("bash", bt()), gt().registerLanguage("powershell", At()), gt().registerLanguage("javascript", ft());
        const zt = {
                agate: qt(),
                arta: Pt(),
                monokai: Rt(),
                nord: Jt(),
                obsidian: Kt(),
                "tomorrow-night": Vt(),
                idea: Ut()
            }, Bt = Object.keys(zt),
            getStyle = e => Bt.includes(e) ? zt[e] : (console.warn(`Request style '${e}' is not available, returning default instead`), qt()),
            Ft = {
                cursor: "pointer",
                lineHeight: 1,
                display: "inline-flex",
                backgroundColor: "rgb(250, 250, 250)",
                paddingBottom: "0",
                paddingTop: "0",
                border: "1px solid rgb(51, 51, 51)",
                borderRadius: "4px 4px 0 0",
                boxShadow: "none",
                borderBottom: "none"
            }, Wt = {
                cursor: "pointer",
                lineHeight: 1,
                display: "inline-flex",
                backgroundColor: "rgb(51, 51, 51)",
                boxShadow: "none",
                border: "1px solid rgb(51, 51, 51)",
                paddingBottom: "0",
                paddingTop: "0",
                borderRadius: "4px 4px 0 0",
                marginTop: "-5px",
                marginRight: "-5px",
                marginLeft: "-5px",
                zIndex: "9999",
                borderBottom: "none"
            }, request_snippets = ({request: e, requestSnippetsSelectors: t, getConfigs: r, getComponent: a}) => {
                const n = ee()(r) ? r() : null,
                    s = !1 !== Ge()(n, "syntaxHighlight") && Ge()(n, "syntaxHighlight.activated", !0),
                    o = (0, N.useRef)(null), l = a("ArrowUpIcon"),
                    c = a("ArrowDownIcon"), [i, p] = (0, N.useState)(t.getSnippetGenerators()?.keySeq().first()), [m, u] = (0, N.useState)(t?.getDefaultExpanded());
                (0, N.useEffect)((() => {
                }), []), (0, N.useEffect)((() => {
                    const e = Array.from(o.current.childNodes).filter((e => !!e.nodeType && e.classList?.contains("curl-command")));
                    return e.forEach((e => e.addEventListener("mousewheel", handlePreventYScrollingBeyondElement, {passive: !1}))), () => {
                        e.forEach((e => e.removeEventListener("mousewheel", handlePreventYScrollingBeyondElement)))
                    }
                }), [e]);
                const d = t.getSnippetGenerators(), h = d.get(i), g = h.get("fn")(e), handleSetIsExpanded = () => {
                    u(!m)
                }, handleGetBtnStyle = e => e === i ? Wt : Ft, handlePreventYScrollingBeyondElement = e => {
                    const {target: t, deltaY: r} = e, {scrollHeight: a, offsetHeight: n, scrollTop: s} = t;
                    a > n && (0 === s && r < 0 || n + s >= a && r > 0) && e.preventDefault()
                }, y = s ? k().createElement(gt(), {
                    language: h.get("syntax"),
                    className: "curl microlight",
                    style: getStyle(Ge()(n, "syntaxHighlight.theme"))
                }, g) : k().createElement("textarea", {readOnly: !0, className: "curl", value: g});
                return k().createElement("div", {
                    className: "request-snippets",
                    ref: o
                }, k().createElement("div", {
                    style: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginBottom: "15px"
                    }
                }, k().createElement("h4", {
                    onClick: () => handleSetIsExpanded(),
                    style: {cursor: "pointer"}
                }, "Snippets"), k().createElement("button", {
                    onClick: () => handleSetIsExpanded(),
                    style: {border: "none", background: "none"},
                    title: m ? "Collapse operation" : "Expand operation"
                }, m ? k().createElement(c, {
                    className: "arrow",
                    width: "10",
                    height: "10"
                }) : k().createElement(l, {
                    className: "arrow",
                    width: "10",
                    height: "10"
                }))), m && k().createElement("div", {className: "curl-command"}, k().createElement("div", {
                    style: {
                        paddingLeft: "15px",
                        paddingRight: "10px",
                        width: "100%",
                        display: "flex"
                    }
                }, d.entrySeq().map((([e, t]) => k().createElement("div", {
                    style: handleGetBtnStyle(e),
                    className: "btn",
                    key: e,
                    onClick: () => (e => {
                        i !== e && p(e)
                    })(e)
                }, k().createElement("h4", {style: e === i ? {color: "white"} : {}}, t.get("title")))))), k().createElement("div", {className: "copy-to-clipboard"}, k().createElement(dt.CopyToClipboard, {text: g}, k().createElement("button", null))), k().createElement("div", null, y)))
            }, plugins_request_snippets = () => ({
                components: {RequestSnippets: request_snippets},
                fn: d,
                statePlugins: {requestSnippets: {selectors: h}}
            }), Ht = require("xml");
        var Xt = __webpack_require__.n(Ht);
        const Gt = require("randexp");
        var Yt = __webpack_require__.n(Gt);
        const Qt = require("lodash/isEmpty");
        var Zt = __webpack_require__.n(Qt);
        const shallowArrayEquals = e => t => Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every(((e, r) => e === t[r])),
            list = (...e) => e;

        class Cache extends Map {
            delete(e) {
                const t = Array.from(this.keys()).find(shallowArrayEquals(e));
                return super.delete(t)
            }

            get(e) {
                const t = Array.from(this.keys()).find(shallowArrayEquals(e));
                return super.get(t)
            }

            has(e) {
                return -1 !== Array.from(this.keys()).findIndex(shallowArrayEquals(e))
            }
        }

        const utils_memoizeN = (e, t = list) => {
                const {Cache: r} = F();
                F().Cache = Cache;
                const a = F()(e, t);
                return F().Cache = r, a
            }, er = {
                string: e => e.pattern ? (e => {
                    try {
                        return new (Yt())(e).gen()
                    } catch (e) {
                        return "string"
                    }
                })(e.pattern) : "string",
                string_email: () => "user@example.com",
                "string_date-time": () => (new Date).toISOString(),
                string_date: () => (new Date).toISOString().substring(0, 10),
                string_uuid: () => "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                string_hostname: () => "example.com",
                string_ipv4: () => "198.51.100.42",
                string_ipv6: () => "2001:0db8:5b96:0000:0000:426f:8e17:642a",
                number: () => 0,
                number_float: () => 0,
                integer: () => 0,
                boolean: e => "boolean" != typeof e.default || e.default
            }, primitive = e => {
                e = objectify(e);
                let {type: t, format: r} = e, a = er[`${t}_${r}`] || er[t];
                return isFunc(a) ? a(e) : "Unknown Type: " + e.type
            }, sanitizeRef = e => deeplyStripKey(e, "$$ref", (e => "string" == typeof e && e.indexOf("#") > -1)),
            tr = ["maxProperties", "minProperties"], rr = ["minItems", "maxItems"],
            ar = ["minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum"], nr = ["minLength", "maxLength"],
            liftSampleHelper = (e, t, r = {}) => {
                if (["example", "default", "enum", "xml", "type", ...tr, ...rr, ...ar, ...nr].forEach((r => (r => {
                    void 0 === t[r] && void 0 !== e[r] && (t[r] = e[r])
                })(r))), void 0 !== e.required && Array.isArray(e.required) && (void 0 !== t.required && t.required.length || (t.required = []), e.required.forEach((e => {
                    t.required.includes(e) || t.required.push(e)
                }))), e.properties) {
                    t.properties || (t.properties = {});
                    let a = objectify(e.properties);
                    for (let n in a) Object.prototype.hasOwnProperty.call(a, n) && (a[n] && a[n].deprecated || a[n] && a[n].readOnly && !r.includeReadOnly || a[n] && a[n].writeOnly && !r.includeWriteOnly || t.properties[n] || (t.properties[n] = a[n], !e.required && Array.isArray(e.required) && -1 !== e.required.indexOf(n) && (t.required ? t.required.push(n) : t.required = [n])))
                }
                return e.items && (t.items || (t.items = {}), t.items = liftSampleHelper(e.items, t.items, r)), t
            }, sampleFromSchemaGeneric = (e, t = {}, r = void 0, a = !1) => {
                e && isFunc(e.toJS) && (e = e.toJS());
                let n = void 0 !== r || e && void 0 !== e.example || e && void 0 !== e.default;
                const s = !n && e && e.oneOf && e.oneOf.length > 0, o = !n && e && e.anyOf && e.anyOf.length > 0;
                if (!n && (s || o)) {
                    const r = objectify(s ? e.oneOf[0] : e.anyOf[0]);
                    if (liftSampleHelper(r, e, t), !e.xml && r.xml && (e.xml = r.xml), void 0 !== e.example && void 0 !== r.example) n = !0; else if (r.properties) {
                        e.properties || (e.properties = {});
                        let a = objectify(r.properties);
                        for (let n in a) Object.prototype.hasOwnProperty.call(a, n) && (a[n] && a[n].deprecated || a[n] && a[n].readOnly && !t.includeReadOnly || a[n] && a[n].writeOnly && !t.includeWriteOnly || e.properties[n] || (e.properties[n] = a[n], !r.required && Array.isArray(r.required) && -1 !== r.required.indexOf(n) && (e.required ? e.required.push(n) : e.required = [n])))
                    }
                }
                const l = {};
                let {
                    xml: c,
                    type: i,
                    example: p,
                    properties: m,
                    additionalProperties: u,
                    items: d
                } = e || {}, {includeReadOnly: h, includeWriteOnly: g} = t;
                c = c || {};
                let y, {name: f, prefix: S, namespace: E} = c, _ = {};
                if (a && (f = f || "notagname", y = (S ? S + ":" : "") + f, E)) {
                    l[S ? "xmlns:" + S : "xmlns"] = E
                }
                a && (_[y] = []);
                const schemaHasAny = t => t.some((t => Object.prototype.hasOwnProperty.call(e, t)));
                e && !i && (m || u || schemaHasAny(tr) ? i = "object" : d || schemaHasAny(rr) ? i = "array" : schemaHasAny(ar) ? (i = "number", e.type = "number") : n || e.enum || (i = "string", e.type = "string"));
                const handleMinMaxItems = t => {
                    if (null != e?.maxItems && (t = t.slice(0, e?.maxItems)), null != e?.minItems) {
                        let r = 0;
                        for (; t.length < e?.minItems;) t.push(t[r++ % t.length])
                    }
                    return t
                }, v = objectify(m);
                let w, b = 0;
                const hasExceededMaxProperties = () => e && null !== e.maxProperties && void 0 !== e.maxProperties && b >= e.maxProperties,
                    canAddProperty = t => !e || null === e.maxProperties || void 0 === e.maxProperties || !hasExceededMaxProperties() && (!(t => !(e && e.required && e.required.length && e.required.includes(t)))(t) || e.maxProperties - b - (() => {
                        if (!e || !e.required) return 0;
                        let t = 0;
                        return a ? e.required.forEach((e => t += void 0 === _[e] ? 0 : 1)) : e.required.forEach((e => t += void 0 === _[y]?.find((t => void 0 !== t[e])) ? 0 : 1)), e.required.length - t
                    })() > 0);
                if (w = a ? (r, n = void 0) => {
                    if (e && v[r]) {
                        if (v[r].xml = v[r].xml || {}, v[r].xml.attribute) {
                            const e = Array.isArray(v[r].enum) ? v[r].enum[0] : void 0, t = v[r].example, a = v[r].default;
                            return void (l[v[r].xml.name || r] = void 0 !== t ? t : void 0 !== a ? a : void 0 !== e ? e : primitive(v[r]))
                        }
                        v[r].xml.name = v[r].xml.name || r
                    } else v[r] || !1 === u || (v[r] = {xml: {name: r}});
                    let s = sampleFromSchemaGeneric(e && v[r] || void 0, t, n, a);
                    canAddProperty(r) && (b++, Array.isArray(s) ? _[y] = _[y].concat(s) : _[y].push(s))
                } : (r, n) => {
                    if (canAddProperty(r)) {
                        if (Object.prototype.hasOwnProperty.call(e, "discriminator") && e.discriminator && Object.prototype.hasOwnProperty.call(e.discriminator, "mapping") && e.discriminator.mapping && Object.prototype.hasOwnProperty.call(e, "$$ref") && e.$$ref && e.discriminator.propertyName === r) {
                            for (let t in e.discriminator.mapping) if (-1 !== e.$$ref.search(e.discriminator.mapping[t])) {
                                _[r] = t;
                                break
                            }
                        } else _[r] = sampleFromSchemaGeneric(v[r], t, n, a);
                        b++
                    }
                }, n) {
                    let n;
                    if (n = sanitizeRef(void 0 !== r ? r : void 0 !== p ? p : e.default), !a) {
                        if ("number" == typeof n && "string" === i) return `${n}`;
                        if ("string" != typeof n || "string" === i) return n;
                        try {
                            return JSON.parse(n)
                        } catch (e) {
                            return n
                        }
                    }
                    if (e || (i = Array.isArray(n) ? "array" : typeof n), "array" === i) {
                        if (!Array.isArray(n)) {
                            if ("string" == typeof n) return n;
                            n = [n]
                        }
                        const r = e ? e.items : void 0;
                        r && (r.xml = r.xml || c || {}, r.xml.name = r.xml.name || c.name);
                        let s = n.map((e => sampleFromSchemaGeneric(r, t, e, a)));
                        return s = handleMinMaxItems(s), c.wrapped ? (_[y] = s, Zt()(l) || _[y].push({_attr: l})) : _ = s, _
                    }
                    if ("object" === i) {
                        if ("string" == typeof n) return n;
                        for (let t in n) Object.prototype.hasOwnProperty.call(n, t) && (e && v[t] && v[t].readOnly && !h || e && v[t] && v[t].writeOnly && !g || (e && v[t] && v[t].xml && v[t].xml.attribute ? l[v[t].xml.name || t] = n[t] : w(t, n[t])));
                        return Zt()(l) || _[y].push({_attr: l}), _
                    }
                    return _[y] = Zt()(l) ? n : [{_attr: l}, n], _
                }
                if ("object" === i) {
                    for (let e in v) Object.prototype.hasOwnProperty.call(v, e) && (v[e] && v[e].deprecated || v[e] && v[e].readOnly && !h || v[e] && v[e].writeOnly && !g || w(e));
                    if (a && l && _[y].push({_attr: l}), hasExceededMaxProperties()) return _;
                    if (!0 === u) a ? _[y].push({additionalProp: "Anything can be here"}) : _.additionalProp1 = {}, b++; else if (u) {
                        const r = objectify(u), n = sampleFromSchemaGeneric(r, t, void 0, a);
                        if (a && r.xml && r.xml.name && "notagname" !== r.xml.name) _[y].push(n); else {
                            const t = null !== e.minProperties && void 0 !== e.minProperties && b < e.minProperties ? e.minProperties - b : 3;
                            for (let e = 1; e <= t; e++) {
                                if (hasExceededMaxProperties()) return _;
                                if (a) {
                                    const t = {};
                                    t["additionalProp" + e] = n.notagname, _[y].push(t)
                                } else _["additionalProp" + e] = n;
                                b++
                            }
                        }
                    }
                    return _
                }
                if ("array" === i) {
                    if (!d) return;
                    let r;
                    if (a && (d.xml = d.xml || e?.xml || {}, d.xml.name = d.xml.name || c.name), Array.isArray(d.anyOf)) r = d.anyOf.map((e => sampleFromSchemaGeneric(liftSampleHelper(d, e, t), t, void 0, a))); else if (Array.isArray(d.oneOf)) r = d.oneOf.map((e => sampleFromSchemaGeneric(liftSampleHelper(d, e, t), t, void 0, a))); else {
                        if (!(!a || a && c.wrapped)) return sampleFromSchemaGeneric(d, t, void 0, a);
                        r = [sampleFromSchemaGeneric(d, t, void 0, a)]
                    }
                    return r = handleMinMaxItems(r), a && c.wrapped ? (_[y] = r, Zt()(l) || _[y].push({_attr: l}), _) : r
                }
                let C;
                if (e && Array.isArray(e.enum)) C = normalizeArray(e.enum)[0]; else {
                    if (!e) return;
                    if (C = primitive(e), "number" == typeof C) {
                        let t = e.minimum;
                        null != t && (e.exclusiveMinimum && t++, C = t);
                        let r = e.maximum;
                        null != r && (e.exclusiveMaximum && r--, C = r)
                    }
                    if ("string" == typeof C && (null !== e.maxLength && void 0 !== e.maxLength && (C = C.slice(0, e.maxLength)), null !== e.minLength && void 0 !== e.minLength)) {
                        let t = 0;
                        for (; C.length < e.minLength;) C += C[t++ % C.length]
                    }
                }
                if ("file" !== i) return a ? (_[y] = Zt()(l) ? C : [{_attr: l}, C], _) : C
            }, inferSchema = e => (e.schema && (e = e.schema), e.properties && (e.type = "object"), e),
            createXMLExample = (e, t, r) => {
                const a = sampleFromSchemaGeneric(e, t, r, !0);
                if (a) return "string" == typeof a ? a : Xt()(a, {declaration: !0, indent: "\t"})
            }, sampleFromSchema = (e, t, r) => sampleFromSchemaGeneric(e, t, r, !1),
            resolver = (e, t, r) => [e, JSON.stringify(t), JSON.stringify(r)],
            sr = utils_memoizeN(createXMLExample, resolver), or = utils_memoizeN(sampleFromSchema, resolver),
            lr = [{when: /json/, shouldStringifyTypes: ["string"]}], cr = ["object"],
            get_json_sample_schema = e => (t, r, a, n) => {
                const {fn: s} = e(), o = s.memoizedSampleFromSchema(t, r, n), l = typeof o,
                    c = lr.reduce(((e, t) => t.when.test(a) ? [...e, ...t.shouldStringifyTypes] : e), cr);
                return G()(c, (e => e === l)) ? JSON.stringify(o, null, 2) : o
            }, get_yaml_sample_schema = e => (t, r, a, n) => {
                const {fn: s} = e(), o = s.getJsonSampleSchema(t, r, a, n);
                let l;
                try {
                    l = Re().dump(Re().load(o), {lineWidth: -1}, {schema: Me.JSON_SCHEMA}), "\n" === l[l.length - 1] && (l = l.slice(0, l.length - 1))
                } catch (e) {
                    return console.error(e), "error: could not generate yaml example"
                }
                return l.replace(/\t/g, "  ")
            }, get_xml_sample_schema = e => (t, r, a) => {
                const {fn: n} = e();
                if (t && !t.xml && (t.xml = {}), t && !t.xml.name) {
                    if (!t.$$ref && (t.type || t.items || t.properties || t.additionalProperties)) return '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!-- XML example cannot be generated; root element name is undefined --\x3e';
                    if (t.$$ref) {
                        let e = t.$$ref.match(/\S*\/(\S+)$/);
                        t.xml.name = e[1]
                    }
                }
                return n.memoizedCreateXMLExample(t, r, a)
            }, get_sample_schema = e => (t, r = "", a = {}, n = void 0) => {
                const {fn: s} = e();
                return "function" == typeof t?.toJS && (t = t.toJS()), "function" == typeof n?.toJS && (n = n.toJS()), /xml/.test(r) ? s.getXmlSampleSchema(t, a, n) : /(yaml|yml)/.test(r) ? s.getYamlSampleSchema(t, a, r, n) : s.getJsonSampleSchema(t, a, r, n)
            }, json_schema_5_samples = ({getSystem: e}) => {
                const t = get_json_sample_schema(e), r = get_yaml_sample_schema(e), a = get_xml_sample_schema(e),
                    n = get_sample_schema(e);
                return {
                    fn: {
                        jsonSchema5: {
                            inferSchema,
                            sampleFromSchema,
                            sampleFromSchemaGeneric,
                            createXMLExample,
                            memoizedSampleFromSchema: or,
                            memoizedCreateXMLExample: sr,
                            getJsonSampleSchema: t,
                            getYamlSampleSchema: r,
                            getXmlSampleSchema: a,
                            getSampleSchema: n
                        },
                        inferSchema,
                        sampleFromSchema,
                        sampleFromSchemaGeneric,
                        createXMLExample,
                        memoizedSampleFromSchema: or,
                        memoizedCreateXMLExample: sr,
                        getJsonSampleSchema: t,
                        getYamlSampleSchema: r,
                        getXmlSampleSchema: a,
                        getSampleSchema: n
                    }
                }
            }, ir = require("lodash/constant");
        var pr = __webpack_require__.n(ir);
        const mr = ["get", "put", "post", "delete", "options", "head", "patch", "trace"],
            spec_selectors_state = e => e || (0, I.Map)(),
            ur = (0, be.createSelector)(spec_selectors_state, (e => e.get("lastError"))),
            dr = (0, be.createSelector)(spec_selectors_state, (e => e.get("url"))),
            hr = (0, be.createSelector)(spec_selectors_state, (e => e.get("spec") || "")),
            gr = (0, be.createSelector)(spec_selectors_state, (e => e.get("specSource") || "not-editor")),
            yr = (0, be.createSelector)(spec_selectors_state, (e => e.get("json", (0, I.Map)()))),
            fr = (0, be.createSelector)(yr, (e => e.toJS())),
            Sr = (0, be.createSelector)(spec_selectors_state, (e => e.get("resolved", (0, I.Map)()))),
            specResolvedSubtree = (e, t) => e.getIn(["resolvedSubtrees", ...t], void 0),
            mergerFn = (e, t) => I.Map.isMap(e) && I.Map.isMap(t) ? t.get("$$ref") ? t : (0, I.OrderedMap)().mergeWith(mergerFn, e, t) : t,
            Er = (0, be.createSelector)(spec_selectors_state, (e => (0, I.OrderedMap)().mergeWith(mergerFn, e.get("json"), e.get("resolvedSubtrees")))),
            spec = e => yr(e), _r = (0, be.createSelector)(spec, (() => !1)),
            vr = (0, be.createSelector)(spec, (e => returnSelfOrNewMap(e && e.get("info")))),
            wr = (0, be.createSelector)(spec, (e => returnSelfOrNewMap(e && e.get("externalDocs")))),
            br = (0, be.createSelector)(vr, (e => e && e.get("version"))),
            Cr = (0, be.createSelector)(br, (e => /v?([0-9]*)\.([0-9]*)\.([0-9]*)/i.exec(e).slice(1))),
            xr = (0, be.createSelector)(Er, (e => e.get("paths"))),
            Or = pr()(["get", "put", "post", "delete", "options", "head", "patch"]),
            Nr = (0, be.createSelector)(xr, (e => {
                if (!e || e.size < 1) return (0, I.List)();
                let t = (0, I.List)();
                return e && e.forEach ? (e.forEach(((e, r) => {
                    if (!e || !e.forEach) return {};
                    e.forEach(((e, a) => {
                        mr.indexOf(a) < 0 || (t = t.push((0, I.fromJS)({
                            path: r,
                            method: a,
                            operation: e,
                            id: `${a}-${r}`
                        })))
                    }))
                })), t) : (0, I.List)()
            })), kr = (0, be.createSelector)(spec, (e => (0, I.Set)(e.get("consumes")))),
            Ar = (0, be.createSelector)(spec, (e => (0, I.Set)(e.get("produces")))),
            Ir = (0, be.createSelector)(spec, (e => e.get("security", (0, I.List)()))),
            qr = (0, be.createSelector)(spec, (e => e.get("securityDefinitions"))), findDefinition = (e, t) => {
                const r = e.getIn(["resolvedSubtrees", "definitions", t], null),
                    a = e.getIn(["json", "definitions", t], null);
                return r || a || null
            }, jr = (0, be.createSelector)(spec, (e => {
                const t = e.get("definitions");
                return I.Map.isMap(t) ? t : (0, I.Map)()
            })), Pr = (0, be.createSelector)(spec, (e => e.get("basePath"))),
            Mr = (0, be.createSelector)(spec, (e => e.get("host"))),
            Rr = (0, be.createSelector)(spec, (e => e.get("schemes", (0, I.Map)()))),
            Tr = (0, be.createSelector)([Nr, kr, Ar], ((e, t, r) => e.map((e => e.update("operation", (e => {
                if (e) {
                    if (!I.Map.isMap(e)) return;
                    return e.withMutations((e => (e.get("consumes") || e.update("consumes", (e => (0, I.Set)(e).merge(t))), e.get("produces") || e.update("produces", (e => (0, I.Set)(e).merge(r))), e)))
                }
                return (0, I.Map)()
            })))))), Jr = (0, be.createSelector)(spec, (e => {
                const t = e.get("tags", (0, I.List)());
                return I.List.isList(t) ? t.filter((e => I.Map.isMap(e))) : (0, I.List)()
            })),
            tagDetails = (e, t) => (Jr(e) || (0, I.List)()).filter(I.Map.isMap).find((e => e.get("name") === t), (0, I.Map)()),
            $r = (0, be.createSelector)(Tr, Jr, ((e, t) => e.reduce(((e, t) => {
                let r = (0, I.Set)(t.getIn(["operation", "tags"]));
                return r.count() < 1 ? e.update("default", (0, I.List)(), (e => e.push(t))) : r.reduce(((e, r) => e.update(r, (0, I.List)(), (e => e.push(t)))), e)
            }), t.reduce(((e, t) => e.set(t.get("name"), (0, I.List)())), (0, I.OrderedMap)())))),
            selectors_taggedOperations = e => ({getConfigs: t}) => {
                let {tagsSorter: r, operationsSorter: a} = t();
                return $r(e).sortBy(((e, t) => t), ((e, t) => {
                    let a = "function" == typeof r ? r : me.tagsSorter[r];
                    return a ? a(e, t) : null
                })).map(((t, r) => {
                    let n = "function" == typeof a ? a : me.operationsSorter[a], s = n ? t.sort(n) : t;
                    return (0, I.Map)({tagDetails: tagDetails(e, r), operations: s})
                }))
            }, Kr = (0, be.createSelector)(spec_selectors_state, (e => e.get("responses", (0, I.Map)()))),
            Dr = (0, be.createSelector)(spec_selectors_state, (e => e.get("requests", (0, I.Map)()))),
            Vr = (0, be.createSelector)(spec_selectors_state, (e => e.get("mutatedRequests", (0, I.Map)()))),
            responseFor = (e, t, r) => Kr(e).getIn([t, r], null), requestFor = (e, t, r) => Dr(e).getIn([t, r], null),
            mutatedRequestFor = (e, t, r) => Vr(e).getIn([t, r], null), allowTryItOutFor = () => !0,
            parameterWithMetaByIdentity = (e, t, r) => {
                const a = Er(e).getIn(["paths", ...t, "parameters"], (0, I.OrderedMap)()),
                    n = e.getIn(["meta", "paths", ...t, "parameters"], (0, I.OrderedMap)());
                return a.map((e => {
                    const t = n.get(`${r.get("in")}.${r.get("name")}`),
                        a = n.get(`${r.get("in")}.${r.get("name")}.hash-${r.hashCode()}`);
                    return (0, I.OrderedMap)().merge(e, t, a)
                })).find((e => e.get("in") === r.get("in") && e.get("name") === r.get("name")), (0, I.OrderedMap)())
            }, parameterInclusionSettingFor = (e, t, r, a) => {
                const n = `${a}.${r}`;
                return e.getIn(["meta", "paths", ...t, "parameter_inclusions", n], !1)
            }, parameterWithMeta = (e, t, r, a) => {
                const n = Er(e).getIn(["paths", ...t, "parameters"], (0, I.OrderedMap)()).find((e => e.get("in") === a && e.get("name") === r), (0, I.OrderedMap)());
                return parameterWithMetaByIdentity(e, t, n)
            }, operationWithMeta = (e, t, r) => {
                const a = Er(e).getIn(["paths", t, r], (0, I.OrderedMap)()),
                    n = e.getIn(["meta", "paths", t, r], (0, I.OrderedMap)()),
                    s = a.get("parameters", (0, I.List)()).map((a => parameterWithMetaByIdentity(e, [t, r], a)));
                return (0, I.OrderedMap)().merge(a, n).set("parameters", s)
            };

        function getParameter(e, t, r, a) {
            return t = t || [], e.getIn(["meta", "paths", ...t, "parameters"], (0, I.fromJS)([])).find((e => I.Map.isMap(e) && e.get("name") === r && e.get("in") === a)) || (0, I.Map)()
        }

        const Lr = (0, be.createSelector)(spec, (e => {
            const t = e.get("host");
            return "string" == typeof t && t.length > 0 && "/" !== t[0]
        }));

        function parameterValues(e, t, r) {
            return t = t || [], operationWithMeta(e, ...t).get("parameters", (0, I.List)()).reduce(((e, t) => {
                let a = r && "body" === t.get("in") ? t.get("value_xml") : t.get("value");
                return I.List.isList(a) && (a = a.filter((e => "" !== e))), e.set(paramToIdentifier(t, {allowHashes: !1}), a)
            }), (0, I.fromJS)({}))
        }

        function parametersIncludeIn(e, t = "") {
            if (I.List.isList(e)) return e.some((e => I.Map.isMap(e) && e.get("in") === t))
        }

        function parametersIncludeType(e, t = "") {
            if (I.List.isList(e)) return e.some((e => I.Map.isMap(e) && e.get("type") === t))
        }

        function contentTypeValues(e, t) {
            t = t || [];
            let r = Er(e).getIn(["paths", ...t], (0, I.fromJS)({})),
                a = e.getIn(["meta", "paths", ...t], (0, I.fromJS)({})), n = currentProducesFor(e, t);
            const s = r.get("parameters") || new I.List,
                o = a.get("consumes_value") ? a.get("consumes_value") : parametersIncludeType(s, "file") ? "multipart/form-data" : parametersIncludeType(s, "formData") ? "application/x-www-form-urlencoded" : void 0;
            return (0, I.fromJS)({requestContentType: o, responseContentType: n})
        }

        function currentProducesFor(e, t) {
            t = t || [];
            const r = Er(e).getIn(["paths", ...t], null);
            if (null === r) return;
            const a = e.getIn(["meta", "paths", ...t, "produces_value"], null), n = r.getIn(["produces", 0], null);
            return a || n || "application/json"
        }

        function producesOptionsFor(e, t) {
            t = t || [];
            const r = Er(e), a = r.getIn(["paths", ...t], null);
            if (null === a) return;
            const [n] = t, s = a.get("produces", null), o = r.getIn(["paths", n, "produces"], null),
                l = r.getIn(["produces"], null);
            return s || o || l
        }

        function consumesOptionsFor(e, t) {
            t = t || [];
            const r = Er(e), a = r.getIn(["paths", ...t], null);
            if (null === a) return;
            const [n] = t, s = a.get("consumes", null), o = r.getIn(["paths", n, "consumes"], null),
                l = r.getIn(["consumes"], null);
            return s || o || l
        }

        const operationScheme = (e, t, r) => {
                let a = e.get("url").match(/^([a-z][a-z0-9+\-.]*):/), n = Array.isArray(a) ? a[1] : null;
                return e.getIn(["scheme", t, r]) || e.getIn(["scheme", "_defaultScheme"]) || n || ""
            }, canExecuteScheme = (e, t, r) => ["http", "https"].indexOf(operationScheme(e, t, r)) > -1,
            validationErrors = (e, t) => {
                t = t || [];
                let r = e.getIn(["meta", "paths", ...t, "parameters"], (0, I.fromJS)([]));
                const a = [];
                return r.forEach((e => {
                    let t = e.get("errors");
                    t && t.count() && t.forEach((e => a.push(e)))
                })), a
            }, validateBeforeExecute = (e, t) => 0 === validationErrors(e, t).length,
            getOAS3RequiredRequestBodyContentType = (e, t) => {
                let r = {requestBody: !1, requestContentType: {}},
                    a = e.getIn(["resolvedSubtrees", "paths", ...t, "requestBody"], (0, I.fromJS)([]));
                return a.size < 1 || (a.getIn(["required"]) && (r.requestBody = a.getIn(["required"])), a.getIn(["content"]).entrySeq().forEach((e => {
                    const t = e[0];
                    if (e[1].getIn(["schema", "required"])) {
                        const a = e[1].getIn(["schema", "required"]).toJS();
                        r.requestContentType[t] = a
                    }
                }))), r
            }, isMediaTypeSchemaPropertiesEqual = (e, t, r, a) => {
                if ((r || a) && r === a) return !0;
                let n = e.getIn(["resolvedSubtrees", "paths", ...t, "requestBody", "content"], (0, I.fromJS)([]));
                if (n.size < 2 || !r || !a) return !1;
                let s = n.getIn([r, "schema", "properties"], (0, I.fromJS)([])),
                    o = n.getIn([a, "schema", "properties"], (0, I.fromJS)([]));
                return !!s.equals(o)
            };

        function returnSelfOrNewMap(e) {
            return I.Map.isMap(e) ? e : new I.Map
        }

        const Ur = require("lodash/isString");
        var zr = __webpack_require__.n(Ur);
        const Br = require("lodash/debounce");
        var Fr = __webpack_require__.n(Br);
        const Wr = require("lodash/set");
        var Hr = __webpack_require__.n(Wr);
        const Xr = require("lodash/fp/assocPath");
        var Gr = __webpack_require__.n(Xr);
        const Yr = "spec_update_spec", Qr = "spec_update_url", Zr = "spec_update_json", ea = "spec_update_param",
            ta = "spec_update_empty_param_inclusion", ra = "spec_validate_param", aa = "spec_set_response",
            na = "spec_set_request", sa = "spec_set_mutated_request", oa = "spec_log_request",
            la = "spec_clear_response", ca = "spec_clear_request", ia = "spec_clear_validate_param",
            pa = "spec_update_operation_meta_value", ma = "spec_update_resolved", ua = "spec_update_resolved_subtree",
            da = "set_scheme", toStr = e => zr()(e) ? e : "";

        function updateSpec(e) {
            const t = toStr(e).replace(/\t/g, "  ");
            if ("string" == typeof e) return {type: Yr, payload: t}
        }

        function updateResolved(e) {
            return {type: ma, payload: e}
        }

        function updateUrl(e) {
            return {type: Qr, payload: e}
        }

        function updateJsonSpec(e) {
            return {type: Zr, payload: e}
        }

        const parseToJson = e => ({specActions: t, specSelectors: r, errActions: a}) => {
            let {specStr: n} = r, s = null;
            try {
                e = e || n(), a.clear({source: "parser"}), s = Re().load(e, {schema: Me.JSON_SCHEMA})
            } catch (e) {
                return console.error(e), a.newSpecErr({
                    source: "parser",
                    level: "error",
                    message: e.reason,
                    line: e.mark && e.mark.line ? e.mark.line + 1 : void 0
                })
            }
            return s && "object" == typeof s ? t.updateJsonSpec(s) : {}
        };
        let ha = !1;
        const resolveSpec = (e, t) => ({
                                           specActions: r,
                                           specSelectors: a,
                                           errActions: n,
                                           fn: {fetch: s, resolve: o, AST: l = {}},
                                           getConfigs: c
                                       }) => {
            ha || (console.warn("specActions.resolveSpec is deprecated since v3.10.0 and will be removed in v4.0.0; use requestResolvedSubtree instead!"), ha = !0);
            const {modelPropertyMacro: i, parameterMacro: p, requestInterceptor: m, responseInterceptor: u} = c();
            void 0 === e && (e = a.specJson()), void 0 === t && (t = a.url());
            let d = l.getLineNumberForPath ? l.getLineNumberForPath : () => {
            }, h = a.specStr();
            return o({
                fetch: s,
                spec: e,
                baseDoc: String(new URL(t, document.baseURI)),
                modelPropertyMacro: i,
                parameterMacro: p,
                requestInterceptor: m,
                responseInterceptor: u
            }).then((({spec: e, errors: t}) => {
                if (n.clear({type: "thrown"}), Array.isArray(t) && t.length > 0) {
                    let e = t.map((e => (console.error(e), e.line = e.fullPath ? d(h, e.fullPath) : null, e.path = e.fullPath ? e.fullPath.join(".") : null, e.level = "error", e.type = "thrown", e.source = "resolver", Object.defineProperty(e, "message", {
                        enumerable: !0,
                        value: e.message
                    }), e)));
                    n.newThrownErrBatch(e)
                }
                return r.updateResolved(e)
            }))
        };
        let ga = [];
        const ya = Fr()((() => {
            const e = ga.reduce(((e, {
                path: t,
                system: r
            }) => (e.has(r) || e.set(r, []), e.get(r).push(t), e)), new Map);
            ga = [], e.forEach((async (e, t) => {
                if (!t) return void console.error("debResolveSubtrees: don't have a system to operate on, aborting.");
                if (!t.fn.resolveSubtree) return void console.error("Error: Swagger-Client did not provide a `resolveSubtree` method, doing nothing.");
                const {
                    errActions: r,
                    errSelectors: a,
                    fn: {resolveSubtree: n, fetch: s, AST: o = {}},
                    specSelectors: l,
                    specActions: c
                } = t, i = o.getLineNumberForPath ?? pr()(void 0), p = l.specStr(), {
                    modelPropertyMacro: m,
                    parameterMacro: u,
                    requestInterceptor: d,
                    responseInterceptor: h
                } = t.getConfigs();
                try {
                    const t = await e.reduce((async (e, t) => {
                        let {resultMap: o, specWithCurrentSubtrees: c} = await e;
                        const {errors: g, spec: y} = await n(c, t, {
                            baseDoc: String(new URL(l.url(), document.baseURI)),
                            modelPropertyMacro: m,
                            parameterMacro: u,
                            requestInterceptor: d,
                            responseInterceptor: h
                        });
                        if (a.allErrors().size && r.clearBy((e => "thrown" !== e.get("type") || "resolver" !== e.get("source") || !e.get("fullPath").every(((e, r) => e === t[r] || void 0 === t[r])))), Array.isArray(g) && g.length > 0) {
                            let e = g.map((e => (e.line = e.fullPath ? i(p, e.fullPath) : null, e.path = e.fullPath ? e.fullPath.join(".") : null, e.level = "error", e.type = "thrown", e.source = "resolver", Object.defineProperty(e, "message", {
                                enumerable: !0,
                                value: e.message
                            }), e)));
                            r.newThrownErrBatch(e)
                        }
                        return y && l.isOAS3() && "components" === t[0] && "securitySchemes" === t[1] && await Promise.all(Object.values(y).filter((e => "openIdConnect" === e.type)).map((async e => {
                            const t = {url: e.openIdConnectUrl, requestInterceptor: d, responseInterceptor: h};
                            try {
                                const r = await s(t);
                                r instanceof Error || r.status >= 400 ? console.error(r.statusText + " " + t.url) : e.openIdConnectData = JSON.parse(r.text)
                            } catch (e) {
                                console.error(e)
                            }
                        }))), Hr()(o, t, y), c = Gr()(t, y, c), {resultMap: o, specWithCurrentSubtrees: c}
                    }), Promise.resolve({
                        resultMap: (l.specResolvedSubtree([]) || (0, I.Map)()).toJS(),
                        specWithCurrentSubtrees: l.specJS()
                    }));
                    c.updateResolvedSubtree([], t.resultMap)
                } catch (e) {
                    console.error(e)
                }
            }))
        }), 35), requestResolvedSubtree = e => t => {
            ga.find((({path: r, system: a}) => a === t && r.toString() === e.toString())) || (ga.push({
                path: e,
                system: t
            }), ya())
        };

        function changeParam(e, t, r, a, n) {
            return {type: ea, payload: {path: e, value: a, paramName: t, paramIn: r, isXml: n}}
        }

        function changeParamByIdentity(e, t, r, a) {
            return {type: ea, payload: {path: e, param: t, value: r, isXml: a}}
        }

        const updateResolvedSubtree = (e, t) => ({type: ua, payload: {path: e, value: t}}),
            invalidateResolvedSubtreeCache = () => ({type: ua, payload: {path: [], value: (0, I.Map)()}}),
            validateParams = (e, t) => ({type: ra, payload: {pathMethod: e, isOAS3: t}}),
            updateEmptyParamInclusion = (e, t, r, a) => ({
                type: ta,
                payload: {pathMethod: e, paramName: t, paramIn: r, includeEmptyValue: a}
            });

        function clearValidateParams(e) {
            return {type: ia, payload: {pathMethod: e}}
        }

        function changeConsumesValue(e, t) {
            return {type: pa, payload: {path: e, value: t, key: "consumes_value"}}
        }

        function changeProducesValue(e, t) {
            return {type: pa, payload: {path: e, value: t, key: "produces_value"}}
        }

        const setResponse = (e, t, r) => ({payload: {path: e, method: t, res: r}, type: aa}),
            setRequest = (e, t, r) => ({payload: {path: e, method: t, req: r}, type: na}),
            setMutatedRequest = (e, t, r) => ({payload: {path: e, method: t, req: r}, type: sa}),
            logRequest = e => ({payload: e, type: oa}),
            executeRequest = e => ({fn: t, specActions: r, specSelectors: a, getConfigs: n, oas3Selectors: s}) => {
                let {pathName: o, method: l, operation: c} = e, {requestInterceptor: i, responseInterceptor: p} = n(),
                    m = c.toJS();
                if (c && c.get("parameters") && c.get("parameters").filter((e => e && !0 === e.get("allowEmptyValue"))).forEach((t => {
                    if (a.parameterInclusionSettingFor([o, l], t.get("name"), t.get("in"))) {
                        e.parameters = e.parameters || {};
                        const r = paramToValue(t, e.parameters);
                        (!r || r && 0 === r.size) && (e.parameters[t.get("name")] = "")
                    }
                })), e.contextUrl = de()(a.url()).toString(), m && m.operationId ? e.operationId = m.operationId : m && o && l && (e.operationId = t.opId(m, o, l)), a.isOAS3()) {
                    const t = `${o}:${l}`;
                    e.server = s.selectedServer(t) || s.selectedServer();
                    const r = s.serverVariables({server: e.server, namespace: t}).toJS(),
                        a = s.serverVariables({server: e.server}).toJS();
                    e.serverVariables = Object.keys(r).length ? r : a, e.requestContentType = s.requestContentType(o, l), e.responseContentType = s.responseContentType(o, l) || "*/*";
                    const n = s.requestBodyValue(o, l), c = s.requestBodyInclusionSetting(o, l);
                    n && n.toJS ? e.requestBody = n.map((e => I.Map.isMap(e) ? e.get("value") : e)).filter(((e, t) => (Array.isArray(e) ? 0 !== e.length : !isEmptyValue(e)) || c.get(t))).toJS() : e.requestBody = n
                }
                let u = Object.assign({}, e);
                u = t.buildRequest(u), r.setRequest(e.pathName, e.method, u);
                e.requestInterceptor = async t => {
                    let a = await i.apply(void 0, [t]), n = Object.assign({}, a);
                    return r.setMutatedRequest(e.pathName, e.method, n), a
                }, e.responseInterceptor = p;
                const d = Date.now();
                return t.execute(e).then((t => {
                    t.duration = Date.now() - d, r.setResponse(e.pathName, e.method, t)
                })).catch((t => {
                    "Failed to fetch" === t.message && (t.name = "", t.message = '**Failed to fetch.**  \n**Possible Reasons:** \n  - CORS \n  - Network Failure \n  - URL scheme must be "http" or "https" for CORS request.'), r.setResponse(e.pathName, e.method, {
                        error: !0,
                        err: t
                    })
                }))
            }, actions_execute = ({path: e, method: t, ...r} = {}) => a => {
                let {fn: {fetch: n}, specSelectors: s, specActions: o} = a, l = s.specJsonWithResolvedSubtrees().toJS(),
                    c = s.operationScheme(e, t), {
                        requestContentType: i,
                        responseContentType: p
                    } = s.contentTypeValues([e, t]).toJS(), m = /xml/i.test(i), u = s.parameterValues([e, t], m).toJS();
                return o.executeRequest({
                    ...r,
                    fetch: n,
                    spec: l,
                    pathName: e,
                    method: t,
                    parameters: u,
                    requestContentType: i,
                    scheme: c,
                    responseContentType: p
                })
            };

        function clearResponse(e, t) {
            return {type: la, payload: {path: e, method: t}}
        }

        function clearRequest(e, t) {
            return {type: ca, payload: {path: e, method: t}}
        }

        function setScheme(e, t, r) {
            return {type: da, payload: {scheme: e, path: t, method: r}}
        }

        const fa = {
                [Yr]: (e, t) => "string" == typeof t.payload ? e.set("spec", t.payload) : e,
                [Qr]: (e, t) => e.set("url", t.payload + ""),
                [Zr]: (e, t) => e.set("json", fromJSOrdered(t.payload)),
                [ma]: (e, t) => e.setIn(["resolved"], fromJSOrdered(t.payload)),
                [ua]: (e, t) => {
                    const {value: r, path: a} = t.payload;
                    return e.setIn(["resolvedSubtrees", ...a], fromJSOrdered(r))
                },
                [ea]: (e, {payload: t}) => {
                    let {path: r, paramName: a, paramIn: n, param: s, value: o, isXml: l} = t,
                        c = s ? paramToIdentifier(s) : `${n}.${a}`;
                    const i = l ? "value_xml" : "value";
                    return e.setIn(["meta", "paths", ...r, "parameters", c, i], (0, I.fromJS)(o))
                },
                [ta]: (e, {payload: t}) => {
                    let {pathMethod: r, paramName: a, paramIn: n, includeEmptyValue: s} = t;
                    if (!a || !n) return console.warn("Warning: UPDATE_EMPTY_PARAM_INCLUSION could not generate a paramKey."), e;
                    const o = `${n}.${a}`;
                    return e.setIn(["meta", "paths", ...r, "parameter_inclusions", o], s)
                },
                [ra]: (e, {payload: {pathMethod: t, isOAS3: r}}) => {
                    const a = Er(e).getIn(["paths", ...t]), n = parameterValues(e, t).toJS();
                    return e.updateIn(["meta", "paths", ...t, "parameters"], (0, I.fromJS)({}), (s => a.get("parameters", (0, I.List)()).reduce(((a, s) => {
                        const o = paramToValue(s, n), l = parameterInclusionSettingFor(e, t, s.get("name"), s.get("in")),
                            c = ((e, t, {isOAS3: r = !1, bypassRequiredCheck: a = !1} = {}) => {
                                let n = e.get("required"), {
                                    schema: s,
                                    parameterContentMediaType: o
                                } = getParameterSchema(e, {isOAS3: r});
                                return validateValueBySchema(t, s, n, a, o)
                            })(s, o, {bypassRequiredCheck: l, isOAS3: r});
                        return a.setIn([paramToIdentifier(s), "errors"], (0, I.fromJS)(c))
                    }), s)))
                },
                [ia]: (e, {payload: {pathMethod: t}}) => e.updateIn(["meta", "paths", ...t, "parameters"], (0, I.fromJS)([]), (e => e.map((e => e.set("errors", (0, I.fromJS)([])))))),
                [aa]: (e, {payload: {res: t, path: r, method: a}}) => {
                    let n;
                    n = t.error ? Object.assign({
                        error: !0,
                        name: t.err.name,
                        message: t.err.message,
                        statusCode: t.err.statusCode
                    }, t.err.response) : t, n.headers = n.headers || {};
                    let s = e.setIn(["responses", r, a], fromJSOrdered(n));
                    return U.Blob && n.data instanceof U.Blob && (s = s.setIn(["responses", r, a, "text"], n.data)), s
                },
                [na]: (e, {payload: {req: t, path: r, method: a}}) => e.setIn(["requests", r, a], fromJSOrdered(t)),
                [sa]: (e, {payload: {req: t, path: r, method: a}}) => e.setIn(["mutatedRequests", r, a], fromJSOrdered(t)),
                [pa]: (e, {payload: {path: t, value: r, key: a}}) => {
                    let n = ["paths", ...t], s = ["meta", "paths", ...t];
                    return e.getIn(["json", ...n]) || e.getIn(["resolved", ...n]) || e.getIn(["resolvedSubtrees", ...n]) ? e.setIn([...s, a], (0, I.fromJS)(r)) : e
                },
                [la]: (e, {payload: {path: t, method: r}}) => e.deleteIn(["responses", t, r]),
                [ca]: (e, {payload: {path: t, method: r}}) => e.deleteIn(["requests", t, r]),
                [da]: (e, {
                    payload: {
                        scheme: t,
                        path: r,
                        method: a
                    }
                }) => r && a ? e.setIn(["scheme", r, a], t) : r || a ? void 0 : e.setIn(["scheme", "_defaultScheme"], t)
            }, wrap_actions_updateSpec = (e, {specActions: t}) => (...r) => {
                e(...r), t.parseToJson(...r)
            }, wrap_actions_updateJsonSpec = (e, {specActions: t}) => (...r) => {
                e(...r), t.invalidateResolvedSubtreeCache();
                const [a] = r, n = Ge()(a, ["paths"]) || {};
                Object.keys(n).forEach((e => {
                    Ge()(n, [e]).$ref && t.requestResolvedSubtree(["paths", e])
                })), t.requestResolvedSubtree(["components", "securitySchemes"])
            }, wrap_actions_executeRequest = (e, {specActions: t}) => r => (t.logRequest(r), e(r)),
            wrap_actions_validateParams = (e, {specSelectors: t}) => r => e(r, t.isOAS3()), plugins_spec = () => ({
                statePlugins: {
                    spec: {
                        wrapActions: {...f},
                        reducers: {...fa},
                        actions: {...y},
                        selectors: {...g}
                    }
                }
            }), Sa = require("swagger-client/es/resolver/strategies/generic");
        var Ea = __webpack_require__.n(Sa);
        const _a = require("swagger-client/es/resolver/strategies/openapi-2");
        var va = __webpack_require__.n(_a);
        const wa = require("swagger-client/es/resolver/strategies/openapi-3-0");
        var ba = __webpack_require__.n(wa);
        const Ca = require("swagger-client/es/resolver/strategies/openapi-3-1-apidom");
        var xa = __webpack_require__.n(Ca);
        const Oa = require("swagger-client/es/resolver"), Na = require("swagger-client/es/execute"),
            ka = require("swagger-client/es/http");
        var Aa = __webpack_require__.n(ka);
        const Ia = require("swagger-client/es/subtree-resolver"), qa = require("swagger-client/es/helpers"),
            configs_wrap_actions_loaded = (e, t) => (...r) => {
                e(...r);
                const a = t.getConfigs().withCredentials;
                void 0 !== a && (t.fn.fetch.withCredentials = "string" == typeof a ? "true" === a : !!a)
            };

        function swagger_client({configs: e, getConfigs: t}) {
            return {
                fn: {
                    fetch: (0, ka.makeHttp)(Aa(), e.preFetch, e.postFetch),
                    buildRequest: Na.buildRequest,
                    execute: Na.execute,
                    resolve: (0, Oa.makeResolve)({strategies: [xa(), ba(), va(), Ea()]}),
                    resolveSubtree: async (e, r, a = {}) => {
                        const n = t(), s = {
                            modelPropertyMacro: n.modelPropertyMacro,
                            parameterMacro: n.parameterMacro,
                            requestInterceptor: n.requestInterceptor,
                            responseInterceptor: n.responseInterceptor,
                            strategies: [xa(), ba(), va(), Ea()]
                        };
                        return (0, Ia.makeResolveSubtree)(s)(e, r, a)
                    },
                    serializeRes: ka.serializeRes,
                    opId: qa.opId
                }, statePlugins: {configs: {wrapActions: {loaded: configs_wrap_actions_loaded}}}
            }
        }

        function util() {
            return {fn: {shallowEqualKeys}}
        }

        const ja = require("react-dom");
        var Pa = __webpack_require__.n(ja);
        const Ma = require("react-redux"), Ra = require("lodash/identity");
        var Ta = __webpack_require__.n(Ra);
        const withSystem = e => t => {
                const {fn: r} = e();

                class WithSystem extends N.Component {
                    render() {
                        return k().createElement(t, rt()({}, e(), this.props, this.context))
                    }
                }

                return WithSystem.displayName = `WithSystem(${r.getDisplayName(t)})`, WithSystem
            }, withRoot = (e, t) => r => {
                const {fn: a} = e();

                class WithRoot extends N.Component {
                    render() {
                        return k().createElement(Ma.Provider, {store: t}, k().createElement(r, rt()({}, this.props, this.context)))
                    }
                }

                return WithRoot.displayName = `WithRoot(${a.getDisplayName(r)})`, WithRoot
            }, withConnect = (e, t, r) => (0, A.compose)(r ? withRoot(e, r) : Ta(), (0, Ma.connect)(((r, a) => {
                const n = {...a, ...e()}, s = t.prototype?.mapStateToProps || (e => ({state: e}));
                return s(r, n)
            })), withSystem(e))(t), handleProps = (e, t, r, a) => {
                for (const n in t) {
                    const s = t[n];
                    "function" == typeof s && s(r[n], a[n], e())
                }
            }, withMappedContainer = (e, t, r) => (t, a) => {
                const {fn: n} = e(), s = r(t, "root");

                class WithMappedContainer extends N.Component {
                    constructor(t, r) {
                        super(t, r), handleProps(e, a, t, {})
                    }

                    UNSAFE_componentWillReceiveProps(t) {
                        handleProps(e, a, t, this.props)
                    }

                    render() {
                        const e = qe()(this.props, a ? Object.keys(a) : []);
                        return k().createElement(s, e)
                    }
                }

                return WithMappedContainer.displayName = `WithMappedContainer(${n.getDisplayName(s)})`, WithMappedContainer
            }, render = (e, t, r, a) => n => {
                const s = r(e, t, a)("App", "root"), {createRoot: o} = Pa();
                o(n).render(k().createElement(s, null))
            }, getComponent = (e, t, r) => (a, n, s = {}) => {
                if ("string" != typeof a) throw new TypeError("Need a string, to fetch a component. Was given a " + typeof a);
                const o = r(a);
                return o ? n ? "root" === n ? withConnect(e, o, t()) : withConnect(e, o) : o : (s.failSilently || e().log.warn("Could not find component:", a), null)
            }, getDisplayName = e => e.displayName || e.name || "Component",
            view = ({getComponents: e, getStore: t, getSystem: r}) => {
                const a = (n = getComponent(r, t, e), pe(n, ((...e) => JSON.stringify(e))));
                var n;
                const s = (e => utils_memoizeN(e, ((...e) => e)))(withMappedContainer(r, 0, a));
                return {
                    rootInjects: {getComponent: a, makeMappedContainer: s, render: render(r, t, getComponent, e)},
                    fn: {getDisplayName}
                }
            }, view_legacy = ({React: e, getSystem: t, getStore: r, getComponents: a}) => {
                const n = {}, s = parseInt(e?.version, 10);
                return s >= 16 && s < 18 && (n.render = ((e, t, r, a) => n => {
                    const s = r(e, t, a)("App", "root");
                    Pa().render(k().createElement(s, null), n)
                })(t, r, getComponent, a)), {rootInjects: n}
            };

        function downloadUrlPlugin(e) {
            let {fn: t} = e;
            const r = {
                download: e => ({errActions: r, specSelectors: a, specActions: n, getConfigs: s}) => {
                    let {fetch: o} = t;
                    const l = s();

                    function next(t) {
                        if (t instanceof Error || t.status >= 400) return n.updateLoadingStatus("failed"), r.newThrownErr(Object.assign(new Error((t.message || t.statusText) + " " + e), {source: "fetch"})), void (!t.status && t instanceof Error && function checkPossibleFailReasons() {
                            try {
                                let t;
                                if ("URL" in U ? t = new URL(e) : (t = document.createElement("a"), t.href = e), "https:" !== t.protocol && "https:" === U.location.protocol) {
                                    const e = Object.assign(new Error(`Possible mixed-content issue? The page was loaded over https:// but a ${t.protocol}// URL was specified. Check that you are not attempting to load mixed content.`), {source: "fetch"});
                                    return void r.newThrownErr(e)
                                }
                                if (t.origin !== U.location.origin) {
                                    const e = Object.assign(new Error(`Possible cross-origin (CORS) issue? The URL origin (${t.origin}) does not match the page (${U.location.origin}). Check the server returns the correct 'Access-Control-Allow-*' headers.`), {source: "fetch"});
                                    r.newThrownErr(e)
                                }
                            } catch (e) {
                                return
                            }
                        }());
                        n.updateLoadingStatus("success"), n.updateSpec(t.text), a.url() !== e && n.updateUrl(e)
                    }

                    e = e || a.url(), n.updateLoadingStatus("loading"), r.clear({source: "fetch"}), o({
                        url: e,
                        loadSpec: !0,
                        requestInterceptor: l.requestInterceptor || (e => e),
                        responseInterceptor: l.responseInterceptor || (e => e),
                        credentials: "same-origin",
                        headers: {Accept: "application/json,*/*"}
                    }).then(next, next)
                }, updateLoadingStatus: e => {
                    let t = [null, "loading", "failed", "success", "failedConfig"];
                    return -1 === t.indexOf(e) && console.error(`Error: ${e} is not one of ${JSON.stringify(t)}`), {
                        type: "spec_update_loading_status",
                        payload: e
                    }
                }
            };
            let a = {loadingStatus: (0, be.createSelector)((e => e || (0, I.Map)()), (e => e.get("loadingStatus") || null))};
            return {
                statePlugins: {
                    spec: {
                        actions: r,
                        reducers: {spec_update_loading_status: (e, t) => "string" == typeof t.payload ? e.set("loadingStatus", t.payload) : e},
                        selectors: a
                    }
                }
            }
        }

        const Ja = require("lodash/zipObject");
        var $a = __webpack_require__.n(Ja);
        const Ka = console.error, withErrorBoundary = e => t => {
                const {getComponent: r, fn: a} = e(), n = r("ErrorBoundary"), s = a.getDisplayName(t);

                class WithErrorBoundary extends N.Component {
                    render() {
                        return k().createElement(n, {
                            targetName: s,
                            getComponent: r,
                            fn: a
                        }, k().createElement(t, rt()({}, this.props, this.context)))
                    }
                }

                var o;
                return WithErrorBoundary.displayName = `WithErrorBoundary(${s})`, (o = t).prototype && o.prototype.isReactComponent && (WithErrorBoundary.prototype.mapStateToProps = t.prototype.mapStateToProps), WithErrorBoundary
            },
            fallback = ({name: e}) => k().createElement("div", {className: "fallback"}, "😱 ", k().createElement("i", null, "Could not render ", "t" === e ? "this component" : e, ", see the console."));

        class ErrorBoundary extends N.Component {
            static defaultProps = {
                targetName: "this component",
                getComponent: () => fallback,
                fn: {componentDidCatch: Ka},
                children: null
            };

            static getDerivedStateFromError(e) {
                return {hasError: !0, error: e}
            }

            constructor(...e) {
                super(...e), this.state = {hasError: !1, error: null}
            }

            componentDidCatch(e, t) {
                this.props.fn.componentDidCatch(e, t)
            }

            render() {
                const {getComponent: e, targetName: t, children: r} = this.props;
                if (this.state.hasError) {
                    const r = e("Fallback");
                    return k().createElement(r, {name: t})
                }
                return r
            }
        }

        const Da = ErrorBoundary,
            safe_render = ({componentList: e = [], fullOverride: t = !1} = {}) => ({getSystem: r}) => {
                const a = t ? e : ["App", "BaseLayout", "VersionPragmaFilter", "InfoContainer", "ServersContainer", "SchemesContainer", "AuthorizeBtnContainer", "FilterContainer", "Operations", "OperationContainer", "parameters", "responses", "OperationServers", "Models", "ModelWrapper", ...e],
                    n = $a()(a, Array(a.length).fill(((e, {fn: t}) => t.withErrorBoundary(e))));
                return {
                    fn: {componentDidCatch: Ka, withErrorBoundary: withErrorBoundary(r)},
                    components: {ErrorBoundary: Da, Fallback: fallback},
                    wrapComponents: n
                }
            };

        class App extends k().Component {
            getLayout() {
                const {getComponent: e, layoutSelectors: t} = this.props, r = t.current(), a = e(r, !0);
                return a || (() => k().createElement("h1", null, ' No layout defined for "', r, '" '))
            }

            render() {
                const e = this.getLayout();
                return k().createElement(e, null)
            }
        }

        const Va = App;

        class AuthorizationPopup extends k().Component {
            close = () => {
                let {authActions: e} = this.props;
                e.showDefinitions(!1)
            };

            render() {
                let {
                    authSelectors: e,
                    authActions: t,
                    getComponent: r,
                    errSelectors: a,
                    specSelectors: n,
                    fn: {AST: s = {}}
                } = this.props, o = e.shownDefinitions();
                const l = r("auths"), c = r("CloseIcon");
                return k().createElement("div", {className: "dialog-ux"}, k().createElement("div", {className: "backdrop-ux"}), k().createElement("div", {className: "modal-ux"}, k().createElement("div", {className: "modal-dialog-ux"}, k().createElement("div", {className: "modal-ux-inner"}, k().createElement("div", {className: "modal-ux-header"}, k().createElement("h3", null, "Available authorizations"), k().createElement("button", {
                    type: "button",
                    className: "close-modal",
                    onClick: this.close
                }, k().createElement(c, null))), k().createElement("div", {className: "modal-ux-content"}, o.valueSeq().map(((o, c) => k().createElement(l, {
                    key: c,
                    AST: s,
                    definitions: o,
                    getComponent: r,
                    errSelectors: a,
                    authSelectors: e,
                    authActions: t,
                    specSelectors: n
                }))))))))
            }
        }

        class AuthorizeBtn extends k().Component {
            render() {
                let {isAuthorized: e, showPopup: t, onClick: r, getComponent: a} = this.props;
                const n = a("authorizationPopup", !0), s = a("LockAuthIcon", !0), o = a("UnlockAuthIcon", !0);
                return k().createElement("div", {className: "auth-wrapper"}, k().createElement("button", {
                    className: e ? "btn authorize locked" : "btn authorize unlocked",
                    onClick: r
                }, k().createElement("span", null, "Authorize"), e ? k().createElement(s, null) : k().createElement(o, null)), t && k().createElement(n, null))
            }
        }

        class AuthorizeBtnContainer extends k().Component {
            render() {
                const {authActions: e, authSelectors: t, specSelectors: r, getComponent: a} = this.props,
                    n = r.securityDefinitions(), s = t.definitionsToAuthorize(), o = a("authorizeBtn");
                return n ? k().createElement(o, {
                    onClick: () => e.showDefinitions(s),
                    isAuthorized: !!t.authorized().size,
                    showPopup: !!t.shownDefinitions(),
                    getComponent: a
                }) : null
            }
        }

        class AuthorizeOperationBtn extends k().Component {
            onClick = e => {
                e.stopPropagation();
                let {onClick: t} = this.props;
                t && t()
            };

            render() {
                let {isAuthorized: e, getComponent: t} = this.props;
                const r = t("LockAuthOperationIcon", !0), a = t("UnlockAuthOperationIcon", !0);
                return k().createElement("button", {
                    className: "authorization__btn",
                    "aria-label": e ? "authorization button locked" : "authorization button unlocked",
                    onClick: this.onClick
                }, e ? k().createElement(r, {className: "locked"}) : k().createElement(a, {className: "unlocked"}))
            }
        }

        class Auths extends k().Component {
            constructor(e, t) {
                super(e, t), this.state = {}
            }

            onAuthChange = e => {
                let {name: t} = e;
                this.setState({[t]: e})
            };
            submitAuth = e => {
                e.preventDefault();
                let {authActions: t} = this.props;
                t.authorizeWithPersistOption(this.state)
            };
            logoutClick = e => {
                e.preventDefault();
                let {authActions: t, definitions: r} = this.props, a = r.map(((e, t) => t)).toArray();
                this.setState(a.reduce(((e, t) => (e[t] = "", e)), {})), t.logoutWithPersistOption(a)
            };
            close = e => {
                e.preventDefault();
                let {authActions: t} = this.props;
                t.showDefinitions(!1)
            };

            render() {
                let {definitions: e, getComponent: t, authSelectors: r, errSelectors: a} = this.props;
                const n = t("AuthItem"), s = t("oauth2", !0), o = t("Button");
                let l = r.authorized(), c = e.filter(((e, t) => !!l.get(t))),
                    i = e.filter((e => "oauth2" !== e.get("type"))), p = e.filter((e => "oauth2" === e.get("type")));
                return k().createElement("div", {className: "auth-container"}, !!i.size && k().createElement("form", {onSubmit: this.submitAuth}, i.map(((e, r) => k().createElement(n, {
                    key: r,
                    schema: e,
                    name: r,
                    getComponent: t,
                    onAuthChange: this.onAuthChange,
                    authorized: l,
                    errSelectors: a
                }))).toArray(), k().createElement("div", {className: "auth-btn-wrapper"}, i.size === c.size ? k().createElement(o, {
                    className: "btn modal-btn auth",
                    onClick: this.logoutClick,
                    "aria-label": "Remove authorization"
                }, "Logout") : k().createElement(o, {
                    type: "submit",
                    className: "btn modal-btn auth authorize",
                    "aria-label": "Apply credentials"
                }, "Authorize"), k().createElement(o, {
                    className: "btn modal-btn auth btn-done",
                    onClick: this.close
                }, "Close"))), p && p.size ? k().createElement("div", null, k().createElement("div", {className: "scope-def"}, k().createElement("p", null, "Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes."), k().createElement("p", null, "API requires the following scopes. Select which ones you want to grant to Swagger UI.")), e.filter((e => "oauth2" === e.get("type"))).map(((e, t) => k().createElement("div", {key: t}, k().createElement(s, {
                    authorized: l,
                    schema: e,
                    name: t
                })))).toArray()) : null)
            }
        }

        class auth_item_Auths extends k().Component {
            render() {
                let {schema: e, name: t, getComponent: r, onAuthChange: a, authorized: n, errSelectors: s} = this.props;
                const o = r("apiKeyAuth"), l = r("basicAuth");
                let c;
                const i = e.get("type");
                switch (i) {
                    case"apiKey":
                        c = k().createElement(o, {
                            key: t,
                            schema: e,
                            name: t,
                            errSelectors: s,
                            authorized: n,
                            getComponent: r,
                            onChange: a
                        });
                        break;
                    case"basic":
                        c = k().createElement(l, {
                            key: t,
                            schema: e,
                            name: t,
                            errSelectors: s,
                            authorized: n,
                            getComponent: r,
                            onChange: a
                        });
                        break;
                    default:
                        c = k().createElement("div", {key: t}, "Unknown security definition type ", i)
                }
                return k().createElement("div", {key: `${t}-jump`}, c)
            }
        }

        class AuthError extends k().Component {
            render() {
                let {error: e} = this.props, t = e.get("level"), r = e.get("message"), a = e.get("source");
                return k().createElement("div", {className: "errors"}, k().createElement("b", null, a, " ", t), k().createElement("span", null, r))
            }
        }

        class ApiKeyAuth extends k().Component {
            constructor(e, t) {
                super(e, t);
                let {name: r, schema: a} = this.props, n = this.getValue();
                this.state = {name: r, schema: a, value: n}
            }

            getValue() {
                let {name: e, authorized: t} = this.props;
                return t && t.getIn([e, "value"])
            }

            onChange = e => {
                let {onChange: t} = this.props, r = e.target.value, a = Object.assign({}, this.state, {value: r});
                this.setState(a), t(a)
            };

            render() {
                let {schema: e, getComponent: t, errSelectors: r, name: a} = this.props;
                const n = t("Input"), s = t("Row"), o = t("Col"), l = t("authError"), c = t("Markdown", !0),
                    i = t("JumpToPath", !0);
                let p = this.getValue(), m = r.allErrors().filter((e => e.get("authId") === a));
                return k().createElement("div", null, k().createElement("h4", null, k().createElement("code", null, a || e.get("name")), " (apiKey)", k().createElement(i, {path: ["securityDefinitions", a]})), p && k().createElement("h6", null, "Authorized"), k().createElement(s, null, k().createElement(c, {source: e.get("description")})), k().createElement(s, null, k().createElement("p", null, "Name: ", k().createElement("code", null, e.get("name")))), k().createElement(s, null, k().createElement("p", null, "In: ", k().createElement("code", null, e.get("in")))), k().createElement(s, null, k().createElement("label", {htmlFor: "api_key_value"}, "Value:"), p ? k().createElement("code", null, " ****** ") : k().createElement(o, null, k().createElement(n, {
                    id: "api_key_value",
                    type: "text",
                    onChange: this.onChange,
                    autoFocus: !0
                }))), m.valueSeq().map(((e, t) => k().createElement(l, {error: e, key: t}))))
            }
        }

        class BasicAuth extends k().Component {
            constructor(e, t) {
                super(e, t);
                let {schema: r, name: a} = this.props, n = this.getValue().username;
                this.state = {name: a, schema: r, value: n ? {username: n} : {}}
            }

            getValue() {
                let {authorized: e, name: t} = this.props;
                return e && e.getIn([t, "value"]) || {}
            }

            onChange = e => {
                let {onChange: t} = this.props, {value: r, name: a} = e.target, n = this.state.value;
                n[a] = r, this.setState({value: n}), t(this.state)
            };

            render() {
                let {schema: e, getComponent: t, name: r, errSelectors: a} = this.props;
                const n = t("Input"), s = t("Row"), o = t("Col"), l = t("authError"), c = t("JumpToPath", !0),
                    i = t("Markdown", !0);
                let p = this.getValue().username, m = a.allErrors().filter((e => e.get("authId") === r));
                return k().createElement("div", null, k().createElement("h4", null, "Basic authorization", k().createElement(c, {path: ["securityDefinitions", r]})), p && k().createElement("h6", null, "Authorized"), k().createElement(s, null, k().createElement(i, {source: e.get("description")})), k().createElement(s, null, k().createElement("label", {htmlFor: "auth_username"}, "Username:"), p ? k().createElement("code", null, " ", p, " ") : k().createElement(o, null, k().createElement(n, {
                    id: "auth_username",
                    type: "text",
                    required: "required",
                    name: "username",
                    onChange: this.onChange,
                    autoFocus: !0
                }))), k().createElement(s, null, k().createElement("label", {htmlFor: "auth_password"}, "Password:"), p ? k().createElement("code", null, " ****** ") : k().createElement(o, null, k().createElement(n, {
                    id: "auth_password",
                    autoComplete: "new-password",
                    name: "password",
                    type: "password",
                    onChange: this.onChange
                }))), m.valueSeq().map(((e, t) => k().createElement(l, {error: e, key: t}))))
            }
        }

        function Example(e) {
            const {example: t, showValue: r, getComponent: a, getConfigs: n} = e, s = a("Markdown", !0),
                o = a("highlightCode");
            return t ? k().createElement("div", {className: "example"}, t.get("description") ? k().createElement("section", {className: "example__section"}, k().createElement("div", {className: "example__section-header"}, "Example Description"), k().createElement("p", null, k().createElement(s, {source: t.get("description")}))) : null, r && t.has("value") ? k().createElement("section", {className: "example__section"}, k().createElement("div", {className: "example__section-header"}, "Example Value"), k().createElement(o, {
                getConfigs: n,
                value: stringify(t.get("value"))
            })) : null) : null
        }

        class ExamplesSelect extends k().PureComponent {
            static defaultProps = {
                examples: q().Map({}),
                onSelect: (...e) => console.log("DEBUG: ExamplesSelect was not given an onSelect callback", ...e),
                currentExampleKey: null,
                showLabels: !0
            };
            _onSelect = (e, {isSyntheticChange: t = !1} = {}) => {
                "function" == typeof this.props.onSelect && this.props.onSelect(e, {isSyntheticChange: t})
            };
            _onDomSelect = e => {
                if ("function" == typeof this.props.onSelect) {
                    const t = e.target.selectedOptions[0].getAttribute("value");
                    this._onSelect(t, {isSyntheticChange: !1})
                }
            };
            getCurrentExample = () => {
                const {examples: e, currentExampleKey: t} = this.props, r = e.get(t), a = e.keySeq().first(),
                    n = e.get(a);
                return r || n || Map({})
            };

            componentDidMount() {
                const {onSelect: e, examples: t} = this.props;
                if ("function" == typeof e) {
                    const e = t.first(), r = t.keyOf(e);
                    this._onSelect(r, {isSyntheticChange: !0})
                }
            }

            UNSAFE_componentWillReceiveProps(e) {
                const {currentExampleKey: t, examples: r} = e;
                if (r !== this.props.examples && !r.has(t)) {
                    const e = r.first(), t = r.keyOf(e);
                    this._onSelect(t, {isSyntheticChange: !0})
                }
            }

            render() {
                const {
                    examples: e,
                    currentExampleKey: t,
                    isValueModified: r,
                    isModifiedValueAvailable: a,
                    showLabels: n
                } = this.props;
                return k().createElement("div", {className: "examples-select"}, n ? k().createElement("span", {className: "examples-select__section-label"}, "Examples: ") : null, k().createElement("select", {
                    className: "examples-select-element",
                    onChange: this._onDomSelect,
                    value: a && r ? "__MODIFIED__VALUE__" : t || ""
                }, a ? k().createElement("option", {value: "__MODIFIED__VALUE__"}, "[Modified value]") : null, e.map(((e, t) => k().createElement("option", {
                    key: t,
                    value: t
                }, e.get("summary") || t))).valueSeq()))
            }
        }

        const stringifyUnlessList = e => I.List.isList(e) ? e : stringify(e);

        class ExamplesSelectValueRetainer extends k().PureComponent {
            static defaultProps = {
                userHasEditedBody: !1,
                examples: (0, I.Map)({}),
                currentNamespace: "__DEFAULT__NAMESPACE__",
                setRetainRequestBodyValueFlag: () => {
                },
                onSelect: (...e) => console.log("ExamplesSelectValueRetainer: no `onSelect` function was provided", ...e),
                updateValue: (...e) => console.log("ExamplesSelectValueRetainer: no `updateValue` function was provided", ...e)
            };

            constructor(e) {
                super(e);
                const t = this._getCurrentExampleValue();
                this.state = {
                    [e.currentNamespace]: (0, I.Map)({
                        lastUserEditedValue: this.props.currentUserInputValue,
                        lastDownstreamValue: t,
                        isModifiedValueSelected: this.props.userHasEditedBody || this.props.currentUserInputValue !== t
                    })
                }
            }

            componentWillUnmount() {
                this.props.setRetainRequestBodyValueFlag(!1)
            }

            _getStateForCurrentNamespace = () => {
                const {currentNamespace: e} = this.props;
                return (this.state[e] || (0, I.Map)()).toObject()
            };
            _setStateForCurrentNamespace = e => {
                const {currentNamespace: t} = this.props;
                return this._setStateForNamespace(t, e)
            };
            _setStateForNamespace = (e, t) => {
                const r = (this.state[e] || (0, I.Map)()).mergeDeep(t);
                return this.setState({[e]: r})
            };
            _isCurrentUserInputSameAsExampleValue = () => {
                const {currentUserInputValue: e} = this.props;
                return this._getCurrentExampleValue() === e
            };
            _getValueForExample = (e, t) => {
                const {examples: r} = t || this.props;
                return stringifyUnlessList((r || (0, I.Map)({})).getIn([e, "value"]))
            };
            _getCurrentExampleValue = e => {
                const {currentKey: t} = e || this.props;
                return this._getValueForExample(t, e || this.props)
            };
            _onExamplesSelect = (e, {isSyntheticChange: t} = {}, ...r) => {
                const {
                        onSelect: a,
                        updateValue: n,
                        currentUserInputValue: s,
                        userHasEditedBody: o
                    } = this.props, {lastUserEditedValue: l} = this._getStateForCurrentNamespace(),
                    c = this._getValueForExample(e);
                if ("__MODIFIED__VALUE__" === e) return n(stringifyUnlessList(l)), this._setStateForCurrentNamespace({isModifiedValueSelected: !0});
                "function" == typeof a && a(e, {isSyntheticChange: t}, ...r), this._setStateForCurrentNamespace({
                    lastDownstreamValue: c,
                    isModifiedValueSelected: t && o || !!s && s !== c
                }), t || "function" == typeof n && n(stringifyUnlessList(c))
            };

            UNSAFE_componentWillReceiveProps(e) {
                const {
                        currentUserInputValue: t,
                        examples: r,
                        onSelect: a,
                        userHasEditedBody: n
                    } = e, {lastUserEditedValue: s, lastDownstreamValue: o} = this._getStateForCurrentNamespace(),
                    l = this._getValueForExample(e.currentKey, e),
                    c = r.filter((e => e.get("value") === t || stringify(e.get("value")) === t));
                if (c.size) {
                    let t;
                    t = c.has(e.currentKey) ? e.currentKey : c.keySeq().first(), a(t, {isSyntheticChange: !0})
                } else t !== this.props.currentUserInputValue && t !== s && t !== o && (this.props.setRetainRequestBodyValueFlag(!0), this._setStateForNamespace(e.currentNamespace, {
                    lastUserEditedValue: e.currentUserInputValue,
                    isModifiedValueSelected: n || t !== l
                }))
            }

            render() {
                const {
                    currentUserInputValue: e,
                    examples: t,
                    currentKey: r,
                    getComponent: a,
                    userHasEditedBody: n
                } = this.props, {
                    lastDownstreamValue: s,
                    lastUserEditedValue: o,
                    isModifiedValueSelected: l
                } = this._getStateForCurrentNamespace(), c = a("ExamplesSelect");
                return k().createElement(c, {
                    examples: t,
                    currentExampleKey: r,
                    onSelect: this._onExamplesSelect,
                    isModifiedValueAvailable: !!o && o !== s,
                    isValueModified: void 0 !== e && l && e !== this._getCurrentExampleValue() || n
                })
            }
        }

        function oauth2_authorize_authorize({
                                                auth: e,
                                                authActions: t,
                                                errActions: r,
                                                configs: a,
                                                authConfigs: n = {},
                                                currentServer: s
                                            }) {
            let {schema: o, scopes: l, name: c, clientId: i} = e, p = o.get("flow"), m = [];
            switch (p) {
                case"password":
                    return void t.authorizePassword(e);
                case"application":
                case"clientCredentials":
                case"client_credentials":
                    return void t.authorizeApplication(e);
                case"accessCode":
                case"authorizationCode":
                case"authorization_code":
                    m.push("response_type=code");
                    break;
                case"implicit":
                    m.push("response_type=token")
            }
            "string" == typeof i && m.push("client_id=" + encodeURIComponent(i));
            let u = a.oauth2RedirectUrl;
            if (void 0 === u) return void r.newAuthErr({
                authId: c,
                source: "validation",
                level: "error",
                message: "oauth2RedirectUrl configuration is not passed. Oauth2 authorization cannot be performed."
            });
            m.push("redirect_uri=" + encodeURIComponent(u));
            let d = [];
            if (Array.isArray(l) ? d = l : q().List.isList(l) && (d = l.toArray()), d.length > 0) {
                let e = n.scopeSeparator || " ";
                m.push("scope=" + encodeURIComponent(d.join(e)))
            }
            let h = btoa(new Date);
            if (m.push("state=" + encodeURIComponent(h)), void 0 !== n.realm && m.push("realm=" + encodeURIComponent(n.realm)), ("authorizationCode" === p || "authorization_code" === p || "accessCode" === p) && n.usePkceWithAuthorizationCodeGrant) {
                const t = function generateCodeVerifier() {
                    return b64toB64UrlEncoded(ne()(32).toString("base64"))
                }(), r = function createCodeChallenge(e) {
                    return b64toB64UrlEncoded(oe()("sha256").update(e).digest("base64"))
                }(t);
                m.push("code_challenge=" + r), m.push("code_challenge_method=S256"), e.codeVerifier = t
            }
            let {additionalQueryStringParams: g} = n;
            for (let e in g) void 0 !== g[e] && m.push([e, g[e]].map(encodeURIComponent).join("="));
            const y = o.get("authorizationUrl");
            let f;
            f = s ? de()(sanitizeUrl(y), s, !0).toString() : sanitizeUrl(y);
            let S, E = [f, m.join("&")].join(-1 === y.indexOf("?") ? "?" : "&");
            S = "implicit" === p ? t.preAuthorizeImplicit : n.useBasicAuthenticationWithAccessCodeGrant ? t.authorizeAccessCodeWithBasicAuthentication : t.authorizeAccessCodeWithFormParams, t.authPopup(E, {
                auth: e,
                state: h,
                redirectUrl: u,
                callback: S,
                errCb: r.newAuthErr
            })
        }

        class Oauth2 extends k().Component {
            constructor(e, t) {
                super(e, t);
                let {name: r, schema: a, authorized: n, authSelectors: s} = this.props, o = n && n.get(r),
                    l = s.getConfigs() || {}, c = o && o.get("username") || "",
                    i = o && o.get("clientId") || l.clientId || "",
                    p = o && o.get("clientSecret") || l.clientSecret || "", m = o && o.get("passwordType") || "basic",
                    u = o && o.get("scopes") || l.scopes || [];
                "string" == typeof u && (u = u.split(l.scopeSeparator || " ")), this.state = {
                    appName: l.appName,
                    name: r,
                    schema: a,
                    scopes: u,
                    clientId: i,
                    clientSecret: p,
                    username: c,
                    password: "",
                    passwordType: m
                }
            }

            close = e => {
                e.preventDefault();
                let {authActions: t} = this.props;
                t.showDefinitions(!1)
            };
            authorize = () => {
                let {authActions: e, errActions: t, getConfigs: r, authSelectors: a, oas3Selectors: n} = this.props,
                    s = r(), o = a.getConfigs();
                t.clear({authId: name, type: "auth", source: "auth"}), oauth2_authorize_authorize({
                    auth: this.state,
                    currentServer: n.serverEffectiveValue(n.selectedServer()),
                    authActions: e,
                    errActions: t,
                    configs: s,
                    authConfigs: o
                })
            };
            onScopeChange = e => {
                let {target: t} = e, {checked: r} = t, a = t.dataset.value;
                if (r && -1 === this.state.scopes.indexOf(a)) {
                    let e = this.state.scopes.concat([a]);
                    this.setState({scopes: e})
                } else !r && this.state.scopes.indexOf(a) > -1 && this.setState({scopes: this.state.scopes.filter((e => e !== a))})
            };
            onInputChange = e => {
                let {target: {dataset: {name: t}, value: r}} = e, a = {[t]: r};
                this.setState(a)
            };
            selectScopes = e => {
                e.target.dataset.all ? this.setState({scopes: Array.from((this.props.schema.get("allowedScopes") || this.props.schema.get("scopes")).keys())}) : this.setState({scopes: []})
            };
            logout = e => {
                e.preventDefault();
                let {authActions: t, errActions: r, name: a} = this.props;
                r.clear({authId: a, type: "auth", source: "auth"}), t.logoutWithPersistOption([a])
            };

            render() {
                let {
                    schema: e,
                    getComponent: t,
                    authSelectors: r,
                    errSelectors: a,
                    name: n,
                    specSelectors: s
                } = this.props;
                const o = t("Input"), l = t("Row"), c = t("Col"), i = t("Button"), p = t("authError"),
                    m = t("JumpToPath", !0), u = t("Markdown", !0), d = t("InitializedInput"), {isOAS3: h} = s;
                let g = h() ? e.get("openIdConnectUrl") : null;
                const y = "implicit", f = "password",
                    S = h() ? g ? "authorization_code" : "authorizationCode" : "accessCode",
                    E = h() ? g ? "client_credentials" : "clientCredentials" : "application";
                let _ = !!(r.getConfigs() || {}).usePkceWithAuthorizationCodeGrant, v = e.get("flow"),
                    w = v === S && _ ? v + " with PKCE" : v, b = e.get("allowedScopes") || e.get("scopes"),
                    C = !!r.authorized().get(n), x = a.allErrors().filter((e => e.get("authId") === n)),
                    O = !x.filter((e => "validation" === e.get("source"))).size, N = e.get("description");
                return k().createElement("div", null, k().createElement("h4", null, n, " (OAuth2, ", w, ") ", k().createElement(m, {path: ["securityDefinitions", n]})), this.state.appName ? k().createElement("h5", null, "Application: ", this.state.appName, " ") : null, N && k().createElement(u, {source: e.get("description")}), C && k().createElement("h6", null, "Authorized"), g && k().createElement("p", null, "OpenID Connect URL: ", k().createElement("code", null, g)), (v === y || v === S) && k().createElement("p", null, "Authorization URL: ", k().createElement("code", null, e.get("authorizationUrl"))), (v === f || v === S || v === E) && k().createElement("p", null, "Token URL:", k().createElement("code", null, " ", e.get("tokenUrl"))), k().createElement("p", {className: "flow"}, "Flow: ", k().createElement("code", null, w)), v !== f ? null : k().createElement(l, null, k().createElement(l, null, k().createElement("label", {htmlFor: "oauth_username"}, "username:"), C ? k().createElement("code", null, " ", this.state.username, " ") : k().createElement(c, {
                    tablet: 10,
                    desktop: 10
                }, k().createElement("input", {
                    id: "oauth_username",
                    type: "text",
                    "data-name": "username",
                    onChange: this.onInputChange,
                    autoFocus: !0
                }))), k().createElement(l, null, k().createElement("label", {htmlFor: "oauth_password"}, "password:"), C ? k().createElement("code", null, " ****** ") : k().createElement(c, {
                    tablet: 10,
                    desktop: 10
                }, k().createElement("input", {
                    id: "oauth_password",
                    type: "password",
                    "data-name": "password",
                    onChange: this.onInputChange
                }))), k().createElement(l, null, k().createElement("label", {htmlFor: "password_type"}, "Client credentials location:"), C ? k().createElement("code", null, " ", this.state.passwordType, " ") : k().createElement(c, {
                    tablet: 10,
                    desktop: 10
                }, k().createElement("select", {
                    id: "password_type",
                    "data-name": "passwordType",
                    onChange: this.onInputChange
                }, k().createElement("option", {value: "basic"}, "Authorization header"), k().createElement("option", {value: "request-body"}, "Request body"))))), (v === E || v === y || v === S || v === f) && (!C || C && this.state.clientId) && k().createElement(l, null, k().createElement("label", {htmlFor: `client_id_${v}`}, "client_id:"), C ? k().createElement("code", null, " ****** ") : k().createElement(c, {
                    tablet: 10,
                    desktop: 10
                }, k().createElement(d, {
                    id: `client_id_${v}`,
                    type: "text",
                    required: v === f,
                    initialValue: this.state.clientId,
                    "data-name": "clientId",
                    onChange: this.onInputChange
                }))), (v === E || v === S || v === f) && k().createElement(l, null, k().createElement("label", {htmlFor: `client_secret_${v}`}, "client_secret:"), C ? k().createElement("code", null, " ****** ") : k().createElement(c, {
                    tablet: 10,
                    desktop: 10
                }, k().createElement(d, {
                    id: `client_secret_${v}`,
                    initialValue: this.state.clientSecret,
                    type: "password",
                    "data-name": "clientSecret",
                    onChange: this.onInputChange
                }))), !C && b && b.size ? k().createElement("div", {className: "scopes"}, k().createElement("h2", null, "Scopes:", k().createElement("a", {
                    onClick: this.selectScopes,
                    "data-all": !0
                }, "select all"), k().createElement("a", {onClick: this.selectScopes}, "select none")), b.map(((e, t) => k().createElement(l, {key: t}, k().createElement("div", {className: "checkbox"}, k().createElement(o, {
                    "data-value": t,
                    id: `${t}-${v}-checkbox-${this.state.name}`,
                    disabled: C,
                    checked: this.state.scopes.includes(t),
                    type: "checkbox",
                    onChange: this.onScopeChange
                }), k().createElement("label", {htmlFor: `${t}-${v}-checkbox-${this.state.name}`}, k().createElement("span", {className: "item"}), k().createElement("div", {className: "text"}, k().createElement("p", {className: "name"}, t), k().createElement("p", {className: "description"}, e))))))).toArray()) : null, x.valueSeq().map(((e, t) => k().createElement(p, {
                    error: e,
                    key: t
                }))), k().createElement("div", {className: "auth-btn-wrapper"}, O && (C ? k().createElement(i, {
                    className: "btn modal-btn auth authorize",
                    onClick: this.logout,
                    "aria-label": "Remove authorization"
                }, "Logout") : k().createElement(i, {
                    className: "btn modal-btn auth authorize",
                    onClick: this.authorize,
                    "aria-label": "Apply given OAuth2 credentials"
                }, "Authorize")), k().createElement(i, {
                    className: "btn modal-btn auth btn-done",
                    onClick: this.close
                }, "Close")))
            }
        }

        class Clear extends N.Component {
            onClick = () => {
                let {specActions: e, path: t, method: r} = this.props;
                e.clearResponse(t, r), e.clearRequest(t, r)
            };

            render() {
                return k().createElement("button", {
                    className: "btn btn-clear opblock-control__btn",
                    onClick: this.onClick
                }, "Clear")
            }
        }

        const Headers = ({headers: e}) => k().createElement("div", null, k().createElement("h5", null, "Response headers"), k().createElement("pre", {className: "microlight"}, e)),
            Duration = ({duration: e}) => k().createElement("div", null, k().createElement("h5", null, "Request duration"), k().createElement("pre", {className: "microlight"}, e, " ms"));

        class LiveResponse extends k().Component {
            shouldComponentUpdate(e) {
                return this.props.response !== e.response || this.props.path !== e.path || this.props.method !== e.method || this.props.displayRequestDuration !== e.displayRequestDuration
            }

            render() {
                const {
                        response: e,
                        getComponent: t,
                        getConfigs: r,
                        displayRequestDuration: a,
                        specSelectors: n,
                        path: s,
                        method: o
                    } = this.props, {showMutatedRequest: l, requestSnippetsEnabled: c} = r(),
                    i = l ? n.mutatedRequestFor(s, o) : n.requestFor(s, o), p = e.get("status"), m = i.get("url"),
                    u = e.get("headers").toJS(), d = e.get("notDocumented"), h = e.get("error"), g = e.get("text"),
                    y = e.get("duration"), f = Object.keys(u), S = u["content-type"] || u["Content-Type"],
                    E = t("responseBody"), _ = f.map((e => {
                        var t = Array.isArray(u[e]) ? u[e].join() : u[e];
                        return k().createElement("span", {className: "headerline", key: e}, " ", e, ": ", t, " ")
                    })), v = 0 !== _.length, w = t("Markdown", !0), b = t("RequestSnippets", !0), C = t("curl");
                return k().createElement("div", null, i && (!0 === c || "true" === c ? k().createElement(b, {request: i}) : k().createElement(C, {
                    request: i,
                    getConfigs: r
                })), m && k().createElement("div", null, k().createElement("div", {className: "request-url"}, k().createElement("h4", null, "Request URL"), k().createElement("pre", {className: "microlight"}, m))), k().createElement("h4", null, "Server response"), k().createElement("table", {className: "responses-table live-responses-table"}, k().createElement("thead", null, k().createElement("tr", {className: "responses-header"}, k().createElement("td", {className: "col_header response-col_status"}, "Code"), k().createElement("td", {className: "col_header response-col_description"}, "Details"))), k().createElement("tbody", null, k().createElement("tr", {className: "response"}, k().createElement("td", {className: "response-col_status"}, p, d ? k().createElement("div", {className: "response-undocumented"}, k().createElement("i", null, " Undocumented ")) : null), k().createElement("td", {className: "response-col_description"}, h ? k().createElement(w, {source: `${"" !== e.get("name") ? `${e.get("name")}: ` : ""}${e.get("message")}`}) : null, g ? k().createElement(E, {
                    content: g,
                    contentType: S,
                    url: m,
                    headers: u,
                    getConfigs: r,
                    getComponent: t
                }) : null, v ? k().createElement(Headers, {headers: _}) : null, a && y ? k().createElement(Duration, {duration: y}) : null)))))
            }
        }

        class OnlineValidatorBadge extends k().Component {
            constructor(e, t) {
                super(e, t);
                let {getConfigs: r} = e, {validatorUrl: a} = r();
                this.state = {
                    url: this.getDefinitionUrl(),
                    validatorUrl: void 0 === a ? "https://validator.swagger.io/validator" : a
                }
            }

            getDefinitionUrl = () => {
                let {specSelectors: e} = this.props;
                return new (de())(e.url(), U.location).toString()
            };

            UNSAFE_componentWillReceiveProps(e) {
                let {getConfigs: t} = e, {validatorUrl: r} = t();
                this.setState({
                    url: this.getDefinitionUrl(),
                    validatorUrl: void 0 === r ? "https://validator.swagger.io/validator" : r
                })
            }

            render() {
                let {getConfigs: e} = this.props, {spec: t} = e(), r = sanitizeUrl(this.state.validatorUrl);
                return "object" == typeof t && Object.keys(t).length ? null : this.state.url && requiresValidationURL(this.state.validatorUrl) && requiresValidationURL(this.state.url) ? k().createElement("span", {className: "float-right"}, k().createElement("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: `${r}/debug?url=${encodeURIComponent(this.state.url)}`
                }, k().createElement(ValidatorImage, {
                    src: `${r}?url=${encodeURIComponent(this.state.url)}`,
                    alt: "Online validator badge"
                }))) : null
            }
        }

        class ValidatorImage extends k().Component {
            constructor(e) {
                super(e), this.state = {loaded: !1, error: !1}
            }

            componentDidMount() {
                const e = new Image;
                e.onload = () => {
                    this.setState({loaded: !0})
                }, e.onerror = () => {
                    this.setState({error: !0})
                }, e.src = this.props.src
            }

            UNSAFE_componentWillReceiveProps(e) {
                if (e.src !== this.props.src) {
                    const t = new Image;
                    t.onload = () => {
                        this.setState({loaded: !0})
                    }, t.onerror = () => {
                        this.setState({error: !0})
                    }, t.src = e.src
                }
            }

            render() {
                return this.state.error ? k().createElement("img", {alt: "Error"}) : this.state.loaded ? k().createElement("img", {
                    src: this.props.src,
                    alt: this.props.alt
                }) : null
            }
        }

        class Operations extends k().Component {
            render() {
                let {specSelectors: e} = this.props;
                const t = e.taggedOperations();
                return 0 === t.size ? k().createElement("h3", null, " No operations defined in spec!") : k().createElement("div", null, t.map(this.renderOperationTag).toArray(), t.size < 1 ? k().createElement("h3", null, " No operations defined in spec! ") : null)
            }

            renderOperationTag = (e, t) => {
                const {
                        specSelectors: r,
                        getComponent: a,
                        oas3Selectors: n,
                        layoutSelectors: s,
                        layoutActions: o,
                        getConfigs: l
                    } = this.props, c = r.validOperationMethods(), i = a("OperationContainer", !0), p = a("OperationTag"),
                    m = e.get("operations");
                return k().createElement(p, {
                    key: "operation-" + t,
                    tagObj: e,
                    tag: t,
                    oas3Selectors: n,
                    layoutSelectors: s,
                    layoutActions: o,
                    getConfigs: l,
                    getComponent: a,
                    specUrl: r.url()
                }, k().createElement("div", {className: "operation-tag-content"}, m.map((e => {
                    const r = e.get("path"), a = e.get("method"), n = q().List(["paths", r, a]);
                    return -1 === c.indexOf(a) ? null : k().createElement(i, {
                        key: `${r}-${a}`,
                        specPath: n,
                        op: e,
                        path: r,
                        method: a,
                        tag: t
                    })
                })).toArray()))
            }
        }

        function isAbsoluteUrl(e) {
            return e.match(/^(?:[a-z]+:)?\/\//i)
        }

        function buildBaseUrl(e, t) {
            return e ? isAbsoluteUrl(e) ? function addProtocol(e) {
                return e.match(/^\/\//i) ? `${window.location.protocol}${e}` : e
            }(e) : new URL(e, t).href : t
        }

        function safeBuildUrl(e, t, {selectedServer: r = ""} = {}) {
            try {
                return function buildUrl(e, t, {selectedServer: r = ""} = {}) {
                    if (!e) return;
                    if (isAbsoluteUrl(e)) return e;
                    const a = buildBaseUrl(r, t);
                    return isAbsoluteUrl(a) ? new URL(e, a).href : new URL(e, window.location.href).href
                }(e, t, {selectedServer: r})
            } catch {
                return
            }
        }

        class OperationTag extends k().Component {
            static defaultProps = {tagObj: q().fromJS({}), tag: ""};

            render() {
                const {
                    tagObj: e,
                    tag: t,
                    children: r,
                    oas3Selectors: a,
                    layoutSelectors: n,
                    layoutActions: s,
                    getConfigs: o,
                    getComponent: l,
                    specUrl: c
                } = this.props;
                let {docExpansion: i, deepLinking: p} = o();
                const m = p && "false" !== p, u = l("Collapse"), d = l("Markdown", !0), h = l("DeepLink"),
                    g = l("Link"), y = l("ArrowUpIcon"), f = l("ArrowDownIcon");
                let S, E = e.getIn(["tagDetails", "description"], null),
                    _ = e.getIn(["tagDetails", "externalDocs", "description"]),
                    v = e.getIn(["tagDetails", "externalDocs", "url"]);
                S = isFunc(a) && isFunc(a.selectedServer) ? safeBuildUrl(v, c, {selectedServer: a.selectedServer()}) : v;
                let w = ["operations-tag", t], b = n.isShown(w, "full" === i || "list" === i);
                return k().createElement("div", {className: b ? "opblock-tag-section is-open" : "opblock-tag-section"}, k().createElement("h3", {
                    onClick: () => s.show(w, !b),
                    className: E ? "opblock-tag" : "opblock-tag no-desc",
                    id: w.map((e => escapeDeepLinkPath(e))).join("-"),
                    "data-tag": t,
                    "data-is-open": b
                }, k().createElement(h, {
                    enabled: m,
                    isShown: b,
                    path: createDeepLinkPath(t),
                    text: t
                }), E ? k().createElement("small", null, k().createElement(d, {source: E})) : k().createElement("small", null), S ? k().createElement("div", {className: "info__externaldocs"}, k().createElement("small", null, k().createElement(g, {
                    href: sanitizeUrl(S),
                    onClick: e => e.stopPropagation(),
                    target: "_blank"
                }, _ || S))) : null, k().createElement("button", {
                    "aria-expanded": b,
                    className: "expand-operation",
                    title: b ? "Collapse operation" : "Expand operation",
                    onClick: () => s.show(w, !b)
                }, b ? k().createElement(y, {className: "arrow"}) : k().createElement(f, {className: "arrow"}))), k().createElement(u, {isOpened: b}, r))
            }
        }

        var La;

        function _extends() {
            return _extends = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                }
                return e
            }, _extends.apply(this, arguments)
        }

        const rolling_load = e => N.createElement("svg", _extends({
            xmlns: "http://www.w3.org/2000/svg",
            width: 200,
            height: 200,
            className: "rolling-load_svg__lds-rolling",
            preserveAspectRatio: "xMidYMid",
            style: {
                backgroundImage: "none",
                backgroundPosition: "initial initial",
                backgroundRepeat: "initial initial"
            },
            viewBox: "0 0 100 100"
        }, e), La || (La = N.createElement("circle", {
            cx: 50,
            cy: 50,
            r: 35,
            fill: "none",
            stroke: "#555",
            strokeDasharray: "164.93361431346415 56.97787143782138",
            strokeWidth: 10
        }, N.createElement("animateTransform", {
            attributeName: "transform",
            begin: "0s",
            calcMode: "linear",
            dur: "1s",
            keyTimes: "0;1",
            repeatCount: "indefinite",
            type: "rotate",
            values: "0 50 50;360 50 50"
        }))));

        class Operation extends N.PureComponent {
            static defaultProps = {
                operation: null,
                response: null,
                request: null,
                specPath: (0, I.List)(),
                summary: ""
            };

            render() {
                let {
                    specPath: e,
                    response: t,
                    request: r,
                    toggleShown: a,
                    onTryoutClick: n,
                    onResetClick: s,
                    onCancelClick: o,
                    onExecute: l,
                    fn: c,
                    getComponent: i,
                    getConfigs: p,
                    specActions: m,
                    specSelectors: u,
                    authActions: d,
                    authSelectors: h,
                    oas3Actions: g,
                    oas3Selectors: y
                } = this.props, f = this.props.operation, {
                    deprecated: S,
                    isShown: E,
                    path: _,
                    method: v,
                    op: w,
                    tag: b,
                    operationId: C,
                    allowTryItOut: x,
                    displayRequestDuration: O,
                    tryItOutEnabled: N,
                    executeInProgress: A
                } = f.toJS(), {description: I, externalDocs: j, schemes: P} = w;
                const M = j ? safeBuildUrl(j.url, u.url(), {selectedServer: y.selectedServer()}) : "";
                let R = f.getIn(["op"]), T = R.get("responses"), J = function getList(e, t) {
                    if (!q().Iterable.isIterable(e)) return q().List();
                    let r = e.getIn(Array.isArray(t) ? t : [t]);
                    return q().List.isList(r) ? r : q().List()
                }(R, ["parameters"]), $ = u.operationScheme(_, v), K = ["operations", b, C], D = getExtensions(R);
                const V = i("responses"), L = i("parameters"), U = i("execute"), z = i("clear"), B = i("Collapse"),
                    F = i("Markdown", !0), W = i("schemes"), H = i("OperationServers"), X = i("OperationExt"),
                    G = i("OperationSummary"), Y = i("Link"), {showExtensions: Q} = p();
                if (T && t && t.size > 0) {
                    let e = !T.get(String(t.get("status"))) && !T.get("default");
                    t = t.set("notDocumented", e)
                }
                let Z = [_, v];
                const ee = u.validationErrors([_, v]);
                return k().createElement("div", {
                    className: S ? "opblock opblock-deprecated" : E ? `opblock opblock-${v} is-open` : `opblock opblock-${v}`,
                    id: escapeDeepLinkPath(K.join("-"))
                }, k().createElement(G, {
                    operationProps: f,
                    isShown: E,
                    toggleShown: a,
                    getComponent: i,
                    authActions: d,
                    authSelectors: h,
                    specPath: e
                }), k().createElement(B, {isOpened: E}, k().createElement("div", {className: "opblock-body"}, R && R.size || null === R ? null : k().createElement(rolling_load, {
                    height: "32px",
                    width: "32px",
                    className: "opblock-loading-animation"
                }), S && k().createElement("h4", {className: "opblock-title_normal"}, " Warning: Deprecated"), I && k().createElement("div", {className: "opblock-description-wrapper"}, k().createElement("div", {className: "opblock-description"}, k().createElement(F, {source: I}))), M ? k().createElement("div", {className: "opblock-external-docs-wrapper"}, k().createElement("h4", {className: "opblock-title_normal"}, "Find more details"), k().createElement("div", {className: "opblock-external-docs"}, j.description && k().createElement("span", {className: "opblock-external-docs__description"}, k().createElement(F, {source: j.description})), k().createElement(Y, {
                    target: "_blank",
                    className: "opblock-external-docs__link",
                    href: sanitizeUrl(M)
                }, M))) : null, R && R.size ? k().createElement(L, {
                    parameters: J,
                    specPath: e.push("parameters"),
                    operation: R,
                    onChangeKey: Z,
                    onTryoutClick: n,
                    onResetClick: s,
                    onCancelClick: o,
                    tryItOutEnabled: N,
                    allowTryItOut: x,
                    fn: c,
                    getComponent: i,
                    specActions: m,
                    specSelectors: u,
                    pathMethod: [_, v],
                    getConfigs: p,
                    oas3Actions: g,
                    oas3Selectors: y
                }) : null, N ? k().createElement(H, {
                    getComponent: i,
                    path: _,
                    method: v,
                    operationServers: R.get("servers"),
                    pathServers: u.paths().getIn([_, "servers"]),
                    getSelectedServer: y.selectedServer,
                    setSelectedServer: g.setSelectedServer,
                    setServerVariableValue: g.setServerVariableValue,
                    getServerVariable: y.serverVariableValue,
                    getEffectiveServerValue: y.serverEffectiveValue
                }) : null, N && x && P && P.size ? k().createElement("div", {className: "opblock-schemes"}, k().createElement(W, {
                    schemes: P,
                    path: _,
                    method: v,
                    specActions: m,
                    currentScheme: $
                })) : null, !N || !x || ee.length <= 0 ? null : k().createElement("div", {className: "validation-errors errors-wrapper"}, "Please correct the following validation errors and try again.", k().createElement("ul", null, ee.map(((e, t) => k().createElement("li", {key: t}, " ", e, " "))))), k().createElement("div", {className: N && t && x ? "btn-group" : "execute-wrapper"}, N && x ? k().createElement(U, {
                    operation: R,
                    specActions: m,
                    specSelectors: u,
                    oas3Selectors: y,
                    oas3Actions: g,
                    path: _,
                    method: v,
                    onExecute: l,
                    disabled: A
                }) : null, N && t && x ? k().createElement(z, {
                    specActions: m,
                    path: _,
                    method: v
                }) : null), A ? k().createElement("div", {className: "loading-container"}, k().createElement("div", {className: "loading"})) : null, T ? k().createElement(V, {
                    responses: T,
                    request: r,
                    tryItOutResponse: t,
                    getComponent: i,
                    getConfigs: p,
                    specSelectors: u,
                    oas3Actions: g,
                    oas3Selectors: y,
                    specActions: m,
                    produces: u.producesOptionsFor([_, v]),
                    producesValue: u.currentProducesFor([_, v]),
                    specPath: e.push("responses"),
                    path: _,
                    method: v,
                    displayRequestDuration: O,
                    fn: c
                }) : null, Q && D.size ? k().createElement(X, {extensions: D, getComponent: i}) : null)))
            }
        }

        class OperationContainer extends N.PureComponent {
            constructor(e, t) {
                super(e, t);
                const {tryItOutEnabled: r} = e.getConfigs();
                this.state = {tryItOutEnabled: !0 === r || "true" === r, executeInProgress: !1}
            }

            static defaultProps = {
                showSummary: !0,
                response: null,
                allowTryItOut: !0,
                displayOperationId: !1,
                displayRequestDuration: !1
            };

            mapStateToProps(e, t) {
                const {op: r, layoutSelectors: a, getConfigs: n} = t, {
                        docExpansion: s,
                        deepLinking: o,
                        displayOperationId: l,
                        displayRequestDuration: c,
                        supportedSubmitMethods: i
                    } = n(), p = a.showSummary(),
                    m = r.getIn(["operation", "__originalOperationId"]) || r.getIn(["operation", "operationId"]) || (0, qa.opId)(r.get("operation"), t.path, t.method) || r.get("id"),
                    u = ["operations", t.tag, m], d = o && "false" !== o,
                    h = i.indexOf(t.method) >= 0 && (void 0 === t.allowTryItOut ? t.specSelectors.allowTryItOutFor(t.path, t.method) : t.allowTryItOut),
                    g = r.getIn(["operation", "security"]) || t.specSelectors.security();
                return {
                    operationId: m,
                    isDeepLinkingEnabled: d,
                    showSummary: p,
                    displayOperationId: l,
                    displayRequestDuration: c,
                    allowTryItOut: h,
                    security: g,
                    isAuthorized: t.authSelectors.isAuthorized(g),
                    isShown: a.isShown(u, "full" === s),
                    jumpToKey: `paths.${t.path}.${t.method}`,
                    response: t.specSelectors.responseFor(t.path, t.method),
                    request: t.specSelectors.requestFor(t.path, t.method)
                }
            }

            componentDidMount() {
                const {isShown: e} = this.props, t = this.getResolvedSubtree();
                e && void 0 === t && this.requestResolvedSubtree()
            }

            UNSAFE_componentWillReceiveProps(e) {
                const {response: t, isShown: r} = e, a = this.getResolvedSubtree();
                t !== this.props.response && this.setState({executeInProgress: !1}), r && void 0 === a && this.requestResolvedSubtree()
            }

            toggleShown = () => {
                let {layoutActions: e, tag: t, operationId: r, isShown: a} = this.props;
                const n = this.getResolvedSubtree();
                a || void 0 !== n || this.requestResolvedSubtree(), e.show(["operations", t, r], !a)
            };
            onCancelClick = () => {
                this.setState({tryItOutEnabled: !this.state.tryItOutEnabled})
            };
            onTryoutClick = () => {
                this.setState({tryItOutEnabled: !this.state.tryItOutEnabled})
            };
            onResetClick = e => {
                const t = this.props.oas3Selectors.selectDefaultRequestBodyValue(...e);
                this.props.oas3Actions.setRequestBodyValue({value: t, pathMethod: e})
            };
            onExecute = () => {
                this.setState({executeInProgress: !0})
            };
            getResolvedSubtree = () => {
                const {specSelectors: e, path: t, method: r, specPath: a} = this.props;
                return a ? e.specResolvedSubtree(a.toJS()) : e.specResolvedSubtree(["paths", t, r])
            };
            requestResolvedSubtree = () => {
                const {specActions: e, path: t, method: r, specPath: a} = this.props;
                return a ? e.requestResolvedSubtree(a.toJS()) : e.requestResolvedSubtree(["paths", t, r])
            };

            render() {
                let {
                    op: e,
                    tag: t,
                    path: r,
                    method: a,
                    security: n,
                    isAuthorized: s,
                    operationId: o,
                    showSummary: l,
                    isShown: c,
                    jumpToKey: i,
                    allowTryItOut: p,
                    response: m,
                    request: u,
                    displayOperationId: d,
                    displayRequestDuration: h,
                    isDeepLinkingEnabled: g,
                    specPath: y,
                    specSelectors: f,
                    specActions: S,
                    getComponent: E,
                    getConfigs: _,
                    layoutSelectors: v,
                    layoutActions: w,
                    authActions: b,
                    authSelectors: C,
                    oas3Actions: x,
                    oas3Selectors: O,
                    fn: N
                } = this.props;
                const A = E("operation"), q = this.getResolvedSubtree() || (0, I.Map)(), j = (0, I.fromJS)({
                    op: q,
                    tag: t,
                    path: r,
                    summary: e.getIn(["operation", "summary"]) || "",
                    deprecated: q.get("deprecated") || e.getIn(["operation", "deprecated"]) || !1,
                    method: a,
                    security: n,
                    isAuthorized: s,
                    operationId: o,
                    originalOperationId: q.getIn(["operation", "__originalOperationId"]),
                    showSummary: l,
                    isShown: c,
                    jumpToKey: i,
                    allowTryItOut: p,
                    request: u,
                    displayOperationId: d,
                    displayRequestDuration: h,
                    isDeepLinkingEnabled: g,
                    executeInProgress: this.state.executeInProgress,
                    tryItOutEnabled: this.state.tryItOutEnabled
                });
                return k().createElement(A, {
                    operation: j,
                    response: m,
                    request: u,
                    isShown: c,
                    toggleShown: this.toggleShown,
                    onTryoutClick: this.onTryoutClick,
                    onResetClick: this.onResetClick,
                    onCancelClick: this.onCancelClick,
                    onExecute: this.onExecute,
                    specPath: y,
                    specActions: S,
                    specSelectors: f,
                    oas3Actions: x,
                    oas3Selectors: O,
                    layoutActions: w,
                    layoutSelectors: v,
                    authActions: b,
                    authSelectors: C,
                    getComponent: E,
                    getConfigs: _,
                    fn: N
                })
            }
        }

        const Ua = require("lodash/toString");
        var za = __webpack_require__.n(Ua);

        class OperationSummary extends N.PureComponent {
            static defaultProps = {operationProps: null, specPath: (0, I.List)(), summary: ""};

            render() {
                let {
                    isShown: e,
                    toggleShown: t,
                    getComponent: r,
                    authActions: a,
                    authSelectors: n,
                    operationProps: s,
                    specPath: o
                } = this.props, {
                    summary: l,
                    isAuthorized: c,
                    method: i,
                    op: p,
                    showSummary: m,
                    path: u,
                    operationId: d,
                    originalOperationId: h,
                    displayOperationId: g
                } = s.toJS(), {summary: y} = p, f = s.get("security");
                const S = r("authorizeOperationBtn", !0), E = r("OperationSummaryMethod"),
                    _ = r("OperationSummaryPath"), v = r("JumpToPath", !0), w = r("CopyToClipboardBtn", !0),
                    b = r("ArrowUpIcon"), C = r("ArrowDownIcon"), x = f && !!f.count(),
                    O = x && 1 === f.size && f.first().isEmpty(), N = !x || O;
                return k().createElement("div", {className: `opblock-summary opblock-summary-${i}`}, k().createElement("button", {
                    "aria-expanded": e,
                    className: "opblock-summary-control",
                    onClick: t
                }, k().createElement(E, {method: i}), k().createElement("div", {className: "opblock-summary-path-description-wrapper"}, k().createElement(_, {
                    getComponent: r,
                    operationProps: s,
                    specPath: o
                }), m ? k().createElement("div", {className: "opblock-summary-description"}, za()(y || l)) : null), g && (h || d) ? k().createElement("span", {className: "opblock-summary-operation-id"}, h || d) : null), k().createElement(w, {textToCopy: `${o.get(1)}`}), N ? null : k().createElement(S, {
                    isAuthorized: c,
                    onClick: () => {
                        const e = n.definitionsForRequirements(f);
                        a.showDefinitions(e)
                    }
                }), k().createElement(v, {path: o}), k().createElement("button", {
                    "aria-label": `${i} ${u.replace(/\//g, "​/")}`,
                    className: "opblock-control-arrow",
                    "aria-expanded": e,
                    tabIndex: "-1",
                    onClick: t
                }, e ? k().createElement(b, {className: "arrow"}) : k().createElement(C, {className: "arrow"})))
            }
        }

        class OperationSummaryMethod extends N.PureComponent {
            static defaultProps = {operationProps: null};

            render() {
                let {method: e} = this.props;
                return k().createElement("span", {className: "opblock-summary-method"}, e.toUpperCase())
            }
        }

        class OperationSummaryPath extends N.PureComponent {
            render() {
                let {getComponent: e, operationProps: t} = this.props, {
                    deprecated: r,
                    isShown: a,
                    path: n,
                    tag: s,
                    operationId: o,
                    isDeepLinkingEnabled: l
                } = t.toJS();
                const c = n.split(/(?=\/)/g);
                for (let e = 1; e < c.length; e += 2) c.splice(e, 0, k().createElement("wbr", {key: e}));
                const i = e("DeepLink");
                return k().createElement("span", {
                    className: r ? "opblock-summary-path__deprecated" : "opblock-summary-path",
                    "data-path": n
                }, k().createElement(i, {enabled: l, isShown: a, path: createDeepLinkPath(`${s}/${o}`), text: c}))
            }
        }

        const operation_extensions = ({extensions: e, getComponent: t}) => {
            let r = t("OperationExtRow");
            return k().createElement("div", {className: "opblock-section"}, k().createElement("div", {className: "opblock-section-header"}, k().createElement("h4", null, "Extensions")), k().createElement("div", {className: "table-container"}, k().createElement("table", null, k().createElement("thead", null, k().createElement("tr", null, k().createElement("td", {className: "col_header"}, "Field"), k().createElement("td", {className: "col_header"}, "Value"))), k().createElement("tbody", null, e.entrySeq().map((([e, t]) => k().createElement(r, {
                key: `${e}-${t}`,
                xKey: e,
                xVal: t
            })))))))
        }, operation_extension_row = ({xKey: e, xVal: t}) => {
            const r = t ? t.toJS ? t.toJS() : t : null;
            return k().createElement("tr", null, k().createElement("td", null, e), k().createElement("td", null, JSON.stringify(r)))
        }, Ba = require("classnames");
        var Fa = __webpack_require__.n(Ba);
        const Wa = require("js-file-download");
        var Ha = __webpack_require__.n(Wa);
        const highlight_code = ({
                                    value: e,
                                    fileName: t = "response.txt",
                                    className: r,
                                    downloadable: a,
                                    getConfigs: n,
                                    canCopy: s,
                                    language: o
                                }) => {
            const l = ee()(n) ? n() : null,
                c = !1 !== Ge()(l, "syntaxHighlight") && Ge()(l, "syntaxHighlight.activated", !0),
                i = (0, N.useRef)(null);
            (0, N.useEffect)((() => {
                const e = Array.from(i.current.childNodes).filter((e => !!e.nodeType && e.classList.contains("microlight")));
                return e.forEach((e => e.addEventListener("mousewheel", handlePreventYScrollingBeyondElement, {passive: !1}))), () => {
                    e.forEach((e => e.removeEventListener("mousewheel", handlePreventYScrollingBeyondElement)))
                }
            }), [e, r, o]);
            const handlePreventYScrollingBeyondElement = e => {
                const {target: t, deltaY: r} = e, {scrollHeight: a, offsetHeight: n, scrollTop: s} = t;
                a > n && (0 === s && r < 0 || n + s >= a && r > 0) && e.preventDefault()
            };
            return k().createElement("div", {
                className: "highlight-code",
                ref: i
            }, s && k().createElement("div", {className: "copy-to-clipboard"}, k().createElement(dt.CopyToClipboard, {text: e}, k().createElement("button", null))), a ? k().createElement("button", {
                className: "download-contents",
                onClick: () => {
                    Ha()(e, t)
                }
            }, "Download") : null, c ? k().createElement(gt(), {
                language: o,
                className: Fa()(r, "microlight"),
                style: getStyle(Ge()(l, "syntaxHighlight.theme", "agate"))
            }, e) : k().createElement("pre", {className: Fa()(r, "microlight")}, e))
        };

        function createHtmlReadyId(e, t = "_") {
            return e.replace(/[^\w-]/g, t)
        }

        class Responses extends k().Component {
            static defaultProps = {
                tryItOutResponse: null,
                produces: (0, I.fromJS)(["application/json"]),
                displayRequestDuration: !1
            };
            onChangeProducesWrapper = e => this.props.specActions.changeProducesValue([this.props.path, this.props.method], e);
            onResponseContentTypeChange = ({controlsAcceptHeader: e, value: t}) => {
                const {oas3Actions: r, path: a, method: n} = this.props;
                e && r.setResponseContentType({value: t, path: a, method: n})
            };

            render() {
                let {
                    responses: e,
                    tryItOutResponse: t,
                    getComponent: r,
                    getConfigs: a,
                    specSelectors: n,
                    fn: s,
                    producesValue: o,
                    displayRequestDuration: l,
                    specPath: c,
                    path: i,
                    method: p,
                    oas3Selectors: m,
                    oas3Actions: u
                } = this.props, d = function defaultStatusCode(e) {
                    let t = e.keySeq();
                    return t.contains(ie) ? ie : t.filter((e => "2" === (e + "")[0])).sort().first()
                }(e);
                const h = r("contentType"), g = r("liveResponse"), y = r("response");
                let f = this.props.produces && this.props.produces.size ? this.props.produces : Responses.defaultProps.produces;
                const S = n.isOAS3() ? function getAcceptControllingResponse(e) {
                    if (!q().OrderedMap.isOrderedMap(e)) return null;
                    if (!e.size) return null;
                    const t = e.find(((e, t) => t.startsWith("2") && Object.keys(e.get("content") || {}).length > 0)),
                        r = e.get("default") || q().OrderedMap(),
                        a = (r.get("content") || q().OrderedMap()).keySeq().toJS().length ? r : null;
                    return t || a
                }(e) : null, E = createHtmlReadyId(`${p}${i}_responses`), _ = `${E}_select`;
                return k().createElement("div", {className: "responses-wrapper"}, k().createElement("div", {className: "opblock-section-header"}, k().createElement("h4", null, "Responses"), n.isOAS3() ? null : k().createElement("label", {htmlFor: _}, k().createElement("span", null, "Response content type"), k().createElement(h, {
                    value: o,
                    ariaControls: E,
                    ariaLabel: "Response content type",
                    className: "execute-content-type",
                    contentTypes: f,
                    controlId: _,
                    onChange: this.onChangeProducesWrapper
                }))), k().createElement("div", {className: "responses-inner"}, t ? k().createElement("div", null, k().createElement(g, {
                    response: t,
                    getComponent: r,
                    getConfigs: a,
                    specSelectors: n,
                    path: this.props.path,
                    method: this.props.method,
                    displayRequestDuration: l
                }), k().createElement("h4", null, "Responses")) : null, k().createElement("table", {
                    "aria-live": "polite",
                    className: "responses-table",
                    id: E,
                    role: "region"
                }, k().createElement("thead", null, k().createElement("tr", {className: "responses-header"}, k().createElement("td", {className: "col_header response-col_status"}, "Code"), k().createElement("td", {className: "col_header response-col_description"}, "Description"), n.isOAS3() ? k().createElement("td", {className: "col col_header response-col_links"}, "Links") : null)), k().createElement("tbody", null, e.entrySeq().map((([e, l]) => {
                    let h = t && t.get("status") == e ? "response_current" : "";
                    return k().createElement(y, {
                        key: e,
                        path: i,
                        method: p,
                        specPath: c.push(e),
                        isDefault: d === e,
                        fn: s,
                        className: h,
                        code: e,
                        response: l,
                        specSelectors: n,
                        controlsAcceptHeader: l === S,
                        onContentTypeChange: this.onResponseContentTypeChange,
                        contentType: o,
                        getConfigs: a,
                        activeExamplesKey: m.activeExamplesMember(i, p, "responses", e),
                        oas3Actions: u,
                        getComponent: r
                    })
                })).toArray()))))
            }
        }

        function getKnownSyntaxHighlighterLanguage(e) {
            return function canJsonParse(e) {
                try {
                    return !!JSON.parse(e)
                } catch (e) {
                    return null
                }
            }(e) ? "json" : null
        }

        class Response extends k().Component {
            constructor(e, t) {
                super(e, t), this.state = {responseContentType: ""}
            }

            static defaultProps = {
                response: (0, I.fromJS)({}), onContentTypeChange: () => {
                }
            };
            _onContentTypeChange = e => {
                const {onContentTypeChange: t, controlsAcceptHeader: r} = this.props;
                this.setState({responseContentType: e}), t({value: e, controlsAcceptHeader: r})
            };
            getTargetExamplesKey = () => {
                const {response: e, contentType: t, activeExamplesKey: r} = this.props,
                    a = this.state.responseContentType || t,
                    n = e.getIn(["content", a], (0, I.Map)({})).get("examples", null).keySeq().first();
                return r || n
            };

            render() {
                let {
                    path: e,
                    method: t,
                    code: r,
                    response: a,
                    className: n,
                    specPath: s,
                    fn: o,
                    getComponent: l,
                    getConfigs: c,
                    specSelectors: i,
                    contentType: p,
                    controlsAcceptHeader: m,
                    oas3Actions: u
                } = this.props, {inferSchema: d, getSampleSchema: h} = o, g = i.isOAS3();
                const {showExtensions: y} = c();
                let f = y ? getExtensions(a) : null, S = a.get("headers"), E = a.get("links");
                const _ = l("ResponseExtension"), v = l("headers"), w = l("highlightCode"), b = l("modelExample"),
                    C = l("Markdown", !0), x = l("operationLink"), O = l("contentType"), N = l("ExamplesSelect"),
                    A = l("Example");
                var q, j;
                const P = this.state.responseContentType || p, M = a.getIn(["content", P], (0, I.Map)({})),
                    R = M.get("examples", null);
                if (g) {
                    const e = M.get("schema");
                    q = e ? d(e.toJS()) : null, j = e ? (0, I.List)(["content", this.state.responseContentType, "schema"]) : s
                } else q = a.get("schema"), j = a.has("schema") ? s.push("schema") : s;
                let T, J, $ = !1, K = {includeReadOnly: !0};
                if (g) if (J = M.get("schema")?.toJS(), R) {
                    const e = this.getTargetExamplesKey(), getMediaTypeExample = e => e.get("value");
                    T = getMediaTypeExample(R.get(e, (0, I.Map)({}))), void 0 === T && (T = getMediaTypeExample(R.values().next().value)), $ = !0
                } else void 0 !== M.get("example") && (T = M.get("example"), $ = !0); else {
                    J = q, K = {...K, includeWriteOnly: !0};
                    const e = a.getIn(["examples", P]);
                    e && (T = e, $ = !0)
                }
                let D = ((e, t, r) => {
                    if (null != e) {
                        let a = null;
                        return getKnownSyntaxHighlighterLanguage(e) && (a = "json"), k().createElement("div", null, k().createElement(t, {
                            className: "example",
                            getConfigs: r,
                            language: a,
                            value: stringify(e)
                        }))
                    }
                    return null
                })(h(J, P, K, $ ? T : void 0), w, c);
                return k().createElement("tr", {
                    className: "response " + (n || ""),
                    "data-code": r
                }, k().createElement("td", {className: "response-col_status"}, r), k().createElement("td", {className: "response-col_description"}, k().createElement("div", {className: "response-col_description__inner"}, k().createElement(C, {source: a.get("description")})), y && f.size ? f.entrySeq().map((([e, t]) => k().createElement(_, {
                    key: `${e}-${t}`,
                    xKey: e,
                    xVal: t
                }))) : null, g && a.get("content") ? k().createElement("section", {className: "response-controls"}, k().createElement("div", {className: Fa()("response-control-media-type", {"response-control-media-type--accept-controller": m})}, k().createElement("small", {className: "response-control-media-type__title"}, "Media type"), k().createElement(O, {
                    value: this.state.responseContentType,
                    contentTypes: a.get("content") ? a.get("content").keySeq() : (0, I.Seq)(),
                    onChange: this._onContentTypeChange,
                    ariaLabel: "Media Type"
                }), m ? k().createElement("small", {className: "response-control-media-type__accept-message"}, "Controls ", k().createElement("code", null, "Accept"), " header.") : null), R ? k().createElement("div", {className: "response-control-examples"}, k().createElement("small", {className: "response-control-examples__title"}, "Examples"), k().createElement(N, {
                    examples: R,
                    currentExampleKey: this.getTargetExamplesKey(),
                    onSelect: a => u.setActiveExamplesMember({
                        name: a,
                        pathMethod: [e, t],
                        contextType: "responses",
                        contextName: r
                    }),
                    showLabels: !1
                })) : null) : null, D || q ? k().createElement(b, {
                    specPath: j,
                    getComponent: l,
                    getConfigs: c,
                    specSelectors: i,
                    schema: fromJSOrdered(q),
                    example: D,
                    includeReadOnly: !0
                }) : null, g && R ? k().createElement(A, {
                    example: R.get(this.getTargetExamplesKey(), (0, I.Map)({})),
                    getComponent: l,
                    getConfigs: c,
                    omitValue: !0
                }) : null, S ? k().createElement(v, {
                    headers: S,
                    getComponent: l
                }) : null), g ? k().createElement("td", {className: "response-col_links"}, E ? E.toSeq().entrySeq().map((([e, t]) => k().createElement(x, {
                    key: e,
                    name: e,
                    link: t,
                    getComponent: l
                }))) : k().createElement("i", null, "No links")) : null)
            }
        }

        const response_extension = ({
                                        xKey: e,
                                        xVal: t
                                    }) => k().createElement("div", {className: "response__extension"}, e, ": ", String(t)),
            Xa = require("xml-but-prettier");
        var Ga = __webpack_require__.n(Xa);
        const Ya = require("lodash/toLower");
        var Qa = __webpack_require__.n(Ya);

        class ResponseBody extends k().PureComponent {
            state = {parsedContent: null};
            updateParsedContent = e => {
                const {content: t} = this.props;
                if (e !== t) if (t && t instanceof Blob) {
                    var r = new FileReader;
                    r.onload = () => {
                        this.setState({parsedContent: r.result})
                    }, r.readAsText(t)
                } else this.setState({parsedContent: t.toString()})
            };

            componentDidMount() {
                this.updateParsedContent(null)
            }

            componentDidUpdate(e) {
                this.updateParsedContent(e.content)
            }

            render() {
                let {content: e, contentType: t, url: r, headers: a = {}, getConfigs: n, getComponent: s} = this.props;
                const {parsedContent: o} = this.state, l = s("highlightCode"), c = "response_" + (new Date).getTime();
                let i, p;
                if (r = r || "", (/^application\/octet-stream/i.test(t) || a["Content-Disposition"] && /attachment/i.test(a["Content-Disposition"]) || a["content-disposition"] && /attachment/i.test(a["content-disposition"]) || a["Content-Description"] && /File Transfer/i.test(a["Content-Description"]) || a["content-description"] && /File Transfer/i.test(a["content-description"])) && (e.size > 0 || e.length > 0)) if ("Blob" in window) {
                    let n = t || "text/html", s = e instanceof Blob ? e : new Blob([e], {type: n}),
                        o = window.URL.createObjectURL(s), l = [n, r.substr(r.lastIndexOf("/") + 1), o].join(":"),
                        c = a["content-disposition"] || a["Content-Disposition"];
                    if (void 0 !== c) {
                        let e = function extractFileNameFromContentDispositionHeader(e) {
                            let t;
                            if ([/filename\*=[^']+'\w*'"([^"]+)";?/i, /filename\*=[^']+'\w*'([^;]+);?/i, /filename="([^;]*);?"/i, /filename=([^;]*);?/i].some((r => (t = r.exec(e), null !== t))), null !== t && t.length > 1) try {
                                return decodeURIComponent(t[1])
                            } catch (e) {
                                console.error(e)
                            }
                            return null
                        }(c);
                        null !== e && (l = e)
                    }
                    p = U.navigator && U.navigator.msSaveOrOpenBlob ? k().createElement("div", null, k().createElement("a", {
                        href: o,
                        onClick: () => U.navigator.msSaveOrOpenBlob(s, l)
                    }, "Download file")) : k().createElement("div", null, k().createElement("a", {
                        href: o,
                        download: l
                    }, "Download file"))
                } else p = k().createElement("pre", {className: "microlight"}, "Download headers detected but your browser does not support downloading binary via XHR (Blob)."); else if (/json/i.test(t)) {
                    let t = null;
                    getKnownSyntaxHighlighterLanguage(e) && (t = "json");
                    try {
                        i = JSON.stringify(JSON.parse(e), null, "  ")
                    } catch (t) {
                        i = "can't parse JSON.  Raw result:\n\n" + e
                    }
                    p = k().createElement(l, {
                        language: t,
                        downloadable: !0,
                        fileName: `${c}.json`,
                        value: i,
                        getConfigs: n,
                        canCopy: !0
                    })
                } else /xml/i.test(t) ? (i = Ga()(e, {
                    textNodesOnSameLine: !0,
                    indentor: "  "
                }), p = k().createElement(l, {
                    downloadable: !0,
                    fileName: `${c}.xml`,
                    value: i,
                    getConfigs: n,
                    canCopy: !0
                })) : p = "text/html" === Qa()(t) || /text\/plain/.test(t) ? k().createElement(l, {
                    downloadable: !0,
                    fileName: `${c}.html`,
                    value: e,
                    getConfigs: n,
                    canCopy: !0
                }) : "text/csv" === Qa()(t) || /text\/csv/.test(t) ? k().createElement(l, {
                    downloadable: !0,
                    fileName: `${c}.csv`,
                    value: e,
                    getConfigs: n,
                    canCopy: !0
                }) : /^image\//i.test(t) ? t.includes("svg") ? k().createElement("div", null, " ", e, " ") : k().createElement("img", {src: window.URL.createObjectURL(e)}) : /^audio\//i.test(t) ? k().createElement("pre", {className: "microlight"}, k().createElement("audio", {
                    controls: !0,
                    key: r
                }, k().createElement("source", {
                    src: r,
                    type: t
                }))) : "string" == typeof e ? k().createElement(l, {
                    downloadable: !0,
                    fileName: `${c}.txt`,
                    value: e,
                    getConfigs: n,
                    canCopy: !0
                }) : e.size > 0 ? o ? k().createElement("div", null, k().createElement("p", {className: "i"}, "Unrecognized response type; displaying content as text."), k().createElement(l, {
                    downloadable: !0,
                    fileName: `${c}.txt`,
                    value: o,
                    getConfigs: n,
                    canCopy: !0
                })) : k().createElement("p", {className: "i"}, "Unrecognized response type; unable to display.") : null;
                return p ? k().createElement("div", null, k().createElement("h5", null, "Response body"), p) : null
            }
        }

        class Parameters extends N.Component {
            constructor(e) {
                super(e), this.state = {callbackVisible: !1, parametersVisible: !0}
            }

            static defaultProps = {
                onTryoutClick: Function.prototype,
                onCancelClick: Function.prototype,
                tryItOutEnabled: !1,
                allowTryItOut: !0,
                onChangeKey: [],
                specPath: []
            };
            onChange = (e, t, r) => {
                let {specActions: {changeParamByIdentity: a}, onChangeKey: n} = this.props;
                a(n, e, t, r)
            };
            onChangeConsumesWrapper = e => {
                let {specActions: {changeConsumesValue: t}, onChangeKey: r} = this.props;
                t(r, e)
            };
            toggleTab = e => "parameters" === e ? this.setState({
                parametersVisible: !0,
                callbackVisible: !1
            }) : "callbacks" === e ? this.setState({callbackVisible: !0, parametersVisible: !1}) : void 0;
            onChangeMediaType = ({value: e, pathMethod: t}) => {
                let {specActions: r, oas3Selectors: a, oas3Actions: n} = this.props;
                const s = a.hasUserEditedBody(...t), o = a.shouldRetainRequestBodyValue(...t);
                n.setRequestContentType({
                    value: e,
                    pathMethod: t
                }), n.initRequestBodyValidateError({pathMethod: t}), s || (o || n.setRequestBodyValue({
                    value: void 0,
                    pathMethod: t
                }), r.clearResponse(...t), r.clearRequest(...t), r.clearValidateParams(t))
            };

            render() {
                let {
                    onTryoutClick: e,
                    onResetClick: t,
                    parameters: r,
                    allowTryItOut: a,
                    tryItOutEnabled: n,
                    specPath: s,
                    fn: o,
                    getComponent: l,
                    getConfigs: c,
                    specSelectors: i,
                    specActions: p,
                    pathMethod: m,
                    oas3Actions: u,
                    oas3Selectors: d,
                    operation: h
                } = this.props;
                const g = l("parameterRow"), y = l("TryItOutButton"), f = l("contentType"), S = l("Callbacks", !0),
                    E = l("RequestBody", !0), _ = n && a, v = i.isOAS3(),
                    w = `${createHtmlReadyId(`${m[1]}${m[0]}_requests`)}_select`, b = h.get("requestBody"),
                    C = Object.values(r.reduce(((e, t) => {
                        const r = t.get("in");
                        return e[r] ??= [], e[r].push(t), e
                    }), {})).reduce(((e, t) => e.concat(t)), []);
                return k().createElement("div", {className: "opblock-section"}, k().createElement("div", {className: "opblock-section-header"}, v ? k().createElement("div", {className: "tab-header"}, k().createElement("div", {
                    onClick: () => this.toggleTab("parameters"),
                    className: `tab-item ${this.state.parametersVisible && "active"}`
                }, k().createElement("h4", {className: "opblock-title"}, k().createElement("span", null, "Parameters"))), h.get("callbacks") ? k().createElement("div", {
                    onClick: () => this.toggleTab("callbacks"),
                    className: `tab-item ${this.state.callbackVisible && "active"}`
                }, k().createElement("h4", {className: "opblock-title"}, k().createElement("span", null, "Callbacks"))) : null) : k().createElement("div", {className: "tab-header"}, k().createElement("h4", {className: "opblock-title"}, "Parameters")), a ? k().createElement(y, {
                    isOAS3: i.isOAS3(),
                    hasUserEditedBody: d.hasUserEditedBody(...m),
                    enabled: n,
                    onCancelClick: this.props.onCancelClick,
                    onTryoutClick: e,
                    onResetClick: () => t(m)
                }) : null), this.state.parametersVisible ? k().createElement("div", {className: "parameters-container"}, C.length ? k().createElement("div", {className: "table-container"}, k().createElement("table", {className: "parameters"}, k().createElement("thead", null, k().createElement("tr", null, k().createElement("th", {className: "col_header parameters-col_name"}, "Name"), k().createElement("th", {className: "col_header parameters-col_description"}, "Description"))), k().createElement("tbody", null, C.map(((e, t) => k().createElement(g, {
                    fn: o,
                    specPath: s.push(t.toString()),
                    getComponent: l,
                    getConfigs: c,
                    rawParam: e,
                    param: i.parameterWithMetaByIdentity(m, e),
                    key: `${e.get("in")}.${e.get("name")}`,
                    onChange: this.onChange,
                    onChangeConsumes: this.onChangeConsumesWrapper,
                    specSelectors: i,
                    specActions: p,
                    oas3Actions: u,
                    oas3Selectors: d,
                    pathMethod: m,
                    isExecute: _
                })))))) : k().createElement("div", {className: "opblock-description-wrapper"}, k().createElement("p", null, "No parameters"))) : null, this.state.callbackVisible ? k().createElement("div", {className: "callbacks-container opblock-description-wrapper"}, k().createElement(S, {
                    callbacks: (0, I.Map)(h.get("callbacks")),
                    specPath: s.slice(0, -1).push("callbacks")
                })) : null, v && b && this.state.parametersVisible && k().createElement("div", {className: "opblock-section opblock-section-request-body"}, k().createElement("div", {className: "opblock-section-header"}, k().createElement("h4", {className: `opblock-title parameter__name ${b.get("required") && "required"}`}, "Request body"), k().createElement("label", {id: w}, k().createElement(f, {
                    value: d.requestContentType(...m),
                    contentTypes: b.get("content", (0, I.List)()).keySeq(),
                    onChange: e => {
                        this.onChangeMediaType({value: e, pathMethod: m})
                    },
                    className: "body-param-content-type",
                    ariaLabel: "Request content type",
                    controlId: w
                }))), k().createElement("div", {className: "opblock-description-wrapper"}, k().createElement(E, {
                    setRetainRequestBodyValueFlag: e => u.setRetainRequestBodyValueFlag({
                        value: e,
                        pathMethod: m
                    }),
                    userHasEditedBody: d.hasUserEditedBody(...m),
                    specPath: s.slice(0, -1).push("requestBody"),
                    requestBody: b,
                    requestBodyValue: d.requestBodyValue(...m),
                    requestBodyInclusionSetting: d.requestBodyInclusionSetting(...m),
                    requestBodyErrors: d.requestBodyErrors(...m),
                    isExecute: _,
                    getConfigs: c,
                    activeExamplesKey: d.activeExamplesMember(...m, "requestBody", "requestBody"),
                    updateActiveExamplesKey: e => {
                        this.props.oas3Actions.setActiveExamplesMember({
                            name: e,
                            pathMethod: this.props.pathMethod,
                            contextType: "requestBody",
                            contextName: "requestBody"
                        })
                    },
                    onChange: (e, t) => {
                        if (t) {
                            const r = d.requestBodyValue(...m), a = I.Map.isMap(r) ? r : (0, I.Map)();
                            return u.setRequestBodyValue({pathMethod: m, value: a.setIn(t, e)})
                        }
                        u.setRequestBodyValue({value: e, pathMethod: m})
                    },
                    onChangeIncludeEmpty: (e, t) => {
                        u.setRequestBodyInclusion({pathMethod: m, value: t, name: e})
                    },
                    contentType: d.requestContentType(...m)
                }))))
            }
        }

        const parameter_extension = ({
                                         xKey: e,
                                         xVal: t
                                     }) => k().createElement("div", {className: "parameter__extension"}, e, ": ", String(t)),
            Za = {
                onChange: () => {
                }, isIncludedOptions: {}
            };

        class ParameterIncludeEmpty extends N.Component {
            static defaultProps = Za;

            componentDidMount() {
                const {isIncludedOptions: e, onChange: t} = this.props, {shouldDispatchInit: r, defaultValue: a} = e;
                r && t(a)
            }

            onCheckboxChange = e => {
                const {onChange: t} = this.props;
                t(e.target.checked)
            };

            render() {
                let {isIncluded: e, isDisabled: t} = this.props;
                return k().createElement("div", null, k().createElement("label", {
                    htmlFor: "include_empty_value",
                    className: Fa()("parameter__empty_value_toggle", {disabled: t})
                }, k().createElement("input", {
                    id: "include_empty_value",
                    type: "checkbox",
                    disabled: t,
                    checked: !t && e,
                    onChange: this.onCheckboxChange
                }), "Send empty value"))
            }
        }

        class ParameterRow extends N.Component {
            constructor(e, t) {
                super(e, t), this.setDefaultValue()
            }

            UNSAFE_componentWillReceiveProps(e) {
                let t, {specSelectors: r, pathMethod: a, rawParam: n} = e, s = r.isOAS3(),
                    o = r.parameterWithMetaByIdentity(a, n) || new I.Map;
                if (o = o.isEmpty() ? n : o, s) {
                    let {schema: e} = getParameterSchema(o, {isOAS3: s});
                    t = e ? e.get("enum") : void 0
                } else t = o ? o.get("enum") : void 0;
                let l, c = o ? o.get("value") : void 0;
                void 0 !== c ? l = c : n.get("required") && t && t.size && (l = t.first()), void 0 !== l && l !== c && this.onChangeWrapper(function numberToString(e) {
                    return "number" == typeof e ? e.toString() : e
                }(l)), this.setDefaultValue()
            }

            onChangeWrapper = (e, t = !1) => {
                let r, {onChange: a, rawParam: n} = this.props;
                return r = "" === e || e && 0 === e.size ? null : e, a(n, r, t)
            };
            _onExampleSelect = e => {
                this.props.oas3Actions.setActiveExamplesMember({
                    name: e,
                    pathMethod: this.props.pathMethod,
                    contextType: "parameters",
                    contextName: this.getParamKey()
                })
            };
            onChangeIncludeEmpty = e => {
                let {specActions: t, param: r, pathMethod: a} = this.props;
                const n = r.get("name"), s = r.get("in");
                return t.updateEmptyParamInclusion(a, n, s, e)
            };
            setDefaultValue = () => {
                let {specSelectors: e, pathMethod: t, rawParam: r, oas3Selectors: a, fn: n} = this.props;
                const s = e.parameterWithMetaByIdentity(t, r) || (0, I.Map)(), {schema: o} = getParameterSchema(s, {isOAS3: e.isOAS3()}),
                    l = s.get("content", (0, I.Map)()).keySeq().first(),
                    c = o ? n.getSampleSchema(o.toJS(), l, {includeWriteOnly: !0}) : null;
                if (s && void 0 === s.get("value") && "body" !== s.get("in")) {
                    let r;
                    if (e.isSwagger2()) r = void 0 !== s.get("x-example") ? s.get("x-example") : void 0 !== s.getIn(["schema", "example"]) ? s.getIn(["schema", "example"]) : o && o.getIn(["default"]); else if (e.isOAS3()) {
                        const e = a.activeExamplesMember(...t, "parameters", this.getParamKey());
                        r = void 0 !== s.getIn(["examples", e, "value"]) ? s.getIn(["examples", e, "value"]) : void 0 !== s.getIn(["content", l, "example"]) ? s.getIn(["content", l, "example"]) : void 0 !== s.get("example") ? s.get("example") : void 0 !== (o && o.get("example")) ? o && o.get("example") : void 0 !== (o && o.get("default")) ? o && o.get("default") : s.get("default")
                    }
                    void 0 === r || I.List.isList(r) || (r = stringify(r)), void 0 !== r ? this.onChangeWrapper(r) : o && "object" === o.get("type") && c && !s.get("examples") && this.onChangeWrapper(I.List.isList(c) ? c : stringify(c))
                }
            };

            getParamKey() {
                const {param: e} = this.props;
                return e ? `${e.get("name")}-${e.get("in")}` : null
            }

            render() {
                let {
                    param: e,
                    rawParam: t,
                    getComponent: r,
                    getConfigs: a,
                    isExecute: n,
                    fn: s,
                    onChangeConsumes: o,
                    specSelectors: l,
                    pathMethod: c,
                    specPath: i,
                    oas3Selectors: p
                } = this.props, m = l.isOAS3();
                const {showExtensions: u, showCommonExtensions: d} = a();
                if (e || (e = t), !t) return null;
                const h = r("JsonSchemaForm"), g = r("ParamBody");
                let y = e.get("in"), f = "body" !== y ? null : k().createElement(g, {
                    getComponent: r,
                    getConfigs: a,
                    fn: s,
                    param: e,
                    consumes: l.consumesOptionsFor(c),
                    consumesValue: l.contentTypeValues(c).get("requestContentType"),
                    onChange: this.onChangeWrapper,
                    onChangeConsumes: o,
                    isExecute: n,
                    specSelectors: l,
                    pathMethod: c
                });
                const S = r("modelExample"), E = r("Markdown", !0), _ = r("ParameterExt"),
                    v = r("ParameterIncludeEmpty"), w = r("ExamplesSelectValueRetainer"), b = r("Example");
                let C, x, O, N, {schema: A} = getParameterSchema(e, {isOAS3: m}),
                    q = l.parameterWithMetaByIdentity(c, t) || (0, I.Map)(), j = A ? A.get("format") : null,
                    P = A ? A.get("type") : null, M = A ? A.getIn(["items", "type"]) : null, R = "formData" === y,
                    T = "FormData" in U, J = e.get("required"), $ = q ? q.get("value") : "",
                    K = d ? getCommonExtensions(A) : null, D = u ? getExtensions(e) : null, V = !1;
                return void 0 !== e && A && (C = A.get("items")), void 0 !== C ? (x = C.get("enum"), O = C.get("default")) : A && (x = A.get("enum")), x && x.size && x.size > 0 && (V = !0), void 0 !== e && (A && (O = A.get("default")), void 0 === O && (O = e.get("default")), N = e.get("example"), void 0 === N && (N = e.get("x-example"))), k().createElement("tr", {
                    "data-param-name": e.get("name"),
                    "data-param-in": e.get("in")
                }, k().createElement("td", {className: "parameters-col_name"}, k().createElement("div", {className: J ? "parameter__name required" : "parameter__name"}, e.get("name"), J ? k().createElement("span", null, " *") : null), k().createElement("div", {className: "parameter__type"}, P, M && `[${M}]`, j && k().createElement("span", {className: "prop-format"}, "($", j, ")")), k().createElement("div", {className: "parameter__deprecated"}, m && e.get("deprecated") ? "deprecated" : null), k().createElement("div", {className: "parameter__in"}, "(", e.get("in"), ")"), d && K.size ? K.entrySeq().map((([e, t]) => k().createElement(_, {
                    key: `${e}-${t}`,
                    xKey: e,
                    xVal: t
                }))) : null, u && D.size ? D.entrySeq().map((([e, t]) => k().createElement(_, {
                    key: `${e}-${t}`,
                    xKey: e,
                    xVal: t
                }))) : null), k().createElement("td", {className: "parameters-col_description"}, e.get("description") ? k().createElement(E, {source: e.get("description")}) : null, !f && n || !V ? null : k().createElement(E, {
                    className: "parameter__enum",
                    source: "<i>Available values</i> : " + x.map((function (e) {
                        return e
                    })).toArray().join(", ")
                }), !f && n || void 0 === O ? null : k().createElement(E, {
                    className: "parameter__default",
                    source: "<i>Default value</i> : " + O
                }), !f && n || void 0 === N ? null : k().createElement(E, {source: "<i>Example</i> : " + N}), R && !T && k().createElement("div", null, "Error: your browser does not support FormData"), m && e.get("examples") ? k().createElement("section", {className: "parameter-controls"}, k().createElement(w, {
                    examples: e.get("examples"),
                    onSelect: this._onExampleSelect,
                    updateValue: this.onChangeWrapper,
                    getComponent: r,
                    defaultToFirstExample: !0,
                    currentKey: p.activeExamplesMember(...c, "parameters", this.getParamKey()),
                    currentUserInputValue: $
                })) : null, f ? null : k().createElement(h, {
                    fn: s,
                    getComponent: r,
                    value: $,
                    required: J,
                    disabled: !n,
                    description: e.get("name"),
                    onChange: this.onChangeWrapper,
                    errors: q.get("errors"),
                    schema: A
                }), f && A ? k().createElement(S, {
                    getComponent: r,
                    specPath: i.push("schema"),
                    getConfigs: a,
                    isExecute: n,
                    specSelectors: l,
                    schema: A,
                    example: f,
                    includeWriteOnly: !0
                }) : null, !f && n && e.get("allowEmptyValue") ? k().createElement(v, {
                    onChange: this.onChangeIncludeEmpty,
                    isIncluded: l.parameterInclusionSettingFor(c, e.get("name"), e.get("in")),
                    isDisabled: !isEmptyValue($)
                }) : null, m && e.get("examples") ? k().createElement(b, {
                    example: e.getIn(["examples", p.activeExamplesMember(...c, "parameters", this.getParamKey())]),
                    getComponent: r,
                    getConfigs: a
                }) : null))
            }
        }

        class Execute extends N.Component {
            handleValidateParameters = () => {
                let {specSelectors: e, specActions: t, path: r, method: a} = this.props;
                return t.validateParams([r, a]), e.validateBeforeExecute([r, a])
            };
            handleValidateRequestBody = () => {
                let {path: e, method: t, specSelectors: r, oas3Selectors: a, oas3Actions: n} = this.props,
                    s = {missingBodyValue: !1, missingRequiredKeys: []};
                n.clearRequestBodyValidateError({path: e, method: t});
                let o = r.getOAS3RequiredRequestBodyContentType([e, t]), l = a.requestBodyValue(e, t),
                    c = a.validateBeforeExecute([e, t]), i = a.requestContentType(e, t);
                if (!c) return s.missingBodyValue = !0, n.setRequestBodyValidateError({
                    path: e,
                    method: t,
                    validationErrors: s
                }), !1;
                if (!o) return !0;
                let p = a.validateShallowRequired({
                    oas3RequiredRequestBodyContentType: o,
                    oas3RequestContentType: i,
                    oas3RequestBodyValue: l
                });
                return !p || p.length < 1 || (p.forEach((e => {
                    s.missingRequiredKeys.push(e)
                })), n.setRequestBodyValidateError({path: e, method: t, validationErrors: s}), !1)
            };
            handleValidationResultPass = () => {
                let {specActions: e, operation: t, path: r, method: a} = this.props;
                this.props.onExecute && this.props.onExecute(), e.execute({operation: t, path: r, method: a})
            };
            handleValidationResultFail = () => {
                let {specActions: e, path: t, method: r} = this.props;
                e.clearValidateParams([t, r]), setTimeout((() => {
                    e.validateParams([t, r])
                }), 40)
            };
            handleValidationResult = e => {
                e ? this.handleValidationResultPass() : this.handleValidationResultFail()
            };
            onClick = () => {
                let e = this.handleValidateParameters(), t = this.handleValidateRequestBody(), r = e && t;
                this.handleValidationResult(r)
            };
            onChangeProducesWrapper = e => this.props.specActions.changeProducesValue([this.props.path, this.props.method], e);

            render() {
                const {disabled: e} = this.props;
                return k().createElement("button", {
                    className: "btn execute opblock-control__btn",
                    onClick: this.onClick,
                    disabled: e
                }, "Execute")
            }
        }

        class headers_Headers extends k().Component {
            render() {
                let {headers: e, getComponent: t} = this.props;
                const r = t("Property"), a = t("Markdown", !0);
                return e && e.size ? k().createElement("div", {className: "headers-wrapper"}, k().createElement("h4", {className: "headers__title"}, "Headers:"), k().createElement("table", {className: "headers"}, k().createElement("thead", null, k().createElement("tr", {className: "header-row"}, k().createElement("th", {className: "header-col"}, "Name"), k().createElement("th", {className: "header-col"}, "Description"), k().createElement("th", {className: "header-col"}, "Type"))), k().createElement("tbody", null, e.entrySeq().map((([e, t]) => {
                    if (!q().Map.isMap(t)) return null;
                    const n = t.get("description"),
                        s = t.getIn(["schema"]) ? t.getIn(["schema", "type"]) : t.getIn(["type"]),
                        o = t.getIn(["schema", "example"]);
                    return k().createElement("tr", {key: e}, k().createElement("td", {className: "header-col"}, e), k().createElement("td", {className: "header-col"}, n ? k().createElement(a, {source: n}) : null), k().createElement("td", {className: "header-col"}, s, " ", o ? k().createElement(r, {
                        propKey: "Example",
                        propVal: o,
                        propClass: "header-example"
                    }) : null))
                })).toArray()))) : null
            }
        }

        class Errors extends k().Component {
            render() {
                let {
                    editorActions: e,
                    errSelectors: t,
                    layoutSelectors: r,
                    layoutActions: a,
                    getComponent: n
                } = this.props;
                const s = n("Collapse");
                if (e && e.jumpToLine) var o = e.jumpToLine;
                let l = t.allErrors().filter((e => "thrown" === e.get("type") || "error" === e.get("level")));
                if (!l || l.count() < 1) return null;
                let c = r.isShown(["errorPane"], !0), i = l.sortBy((e => e.get("line")));
                return k().createElement("pre", {className: "errors-wrapper"}, k().createElement("hgroup", {className: "error"}, k().createElement("h4", {className: "errors__title"}, "Errors"), k().createElement("button", {
                    className: "btn errors__clear-btn",
                    onClick: () => a.show(["errorPane"], !c)
                }, c ? "Hide" : "Show")), k().createElement(s, {
                    isOpened: c,
                    animated: !0
                }, k().createElement("div", {className: "errors"}, i.map(((e, t) => {
                    let r = e.get("type");
                    return "thrown" === r || "auth" === r ? k().createElement(ThrownErrorItem, {
                        key: t,
                        error: e.get("error") || e,
                        jumpToLine: o
                    }) : "spec" === r ? k().createElement(SpecErrorItem, {key: t, error: e, jumpToLine: o}) : void 0
                })))))
            }
        }

        const ThrownErrorItem = ({error: e, jumpToLine: t}) => {
            if (!e) return null;
            let r = e.get("line");
            return k().createElement("div", {className: "error-wrapper"}, e ? k().createElement("div", null, k().createElement("h4", null, e.get("source") && e.get("level") ? toTitleCase(e.get("source")) + " " + e.get("level") : "", e.get("path") ? k().createElement("small", null, " at ", e.get("path")) : null), k().createElement("span", {className: "message thrown"}, e.get("message")), k().createElement("div", {className: "error-line"}, r && t ? k().createElement("a", {onClick: t.bind(null, r)}, "Jump to line ", r) : null)) : null)
        }, SpecErrorItem = ({error: e, jumpToLine: t = null}) => {
            let r = null;
            return e.get("path") ? r = I.List.isList(e.get("path")) ? k().createElement("small", null, "at ", e.get("path").join(".")) : k().createElement("small", null, "at ", e.get("path")) : e.get("line") && !t && (r = k().createElement("small", null, "on line ", e.get("line"))), k().createElement("div", {className: "error-wrapper"}, e ? k().createElement("div", null, k().createElement("h4", null, toTitleCase(e.get("source")) + " " + e.get("level"), " ", r), k().createElement("span", {className: "message"}, e.get("message")), k().createElement("div", {className: "error-line"}, t ? k().createElement("a", {onClick: t.bind(null, e.get("line"))}, "Jump to line ", e.get("line")) : null)) : null)
        };

        function toTitleCase(e) {
            return (e || "").split(" ").map((e => e[0].toUpperCase() + e.slice(1))).join(" ")
        }

        const content_type_noop = () => {
        };

        class ContentType extends k().Component {
            static defaultProps = {
                onChange: content_type_noop,
                value: null,
                contentTypes: (0, I.fromJS)(["application/json"])
            };

            componentDidMount() {
                this.props.contentTypes && this.props.onChange(this.props.contentTypes.first())
            }

            UNSAFE_componentWillReceiveProps(e) {
                e.contentTypes && e.contentTypes.size && (e.contentTypes.includes(e.value) || e.onChange(e.contentTypes.first()))
            }

            onChangeWrapper = e => this.props.onChange(e.target.value);

            render() {
                let {ariaControls: e, ariaLabel: t, className: r, contentTypes: a, controlId: n, value: s} = this.props;
                return a && a.size ? k().createElement("div", {className: "content-type-wrapper " + (r || "")}, k().createElement("select", {
                    "aria-controls": e,
                    "aria-label": t,
                    className: "content-type",
                    id: n,
                    onChange: this.onChangeWrapper,
                    value: s || ""
                }, a.map((e => k().createElement("option", {key: e, value: e}, e))).toArray())) : null
            }
        }

        function xclass(...e) {
            return e.filter((e => !!e)).join(" ").trim()
        }

        class Container extends k().Component {
            render() {
                let {fullscreen: e, full: t, ...r} = this.props;
                if (e) return k().createElement("section", r);
                let a = "swagger-container" + (t ? "-full" : "");
                return k().createElement("section", rt()({}, r, {className: xclass(r.className, a)}))
            }
        }

        const en = {mobile: "", tablet: "-tablet", desktop: "-desktop", large: "-hd"};

        class Col extends k().Component {
            render() {
                const {hide: e, keepContents: t, mobile: r, tablet: a, desktop: n, large: s, ...o} = this.props;
                if (e && !t) return k().createElement("span", null);
                let l = [];
                for (let e in en) {
                    if (!Object.prototype.hasOwnProperty.call(en, e)) continue;
                    let t = en[e];
                    if (e in this.props) {
                        let r = this.props[e];
                        if (r < 1) {
                            l.push("none" + t);
                            continue
                        }
                        l.push("block" + t), l.push("col-" + r + t)
                    }
                }
                e && l.push("hidden");
                let c = xclass(o.className, ...l);
                return k().createElement("section", rt()({}, o, {className: c}))
            }
        }

        class Row extends k().Component {
            render() {
                return k().createElement("div", rt()({}, this.props, {className: xclass(this.props.className, "wrapper")}))
            }
        }

        class Button extends k().Component {
            static defaultProps = {className: ""};

            render() {
                return k().createElement("button", rt()({}, this.props, {className: xclass(this.props.className, "button")}))
            }
        }

        const TextArea = e => k().createElement("textarea", e), Input = e => k().createElement("input", e);

        class Select extends k().Component {
            static defaultProps = {multiple: !1, allowEmptyValue: !0};

            constructor(e, t) {
                let r;
                super(e, t), r = e.value ? e.value : e.multiple ? [""] : "", this.state = {value: r}
            }

            onChange = e => {
                let t, {onChange: r, multiple: a} = this.props, n = [].slice.call(e.target.options);
                t = a ? n.filter((function (e) {
                    return e.selected
                })).map((function (e) {
                    return e.value
                })) : e.target.value, this.setState({value: t}), r && r(t)
            };

            UNSAFE_componentWillReceiveProps(e) {
                e.value !== this.props.value && this.setState({value: e.value})
            }

            render() {
                let {allowedValues: e, multiple: t, allowEmptyValue: r, disabled: a} = this.props,
                    n = this.state.value?.toJS?.() || this.state.value;
                return k().createElement("select", {
                    className: this.props.className,
                    multiple: t,
                    value: n,
                    onChange: this.onChange,
                    disabled: a
                }, r ? k().createElement("option", {value: ""}, "--") : null, e.map((function (e, t) {
                    return k().createElement("option", {key: t, value: String(e)}, String(e))
                })))
            }
        }

        class Link extends k().Component {
            render() {
                return k().createElement("a", rt()({}, this.props, {
                    rel: "noopener noreferrer",
                    className: xclass(this.props.className, "link")
                }))
            }
        }

        const NoMargin = ({children: e}) => k().createElement("div", {className: "no-margin"}, " ", e, " ");

        class Collapse extends k().Component {
            static defaultProps = {isOpened: !1, animated: !1};

            renderNotAnimated() {
                return this.props.isOpened ? k().createElement(NoMargin, null, this.props.children) : k().createElement("noscript", null)
            }

            render() {
                let {animated: e, isOpened: t, children: r} = this.props;
                return e ? (r = t ? r : null, k().createElement(NoMargin, null, r)) : this.renderNotAnimated()
            }
        }

        class Overview extends k().Component {
            constructor(...e) {
                super(...e), this.setTagShown = this._setTagShown.bind(this)
            }

            _setTagShown(e, t) {
                this.props.layoutActions.show(e, t)
            }

            showOp(e, t) {
                let {layoutActions: r} = this.props;
                r.show(e, t)
            }

            render() {
                let {specSelectors: e, layoutSelectors: t, layoutActions: r, getComponent: a} = this.props,
                    n = e.taggedOperations();
                const s = a("Collapse");
                return k().createElement("div", null, k().createElement("h4", {className: "overview-title"}, "Overview"), n.map(((e, a) => {
                    let n = e.get("operations"), o = ["overview-tags", a], l = t.isShown(o, !0);
                    return k().createElement("div", {key: "overview-" + a}, k().createElement("h4", {
                        onClick: () => r.show(o, !l),
                        className: "link overview-tag"
                    }, " ", l ? "-" : "+", a), k().createElement(s, {isOpened: l, animated: !0}, n.map((e => {
                        let {path: a, method: n, id: s} = e.toObject(), o = "operations", l = s, c = t.isShown([o, l]);
                        return k().createElement(OperationLink, {
                            key: s,
                            path: a,
                            method: n,
                            id: a + "-" + n,
                            shown: c,
                            showOpId: l,
                            showOpIdPrefix: o,
                            href: `#operation-${l}`,
                            onClick: r.show
                        })
                    })).toArray()))
                })).toArray(), n.size < 1 && k().createElement("h3", null, " No operations defined in spec! "))
            }
        }

        class OperationLink extends k().Component {
            constructor(e) {
                super(e), this.onClick = this._onClick.bind(this)
            }

            _onClick() {
                let {showOpId: e, showOpIdPrefix: t, onClick: r, shown: a} = this.props;
                r([t, e], !a)
            }

            render() {
                let {id: e, method: t, shown: r, href: a} = this.props;
                return k().createElement(Link, {
                    href: a,
                    onClick: this.onClick,
                    className: "block opblock-link " + (r ? "shown" : "")
                }, k().createElement("div", null, k().createElement("small", {className: `bold-label-${t}`}, t.toUpperCase()), k().createElement("span", {className: "bold-label"}, e)))
            }
        }

        class InitializedInput extends k().Component {
            componentDidMount() {
                this.props.initialValue && (this.inputRef.value = this.props.initialValue)
            }

            render() {
                const {value: e, defaultValue: t, initialValue: r, ...a} = this.props;
                return k().createElement("input", rt()({}, a, {ref: e => this.inputRef = e}))
            }
        }

        class InfoBasePath extends k().Component {
            render() {
                const {host: e, basePath: t} = this.props;
                return k().createElement("pre", {className: "base-url"}, "[ Base URL: ", e, t, " ]")
            }
        }

        class InfoUrl extends k().PureComponent {
            render() {
                const {url: e, getComponent: t} = this.props, r = t("Link");
                return k().createElement(r, {
                    target: "_blank",
                    href: sanitizeUrl(e)
                }, k().createElement("span", {className: "url"}, " ", e))
            }
        }

        class Info extends k().Component {
            render() {
                const {
                        info: e,
                        url: t,
                        host: r,
                        basePath: a,
                        getComponent: n,
                        externalDocs: s,
                        selectedServer: o,
                        url: l
                    } = this.props, c = e.get("version"), i = e.get("description"), p = e.get("title"),
                    m = safeBuildUrl(e.get("termsOfService"), l, {selectedServer: o}), u = e.get("contact"),
                    d = e.get("license"), h = safeBuildUrl(s && s.get("url"), l, {selectedServer: o}),
                    g = s && s.get("description"), y = n("Markdown", !0), f = n("Link"), S = n("VersionStamp"),
                    E = n("OpenAPIVersion"), _ = n("InfoUrl"), v = n("InfoBasePath"), w = n("License"),
                    b = n("Contact");
                return k().createElement("div", {className: "info"}, k().createElement("hgroup", {className: "main"}, k().createElement("h2", {className: "title"}, p, k().createElement("span", null, c && k().createElement(S, {version: c}), k().createElement(E, {oasVersion: "2.0"}))), r || a ? k().createElement(v, {
                    host: r,
                    basePath: a
                }) : null, t && k().createElement(_, {
                    getComponent: n,
                    url: t
                })), k().createElement("div", {className: "description"}, k().createElement(y, {source: i})), m && k().createElement("div", {className: "info__tos"}, k().createElement(f, {
                    target: "_blank",
                    href: sanitizeUrl(m)
                }, "Terms of service")), u?.size > 0 && k().createElement(b, {
                    getComponent: n,
                    data: u,
                    selectedServer: o,
                    url: t
                }), d?.size > 0 && k().createElement(w, {
                    getComponent: n,
                    license: d,
                    selectedServer: o,
                    url: t
                }), h ? k().createElement(f, {
                    className: "info__extdocs",
                    target: "_blank",
                    href: sanitizeUrl(h)
                }, g || h) : null)
            }
        }

        const tn = Info;

        class InfoContainer extends k().Component {
            render() {
                const {specSelectors: e, getComponent: t, oas3Selectors: r} = this.props, a = e.info(), n = e.url(),
                    s = e.basePath(), o = e.host(), l = e.externalDocs(), c = r.selectedServer(), i = t("info");
                return k().createElement("div", null, a && a.count() ? k().createElement(i, {
                    info: a,
                    url: n,
                    host: o,
                    basePath: s,
                    externalDocs: l,
                    getComponent: t,
                    selectedServer: c
                }) : null)
            }
        }

        class Contact extends k().Component {
            render() {
                const {data: e, getComponent: t, selectedServer: r, url: a} = this.props,
                    n = e.get("name", "the developer"), s = safeBuildUrl(e.get("url"), a, {selectedServer: r}),
                    o = e.get("email"), l = t("Link");
                return k().createElement("div", {className: "info__contact"}, s && k().createElement("div", null, k().createElement(l, {
                    href: sanitizeUrl(s),
                    target: "_blank"
                }, n, " - Website")), o && k().createElement(l, {href: sanitizeUrl(`mailto:${o}`)}, s ? `Send email to ${n}` : `Contact ${n}`))
            }
        }

        const rn = Contact;

        class License extends k().Component {
            render() {
                const {license: e, getComponent: t, selectedServer: r, url: a} = this.props,
                    n = e.get("name", "License"), s = safeBuildUrl(e.get("url"), a, {selectedServer: r}), o = t("Link");
                return k().createElement("div", {className: "info__license"}, s ? k().createElement("div", {className: "info__license__url"}, k().createElement(o, {
                    target: "_blank",
                    href: sanitizeUrl(s)
                }, n)) : k().createElement("span", null, n))
            }
        }

        const an = License;

        class JumpToPath extends k().Component {
            render() {
                return null
            }
        }

        class CopyToClipboardBtn extends k().Component {
            render() {
                let {getComponent: e} = this.props;
                const t = e("CopyIcon");
                return k().createElement("div", {
                    className: "view-line-link copy-to-clipboard",
                    title: "Copy to clipboard"
                }, k().createElement(dt.CopyToClipboard, {text: this.props.textToCopy}, k().createElement(t, null)))
            }
        }

        class Footer extends k().Component {
            render() {
                return k().createElement("div", {className: "footer"})
            }
        }

        class FilterContainer extends k().Component {
            onFilterChange = e => {
                const {target: {value: t}} = e;
                this.props.layoutActions.updateFilter(t)
            };

            render() {
                const {specSelectors: e, layoutSelectors: t, getComponent: r} = this.props, a = r("Col"),
                    n = "loading" === e.loadingStatus(), s = "failed" === e.loadingStatus(), o = t.currentFilter(),
                    l = ["operation-filter-input"];
                return s && l.push("failed"), n && l.push("loading"), k().createElement("div", null, null === o || !1 === o || "false" === o ? null : k().createElement("div", {className: "filter-container"}, k().createElement(a, {
                    className: "filter wrapper",
                    mobile: 12
                }, k().createElement("input", {
                    className: l.join(" "),
                    placeholder: "Filter by tag",
                    type: "text",
                    onChange: this.onFilterChange,
                    value: !0 === o || "true" === o ? "" : o,
                    disabled: n
                }))))
            }
        }

        const nn = Function.prototype;

        class ParamBody extends N.PureComponent {
            static defaultProp = {
                consumes: (0, I.fromJS)(["application/json"]),
                param: (0, I.fromJS)({}),
                onChange: nn,
                onChangeConsumes: nn
            };

            constructor(e, t) {
                super(e, t), this.state = {isEditBox: !1, value: ""}
            }

            componentDidMount() {
                this.updateValues.call(this, this.props)
            }

            UNSAFE_componentWillReceiveProps(e) {
                this.updateValues.call(this, e)
            }

            updateValues = e => {
                let {param: t, isExecute: r, consumesValue: a = ""} = e, n = /xml/i.test(a), s = /json/i.test(a),
                    o = n ? t.get("value_xml") : t.get("value");
                if (void 0 !== o) {
                    let e = !o && s ? "{}" : o;
                    this.setState({value: e}), this.onChange(e, {isXml: n, isEditBox: r})
                } else n ? this.onChange(this.sample("xml"), {
                    isXml: n,
                    isEditBox: r
                }) : this.onChange(this.sample(), {isEditBox: r})
            };
            sample = e => {
                let {param: t, fn: r} = this.props, a = r.inferSchema(t.toJS());
                return r.getSampleSchema(a, e, {includeWriteOnly: !0})
            };
            onChange = (e, {isEditBox: t, isXml: r}) => {
                this.setState({value: e, isEditBox: t}), this._onChange(e, r)
            };
            _onChange = (e, t) => {
                (this.props.onChange || nn)(e, t)
            };
            handleOnChange = e => {
                const {consumesValue: t} = this.props, r = /xml/i.test(t), a = e.target.value;
                this.onChange(a, {isXml: r, isEditBox: this.state.isEditBox})
            };
            toggleIsEditBox = () => this.setState((e => ({isEditBox: !e.isEditBox})));

            render() {
                let {
                    onChangeConsumes: e,
                    param: t,
                    isExecute: r,
                    specSelectors: a,
                    pathMethod: n,
                    getConfigs: s,
                    getComponent: o
                } = this.props;
                const l = o("Button"), c = o("TextArea"), i = o("highlightCode"), p = o("contentType");
                let m = (a ? a.parameterWithMetaByIdentity(n, t) : t).get("errors", (0, I.List)()),
                    u = a.contentTypeValues(n).get("requestContentType"),
                    d = this.props.consumes && this.props.consumes.size ? this.props.consumes : ParamBody.defaultProp.consumes, {
                        value: h,
                        isEditBox: g
                    } = this.state, y = null;
                getKnownSyntaxHighlighterLanguage(h) && (y = "json");
                const f = `${createHtmlReadyId(`${n[1]}${n[0]}_parameters`)}_select`;
                return k().createElement("div", {
                    className: "body-param",
                    "data-param-name": t.get("name"),
                    "data-param-in": t.get("in")
                }, g && r ? k().createElement(c, {
                    className: "body-param__text" + (m.count() ? " invalid" : ""),
                    value: h,
                    onChange: this.handleOnChange
                }) : h && k().createElement(i, {
                    className: "body-param__example",
                    language: y,
                    getConfigs: s,
                    value: h
                }), k().createElement("div", {className: "body-param-options"}, r ? k().createElement("div", {className: "body-param-edit"}, k().createElement(l, {
                    className: g ? "btn cancel body-param__example-edit" : "btn edit body-param__example-edit",
                    onClick: this.toggleIsEditBox
                }, g ? "Cancel" : "Edit")) : null, k().createElement("label", {htmlFor: f}, k().createElement("span", null, "Parameter content type"), k().createElement(p, {
                    value: u,
                    contentTypes: d,
                    onChange: e,
                    className: "body-param-content-type",
                    ariaLabel: "Parameter content type",
                    controlId: f
                }))))
            }
        }

        class Curl extends k().Component {
            render() {
                let {request: e, getConfigs: t} = this.props, r = requestSnippetGenerator_curl_bash(e);
                const a = t(), n = Ge()(a, "syntaxHighlight.activated") ? k().createElement(gt(), {
                    language: "bash",
                    className: "curl microlight",
                    style: getStyle(Ge()(a, "syntaxHighlight.theme"))
                }, r) : k().createElement("textarea", {readOnly: !0, className: "curl", value: r});
                return k().createElement("div", {className: "curl-command"}, k().createElement("h4", null, "Curl"), k().createElement("div", {className: "copy-to-clipboard"}, k().createElement(dt.CopyToClipboard, {text: r}, k().createElement("button", null))), k().createElement("div", null, n))
            }
        }

        class Schemes extends k().Component {
            UNSAFE_componentWillMount() {
                let {schemes: e} = this.props;
                this.setScheme(e.first())
            }

            UNSAFE_componentWillReceiveProps(e) {
                this.props.currentScheme && e.schemes.includes(this.props.currentScheme) || this.setScheme(e.schemes.first())
            }

            onChange = e => {
                this.setScheme(e.target.value)
            };
            setScheme = e => {
                let {path: t, method: r, specActions: a} = this.props;
                a.setScheme(e, t, r)
            };

            render() {
                let {schemes: e, currentScheme: t} = this.props;
                return k().createElement("label", {htmlFor: "schemes"}, k().createElement("span", {className: "schemes-title"}, "Schemes"), k().createElement("select", {
                    onChange: this.onChange,
                    value: t,
                    id: "schemes"
                }, e.valueSeq().map((e => k().createElement("option", {value: e, key: e}, e))).toArray()))
            }
        }

        class SchemesContainer extends k().Component {
            render() {
                const {specActions: e, specSelectors: t, getComponent: r} = this.props, a = t.operationScheme(),
                    n = t.schemes(), s = r("schemes");
                return n && n.size ? k().createElement(s, {currentScheme: a, schemes: n, specActions: e}) : null
            }
        }

        class ModelCollapse extends N.Component {
            static defaultProps = {
                collapsedContent: "{...}", expanded: !1, title: null, onToggle: () => {
                }, hideSelfOnExpand: !1, specPath: q().List([])
            };

            constructor(e, t) {
                super(e, t);
                let {expanded: r, collapsedContent: a} = this.props;
                this.state = {expanded: r, collapsedContent: a || ModelCollapse.defaultProps.collapsedContent}
            }

            componentDidMount() {
                const {hideSelfOnExpand: e, expanded: t, modelName: r} = this.props;
                e && t && this.props.onToggle(r, t)
            }

            UNSAFE_componentWillReceiveProps(e) {
                this.props.expanded !== e.expanded && this.setState({expanded: e.expanded})
            }

            toggleCollapsed = () => {
                this.props.onToggle && this.props.onToggle(this.props.modelName, !this.state.expanded), this.setState({expanded: !this.state.expanded})
            };
            onLoad = e => {
                if (e && this.props.layoutSelectors) {
                    const t = this.props.layoutSelectors.getScrollToKey();
                    q().is(t, this.props.specPath) && this.toggleCollapsed(), this.props.layoutActions.readyToScroll(this.props.specPath, e.parentElement)
                }
            };

            render() {
                const {title: e, classes: t} = this.props;
                return this.state.expanded && this.props.hideSelfOnExpand ? k().createElement("span", {className: t || ""}, this.props.children) : k().createElement("span", {
                    className: t || "",
                    ref: this.onLoad
                }, k().createElement("button", {
                    "aria-expanded": this.state.expanded,
                    className: "model-box-control",
                    onClick: this.toggleCollapsed
                }, e && k().createElement("span", {className: "pointer"}, e), k().createElement("span", {className: "model-toggle" + (this.state.expanded ? "" : " collapsed")}), !this.state.expanded && k().createElement("span", null, this.state.collapsedContent)), this.state.expanded && this.props.children)
            }
        }

        class ModelExample extends k().Component {
            constructor(e, t) {
                super(e, t);
                let {getConfigs: r, isExecute: a} = this.props, {defaultModelRendering: n} = r(), s = n;
                "example" !== n && "model" !== n && (s = "example"), a && (s = "example"), this.state = {activeTab: s}
            }

            activeTab = e => {
                let {target: {dataset: {name: t}}} = e;
                this.setState({activeTab: t})
            };

            UNSAFE_componentWillReceiveProps(e) {
                e.isExecute && !this.props.isExecute && this.props.example && this.setState({activeTab: "example"})
            }

            render() {
                let {
                    getComponent: e,
                    specSelectors: t,
                    schema: r,
                    example: a,
                    isExecute: n,
                    getConfigs: s,
                    specPath: o,
                    includeReadOnly: l,
                    includeWriteOnly: c
                } = this.props, {defaultModelExpandDepth: i} = s();
                const p = e("ModelWrapper"), m = e("highlightCode"), u = ne()(5).toString("base64"),
                    d = ne()(5).toString("base64"), h = ne()(5).toString("base64"), g = ne()(5).toString("base64");
                let y = t.isOAS3();
                return k().createElement("div", {className: "model-example"}, k().createElement("ul", {
                    className: "tab",
                    role: "tablist"
                }, k().createElement("li", {
                    className: Fa()("tabitem", {active: "example" === this.state.activeTab}),
                    role: "presentation"
                }, k().createElement("button", {
                    "aria-controls": d,
                    "aria-selected": "example" === this.state.activeTab,
                    className: "tablinks",
                    "data-name": "example",
                    id: u,
                    onClick: this.activeTab,
                    role: "tab"
                }, n ? "Edit Value" : "Example Value")), r && k().createElement("li", {
                    className: Fa()("tabitem", {active: "model" === this.state.activeTab}),
                    role: "presentation"
                }, k().createElement("button", {
                    "aria-controls": g,
                    "aria-selected": "model" === this.state.activeTab,
                    className: Fa()("tablinks", {inactive: n}),
                    "data-name": "model",
                    id: h,
                    onClick: this.activeTab,
                    role: "tab"
                }, y ? "Schema" : "Model"))), "example" === this.state.activeTab && k().createElement("div", {
                    "aria-hidden": "example" !== this.state.activeTab,
                    "aria-labelledby": u,
                    "data-name": "examplePanel",
                    id: d,
                    role: "tabpanel",
                    tabIndex: "0"
                }, a || k().createElement(m, {
                    value: "(no example available)",
                    getConfigs: s
                })), "model" === this.state.activeTab && k().createElement("div", {
                    "aria-hidden": "example" === this.state.activeTab,
                    "aria-labelledby": h,
                    "data-name": "modelPanel",
                    id: g,
                    role: "tabpanel",
                    tabIndex: "0"
                }, k().createElement(p, {
                    schema: r,
                    getComponent: e,
                    getConfigs: s,
                    specSelectors: t,
                    expandDepth: i,
                    specPath: o,
                    includeReadOnly: l,
                    includeWriteOnly: c
                })))
            }
        }

        class ModelWrapper extends N.Component {
            onToggle = (e, t) => {
                this.props.layoutActions && this.props.layoutActions.show(this.props.fullPath, t)
            };

            render() {
                let {getComponent: e, getConfigs: t} = this.props;
                const r = e("Model");
                let a;
                return this.props.layoutSelectors && (a = this.props.layoutSelectors.isShown(this.props.fullPath)), k().createElement("div", {className: "model-box"}, k().createElement(r, rt()({}, this.props, {
                    getConfigs: t,
                    expanded: a,
                    depth: 1,
                    onToggle: this.onToggle,
                    expandDepth: this.props.expandDepth || 0
                })))
            }
        }

        const sn = require("react-immutable-pure-component");
        var on = __webpack_require__.n(sn);
        const decodeRefName = e => {
            const t = e.replace(/~1/g, "/").replace(/~0/g, "~");
            try {
                return decodeURIComponent(t)
            } catch {
                return t
            }
        };

        class Model extends (on()) {
            static propTypes = {
                schema: Fe().map.isRequired,
                getComponent: Ae().func.isRequired,
                getConfigs: Ae().func.isRequired,
                specSelectors: Ae().object.isRequired,
                name: Ae().string,
                displayName: Ae().string,
                isRef: Ae().bool,
                required: Ae().bool,
                expandDepth: Ae().number,
                depth: Ae().number,
                specPath: Fe().list.isRequired,
                includeReadOnly: Ae().bool,
                includeWriteOnly: Ae().bool
            };
            getModelName = e => -1 !== e.indexOf("#/definitions/") ? decodeRefName(e.replace(/^.*#\/definitions\//, "")) : -1 !== e.indexOf("#/components/schemas/") ? decodeRefName(e.replace(/^.*#\/components\/schemas\//, "")) : void 0;
            getRefSchema = e => {
                let {specSelectors: t} = this.props;
                return t.findDefinition(e)
            };

            render() {
                let {
                    getComponent: e,
                    getConfigs: t,
                    specSelectors: r,
                    schema: a,
                    required: n,
                    name: s,
                    isRef: o,
                    specPath: l,
                    displayName: c,
                    includeReadOnly: i,
                    includeWriteOnly: p
                } = this.props;
                const m = e("ObjectModel"), u = e("ArrayModel"), d = e("PrimitiveModel");
                let h = "object", g = a && a.get("$$ref"), y = a && a.get("$ref");
                if (!s && g && (s = this.getModelName(g)), y) {
                    s = this.getModelName(y);
                    const e = this.getRefSchema(s);
                    I.Map.isMap(e) ? (a = e.set("$$ref", y), g = y) : (a = null, s = y)
                }
                if (!a) return k().createElement("span", {className: "model model-title"}, k().createElement("span", {className: "model-title__text"}, c || s), !y && k().createElement(rolling_load, {
                    height: "20px",
                    width: "20px"
                }));
                const f = r.isOAS3() && a.get("deprecated");
                switch (o = void 0 !== o ? o : !!g, h = a && a.get("type") || h, h) {
                    case"object":
                        return k().createElement(m, rt()({className: "object"}, this.props, {
                            specPath: l,
                            getConfigs: t,
                            schema: a,
                            name: s,
                            deprecated: f,
                            isRef: o,
                            includeReadOnly: i,
                            includeWriteOnly: p
                        }));
                    case"array":
                        return k().createElement(u, rt()({className: "array"}, this.props, {
                            getConfigs: t,
                            schema: a,
                            name: s,
                            deprecated: f,
                            required: n,
                            includeReadOnly: i,
                            includeWriteOnly: p
                        }));
                    default:
                        return k().createElement(d, rt()({}, this.props, {
                            getComponent: e,
                            getConfigs: t,
                            schema: a,
                            name: s,
                            deprecated: f,
                            required: n
                        }))
                }
            }
        }

        class Models extends N.Component {
            getSchemaBasePath = () => this.props.specSelectors.isOAS3() ? ["components", "schemas"] : ["definitions"];
            getCollapsedContent = () => " ";
            handleToggle = (e, t) => {
                const {layoutActions: r} = this.props;
                r.show([...this.getSchemaBasePath(), e], t), t && this.props.specActions.requestResolvedSubtree([...this.getSchemaBasePath(), e])
            };
            onLoadModels = e => {
                e && this.props.layoutActions.readyToScroll(this.getSchemaBasePath(), e)
            };
            onLoadModel = e => {
                if (e) {
                    const t = e.getAttribute("data-name");
                    this.props.layoutActions.readyToScroll([...this.getSchemaBasePath(), t], e)
                }
            };

            render() {
                let {
                    specSelectors: e,
                    getComponent: t,
                    layoutSelectors: r,
                    layoutActions: a,
                    getConfigs: n
                } = this.props, s = e.definitions(), {docExpansion: o, defaultModelsExpandDepth: l} = n();
                if (!s.size || l < 0) return null;
                const c = this.getSchemaBasePath();
                let i = r.isShown(c, l > 0 && "none" !== o);
                const p = e.isOAS3(), m = t("ModelWrapper"), u = t("Collapse"), d = t("ModelCollapse"),
                    h = t("JumpToPath", !0), g = t("ArrowUpIcon"), y = t("ArrowDownIcon");
                return k().createElement("section", {
                    className: i ? "models is-open" : "models",
                    ref: this.onLoadModels
                }, k().createElement("h4", null, k().createElement("button", {
                    "aria-expanded": i,
                    className: "models-control",
                    onClick: () => a.show(c, !i)
                }, k().createElement("span", null, p ? "Schemas" : "Models"), i ? k().createElement(g, null) : k().createElement(y, null))), k().createElement(u, {isOpened: i}, s.entrySeq().map((([s]) => {
                    const o = [...c, s], i = q().List(o), p = e.specResolvedSubtree(o), u = e.specJson().getIn(o),
                        g = I.Map.isMap(p) ? p : q().Map(), y = I.Map.isMap(u) ? u : q().Map(),
                        f = g.get("title") || y.get("title") || s, S = r.isShown(o, !1);
                    S && 0 === g.size && y.size > 0 && this.props.specActions.requestResolvedSubtree(o);
                    const E = k().createElement(m, {
                            name: s,
                            expandDepth: l,
                            schema: g || q().Map(),
                            displayName: f,
                            fullPath: o,
                            specPath: i,
                            getComponent: t,
                            specSelectors: e,
                            getConfigs: n,
                            layoutSelectors: r,
                            layoutActions: a,
                            includeReadOnly: !0,
                            includeWriteOnly: !0
                        }),
                        _ = k().createElement("span", {className: "model-box"}, k().createElement("span", {className: "model model-title"}, f));
                    return k().createElement("div", {
                        id: `model-${s}`,
                        className: "model-container",
                        key: `models-section-${s}`,
                        "data-name": s,
                        ref: this.onLoadModel
                    }, k().createElement("span", {className: "models-jump-to-path"}, k().createElement(h, {specPath: i})), k().createElement(d, {
                        classes: "model-box",
                        collapsedContent: this.getCollapsedContent(s),
                        onToggle: this.handleToggle,
                        title: _,
                        displayName: f,
                        modelName: s,
                        specPath: i,
                        layoutSelectors: r,
                        layoutActions: a,
                        hideSelfOnExpand: !0,
                        expanded: l > 0 && S
                    }, E))
                })).toArray()))
            }
        }

        const enum_model = ({value: e, getComponent: t}) => {
            let r = t("ModelCollapse"), a = k().createElement("span", null, "Array [ ", e.count(), " ]");
            return k().createElement("span", {className: "prop-enum"}, "Enum:", k().createElement("br", null), k().createElement(r, {collapsedContent: a}, "[ ", e.join(", "), " ]"))
        };

        class ObjectModel extends N.Component {
            render() {
                let {
                    schema: e,
                    name: t,
                    displayName: r,
                    isRef: a,
                    getComponent: n,
                    getConfigs: s,
                    depth: o,
                    onToggle: l,
                    expanded: c,
                    specPath: i,
                    ...p
                } = this.props, {specSelectors: m, expandDepth: u, includeReadOnly: d, includeWriteOnly: h} = p;
                const {isOAS3: g} = m;
                if (!e) return null;
                const {showExtensions: y} = s();
                let f = e.get("description"), S = e.get("properties"), E = e.get("additionalProperties"),
                    _ = e.get("title") || r || t, v = e.get("required"),
                    w = e.filter(((e, t) => -1 !== ["maxProperties", "minProperties", "nullable", "example"].indexOf(t))),
                    b = e.get("deprecated"), C = e.getIn(["externalDocs", "url"]),
                    x = e.getIn(["externalDocs", "description"]);
                const O = n("JumpToPath", !0), N = n("Markdown", !0), A = n("Model"), q = n("ModelCollapse"),
                    j = n("Property"), P = n("Link"),
                    JumpToPathSection = () => k().createElement("span", {className: "model-jump-to-path"}, k().createElement(O, {specPath: i})),
                    M = k().createElement("span", null, k().createElement("span", null, "{"), "...", k().createElement("span", null, "}"), a ? k().createElement(JumpToPathSection, null) : ""),
                    R = m.isOAS3() ? e.get("allOf") : null, T = m.isOAS3() ? e.get("anyOf") : null,
                    J = m.isOAS3() ? e.get("oneOf") : null, $ = m.isOAS3() ? e.get("not") : null,
                    K = _ && k().createElement("span", {className: "model-title"}, a && e.get("$$ref") && k().createElement("span", {className: "model-hint"}, e.get("$$ref")), k().createElement("span", {className: "model-title__text"}, _));
                return k().createElement("span", {className: "model"}, k().createElement(q, {
                    modelName: t,
                    title: K,
                    onToggle: l,
                    expanded: !!c || o <= u,
                    collapsedContent: M
                }, k().createElement("span", {className: "brace-open object"}, "{"), a ? k().createElement(JumpToPathSection, null) : null, k().createElement("span", {className: "inner-object"}, k().createElement("table", {className: "model"}, k().createElement("tbody", null, f ? k().createElement("tr", {className: "description"}, k().createElement("td", null, "description:"), k().createElement("td", null, k().createElement(N, {source: f}))) : null, C && k().createElement("tr", {className: "external-docs"}, k().createElement("td", null, "externalDocs:"), k().createElement("td", null, k().createElement(P, {
                    target: "_blank",
                    href: sanitizeUrl(C)
                }, x || C))), b ? k().createElement("tr", {className: "property"}, k().createElement("td", null, "deprecated:"), k().createElement("td", null, "true")) : null, S && S.size ? S.entrySeq().filter((([, e]) => (!e.get("readOnly") || d) && (!e.get("writeOnly") || h))).map((([e, r]) => {
                    let a = g() && r.get("deprecated"), l = I.List.isList(v) && v.contains(e), c = ["property-row"];
                    return a && c.push("deprecated"), l && c.push("required"), k().createElement("tr", {
                        key: e,
                        className: c.join(" ")
                    }, k().createElement("td", null, e, l && k().createElement("span", {className: "star"}, "*")), k().createElement("td", null, k().createElement(A, rt()({key: `object-${t}-${e}_${r}`}, p, {
                        required: l,
                        getComponent: n,
                        specPath: i.push("properties", e),
                        getConfigs: s,
                        schema: r,
                        depth: o + 1
                    }))))
                })).toArray() : null, y ? k().createElement("tr", null, k().createElement("td", null, " ")) : null, y ? e.entrySeq().map((([e, t]) => {
                    if ("x-" !== e.slice(0, 2)) return;
                    const r = t ? t.toJS ? t.toJS() : t : null;
                    return k().createElement("tr", {
                        key: e,
                        className: "extension"
                    }, k().createElement("td", null, e), k().createElement("td", null, JSON.stringify(r)))
                })).toArray() : null, E && E.size ? k().createElement("tr", null, k().createElement("td", null, "< * >:"), k().createElement("td", null, k().createElement(A, rt()({}, p, {
                    required: !1,
                    getComponent: n,
                    specPath: i.push("additionalProperties"),
                    getConfigs: s,
                    schema: E,
                    depth: o + 1
                })))) : null, R ? k().createElement("tr", null, k().createElement("td", null, "allOf ->"), k().createElement("td", null, R.map(((e, t) => k().createElement("div", {key: t}, k().createElement(A, rt()({}, p, {
                    required: !1,
                    getComponent: n,
                    specPath: i.push("allOf", t),
                    getConfigs: s,
                    schema: e,
                    depth: o + 1
                }))))))) : null, T ? k().createElement("tr", null, k().createElement("td", null, "anyOf ->"), k().createElement("td", null, T.map(((e, t) => k().createElement("div", {key: t}, k().createElement(A, rt()({}, p, {
                    required: !1,
                    getComponent: n,
                    specPath: i.push("anyOf", t),
                    getConfigs: s,
                    schema: e,
                    depth: o + 1
                }))))))) : null, J ? k().createElement("tr", null, k().createElement("td", null, "oneOf ->"), k().createElement("td", null, J.map(((e, t) => k().createElement("div", {key: t}, k().createElement(A, rt()({}, p, {
                    required: !1,
                    getComponent: n,
                    specPath: i.push("oneOf", t),
                    getConfigs: s,
                    schema: e,
                    depth: o + 1
                }))))))) : null, $ ? k().createElement("tr", null, k().createElement("td", null, "not ->"), k().createElement("td", null, k().createElement("div", null, k().createElement(A, rt()({}, p, {
                    required: !1,
                    getComponent: n,
                    specPath: i.push("not"),
                    getConfigs: s,
                    schema: $,
                    depth: o + 1
                }))))) : null))), k().createElement("span", {className: "brace-close"}, "}")), w.size ? w.entrySeq().map((([e, t]) => k().createElement(j, {
                    key: `${e}-${t}`,
                    propKey: e,
                    propVal: t,
                    propClass: "property"
                }))) : null)
            }
        }

        class ArrayModel extends N.Component {
            render() {
                let {
                        getComponent: e,
                        getConfigs: t,
                        schema: r,
                        depth: a,
                        expandDepth: n,
                        name: s,
                        displayName: o,
                        specPath: l
                    } = this.props, c = r.get("description"), i = r.get("items"), p = r.get("title") || o || s,
                    m = r.filter(((e, t) => -1 === ["type", "items", "description", "$$ref", "externalDocs"].indexOf(t))),
                    u = r.getIn(["externalDocs", "url"]), d = r.getIn(["externalDocs", "description"]);
                const h = e("Markdown", !0), g = e("ModelCollapse"), y = e("Model"), f = e("Property"), S = e("Link"),
                    E = p && k().createElement("span", {className: "model-title"}, k().createElement("span", {className: "model-title__text"}, p));
                return k().createElement("span", {className: "model"}, k().createElement(g, {
                    title: E,
                    expanded: a <= n,
                    collapsedContent: "[...]"
                }, "[", m.size ? m.entrySeq().map((([e, t]) => k().createElement(f, {
                    key: `${e}-${t}`,
                    propKey: e,
                    propVal: t,
                    propClass: "property"
                }))) : null, c ? k().createElement(h, {source: c}) : m.size ? k().createElement("div", {className: "markdown"}) : null, u && k().createElement("div", {className: "external-docs"}, k().createElement(S, {
                    target: "_blank",
                    href: sanitizeUrl(u)
                }, d || u)), k().createElement("span", null, k().createElement(y, rt()({}, this.props, {
                    getConfigs: t,
                    specPath: l.push("items"),
                    name: null,
                    schema: i,
                    required: !1,
                    depth: a + 1
                }))), "]"))
            }
        }

        const ln = "property primitive";

        class Primitive extends N.Component {
            render() {
                let {
                    schema: e,
                    getComponent: t,
                    getConfigs: r,
                    name: a,
                    displayName: n,
                    depth: s,
                    expandDepth: o
                } = this.props;
                const {showExtensions: l} = r();
                if (!e || !e.get) return k().createElement("div", null);
                let c = e.get("type"), i = e.get("format"), p = e.get("xml"), m = e.get("enum"),
                    u = e.get("title") || n || a, d = e.get("description"), h = getExtensions(e),
                    g = e.filter(((e, t) => -1 === ["enum", "type", "format", "description", "$$ref", "externalDocs"].indexOf(t))).filterNot(((e, t) => h.has(t))),
                    y = e.getIn(["externalDocs", "url"]), f = e.getIn(["externalDocs", "description"]);
                const S = t("Markdown", !0), E = t("EnumModel"), _ = t("Property"), v = t("ModelCollapse"),
                    w = t("Link"),
                    b = u && k().createElement("span", {className: "model-title"}, k().createElement("span", {className: "model-title__text"}, u));
                return k().createElement("span", {className: "model"}, k().createElement(v, {
                    title: b,
                    expanded: s <= o,
                    collapsedContent: "[...]",
                    hideSelfOnExpand: o !== s
                }, k().createElement("span", {className: "prop"}, a && s > 1 && k().createElement("span", {className: "prop-name"}, u), k().createElement("span", {className: "prop-type"}, c), i && k().createElement("span", {className: "prop-format"}, "($", i, ")"), g.size ? g.entrySeq().map((([e, t]) => k().createElement(_, {
                    key: `${e}-${t}`,
                    propKey: e,
                    propVal: t,
                    propClass: ln
                }))) : null, l && h.size ? h.entrySeq().map((([e, t]) => k().createElement(_, {
                    key: `${e}-${t}`,
                    propKey: e,
                    propVal: t,
                    propClass: ln
                }))) : null, d ? k().createElement(S, {source: d}) : null, y && k().createElement("div", {className: "external-docs"}, k().createElement(w, {
                    target: "_blank",
                    href: sanitizeUrl(y)
                }, f || y)), p && p.size ? k().createElement("span", null, k().createElement("br", null), k().createElement("span", {className: ln}, "xml:"), p.entrySeq().map((([e, t]) => k().createElement("span", {
                    key: `${e}-${t}`,
                    className: ln
                }, k().createElement("br", null), "   ", e, ": ", String(t)))).toArray()) : null, m && k().createElement(E, {
                    value: m,
                    getComponent: t
                }))))
            }
        }

        const property = ({
                              propKey: e,
                              propVal: t,
                              propClass: r
                          }) => k().createElement("span", {className: r}, k().createElement("br", null), e, ": ", String(t));

        class TryItOutButton extends k().Component {
            static defaultProps = {
                onTryoutClick: Function.prototype,
                onCancelClick: Function.prototype,
                onResetClick: Function.prototype,
                enabled: !1,
                hasUserEditedBody: !1,
                isOAS3: !1
            };

            render() {
                const {
                    onTryoutClick: e,
                    onCancelClick: t,
                    onResetClick: r,
                    enabled: a,
                    hasUserEditedBody: n,
                    isOAS3: s
                } = this.props, o = s && n;
                return k().createElement("div", {className: o ? "try-out btn-group" : "try-out"}, a ? k().createElement("button", {
                    className: "btn try-out__btn cancel",
                    onClick: t
                }, "Cancel") : k().createElement("button", {
                    className: "btn try-out__btn",
                    onClick: e
                }, "Try it out "), o && k().createElement("button", {
                    className: "btn try-out__btn reset",
                    onClick: r
                }, "Reset"))
            }
        }

        class VersionPragmaFilter extends k().PureComponent {
            static defaultProps = {alsoShow: null, children: null, bypass: !1};

            render() {
                const {bypass: e, isSwagger2: t, isOAS3: r, alsoShow: a} = this.props;
                return e ? k().createElement("div", null, this.props.children) : t && r ? k().createElement("div", {className: "version-pragma"}, a, k().createElement("div", {className: "version-pragma__message version-pragma__message--ambiguous"}, k().createElement("div", null, k().createElement("h3", null, "Unable to render this definition"), k().createElement("p", null, k().createElement("code", null, "swagger"), " and ", k().createElement("code", null, "openapi"), " fields cannot be present in the same Swagger or OpenAPI definition. Please remove one of the fields."), k().createElement("p", null, "Supported version fields are ", k().createElement("code", null, "swagger: ", '"2.0"'), " and those that match ", k().createElement("code", null, "openapi: 3.0.n"), " (for example, ", k().createElement("code", null, "openapi: 3.0.0"), ").")))) : t || r ? k().createElement("div", null, this.props.children) : k().createElement("div", {className: "version-pragma"}, a, k().createElement("div", {className: "version-pragma__message version-pragma__message--missing"}, k().createElement("div", null, k().createElement("h3", null, "Unable to render this definition"), k().createElement("p", null, "The provided definition does not specify a valid version field."), k().createElement("p", null, "Please indicate a valid Swagger or OpenAPI version field. Supported version fields are ", k().createElement("code", null, "swagger: ", '"2.0"'), " and those that match ", k().createElement("code", null, "openapi: 3.0.n"), " (for example, ", k().createElement("code", null, "openapi: 3.0.0"), ")."))))
            }
        }

        const version_stamp = ({version: e}) => k().createElement("small", null, k().createElement("pre", {className: "version"}, " ", e, " ")),
            openapi_version = ({oasVersion: e}) => k().createElement("small", {className: "version-stamp"}, k().createElement("pre", {className: "version"}, "OAS ", e)),
            deep_link = ({enabled: e, path: t, text: r}) => k().createElement("a", {
                className: "nostyle",
                onClick: e ? e => e.preventDefault() : null,
                href: e ? `#/${t}` : null
            }, k().createElement("span", null, r)),
            svg_assets = () => k().createElement("div", null, k().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                className: "svg-assets"
            }, k().createElement("defs", null, k().createElement("symbol", {
                viewBox: "0 0 20 20",
                id: "unlocked"
            }, k().createElement("path", {d: "M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z"})), k().createElement("symbol", {
                viewBox: "0 0 20 20",
                id: "locked"
            }, k().createElement("path", {d: "M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z"})), k().createElement("symbol", {
                viewBox: "0 0 20 20",
                id: "close"
            }, k().createElement("path", {d: "M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z"})), k().createElement("symbol", {
                viewBox: "0 0 20 20",
                id: "large-arrow"
            }, k().createElement("path", {d: "M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z"})), k().createElement("symbol", {
                viewBox: "0 0 20 20",
                id: "large-arrow-down"
            }, k().createElement("path", {d: "M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z"})), k().createElement("symbol", {
                viewBox: "0 0 20 20",
                id: "large-arrow-up"
            }, k().createElement("path", {d: "M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z"})), k().createElement("symbol", {
                viewBox: "0 0 24 24",
                id: "jump-to"
            }, k().createElement("path", {d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"})), k().createElement("symbol", {
                viewBox: "0 0 24 24",
                id: "expand"
            }, k().createElement("path", {d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"})), k().createElement("symbol", {
                viewBox: "0 0 15 16",
                id: "copy"
            }, k().createElement("g", {transform: "translate(2, -1)"}, k().createElement("path", {
                fill: "#ffffff",
                fillRule: "evenodd",
                d: "M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
            })))))), cn = require("remarkable"), pn = require("remarkable/linkify"), mn = require("dompurify");
        var un = __webpack_require__.n(mn);
        un().addHook && un().addHook("beforeSanitizeElements", (function (e) {
            return e.href && e.setAttribute("rel", "noopener noreferrer"), e
        }));
        const dn = function Markdown({
                                         source: e,
                                         className: t = "",
                                         getConfigs: r = (() => ({useUnsafeMarkdown: !1}))
                                     }) {
            if ("string" != typeof e) return null;
            const a = new cn.Remarkable({html: !0, typographer: !0, breaks: !0, linkTarget: "_blank"}).use(pn.linkify);
            a.core.ruler.disable(["replacements", "smartquotes"]);
            const {useUnsafeMarkdown: n} = r(), s = a.render(e), o = sanitizer(s, {useUnsafeMarkdown: n});
            return e && s && o ? k().createElement("div", {
                className: Fa()(t, "markdown"),
                dangerouslySetInnerHTML: {__html: o}
            }) : null
        };

        function sanitizer(e, {useUnsafeMarkdown: t = !1} = {}) {
            const r = t, a = t ? [] : ["style", "class"];
            return t && !sanitizer.hasWarnedAboutDeprecation && (console.warn("useUnsafeMarkdown display configuration parameter is deprecated since >3.26.0 and will be removed in v4.0.0."), sanitizer.hasWarnedAboutDeprecation = !0), un().sanitize(e, {
                ADD_ATTR: ["target"],
                FORBID_TAGS: ["style", "form"],
                ALLOW_DATA_ATTR: r,
                FORBID_ATTR: a
            })
        }

        sanitizer.hasWarnedAboutDeprecation = !1;

        class BaseLayout extends k().Component {
            render() {
                const {errSelectors: e, specSelectors: t, getComponent: r} = this.props, a = r("SvgAssets"),
                    n = r("InfoContainer", !0), s = r("VersionPragmaFilter"), o = r("operations", !0),
                    l = r("Models", !0), c = r("Webhooks", !0), i = r("Row"), p = r("Col"), m = r("errors", !0),
                    u = r("ServersContainer", !0), d = r("SchemesContainer", !0), h = r("AuthorizeBtnContainer", !0),
                    g = r("FilterContainer", !0), y = t.isSwagger2(), f = t.isOAS3(), S = t.isOAS31(), E = !t.specStr(),
                    _ = t.loadingStatus();
                let v = null;
                if ("loading" === _ && (v = k().createElement("div", {className: "info"}, k().createElement("div", {className: "loading-container"}, k().createElement("div", {className: "loading"})))), "failed" === _ && (v = k().createElement("div", {className: "info"}, k().createElement("div", {className: "loading-container"}, k().createElement("h4", {className: "title"}, "Failed to load API definition."), k().createElement(m, null)))), "failedConfig" === _) {
                    const t = e.lastError(), r = t ? t.get("message") : "";
                    v = k().createElement("div", {className: "info failed-config"}, k().createElement("div", {className: "loading-container"}, k().createElement("h4", {className: "title"}, "Failed to load remote configuration."), k().createElement("p", null, r)))
                }
                if (!v && E && (v = k().createElement("h4", null, "No API definition provided.")), v) return k().createElement("div", {className: "swagger-ui"}, k().createElement("div", {className: "loading-container"}, v));
                const w = t.servers(), b = t.schemes(), C = w && w.size, x = b && b.size, O = !!t.securityDefinitions();
                return k().createElement("div", {className: "swagger-ui"}, k().createElement(a, null), k().createElement(s, {
                    isSwagger2: y,
                    isOAS3: f,
                    alsoShow: k().createElement(m, null)
                }, k().createElement(m, null), k().createElement(i, {className: "information-container"}, k().createElement(p, {mobile: 12}, k().createElement(n, null))), C || x || O ? k().createElement("div", {className: "scheme-container"}, k().createElement(p, {
                    className: "schemes wrapper",
                    mobile: 12
                }, C || x ? k().createElement("div", {className: "schemes-server-container"}, C ? k().createElement(u, null) : null, x ? k().createElement(d, null) : null) : null, O ? k().createElement(h, null) : null)) : null, k().createElement(g, null), k().createElement(i, null, k().createElement(p, {
                    mobile: 12,
                    desktop: 12
                }, k().createElement(o, null))), S && k().createElement(i, {className: "webhooks-container"}, k().createElement(p, {
                    mobile: 12,
                    desktop: 12
                }, k().createElement(c, null))), k().createElement(i, null, k().createElement(p, {
                    mobile: 12,
                    desktop: 12
                }, k().createElement(l, null)))))
            }
        }

        const core_components = () => ({
            components: {
                App: Va,
                authorizationPopup: AuthorizationPopup,
                authorizeBtn: AuthorizeBtn,
                AuthorizeBtnContainer,
                authorizeOperationBtn: AuthorizeOperationBtn,
                auths: Auths,
                AuthItem: auth_item_Auths,
                authError: AuthError,
                oauth2: Oauth2,
                apiKeyAuth: ApiKeyAuth,
                basicAuth: BasicAuth,
                clear: Clear,
                liveResponse: LiveResponse,
                InitializedInput,
                info: tn,
                InfoContainer,
                InfoUrl,
                InfoBasePath,
                Contact: rn,
                License: an,
                JumpToPath,
                CopyToClipboardBtn,
                onlineValidatorBadge: OnlineValidatorBadge,
                operations: Operations,
                operation: Operation,
                OperationSummary,
                OperationSummaryMethod,
                OperationSummaryPath,
                highlightCode: highlight_code,
                responses: Responses,
                response: Response,
                ResponseExtension: response_extension,
                responseBody: ResponseBody,
                parameters: Parameters,
                parameterRow: ParameterRow,
                execute: Execute,
                headers: headers_Headers,
                errors: Errors,
                contentType: ContentType,
                overview: Overview,
                footer: Footer,
                FilterContainer,
                ParamBody,
                curl: Curl,
                schemes: Schemes,
                SchemesContainer,
                modelExample: ModelExample,
                ModelWrapper,
                ModelCollapse,
                Model,
                Models,
                EnumModel: enum_model,
                ObjectModel,
                ArrayModel,
                PrimitiveModel: Primitive,
                Property: property,
                TryItOutButton,
                Markdown: dn,
                BaseLayout,
                VersionPragmaFilter,
                VersionStamp: version_stamp,
                OperationExt: operation_extensions,
                OperationExtRow: operation_extension_row,
                ParameterExt: parameter_extension,
                ParameterIncludeEmpty,
                OperationTag,
                OperationContainer,
                OpenAPIVersion: openapi_version,
                DeepLink: deep_link,
                SvgAssets: svg_assets,
                Example,
                ExamplesSelect,
                ExamplesSelectValueRetainer
            }
        }), form_components = () => ({components: {...S}}), hn = require("react-debounce-input");
        var gn = __webpack_require__.n(hn);
        const yn = {
            value: "", onChange: () => {
            }, schema: {}, keyName: "", required: !1, errors: (0, I.List)()
        };

        class JsonSchemaForm extends N.Component {
            static defaultProps = yn;

            componentDidMount() {
                const {dispatchInitialValue: e, value: t, onChange: r} = this.props;
                e ? r(t) : !1 === e && r("")
            }

            render() {
                let {schema: e, errors: t, value: r, onChange: a, getComponent: n, fn: s, disabled: o} = this.props;
                const l = e && e.get ? e.get("format") : null, c = e && e.get ? e.get("type") : null;
                let getComponentSilently = e => n(e, !1, {failSilently: !0}),
                    i = c ? getComponentSilently(l ? `JsonSchema_${c}_${l}` : `JsonSchema_${c}`) : n("JsonSchema_string");
                return i || (i = n("JsonSchema_string")), k().createElement(i, rt()({}, this.props, {
                    errors: t,
                    fn: s,
                    getComponent: n,
                    value: r,
                    onChange: a,
                    schema: e,
                    disabled: o
                }))
            }
        }

        class JsonSchema_string extends N.Component {
            static defaultProps = yn;
            onChange = e => {
                const t = this.props.schema && "file" === this.props.schema.get("type") ? e.target.files[0] : e.target.value;
                this.props.onChange(t, this.props.keyName)
            };
            onEnumChange = e => this.props.onChange(e);

            render() {
                let {
                    getComponent: e,
                    value: t,
                    schema: r,
                    errors: a,
                    required: n,
                    description: s,
                    disabled: o
                } = this.props;
                const l = r && r.get ? r.get("enum") : null, c = r && r.get ? r.get("format") : null,
                    i = r && r.get ? r.get("type") : null, p = r && r.get ? r.get("in") : null;
                if (t || (t = ""), a = a.toJS ? a.toJS() : [], l) {
                    const r = e("Select");
                    return k().createElement(r, {
                        className: a.length ? "invalid" : "",
                        title: a.length ? a : "",
                        allowedValues: [...l],
                        value: t,
                        allowEmptyValue: !n,
                        disabled: o,
                        onChange: this.onEnumChange
                    })
                }
                const m = o || p && "formData" === p && !("FormData" in window), u = e("Input");
                return i && "file" === i ? k().createElement(u, {
                    type: "file",
                    className: a.length ? "invalid" : "",
                    title: a.length ? a : "",
                    onChange: this.onChange,
                    disabled: m
                }) : k().createElement(gn(), {
                    type: c && "password" === c ? "password" : "text",
                    className: a.length ? "invalid" : "",
                    title: a.length ? a : "",
                    value: t,
                    minLength: 0,
                    debounceTimeout: 350,
                    placeholder: s,
                    onChange: this.onChange,
                    disabled: m
                })
            }
        }

        class JsonSchema_array extends N.PureComponent {
            static defaultProps = yn;

            constructor(e, t) {
                super(e, t), this.state = {value: valueOrEmptyList(e.value), schema: e.schema}
            }

            UNSAFE_componentWillReceiveProps(e) {
                const t = valueOrEmptyList(e.value);
                t !== this.state.value && this.setState({value: t}), e.schema !== this.state.schema && this.setState({schema: e.schema})
            }

            onChange = () => {
                this.props.onChange(this.state.value)
            };
            onItemChange = (e, t) => {
                this.setState((({value: r}) => ({value: r.set(t, e)})), this.onChange)
            };
            removeItem = e => {
                this.setState((({value: t}) => ({value: t.delete(e)})), this.onChange)
            };
            addItem = () => {
                const {fn: e} = this.props;
                let t = valueOrEmptyList(this.state.value);
                this.setState((() => ({value: t.push(e.getSampleSchema(this.state.schema.get("items"), !1, {includeWriteOnly: !0}))})), this.onChange)
            };
            onEnumChange = e => {
                this.setState((() => ({value: e})), this.onChange)
            };

            render() {
                let {getComponent: e, required: t, schema: r, errors: a, fn: n, disabled: s} = this.props;
                a = a.toJS ? a.toJS() : Array.isArray(a) ? a : [];
                const o = a.filter((e => "string" == typeof e)),
                    l = a.filter((e => void 0 !== e.needRemove)).map((e => e.error)), c = this.state.value,
                    i = !!(c && c.count && c.count() > 0), p = r.getIn(["items", "enum"]),
                    m = r.getIn(["items", "type"]), u = r.getIn(["items", "format"]), d = r.get("items");
                let h, g = !1, y = "file" === m || "string" === m && "binary" === u;
                if (m && u ? h = e(`JsonSchema_${m}_${u}`) : "boolean" !== m && "array" !== m && "object" !== m || (h = e(`JsonSchema_${m}`)), h || y || (g = !0), p) {
                    const r = e("Select");
                    return k().createElement(r, {
                        className: a.length ? "invalid" : "",
                        title: a.length ? a : "",
                        multiple: !0,
                        value: c,
                        disabled: s,
                        allowedValues: p,
                        allowEmptyValue: !t,
                        onChange: this.onEnumChange
                    })
                }
                const f = e("Button");
                return k().createElement("div", {className: "json-schema-array"}, i ? c.map(((t, r) => {
                    const o = (0, I.fromJS)([...a.filter((e => e.index === r)).map((e => e.error))]);
                    return k().createElement("div", {
                        key: r,
                        className: "json-schema-form-item"
                    }, y ? k().createElement(JsonSchemaArrayItemFile, {
                        value: t,
                        onChange: e => this.onItemChange(e, r),
                        disabled: s,
                        errors: o,
                        getComponent: e
                    }) : g ? k().createElement(JsonSchemaArrayItemText, {
                        value: t,
                        onChange: e => this.onItemChange(e, r),
                        disabled: s,
                        errors: o
                    }) : k().createElement(h, rt()({}, this.props, {
                        value: t,
                        onChange: e => this.onItemChange(e, r),
                        disabled: s,
                        errors: o,
                        schema: d,
                        getComponent: e,
                        fn: n
                    })), s ? null : k().createElement(f, {
                        className: `btn btn-sm json-schema-form-item-remove ${l.length ? "invalid" : null}`,
                        title: l.length ? l : "",
                        onClick: () => this.removeItem(r)
                    }, " - "))
                })) : null, s ? null : k().createElement(f, {
                    className: `btn btn-sm json-schema-form-item-add ${o.length ? "invalid" : null}`,
                    title: o.length ? o : "",
                    onClick: this.addItem
                }, "Add ", m ? `${m} ` : "", "item"))
            }
        }

        class JsonSchemaArrayItemText extends N.Component {
            static defaultProps = yn;
            onChange = e => {
                const t = e.target.value;
                this.props.onChange(t, this.props.keyName)
            };

            render() {
                let {value: e, errors: t, description: r, disabled: a} = this.props;
                return e || (e = ""), t = t.toJS ? t.toJS() : [], k().createElement(gn(), {
                    type: "text",
                    className: t.length ? "invalid" : "",
                    title: t.length ? t : "",
                    value: e,
                    minLength: 0,
                    debounceTimeout: 350,
                    placeholder: r,
                    onChange: this.onChange,
                    disabled: a
                })
            }
        }

        class JsonSchemaArrayItemFile extends N.Component {
            static defaultProps = yn;
            onFileChange = e => {
                const t = e.target.files[0];
                this.props.onChange(t, this.props.keyName)
            };

            render() {
                let {getComponent: e, errors: t, disabled: r} = this.props;
                const a = e("Input"), n = r || !("FormData" in window);
                return k().createElement(a, {
                    type: "file",
                    className: t.length ? "invalid" : "",
                    title: t.length ? t : "",
                    onChange: this.onFileChange,
                    disabled: n
                })
            }
        }

        class JsonSchema_boolean extends N.Component {
            static defaultProps = yn;
            onEnumChange = e => this.props.onChange(e);

            render() {
                let {getComponent: e, value: t, errors: r, schema: a, required: n, disabled: s} = this.props;
                r = r.toJS ? r.toJS() : [];
                let o = a && a.get ? a.get("enum") : null, l = !o || !n, c = !o && ["true", "false"];
                const i = e("Select");
                return k().createElement(i, {
                    className: r.length ? "invalid" : "",
                    title: r.length ? r : "",
                    value: String(t),
                    disabled: s,
                    allowedValues: o ? [...o] : c,
                    allowEmptyValue: l,
                    onChange: this.onEnumChange
                })
            }
        }

        const stringifyObjectErrors = e => e.map((e => {
            const t = void 0 !== e.propKey ? e.propKey : e.index;
            let r = "string" == typeof e ? e : "string" == typeof e.error ? e.error : null;
            if (!t && r) return r;
            let a = e.error, n = `/${e.propKey}`;
            for (; "object" == typeof a;) {
                const e = void 0 !== a.propKey ? a.propKey : a.index;
                if (void 0 === e) break;
                if (n += `/${e}`, !a.error) break;
                a = a.error
            }
            return `${n}: ${a}`
        }));

        class JsonSchema_object extends N.PureComponent {
            constructor() {
                super()
            }

            static defaultProps = yn;
            onChange = e => {
                this.props.onChange(e)
            };
            handleOnChange = e => {
                const t = e.target.value;
                this.onChange(t)
            };

            render() {
                let {getComponent: e, value: t, errors: r, disabled: a} = this.props;
                const n = e("TextArea");
                return r = r.toJS ? r.toJS() : Array.isArray(r) ? r : [], k().createElement("div", null, k().createElement(n, {
                    className: Fa()({invalid: r.length}),
                    title: r.length ? stringifyObjectErrors(r).join(", ") : "",
                    value: stringify(t),
                    disabled: a,
                    onChange: this.handleOnChange
                }))
            }
        }

        function valueOrEmptyList(e) {
            return I.List.isList(e) ? e : Array.isArray(e) ? (0, I.fromJS)(e) : (0, I.List)()
        }

        const json_schema_components = () => ({components: {...E}}),
            base = () => [configsPlugin, util, logs, view, view_legacy, plugins_spec, err, icons, plugins_layout, json_schema_5_samples, core_components, form_components, swagger_client, json_schema_components, auth, downloadUrlPlugin, deep_linking, filter, on_complete, plugins_request_snippets, safe_render()],
            fn = (0, I.Map)();

        function onlyOAS3(e) {
            return (t, r) => (...a) => {
                if (r.getSystem().specSelectors.isOAS3()) {
                    const t = e(...a);
                    return "function" == typeof t ? t(r) : t
                }
                return t(...a)
            }
        }

        const Sn = onlyOAS3(pr()(null)), En = onlyOAS3(((e, t) => e => e.getSystem().specSelectors.findSchema(t))),
            _n = onlyOAS3((() => e => {
                const t = e.getSystem().specSelectors.specJson().getIn(["components", "schemas"]);
                return I.Map.isMap(t) ? t : fn
            })), vn = onlyOAS3((() => e => e.getSystem().specSelectors.specJson().hasIn(["servers", 0]))),
            wn = onlyOAS3((0, be.createSelector)(Er, (e => e.getIn(["components", "securitySchemes"]) || null))),
            wrap_selectors_validOperationMethods = (e, t) => (r, ...a) => t.specSelectors.isOAS3() ? t.oas3Selectors.validOperationMethods() : e(...a),
            bn = Sn, Cn = Sn, xn = Sn, On = Sn, Nn = Sn;
        const kn = function wrap_selectors_onlyOAS3(e) {
            return (t, r) => (...a) => {
                if (r.getSystem().specSelectors.isOAS3()) {
                    let t = r.getState().getIn(["spec", "resolvedSubtrees", "components", "securitySchemes"]);
                    return e(r, t, ...a)
                }
                return t(...a)
            }
        }((0, be.createSelector)((e => e), (({specSelectors: e}) => e.securityDefinitions()), ((e, t) => {
            let r = (0, I.List)();
            return t ? (t.entrySeq().forEach((([e, t]) => {
                const a = t.get("type");
                if ("oauth2" === a && t.get("flows").entrySeq().forEach((([a, n]) => {
                    let s = (0, I.fromJS)({
                        flow: a,
                        authorizationUrl: n.get("authorizationUrl"),
                        tokenUrl: n.get("tokenUrl"),
                        scopes: n.get("scopes"),
                        type: t.get("type"),
                        description: t.get("description")
                    });
                    r = r.push(new I.Map({[e]: s.filter((e => void 0 !== e))}))
                })), "http" !== a && "apiKey" !== a || (r = r.push(new I.Map({[e]: t}))), "openIdConnect" === a && t.get("openIdConnectData")) {
                    let a = t.get("openIdConnectData");
                    (a.get("grant_types_supported") || ["authorization_code", "implicit"]).forEach((n => {
                        let s = a.get("scopes_supported") && a.get("scopes_supported").reduce(((e, t) => e.set(t, "")), new I.Map),
                            o = (0, I.fromJS)({
                                flow: n,
                                authorizationUrl: a.get("authorization_endpoint"),
                                tokenUrl: a.get("token_endpoint"),
                                scopes: s,
                                type: "oauth2",
                                openIdConnectUrl: t.get("openIdConnectUrl")
                            });
                        r = r.push(new I.Map({[e]: o.filter((e => void 0 !== e))}))
                    }))
                }
            })), r) : r
        })));

        function OAS3ComponentWrapFactory(e) {
            return (t, r) => a => "function" == typeof r.specSelectors?.isOAS3 ? r.specSelectors.isOAS3() ? k().createElement(e, rt()({}, a, r, {Ori: t})) : k().createElement(t, a) : (console.warn("OAS3 wrapper: couldn't get spec"), null)
        }

        const An = (0, I.Map)(), selectors_isSwagger2 = () => e => function isSwagger2(e) {
            const t = e.get("swagger");
            return "string" == typeof t && "2.0" === t
        }(e.getSystem().specSelectors.specJson()), selectors_isOAS30 = () => e => function isOAS30(e) {
            const t = e.get("openapi");
            return "string" == typeof t && /^3\.0\.([0123])(?:-rc[012])?$/.test(t)
        }(e.getSystem().specSelectors.specJson()), selectors_isOAS3 = () => e => e.getSystem().specSelectors.isOAS30();

        function selectors_onlyOAS3(e) {
            return (t, ...r) => a => {
                if (a.specSelectors.isOAS3()) {
                    const n = e(t, ...r);
                    return "function" == typeof n ? n(a) : n
                }
                return null
            }
        }

        const In = selectors_onlyOAS3((() => e => e.specSelectors.specJson().get("servers", An))),
            findSchema = (e, t) => {
                const r = e.getIn(["resolvedSubtrees", "components", "schemas", t], null),
                    a = e.getIn(["json", "components", "schemas", t], null);
                return r || a || null
            }, qn = selectors_onlyOAS3(((e, {callbacks: t, specPath: r}) => e => {
                const a = e.specSelectors.validOperationMethods();
                return I.Map.isMap(t) ? t.reduce(((e, t, n) => {
                    if (!I.Map.isMap(t)) return e;
                    const s = t.reduce(((e, t, s) => {
                        if (!I.Map.isMap(t)) return e;
                        const o = t.entrySeq().filter((([e]) => a.includes(e))).map((([e, t]) => ({
                            operation: (0, I.Map)({operation: t}),
                            method: e,
                            path: s,
                            callbackName: n,
                            specPath: r.concat([n, s, e])
                        })));
                        return e.concat(o)
                    }), (0, I.List)());
                    return e.concat(s)
                }), (0, I.List)()).groupBy((e => e.callbackName)).map((e => e.toArray())).toObject() : {}
            })), callbacks = ({callbacks: e, specPath: t, specSelectors: r, getComponent: a}) => {
                const n = r.callbacksOperations({callbacks: e, specPath: t}), s = Object.keys(n),
                    o = a("OperationContainer", !0);
                return 0 === s.length ? k().createElement("span", null, "No callbacks") : k().createElement("div", null, s.map((e => k().createElement("div", {key: `${e}`}, k().createElement("h2", null, e), n[e].map((t => k().createElement(o, {
                    key: `${e}-${t.path}-${t.method}`,
                    op: t.operation,
                    tag: "callbacks",
                    method: t.method,
                    path: t.path,
                    specPath: t.specPath,
                    allowTryItOut: !1
                })))))))
            }, getDefaultRequestBodyValue = (e, t, r, a) => {
                const n = e.getIn(["content", t]) ?? (0, I.OrderedMap)(), s = n.get("schema", (0, I.OrderedMap)()).toJS(),
                    o = void 0 !== n.get("examples"), l = n.get("example"), c = o ? n.getIn(["examples", r, "value"]) : l;
                return stringify(a.getSampleSchema(s, t, {includeWriteOnly: !0}, c))
            }, request_body = ({
                                   userHasEditedBody: e,
                                   requestBody: t,
                                   requestBodyValue: r,
                                   requestBodyInclusionSetting: a,
                                   requestBodyErrors: n,
                                   getComponent: s,
                                   getConfigs: o,
                                   specSelectors: l,
                                   fn: c,
                                   contentType: i,
                                   isExecute: p,
                                   specPath: m,
                                   onChange: u,
                                   onChangeIncludeEmpty: d,
                                   activeExamplesKey: h,
                                   updateActiveExamplesKey: g,
                                   setRetainRequestBodyValueFlag: y
                               }) => {
                const handleFile = e => {
                        u(e.target.files[0])
                    }, setIsIncludedOptions = e => {
                        let t = {key: e, shouldDispatchInit: !1, defaultValue: !0};
                        return "no value" === a.get(e, "no value") && (t.shouldDispatchInit = !0), t
                    }, f = s("Markdown", !0), S = s("modelExample"), E = s("RequestBodyEditor"), _ = s("highlightCode"),
                    v = s("ExamplesSelectValueRetainer"), w = s("Example"),
                    b = s("ParameterIncludeEmpty"), {showCommonExtensions: C} = o(), x = t?.get("description") ?? null,
                    O = t?.get("content") ?? new I.OrderedMap;
                i = i || O.keySeq().first() || "";
                const N = O.get(i) ?? (0, I.OrderedMap)(), A = N.get("schema", (0, I.OrderedMap)()),
                    q = N.get("examples", null), j = q?.map(((e, r) => {
                        const a = e?.get("value", null);
                        return a && (e = e.set("value", getDefaultRequestBodyValue(t, i, r, c), a)), e
                    }));
                if (n = I.List.isList(n) ? n : (0, I.List)(), !N.size) return null;
                const P = "object" === N.getIn(["schema", "type"]), M = "binary" === N.getIn(["schema", "format"]),
                    R = "base64" === N.getIn(["schema", "format"]);
                if ("application/octet-stream" === i || 0 === i.indexOf("image/") || 0 === i.indexOf("audio/") || 0 === i.indexOf("video/") || M || R) {
                    const e = s("Input");
                    return p ? k().createElement(e, {
                        type: "file",
                        onChange: handleFile
                    }) : k().createElement("i", null, "Example values are not available for ", k().createElement("code", null, i), " media types.")
                }
                if (P && ("application/x-www-form-urlencoded" === i || 0 === i.indexOf("multipart/")) && A.get("properties", (0, I.OrderedMap)()).size > 0) {
                    const e = s("JsonSchemaForm"), t = s("ParameterExt"), o = A.get("properties", (0, I.OrderedMap)());
                    return r = I.Map.isMap(r) ? r : (0, I.OrderedMap)(), k().createElement("div", {className: "table-container"}, x && k().createElement(f, {source: x}), k().createElement("table", null, k().createElement("tbody", null, I.Map.isMap(o) && o.entrySeq().map((([o, l]) => {
                        if (l.get("readOnly")) return;
                        let i = C ? getCommonExtensions(l) : null;
                        const m = A.get("required", (0, I.List)()).includes(o), h = l.get("type"), g = l.get("format"),
                            y = l.get("description"), S = r.getIn([o, "value"]), E = r.getIn([o, "errors"]) || n,
                            _ = a.get(o) || !1,
                            v = l.has("default") || l.has("example") || l.hasIn(["items", "example"]) || l.hasIn(["items", "default"]),
                            w = l.has("enum") && (1 === l.get("enum").size || m), x = v || w;
                        let O = "";
                        "array" !== h || x || (O = []), ("object" === h || x) && (O = c.getSampleSchema(l, !1, {includeWriteOnly: !0})), "string" != typeof O && "object" === h && (O = stringify(O)), "string" == typeof O && "array" === h && (O = JSON.parse(O));
                        const N = "string" === h && ("binary" === g || "base64" === g);
                        return k().createElement("tr", {
                            key: o,
                            className: "parameters",
                            "data-property-name": o
                        }, k().createElement("td", {className: "parameters-col_name"}, k().createElement("div", {className: m ? "parameter__name required" : "parameter__name"}, o, m ? k().createElement("span", null, " *") : null), k().createElement("div", {className: "parameter__type"}, h, g && k().createElement("span", {className: "prop-format"}, "($", g, ")"), C && i.size ? i.entrySeq().map((([e, r]) => k().createElement(t, {
                            key: `${e}-${r}`,
                            xKey: e,
                            xVal: r
                        }))) : null), k().createElement("div", {className: "parameter__deprecated"}, l.get("deprecated") ? "deprecated" : null)), k().createElement("td", {className: "parameters-col_description"}, k().createElement(f, {source: y}), p ? k().createElement("div", null, k().createElement(e, {
                            fn: c,
                            dispatchInitialValue: !N,
                            schema: l,
                            description: o,
                            getComponent: s,
                            value: void 0 === S ? O : S,
                            required: m,
                            errors: E,
                            onChange: e => {
                                u(e, [o])
                            }
                        }), m ? null : k().createElement(b, {
                            onChange: e => d(o, e),
                            isIncluded: _,
                            isIncludedOptions: setIsIncludedOptions(o),
                            isDisabled: Array.isArray(S) ? 0 !== S.length : !isEmptyValue(S)
                        })) : null))
                    })))))
                }
                const T = getDefaultRequestBodyValue(t, i, h, c);
                let J = null;
                return getKnownSyntaxHighlighterLanguage(T) && (J = "json"), k().createElement("div", null, x && k().createElement(f, {source: x}), j ? k().createElement(v, {
                    userHasEditedBody: e,
                    examples: j,
                    currentKey: h,
                    currentUserInputValue: r,
                    onSelect: e => {
                        g(e)
                    },
                    updateValue: u,
                    defaultToFirstExample: !0,
                    getComponent: s,
                    setRetainRequestBodyValueFlag: y
                }) : null, p ? k().createElement("div", null, k().createElement(E, {
                    value: r,
                    errors: n,
                    defaultValue: T,
                    onChange: u,
                    getComponent: s
                })) : k().createElement(S, {
                    getComponent: s,
                    getConfigs: o,
                    specSelectors: l,
                    expandDepth: 1,
                    isExecute: p,
                    schema: N.get("schema"),
                    specPath: m.push("content", i),
                    example: k().createElement(_, {
                        className: "body-param__example",
                        getConfigs: o,
                        language: J,
                        value: stringify(r) || T
                    }),
                    includeWriteOnly: !0
                }), j ? k().createElement(w, {example: j.get(h), getComponent: s, getConfigs: o}) : null)
            };

        class operation_link_OperationLink extends N.Component {
            render() {
                const {link: e, name: t, getComponent: r} = this.props, a = r("Markdown", !0);
                let n = e.get("operationId") || e.get("operationRef"),
                    s = e.get("parameters") && e.get("parameters").toJS(), o = e.get("description");
                return k().createElement("div", {className: "operation-link"}, k().createElement("div", {className: "description"}, k().createElement("b", null, k().createElement("code", null, t)), o ? k().createElement(a, {source: o}) : null), k().createElement("pre", null, "Operation `", n, "`", k().createElement("br", null), k().createElement("br", null), "Parameters ", function padString(e, t) {
                    if ("string" != typeof t) return "";
                    return t.split("\n").map(((t, r) => r > 0 ? Array(e + 1).join(" ") + t : t)).join("\n")
                }(0, JSON.stringify(s, null, 2)) || "{}", k().createElement("br", null)))
            }
        }

        const jn = operation_link_OperationLink, components_servers = ({
                                                                           servers: e,
                                                                           currentServer: t,
                                                                           setSelectedServer: r,
                                                                           setServerVariableValue: a,
                                                                           getServerVariable: n,
                                                                           getEffectiveServerValue: s
                                                                       }) => {
            const o = (e.find((e => e.get("url") === t)) || (0, I.OrderedMap)()).get("variables") || (0, I.OrderedMap)(),
                l = 0 !== o.size;
            (0, N.useEffect)((() => {
                t || r(e.first()?.get("url"))
            }), []), (0, N.useEffect)((() => {
                const n = e.find((e => e.get("url") === t));
                if (!n) return void r(e.first().get("url"));
                (n.get("variables") || (0, I.OrderedMap)()).map(((e, r) => {
                    a({server: t, key: r, val: e.get("default") || ""})
                }))
            }), [t, e]);
            const c = (0, N.useCallback)((e => {
                r(e.target.value)
            }), [r]), i = (0, N.useCallback)((e => {
                const r = e.target.getAttribute("data-variable"), n = e.target.value;
                a({server: t, key: r, val: n})
            }), [a, t]);
            return k().createElement("div", {className: "servers"}, k().createElement("label", {htmlFor: "servers"}, k().createElement("select", {
                onChange: c,
                value: t,
                id: "servers"
            }, e.valueSeq().map((e => k().createElement("option", {
                value: e.get("url"),
                key: e.get("url")
            }, e.get("url"), e.get("description") && ` - ${e.get("description")}`))).toArray())), l && k().createElement("div", null, k().createElement("div", {className: "computed-url"}, "Computed URL:", k().createElement("code", null, s(t))), k().createElement("h4", null, "Server variables"), k().createElement("table", null, k().createElement("tbody", null, o.entrySeq().map((([e, r]) => k().createElement("tr", {key: e}, k().createElement("td", null, e), k().createElement("td", null, r.get("enum") ? k().createElement("select", {
                "data-variable": e,
                onChange: i
            }, r.get("enum").map((r => k().createElement("option", {
                selected: r === n(t, e),
                key: r,
                value: r
            }, r)))) : k().createElement("input", {
                type: "text",
                value: n(t, e) || "",
                onChange: i,
                "data-variable": e
            })))))))))
        };

        class ServersContainer extends k().Component {
            render() {
                const {specSelectors: e, oas3Selectors: t, oas3Actions: r, getComponent: a} = this.props,
                    n = e.servers(), s = a("Servers");
                return n && n.size ? k().createElement("div", null, k().createElement("span", {className: "servers-title"}, "Servers"), k().createElement(s, {
                    servers: n,
                    currentServer: t.selectedServer(),
                    setSelectedServer: r.setSelectedServer,
                    setServerVariableValue: r.setServerVariableValue,
                    getServerVariable: t.serverVariableValue,
                    getEffectiveServerValue: t.serverEffectiveValue
                })) : null
            }
        }

        const Pn = Function.prototype;

        class RequestBodyEditor extends N.PureComponent {
            static defaultProps = {onChange: Pn, userHasEditedBody: !1};

            constructor(e, t) {
                super(e, t), this.state = {value: stringify(e.value) || e.defaultValue}, e.onChange(e.value)
            }

            applyDefaultValue = e => {
                const {onChange: t, defaultValue: r} = e || this.props;
                return this.setState({value: r}), t(r)
            };
            onChange = e => {
                this.props.onChange(stringify(e))
            };
            onDomChange = e => {
                const t = e.target.value;
                this.setState({value: t}, (() => this.onChange(t)))
            };

            UNSAFE_componentWillReceiveProps(e) {
                this.props.value !== e.value && e.value !== this.state.value && this.setState({value: stringify(e.value)}), !e.value && e.defaultValue && this.state.value && this.applyDefaultValue(e)
            }

            render() {
                let {getComponent: e, errors: t} = this.props, {value: r} = this.state, a = t.size > 0;
                const n = e("TextArea");
                return k().createElement("div", {className: "body-param"}, k().createElement(n, {
                    className: Fa()("body-param__text", {invalid: a}),
                    title: t.size ? t.join(", ") : "",
                    value: r,
                    onChange: this.onDomChange
                }))
            }
        }

        class HttpAuth extends k().Component {
            constructor(e, t) {
                super(e, t);
                let {name: r, schema: a} = this.props, n = this.getValue();
                this.state = {name: r, schema: a, value: n}
            }

            getValue() {
                let {name: e, authorized: t} = this.props;
                return t && t.getIn([e, "value"])
            }

            onChange = e => {
                let {onChange: t} = this.props, {value: r, name: a} = e.target, n = Object.assign({}, this.state.value);
                a ? n[a] = r : n = r, this.setState({value: n}, (() => t(this.state)))
            };

            render() {
                let {schema: e, getComponent: t, errSelectors: r, name: a} = this.props;
                const n = t("Input"), s = t("Row"), o = t("Col"), l = t("authError"), c = t("Markdown", !0),
                    i = t("JumpToPath", !0), p = (e.get("scheme") || "").toLowerCase();
                let m = this.getValue(), u = r.allErrors().filter((e => e.get("authId") === a));
                if ("basic" === p) {
                    let t = m ? m.get("username") : null;
                    return k().createElement("div", null, k().createElement("h4", null, k().createElement("code", null, a || e.get("name")), "  (http, Basic)", k().createElement(i, {path: ["securityDefinitions", a]})), t && k().createElement("h6", null, "Authorized"), k().createElement(s, null, k().createElement(c, {source: e.get("description")})), k().createElement(s, null, k().createElement("label", {htmlFor: "auth-basic-username"}, "Username:"), t ? k().createElement("code", null, " ", t, " ") : k().createElement(o, null, k().createElement(n, {
                        id: "auth-basic-username",
                        type: "text",
                        required: "required",
                        name: "username",
                        "aria-label": "auth-basic-username",
                        onChange: this.onChange,
                        autoFocus: !0
                    }))), k().createElement(s, null, k().createElement("label", {htmlFor: "auth-basic-password"}, "Password:"), t ? k().createElement("code", null, " ****** ") : k().createElement(o, null, k().createElement(n, {
                        id: "auth-basic-password",
                        autoComplete: "new-password",
                        name: "password",
                        type: "password",
                        "aria-label": "auth-basic-password",
                        onChange: this.onChange
                    }))), u.valueSeq().map(((e, t) => k().createElement(l, {error: e, key: t}))))
                }
                return "bearer" === p ? k().createElement("div", null, k().createElement("h4", null, k().createElement("code", null, a || e.get("name")), "  (http, Bearer)", k().createElement(i, {path: ["securityDefinitions", a]})), m && k().createElement("h6", null, "Authorized"), k().createElement(s, null, k().createElement(c, {source: e.get("description")})), k().createElement(s, null, k().createElement("label", {htmlFor: "auth-bearer-value"}, "Value:"), m ? k().createElement("code", null, " ****** ") : k().createElement(o, null, k().createElement(n, {
                    id: "auth-bearer-value",
                    type: "text",
                    "aria-label": "auth-bearer-value",
                    onChange: this.onChange,
                    autoFocus: !0
                }))), u.valueSeq().map(((e, t) => k().createElement(l, {
                    error: e,
                    key: t
                })))) : k().createElement("div", null, k().createElement("em", null, k().createElement("b", null, a), " HTTP authentication: unsupported scheme ", `'${p}'`))
            }
        }

        class OperationServers extends k().Component {
            setSelectedServer = e => {
                const {path: t, method: r} = this.props;
                return this.forceUpdate(), this.props.setSelectedServer(e, `${t}:${r}`)
            };
            setServerVariableValue = e => {
                const {path: t, method: r} = this.props;
                return this.forceUpdate(), this.props.setServerVariableValue({...e, namespace: `${t}:${r}`})
            };
            getSelectedServer = () => {
                const {path: e, method: t} = this.props;
                return this.props.getSelectedServer(`${e}:${t}`)
            };
            getServerVariable = (e, t) => {
                const {path: r, method: a} = this.props;
                return this.props.getServerVariable({namespace: `${r}:${a}`, server: e}, t)
            };
            getEffectiveServerValue = e => {
                const {path: t, method: r} = this.props;
                return this.props.getEffectiveServerValue({server: e, namespace: `${t}:${r}`})
            };

            render() {
                const {operationServers: e, pathServers: t, getComponent: r} = this.props;
                if (!e && !t) return null;
                const a = r("Servers"), n = e || t, s = e ? "operation" : "path";
                return k().createElement("div", {className: "opblock-section operation-servers"}, k().createElement("div", {className: "opblock-section-header"}, k().createElement("div", {className: "tab-header"}, k().createElement("h4", {className: "opblock-title"}, "Servers"))), k().createElement("div", {className: "opblock-description-wrapper"}, k().createElement("h4", {className: "message"}, "These ", s, "-level options override the global server options."), k().createElement(a, {
                    servers: n,
                    currentServer: this.getSelectedServer(),
                    setSelectedServer: this.setSelectedServer,
                    setServerVariableValue: this.setServerVariableValue,
                    getServerVariable: this.getServerVariable,
                    getEffectiveServerValue: this.getEffectiveServerValue
                })))
            }
        }

        const Mn = {
            Callbacks: callbacks,
            HttpAuth,
            RequestBody: request_body,
            Servers: components_servers,
            ServersContainer,
            RequestBodyEditor,
            OperationServers,
            operationLink: jn
        }, Rn = new cn.Remarkable("commonmark");
        Rn.block.ruler.enable(["table"]), Rn.set({linkTarget: "_blank"});
        const Tn = OAS3ComponentWrapFactory((({
                                                  source: e,
                                                  className: t = "",
                                                  getConfigs: r = (() => ({useUnsafeMarkdown: !1}))
                                              }) => {
            if ("string" != typeof e) return null;
            if (e) {
                const {useUnsafeMarkdown: a} = r(), n = sanitizer(Rn.render(e), {useUnsafeMarkdown: a});
                let s;
                return "string" == typeof n && (s = n.trim()), k().createElement("div", {
                    dangerouslySetInnerHTML: {__html: s},
                    className: Fa()(t, "renderedMarkdown")
                })
            }
            return null
        })), Jn = OAS3ComponentWrapFactory((({Ori: e, ...t}) => {
            const {schema: r, getComponent: a, errSelectors: n, authorized: s, onAuthChange: o, name: l} = t,
                c = a("HttpAuth");
            return "http" === r.get("type") ? k().createElement(c, {
                key: l,
                schema: r,
                name: l,
                errSelectors: n,
                authorized: s,
                getComponent: a,
                onChange: o
            }) : k().createElement(e, t)
        })), $n = OAS3ComponentWrapFactory(OnlineValidatorBadge);

        class ModelComponent extends N.Component {
            render() {
                let {getConfigs: e, schema: t} = this.props, r = ["model-box"], a = null;
                return !0 === t.get("deprecated") && (r.push("deprecated"), a = k().createElement("span", {className: "model-deprecated-warning"}, "Deprecated:")), k().createElement("div", {className: r.join(" ")}, a, k().createElement(Model, rt()({}, this.props, {
                    getConfigs: e,
                    depth: 1,
                    expandDepth: this.props.expandDepth || 0
                })))
            }
        }

        const Kn = OAS3ComponentWrapFactory(ModelComponent), Dn = OAS3ComponentWrapFactory((({Ori: e, ...t}) => {
                const {schema: r, getComponent: a, errors: n, onChange: s} = t, o = r && r.get ? r.get("format") : null,
                    l = r && r.get ? r.get("type") : null, c = a("Input");
                return l && "string" === l && o && ("binary" === o || "base64" === o) ? k().createElement(c, {
                    type: "file",
                    className: n.length ? "invalid" : "",
                    title: n.length ? n : "",
                    onChange: e => {
                        s(e.target.files[0])
                    },
                    disabled: e.isDisabled
                }) : k().createElement(e, t)
            })), Vn = {
                Markdown: Tn, AuthItem: Jn, OpenAPIVersion: function OAS30ComponentWrapFactory(e) {
                    return (t, r) => a => "function" == typeof r.specSelectors?.isOAS30 ? r.specSelectors.isOAS30() ? k().createElement(e, rt()({}, a, r, {Ori: t})) : k().createElement(t, a) : (console.warn("OAS30 wrapper: couldn't get spec"), null)
                }((e => {
                    const {Ori: t} = e;
                    return k().createElement(t, {oasVersion: "3.0"})
                })), JsonSchema_string: Dn, model: Kn, onlineValidatorBadge: $n
            }, Ln = "oas3_set_servers", Un = "oas3_set_request_body_value", zn = "oas3_set_request_body_retain_flag",
            Bn = "oas3_set_request_body_inclusion", Fn = "oas3_set_active_examples_member",
            Wn = "oas3_set_request_content_type", Hn = "oas3_set_response_content_type",
            Xn = "oas3_set_server_variable_value", Gn = "oas3_set_request_body_validate_error",
            Yn = "oas3_clear_request_body_validate_error", Qn = "oas3_clear_request_body_value";

        function setSelectedServer(e, t) {
            return {type: Ln, payload: {selectedServerUrl: e, namespace: t}}
        }

        function setRequestBodyValue({value: e, pathMethod: t}) {
            return {type: Un, payload: {value: e, pathMethod: t}}
        }

        const setRetainRequestBodyValueFlag = ({value: e, pathMethod: t}) => ({
            type: zn,
            payload: {value: e, pathMethod: t}
        });

        function setRequestBodyInclusion({value: e, pathMethod: t, name: r}) {
            return {type: Bn, payload: {value: e, pathMethod: t, name: r}}
        }

        function setActiveExamplesMember({name: e, pathMethod: t, contextType: r, contextName: a}) {
            return {type: Fn, payload: {name: e, pathMethod: t, contextType: r, contextName: a}}
        }

        function setRequestContentType({value: e, pathMethod: t}) {
            return {type: Wn, payload: {value: e, pathMethod: t}}
        }

        function setResponseContentType({value: e, path: t, method: r}) {
            return {type: Hn, payload: {value: e, path: t, method: r}}
        }

        function setServerVariableValue({server: e, namespace: t, key: r, val: a}) {
            return {type: Xn, payload: {server: e, namespace: t, key: r, val: a}}
        }

        const setRequestBodyValidateError = ({path: e, method: t, validationErrors: r}) => ({
                type: Gn,
                payload: {path: e, method: t, validationErrors: r}
            }), clearRequestBodyValidateError = ({path: e, method: t}) => ({type: Yn, payload: {path: e, method: t}}),
            initRequestBodyValidateError = ({pathMethod: e}) => ({type: Yn, payload: {path: e[0], method: e[1]}}),
            clearRequestBodyValue = ({pathMethod: e}) => ({type: Qn, payload: {pathMethod: e}}),
            oas3_selectors_onlyOAS3 = e => (t, ...r) => a => {
                if (a.getSystem().specSelectors.isOAS3()) {
                    const n = e(t, ...r);
                    return "function" == typeof n ? n(a) : n
                }
                return null
            };
        const Zn = oas3_selectors_onlyOAS3(((e, t) => {
                const r = t ? [t, "selectedServer"] : ["selectedServer"];
                return e.getIn(r) || ""
            })), es = oas3_selectors_onlyOAS3(((e, t, r) => e.getIn(["requestData", t, r, "bodyValue"]) || null)),
            ts = oas3_selectors_onlyOAS3(((e, t, r) => e.getIn(["requestData", t, r, "retainBodyValue"]) || !1)),
            selectDefaultRequestBodyValue = (e, t, r) => e => {
                const {oas3Selectors: a, specSelectors: n, fn: s} = e.getSystem();
                if (n.isOAS3()) {
                    const e = a.requestContentType(t, r);
                    if (e) return getDefaultRequestBodyValue(n.specResolvedSubtree(["paths", t, r, "requestBody"]), e, a.activeExamplesMember(t, r, "requestBody", "requestBody"), s)
                }
                return null
            }, rs = oas3_selectors_onlyOAS3(((e, t, r) => e => {
                const {oas3Selectors: a, specSelectors: n, fn: s} = e;
                let o = !1;
                const l = a.requestContentType(t, r);
                let c = a.requestBodyValue(t, r);
                const i = n.specResolvedSubtree(["paths", t, r, "requestBody"]);
                if (!i) return !1;
                if (I.Map.isMap(c) && (c = stringify(c.mapEntries((e => I.Map.isMap(e[1]) ? [e[0], e[1].get("value")] : e)).toJS())), I.List.isList(c) && (c = stringify(c)), l) {
                    const e = getDefaultRequestBodyValue(i, l, a.activeExamplesMember(t, r, "requestBody", "requestBody"), s);
                    o = !!c && c !== e
                }
                return o
            })),
            as = oas3_selectors_onlyOAS3(((e, t, r) => e.getIn(["requestData", t, r, "bodyInclusion"]) || (0, I.Map)())),
            ns = oas3_selectors_onlyOAS3(((e, t, r) => e.getIn(["requestData", t, r, "errors"]) || null)),
            ss = oas3_selectors_onlyOAS3(((e, t, r, a, n) => e.getIn(["examples", t, r, a, n, "activeExample"]) || null)),
            os = oas3_selectors_onlyOAS3(((e, t, r) => e.getIn(["requestData", t, r, "requestContentType"]) || null)),
            ls = oas3_selectors_onlyOAS3(((e, t, r) => e.getIn(["requestData", t, r, "responseContentType"]) || null)),
            cs = oas3_selectors_onlyOAS3(((e, t, r) => {
                let a;
                if ("string" != typeof t) {
                    const {server: e, namespace: n} = t;
                    a = n ? [n, "serverVariableValues", e, r] : ["serverVariableValues", e, r]
                } else {
                    a = ["serverVariableValues", t, r]
                }
                return e.getIn(a) || null
            })), is = oas3_selectors_onlyOAS3(((e, t) => {
                let r;
                if ("string" != typeof t) {
                    const {server: e, namespace: a} = t;
                    r = a ? [a, "serverVariableValues", e] : ["serverVariableValues", e]
                } else {
                    r = ["serverVariableValues", t]
                }
                return e.getIn(r) || (0, I.OrderedMap)()
            })), ps = oas3_selectors_onlyOAS3(((e, t) => {
                var r, a;
                if ("string" != typeof t) {
                    const {server: n, namespace: s} = t;
                    a = n, r = s ? e.getIn([s, "serverVariableValues", a]) : e.getIn(["serverVariableValues", a])
                } else a = t, r = e.getIn(["serverVariableValues", a]);
                r = r || (0, I.OrderedMap)();
                let n = a;
                return r.map(((e, t) => {
                    n = n.replace(new RegExp(`{${t}}`, "g"), e)
                })), n
            })), ms = function validateRequestBodyIsRequired(e) {
                return (...t) => r => {
                    const a = r.getSystem().specSelectors.specJson();
                    let n = [...t][1] || [];
                    return !a.getIn(["paths", ...n, "requestBody", "required"]) || e(...t)
                }
            }(((e, t) => ((e, t) => (t = t || [], !!e.getIn(["requestData", ...t, "bodyValue"])))(e, t))),
            validateShallowRequired = (e, {
                oas3RequiredRequestBodyContentType: t,
                oas3RequestContentType: r,
                oas3RequestBodyValue: a
            }) => {
                let n = [];
                if (!I.Map.isMap(a)) return n;
                let s = [];
                return Object.keys(t.requestContentType).forEach((e => {
                    if (e === r) {
                        t.requestContentType[e].forEach((e => {
                            s.indexOf(e) < 0 && s.push(e)
                        }))
                    }
                })), s.forEach((e => {
                    a.getIn([e, "value"]) || n.push(e)
                })), n
            }, us = pr()(["get", "put", "post", "delete", "options", "head", "patch", "trace"]), ds = {
                [Ln]: (e, {payload: {selectedServerUrl: t, namespace: r}}) => {
                    const a = r ? [r, "selectedServer"] : ["selectedServer"];
                    return e.setIn(a, t)
                },
                [Un]: (e, {payload: {value: t, pathMethod: r}}) => {
                    let [a, n] = r;
                    if (!I.Map.isMap(t)) return e.setIn(["requestData", a, n, "bodyValue"], t);
                    let s, o = e.getIn(["requestData", a, n, "bodyValue"]) || (0, I.Map)();
                    I.Map.isMap(o) || (o = (0, I.Map)());
                    const [...l] = t.keys();
                    return l.forEach((e => {
                        let r = t.getIn([e]);
                        o.has(e) && I.Map.isMap(r) || (s = o.setIn([e, "value"], r))
                    })), e.setIn(["requestData", a, n, "bodyValue"], s)
                },
                [zn]: (e, {payload: {value: t, pathMethod: r}}) => {
                    let [a, n] = r;
                    return e.setIn(["requestData", a, n, "retainBodyValue"], t)
                },
                [Bn]: (e, {payload: {value: t, pathMethod: r, name: a}}) => {
                    let [n, s] = r;
                    return e.setIn(["requestData", n, s, "bodyInclusion", a], t)
                },
                [Fn]: (e, {payload: {name: t, pathMethod: r, contextType: a, contextName: n}}) => {
                    let [s, o] = r;
                    return e.setIn(["examples", s, o, a, n, "activeExample"], t)
                },
                [Wn]: (e, {payload: {value: t, pathMethod: r}}) => {
                    let [a, n] = r;
                    return e.setIn(["requestData", a, n, "requestContentType"], t)
                },
                [Hn]: (e, {
                    payload: {
                        value: t,
                        path: r,
                        method: a
                    }
                }) => e.setIn(["requestData", r, a, "responseContentType"], t),
                [Xn]: (e, {payload: {server: t, namespace: r, key: a, val: n}}) => {
                    const s = r ? [r, "serverVariableValues", t, a] : ["serverVariableValues", t, a];
                    return e.setIn(s, n)
                },
                [Gn]: (e, {payload: {path: t, method: r, validationErrors: a}}) => {
                    let n = [];
                    if (n.push("Required field is not provided"), a.missingBodyValue) return e.setIn(["requestData", t, r, "errors"], (0, I.fromJS)(n));
                    if (a.missingRequiredKeys && a.missingRequiredKeys.length > 0) {
                        const {missingRequiredKeys: s} = a;
                        return e.updateIn(["requestData", t, r, "bodyValue"], (0, I.fromJS)({}), (e => s.reduce(((e, t) => e.setIn([t, "errors"], (0, I.fromJS)(n))), e)))
                    }
                    return console.warn("unexpected result: SET_REQUEST_BODY_VALIDATE_ERROR"), e
                },
                [Yn]: (e, {payload: {path: t, method: r}}) => {
                    const a = e.getIn(["requestData", t, r, "bodyValue"]);
                    if (!I.Map.isMap(a)) return e.setIn(["requestData", t, r, "errors"], (0, I.fromJS)([]));
                    const [...n] = a.keys();
                    return n ? e.updateIn(["requestData", t, r, "bodyValue"], (0, I.fromJS)({}), (e => n.reduce(((e, t) => e.setIn([t, "errors"], (0, I.fromJS)([]))), e))) : e
                },
                [Qn]: (e, {payload: {pathMethod: t}}) => {
                    let [r, a] = t;
                    const n = e.getIn(["requestData", r, a, "bodyValue"]);
                    return n ? I.Map.isMap(n) ? e.setIn(["requestData", r, a, "bodyValue"], (0, I.Map)()) : e.setIn(["requestData", r, a, "bodyValue"], "") : e
                }
            };

        function oas3() {
            return {
                components: Mn,
                wrapComponents: Vn,
                statePlugins: {
                    spec: {wrapSelectors: _, selectors: w},
                    auth: {wrapSelectors: v},
                    oas3: {actions: {...b}, reducers: ds, selectors: {...C}}
                }
            }
        }

        const webhooks = ({specSelectors: e, getComponent: t}) => {
                const r = e.selectWebhooksOperations(), a = Object.keys(r), n = t("OperationContainer", !0);
                return 0 === a.length ? null : k().createElement("div", {className: "webhooks"}, k().createElement("h2", null, "Webhooks"), a.map((e => k().createElement("div", {key: `${e}-webhook`}, r[e].map((t => k().createElement(n, {
                    key: `${e}-${t.method}-webhook`,
                    op: t.operation,
                    tag: "webhooks",
                    method: t.method,
                    path: e,
                    specPath: t.specPath,
                    allowTryItOut: !1
                })))))))
            }, components_license = ({getComponent: e, specSelectors: t}) => {
                const r = t.selectLicenseNameField(), a = t.selectLicenseUrl(), n = e("Link");
                return k().createElement("div", {className: "info__license"}, a ? k().createElement("div", {className: "info__license__url"}, k().createElement(n, {
                    target: "_blank",
                    href: sanitizeUrl(a)
                }, r)) : k().createElement("span", null, r))
            }, components_contact = ({getComponent: e, specSelectors: t}) => {
                const r = t.selectContactNameField(), a = t.selectContactUrl(), n = t.selectContactEmailField(),
                    s = e("Link");
                return k().createElement("div", {className: "info__contact"}, a && k().createElement("div", null, k().createElement(s, {
                    href: sanitizeUrl(a),
                    target: "_blank"
                }, r, " - Website")), n && k().createElement(s, {href: sanitizeUrl(`mailto:${n}`)}, a ? `Send email to ${r}` : `Contact ${r}`))
            }, oas31_components_info = ({getComponent: e, specSelectors: t}) => {
                const r = t.version(), a = t.url(), n = t.basePath(), s = t.host(), o = t.selectInfoSummaryField(),
                    l = t.selectInfoDescriptionField(), c = t.selectInfoTitleField(), i = t.selectInfoTermsOfServiceUrl(),
                    p = t.selectExternalDocsUrl(), m = t.selectExternalDocsDescriptionField(), u = t.contact(),
                    d = t.license(), h = e("Markdown", !0), g = e("Link"), y = e("VersionStamp"), f = e("OpenAPIVersion"),
                    S = e("InfoUrl"), E = e("InfoBasePath"), _ = e("License", !0), v = e("Contact", !0),
                    w = e("JsonSchemaDialect", !0);
                return k().createElement("div", {className: "info"}, k().createElement("hgroup", {className: "main"}, k().createElement("h2", {className: "title"}, c, k().createElement("span", null, r && k().createElement(y, {version: r}), k().createElement(f, {oasVersion: "3.1"}))), (s || n) && k().createElement(E, {
                    host: s,
                    basePath: n
                }), a && k().createElement(S, {
                    getComponent: e,
                    url: a
                })), o && k().createElement("p", {className: "info__summary"}, o), k().createElement("div", {className: "info__description description"}, k().createElement(h, {source: l})), i && k().createElement("div", {className: "info__tos"}, k().createElement(g, {
                    target: "_blank",
                    href: sanitizeUrl(i)
                }, "Terms of service")), u.size > 0 && k().createElement(v, null), d.size > 0 && k().createElement(_, null), p && k().createElement(g, {
                    className: "info__extdocs",
                    target: "_blank",
                    href: sanitizeUrl(p)
                }, m || p), k().createElement(w, null))
            }, json_schema_dialect = ({getComponent: e, specSelectors: t}) => {
                const r = t.selectJsonSchemaDialectField(), a = t.selectJsonSchemaDialectDefault(), n = e("Link");
                return k().createElement(k().Fragment, null, r && r === a && k().createElement("p", {className: "info__jsonschemadialect"}, "JSON Schema dialect:", " ", k().createElement(n, {
                    target: "_blank",
                    href: sanitizeUrl(r)
                }, r)), r && r !== a && k().createElement("div", {className: "error-wrapper"}, k().createElement("div", {className: "no-margin"}, k().createElement("div", {className: "errors"}, k().createElement("div", {className: "errors-wrapper"}, k().createElement("h4", {className: "center"}, "Warning"), k().createElement("p", {className: "message"}, k().createElement("strong", null, "OpenAPI.jsonSchemaDialect"), " field contains a value different from the default value of", " ", k().createElement(n, {
                    target: "_blank",
                    href: a
                }, a), ". Values different from the default one are currently not supported. Please either omit the field or provide it with the default value."))))))
            }, version_pragma_filter = ({
                                            bypass: e,
                                            isSwagger2: t,
                                            isOAS3: r,
                                            isOAS31: a,
                                            alsoShow: n,
                                            children: s
                                        }) => e ? k().createElement("div", null, s) : t && (r || a) ? k().createElement("div", {className: "version-pragma"}, n, k().createElement("div", {className: "version-pragma__message version-pragma__message--ambiguous"}, k().createElement("div", null, k().createElement("h3", null, "Unable to render this definition"), k().createElement("p", null, k().createElement("code", null, "swagger"), " and ", k().createElement("code", null, "openapi"), " fields cannot be present in the same Swagger or OpenAPI definition. Please remove one of the fields."), k().createElement("p", null, "Supported version fields are ", k().createElement("code", null, 'swagger: "2.0"'), " and those that match ", k().createElement("code", null, "openapi: 3.x.y"), " (for example,", " ", k().createElement("code", null, "openapi: 3.1.0"), ").")))) : t || r || a ? k().createElement("div", null, s) : k().createElement("div", {className: "version-pragma"}, n, k().createElement("div", {className: "version-pragma__message version-pragma__message--missing"}, k().createElement("div", null, k().createElement("h3", null, "Unable to render this definition"), k().createElement("p", null, "The provided definition does not specify a valid version field."), k().createElement("p", null, "Please indicate a valid Swagger or OpenAPI version field. Supported version fields are ", k().createElement("code", null, 'swagger: "2.0"'), " and those that match ", k().createElement("code", null, "openapi: 3.x.y"), " (for example,", " ", k().createElement("code", null, "openapi: 3.1.0"), ").")))),
            getModelName = e => "string" == typeof e && e.includes("#/components/schemas/") ? (e => {
                const t = e.replace(/~1/g, "/").replace(/~0/g, "~");
                try {
                    return decodeURIComponent(t)
                } catch {
                    return t
                }
            })(e.replace(/^.*#\/components\/schemas\//, "")) : null, hs = (0, N.forwardRef)((({
                                                                                                  schema: e,
                                                                                                  getComponent: t,
                                                                                                  onToggle: r = (() => {
                                                                                                  })
                                                                                              }, a) => {
                const n = t("JSONSchema202012"), s = getModelName(e.get("$$ref")), o = (0, N.useCallback)(((e, t) => {
                    r(s, t)
                }), [s, r]);
                return k().createElement(n, {name: s, schema: e.toJS(), ref: a, onExpand: o})
            })), gs = hs, models = ({
                                        specActions: e,
                                        specSelectors: t,
                                        layoutSelectors: r,
                                        layoutActions: a,
                                        getComponent: n,
                                        getConfigs: s
                                    }) => {
                const o = t.selectSchemas(), l = Object.keys(o).length > 0, c = ["components", "schemas"], {
                        docExpansion: i,
                        defaultModelsExpandDepth: p
                    } = s(), m = p > 0 && "none" !== i, u = r.isShown(c, m), d = n("Collapse"), h = n("JSONSchema202012"),
                    g = n("ArrowUpIcon"), y = n("ArrowDownIcon");
                (0, N.useEffect)((() => {
                    const r = u && p > 1, a = null != t.specResolvedSubtree(c);
                    r && !a && e.requestResolvedSubtree(c)
                }), [u, p]);
                const f = (0, N.useCallback)((() => {
                    a.show(c, !u)
                }), [u]), S = (0, N.useCallback)((e => {
                    null !== e && a.readyToScroll(c, e)
                }), []), handleJSONSchema202012Ref = e => t => {
                    null !== t && a.readyToScroll([...c, e], t)
                }, handleJSONSchema202012Expand = r => (a, n) => {
                    if (n) {
                        const a = [...c, r];
                        null != t.specResolvedSubtree(a) || e.requestResolvedSubtree([...c, r])
                    }
                };
                return !l || p < 0 ? null : k().createElement("section", {
                    className: Fa()("models", {"is-open": u}),
                    ref: S
                }, k().createElement("h4", null, k().createElement("button", {
                    "aria-expanded": u,
                    className: "models-control",
                    onClick: f
                }, k().createElement("span", null, "Schemas"), u ? k().createElement(g, null) : k().createElement(y, null))), k().createElement(d, {isOpened: u}, Object.entries(o).map((([e, t]) => k().createElement(h, {
                    key: e,
                    ref: handleJSONSchema202012Ref(e),
                    schema: t,
                    name: e,
                    onExpand: handleJSONSchema202012Expand(e)
                })))))
            }, mutual_tls_auth = ({schema: e, getComponent: t}) => {
                const r = t("JumpToPath", !0);
                return k().createElement("div", null, k().createElement("h4", null, e.get("name"), " (mutualTLS)", " ", k().createElement(r, {path: ["securityDefinitions", e.get("name")]})), k().createElement("p", null, "Mutual TLS is required by this API/Operation. Certificates are managed via your Operating System and/or your browser."), k().createElement("p", null, e.get("description")))
            };

        class auths_Auths extends k().Component {
            constructor(e, t) {
                super(e, t), this.state = {}
            }

            onAuthChange = e => {
                let {name: t} = e;
                this.setState({[t]: e})
            };
            submitAuth = e => {
                e.preventDefault();
                let {authActions: t} = this.props;
                t.authorizeWithPersistOption(this.state)
            };
            logoutClick = e => {
                e.preventDefault();
                let {authActions: t, definitions: r} = this.props, a = r.map(((e, t) => t)).toArray();
                this.setState(a.reduce(((e, t) => (e[t] = "", e)), {})), t.logoutWithPersistOption(a)
            };
            close = e => {
                e.preventDefault();
                let {authActions: t} = this.props;
                t.showDefinitions(!1)
            };

            render() {
                let {definitions: e, getComponent: t, authSelectors: r, errSelectors: a} = this.props;
                const n = t("AuthItem"), s = t("oauth2", !0), o = t("Button"), l = r.authorized(),
                    c = e.filter(((e, t) => !!l.get(t))),
                    i = e.filter((e => "oauth2" !== e.get("type") && "mutualTLS" !== e.get("type"))),
                    p = e.filter((e => "oauth2" === e.get("type"))), m = e.filter((e => "mutualTLS" === e.get("type")));
                return k().createElement("div", {className: "auth-container"}, i.size > 0 && k().createElement("form", {onSubmit: this.submitAuth}, i.map(((e, r) => k().createElement(n, {
                    key: r,
                    schema: e,
                    name: r,
                    getComponent: t,
                    onAuthChange: this.onAuthChange,
                    authorized: l,
                    errSelectors: a
                }))).toArray(), k().createElement("div", {className: "auth-btn-wrapper"}, i.size === c.size ? k().createElement(o, {
                    className: "btn modal-btn auth",
                    onClick: this.logoutClick,
                    "aria-label": "Remove authorization"
                }, "Logout") : k().createElement(o, {
                    type: "submit",
                    className: "btn modal-btn auth authorize",
                    "aria-label": "Apply credentials"
                }, "Authorize"), k().createElement(o, {
                    className: "btn modal-btn auth btn-done",
                    onClick: this.close
                }, "Close"))), p.size > 0 ? k().createElement("div", null, k().createElement("div", {className: "scope-def"}, k().createElement("p", null, "Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes."), k().createElement("p", null, "API requires the following scopes. Select which ones you want to grant to Swagger UI.")), e.filter((e => "oauth2" === e.get("type"))).map(((e, t) => k().createElement("div", {key: t}, k().createElement(s, {
                    authorized: l,
                    schema: e,
                    name: t
                })))).toArray()) : null, m.size > 0 && k().createElement("div", null, m.map(((e, r) => k().createElement(n, {
                    key: r,
                    schema: e,
                    name: r,
                    getComponent: t,
                    onAuthChange: this.onAuthChange,
                    authorized: l,
                    errSelectors: a
                }))).toArray()))
            }
        }

        const ys = auths_Auths, isOAS31 = e => {
                const t = e.get("openapi");
                return "string" == typeof t && /^3\.1\.(?:[1-9]\d*|0)$/.test(t)
            }, fn_createOnlyOAS31Selector = e => (t, ...r) => a => {
                if (a.getSystem().specSelectors.isOAS31()) {
                    const n = e(t, ...r);
                    return "function" == typeof n ? n(a) : n
                }
                return null
            }, createOnlyOAS31SelectorWrapper = e => (t, r) => (a, ...n) => {
                if (r.getSystem().specSelectors.isOAS31()) {
                    const s = e(a, ...n);
                    return "function" == typeof s ? s(t, r) : s
                }
                return t(...n)
            }, fn_createSystemSelector = e => (t, ...r) => a => {
                const n = e(t, a, ...r);
                return "function" == typeof n ? n(a) : n
            },
            createOnlyOAS31ComponentWrapper = e => (t, r) => a => r.specSelectors.isOAS31() ? k().createElement(e, rt()({}, a, {
                originalComponent: t,
                getSystem: r.getSystem
            })) : k().createElement(t, a), fs = createOnlyOAS31ComponentWrapper((({getSystem: e}) => {
                const t = e().getComponent("OAS31License", !0);
                return k().createElement(t, null)
            })), Ss = createOnlyOAS31ComponentWrapper((({getSystem: e}) => {
                const t = e().getComponent("OAS31Contact", !0);
                return k().createElement(t, null)
            })), Es = createOnlyOAS31ComponentWrapper((({getSystem: e}) => {
                const t = e().getComponent("OAS31Info", !0);
                return k().createElement(t, null)
            })), _s = createOnlyOAS31ComponentWrapper((({getSystem: e, ...t}) => {
                const r = e(), {getComponent: a, fn: n, getConfigs: s} = r, o = s(), l = a("OAS31Model"),
                    c = a("JSONSchema202012"), i = a("JSONSchema202012Keyword$schema"),
                    p = a("JSONSchema202012Keyword$vocabulary"), m = a("JSONSchema202012Keyword$id"),
                    u = a("JSONSchema202012Keyword$anchor"), d = a("JSONSchema202012Keyword$dynamicAnchor"),
                    h = a("JSONSchema202012Keyword$ref"), g = a("JSONSchema202012Keyword$dynamicRef"),
                    y = a("JSONSchema202012Keyword$defs"), f = a("JSONSchema202012Keyword$comment"),
                    S = a("JSONSchema202012KeywordAllOf"), E = a("JSONSchema202012KeywordAnyOf"),
                    _ = a("JSONSchema202012KeywordOneOf"), v = a("JSONSchema202012KeywordNot"),
                    w = a("JSONSchema202012KeywordIf"), b = a("JSONSchema202012KeywordThen"),
                    C = a("JSONSchema202012KeywordElse"), x = a("JSONSchema202012KeywordDependentSchemas"),
                    O = a("JSONSchema202012KeywordPrefixItems"), N = a("JSONSchema202012KeywordItems"),
                    A = a("JSONSchema202012KeywordContains"), I = a("JSONSchema202012KeywordProperties"),
                    q = a("JSONSchema202012KeywordPatternProperties"), j = a("JSONSchema202012KeywordAdditionalProperties"),
                    P = a("JSONSchema202012KeywordPropertyNames"), M = a("JSONSchema202012KeywordUnevaluatedItems"),
                    R = a("JSONSchema202012KeywordUnevaluatedProperties"), T = a("JSONSchema202012KeywordType"),
                    J = a("JSONSchema202012KeywordEnum"), $ = a("JSONSchema202012KeywordConst"),
                    K = a("JSONSchema202012KeywordConstraint"), D = a("JSONSchema202012KeywordDependentRequired"),
                    V = a("JSONSchema202012KeywordContentSchema"), L = a("JSONSchema202012KeywordTitle"),
                    U = a("JSONSchema202012KeywordDescription"), z = a("JSONSchema202012KeywordDefault"),
                    B = a("JSONSchema202012KeywordDeprecated"), F = a("JSONSchema202012KeywordReadOnly"),
                    W = a("JSONSchema202012KeywordWriteOnly"), H = a("JSONSchema202012Accordion"),
                    X = a("JSONSchema202012ExpandDeepButton"), G = a("JSONSchema202012ChevronRightIcon"),
                    Y = a("withJSONSchema202012Context")(l, {
                        config: {
                            default$schema: "https://spec.openapis.org/oas/3.1/dialect/base",
                            defaultExpandedLevels: o.defaultModelExpandDepth,
                            includeReadOnly: Boolean(t.includeReadOnly),
                            includeWriteOnly: Boolean(t.includeWriteOnly)
                        },
                        components: {
                            JSONSchema: c,
                            Keyword$schema: i,
                            Keyword$vocabulary: p,
                            Keyword$id: m,
                            Keyword$anchor: u,
                            Keyword$dynamicAnchor: d,
                            Keyword$ref: h,
                            Keyword$dynamicRef: g,
                            Keyword$defs: y,
                            Keyword$comment: f,
                            KeywordAllOf: S,
                            KeywordAnyOf: E,
                            KeywordOneOf: _,
                            KeywordNot: v,
                            KeywordIf: w,
                            KeywordThen: b,
                            KeywordElse: C,
                            KeywordDependentSchemas: x,
                            KeywordPrefixItems: O,
                            KeywordItems: N,
                            KeywordContains: A,
                            KeywordProperties: I,
                            KeywordPatternProperties: q,
                            KeywordAdditionalProperties: j,
                            KeywordPropertyNames: P,
                            KeywordUnevaluatedItems: M,
                            KeywordUnevaluatedProperties: R,
                            KeywordType: T,
                            KeywordEnum: J,
                            KeywordConst: $,
                            KeywordConstraint: K,
                            KeywordDependentRequired: D,
                            KeywordContentSchema: V,
                            KeywordTitle: L,
                            KeywordDescription: U,
                            KeywordDefault: z,
                            KeywordDeprecated: B,
                            KeywordReadOnly: F,
                            KeywordWriteOnly: W,
                            Accordion: H,
                            ExpandDeepButton: X,
                            ChevronRightIcon: G
                        },
                        fn: {
                            upperFirst: n.upperFirst,
                            isExpandable: n.jsonSchema202012.isExpandable,
                            getProperties: n.jsonSchema202012.getProperties
                        }
                    });
                return k().createElement(Y, t)
            })), vs = _s, ws = createOnlyOAS31ComponentWrapper((({getSystem: e}) => {
                const {getComponent: t, fn: r, getConfigs: a} = e(), n = a();
                if (ws.ModelsWithJSONSchemaContext) return k().createElement(ws.ModelsWithJSONSchemaContext, null);
                const s = t("OAS31Models", !0), o = t("JSONSchema202012"), l = t("JSONSchema202012Keyword$schema"),
                    c = t("JSONSchema202012Keyword$vocabulary"), i = t("JSONSchema202012Keyword$id"),
                    p = t("JSONSchema202012Keyword$anchor"), m = t("JSONSchema202012Keyword$dynamicAnchor"),
                    u = t("JSONSchema202012Keyword$ref"), d = t("JSONSchema202012Keyword$dynamicRef"),
                    h = t("JSONSchema202012Keyword$defs"), g = t("JSONSchema202012Keyword$comment"),
                    y = t("JSONSchema202012KeywordAllOf"), f = t("JSONSchema202012KeywordAnyOf"),
                    S = t("JSONSchema202012KeywordOneOf"), E = t("JSONSchema202012KeywordNot"),
                    _ = t("JSONSchema202012KeywordIf"), v = t("JSONSchema202012KeywordThen"),
                    w = t("JSONSchema202012KeywordElse"), b = t("JSONSchema202012KeywordDependentSchemas"),
                    C = t("JSONSchema202012KeywordPrefixItems"), x = t("JSONSchema202012KeywordItems"),
                    O = t("JSONSchema202012KeywordContains"), N = t("JSONSchema202012KeywordProperties"),
                    A = t("JSONSchema202012KeywordPatternProperties"), I = t("JSONSchema202012KeywordAdditionalProperties"),
                    q = t("JSONSchema202012KeywordPropertyNames"), j = t("JSONSchema202012KeywordUnevaluatedItems"),
                    P = t("JSONSchema202012KeywordUnevaluatedProperties"), M = t("JSONSchema202012KeywordType"),
                    R = t("JSONSchema202012KeywordEnum"), T = t("JSONSchema202012KeywordConst"),
                    J = t("JSONSchema202012KeywordConstraint"), $ = t("JSONSchema202012KeywordDependentRequired"),
                    K = t("JSONSchema202012KeywordContentSchema"), D = t("JSONSchema202012KeywordTitle"),
                    V = t("JSONSchema202012KeywordDescription"), L = t("JSONSchema202012KeywordDefault"),
                    U = t("JSONSchema202012KeywordDeprecated"), z = t("JSONSchema202012KeywordReadOnly"),
                    B = t("JSONSchema202012KeywordWriteOnly"), F = t("JSONSchema202012Accordion"),
                    W = t("JSONSchema202012ExpandDeepButton"), H = t("JSONSchema202012ChevronRightIcon"),
                    X = t("withJSONSchema202012Context");
                return ws.ModelsWithJSONSchemaContext = X(s, {
                    config: {
                        default$schema: "https://spec.openapis.org/oas/3.1/dialect/base",
                        defaultExpandedLevels: n.defaultModelsExpandDepth - 1,
                        includeReadOnly: !0,
                        includeWriteOnly: !0
                    },
                    components: {
                        JSONSchema: o,
                        Keyword$schema: l,
                        Keyword$vocabulary: c,
                        Keyword$id: i,
                        Keyword$anchor: p,
                        Keyword$dynamicAnchor: m,
                        Keyword$ref: u,
                        Keyword$dynamicRef: d,
                        Keyword$defs: h,
                        Keyword$comment: g,
                        KeywordAllOf: y,
                        KeywordAnyOf: f,
                        KeywordOneOf: S,
                        KeywordNot: E,
                        KeywordIf: _,
                        KeywordThen: v,
                        KeywordElse: w,
                        KeywordDependentSchemas: b,
                        KeywordPrefixItems: C,
                        KeywordItems: x,
                        KeywordContains: O,
                        KeywordProperties: N,
                        KeywordPatternProperties: A,
                        KeywordAdditionalProperties: I,
                        KeywordPropertyNames: q,
                        KeywordUnevaluatedItems: j,
                        KeywordUnevaluatedProperties: P,
                        KeywordType: M,
                        KeywordEnum: R,
                        KeywordConst: T,
                        KeywordConstraint: J,
                        KeywordDependentRequired: $,
                        KeywordContentSchema: K,
                        KeywordTitle: D,
                        KeywordDescription: V,
                        KeywordDefault: L,
                        KeywordDeprecated: U,
                        KeywordReadOnly: z,
                        KeywordWriteOnly: B,
                        Accordion: F,
                        ExpandDeepButton: W,
                        ChevronRightIcon: H
                    },
                    fn: {
                        upperFirst: r.upperFirst,
                        isExpandable: r.jsonSchema202012.isExpandable,
                        getProperties: r.jsonSchema202012.getProperties
                    }
                }), k().createElement(ws.ModelsWithJSONSchemaContext, null)
            }));
        ws.ModelsWithJSONSchemaContext = null;
        const bs = ws, wrap_components_version_pragma_filter = (e, t) => e => {
                const r = t.specSelectors.isOAS31(), a = t.getComponent("OAS31VersionPragmaFilter");
                return k().createElement(a, rt()({isOAS31: r}, e))
            }, Cs = createOnlyOAS31ComponentWrapper((({originalComponent: e, ...t}) => {
                const {getComponent: r, schema: a} = t, n = r("MutualTLSAuth", !0);
                return "mutualTLS" === a.get("type") ? k().createElement(n, {schema: a}) : k().createElement(e, t)
            })), xs = Cs, Os = createOnlyOAS31ComponentWrapper((({getSystem: e, ...t}) => {
                const r = e().getComponent("OAS31Auths", !0);
                return k().createElement(r, t)
            })), Ns = (0, I.Map)(), ks = (0, be.createSelector)(((e, t) => t.specSelectors.specJson()), isOAS31),
            selectors_webhooks = () => e => {
                const t = e.specSelectors.specJson().get("webhooks");
                return I.Map.isMap(t) ? t : Ns
            },
            As = (0, be.createSelector)([(e, t) => t.specSelectors.webhooks(), (e, t) => t.specSelectors.validOperationMethods(), (e, t) => t.specSelectors.specResolvedSubtree(["webhooks"])], ((e, t) => e.reduce(((e, r, a) => {
                if (!I.Map.isMap(r)) return e;
                const n = r.entrySeq().filter((([e]) => t.includes(e))).map((([e, t]) => ({
                    operation: (0, I.Map)({operation: t}),
                    method: e,
                    path: a,
                    specPath: (0, I.List)(["webhooks", a, e])
                })));
                return e.concat(n)
            }), (0, I.List)()).groupBy((e => e.path)).map((e => e.toArray())).toObject())),
            selectors_license = () => e => {
                const t = e.specSelectors.info().get("license");
                return I.Map.isMap(t) ? t : Ns
            }, selectLicenseNameField = () => e => e.specSelectors.license().get("name", "License"),
            selectLicenseUrlField = () => e => e.specSelectors.license().get("url"),
            Is = (0, be.createSelector)([(e, t) => t.specSelectors.url(), (e, t) => t.oas3Selectors.selectedServer(), (e, t) => t.specSelectors.selectLicenseUrlField()], ((e, t, r) => {
                if (r) return safeBuildUrl(r, e, {selectedServer: t})
            })), selectLicenseIdentifierField = () => e => e.specSelectors.license().get("identifier"),
            selectors_contact = () => e => {
                const t = e.specSelectors.info().get("contact");
                return I.Map.isMap(t) ? t : Ns
            }, selectContactNameField = () => e => e.specSelectors.contact().get("name", "the developer"),
            selectContactEmailField = () => e => e.specSelectors.contact().get("email"),
            selectContactUrlField = () => e => e.specSelectors.contact().get("url"),
            qs = (0, be.createSelector)([(e, t) => t.specSelectors.url(), (e, t) => t.oas3Selectors.selectedServer(), (e, t) => t.specSelectors.selectContactUrlField()], ((e, t, r) => {
                if (r) return safeBuildUrl(r, e, {selectedServer: t})
            })), selectInfoTitleField = () => e => e.specSelectors.info().get("title"),
            selectInfoSummaryField = () => e => e.specSelectors.info().get("summary"),
            selectInfoDescriptionField = () => e => e.specSelectors.info().get("description"),
            selectInfoTermsOfServiceField = () => e => e.specSelectors.info().get("termsOfService"),
            js = (0, be.createSelector)([(e, t) => t.specSelectors.url(), (e, t) => t.oas3Selectors.selectedServer(), (e, t) => t.specSelectors.selectInfoTermsOfServiceField()], ((e, t, r) => {
                if (r) return safeBuildUrl(r, e, {selectedServer: t})
            })), selectExternalDocsDescriptionField = () => e => e.specSelectors.externalDocs().get("description"),
            selectExternalDocsUrlField = () => e => e.specSelectors.externalDocs().get("url"),
            Ps = (0, be.createSelector)([(e, t) => t.specSelectors.url(), (e, t) => t.oas3Selectors.selectedServer(), (e, t) => t.specSelectors.selectExternalDocsUrlField()], ((e, t, r) => {
                if (r) return safeBuildUrl(r, e, {selectedServer: t})
            })), selectJsonSchemaDialectField = () => e => e.specSelectors.specJson().get("jsonSchemaDialect"),
            selectJsonSchemaDialectDefault = () => "https://spec.openapis.org/oas/3.1/dialect/base",
            Ms = (0, be.createSelector)(((e, t) => t.specSelectors.definitions()), ((e, t) => t.specSelectors.specResolvedSubtree(["components", "schemas"])), ((e, t) => I.Map.isMap(e) ? I.Map.isMap(t) ? Object.entries(e.toJS()).reduce(((e, [r, a]) => {
                const n = t.get(r);
                return e[r] = n?.toJS() || a, e
            }), {}) : e.toJS() : {})),
            wrap_selectors_isOAS3 = (e, t) => (r, ...a) => t.specSelectors.isOAS31() || e(...a),
            Rs = createOnlyOAS31SelectorWrapper((() => (e, t) => t.oas31Selectors.selectLicenseUrl())),
            Ts = createOnlyOAS31SelectorWrapper((() => (e, t) => {
                const r = t.specSelectors.securityDefinitions();
                let a = e();
                return r ? (r.entrySeq().forEach((([e, t]) => {
                    "mutualTLS" === t.get("type") && (a = a.push(new I.Map({[e]: t})))
                })), a) : a
            })),
            Js = (0, be.createSelector)([(e, t) => t.specSelectors.url(), (e, t) => t.oas3Selectors.selectedServer(), (e, t) => t.specSelectors.selectLicenseUrlField(), (e, t) => t.specSelectors.selectLicenseIdentifierField()], ((e, t, r, a) => r ? safeBuildUrl(r, e, {selectedServer: t}) : a ? `https://spdx.org/licenses/${a}.html` : void 0)),
            keywords_Example = ({schema: e, getSystem: t}) => {
                const {fn: r} = t(), {hasKeyword: a, stringify: n} = r.jsonSchema202012.useFn();
                return a(e, "example") ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--example"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "Example"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const"}, n(e.example))) : null
            }, keywords_Xml = ({schema: e, getSystem: t}) => {
                const r = e?.xml || {}, {fn: a, getComponent: n} = t(), {
                        useIsExpandedDeeply: s,
                        useComponent: o
                    } = a.jsonSchema202012, l = s(),
                    c = !!(r.name || r.namespace || r.prefix), [i, p] = (0, N.useState)(l), [m, u] = (0, N.useState)(!1),
                    d = o("Accordion"), h = o("ExpandDeepButton"), g = n("JSONSchema202012DeepExpansionContext")(),
                    y = (0, N.useCallback)((() => {
                        p((e => !e))
                    }), []), f = (0, N.useCallback)(((e, t) => {
                        p(t), u(t)
                    }), []);
                return 0 === Object.keys(r).length ? null : k().createElement(g.Provider, {value: m}, k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--xml"}, c ? k().createElement(k().Fragment, null, k().createElement(d, {
                    expanded: i,
                    onChange: y
                }, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "XML")), k().createElement(h, {
                    expanded: i,
                    onClick: f
                })) : k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "XML"), !0 === r.attribute && k().createElement("span", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--muted"}, "attribute"), !0 === r.wrapped && k().createElement("span", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--muted"}, "wrapped"), k().createElement("strong", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary"}, "object"), k().createElement("ul", {className: Fa()("json-schema-2020-12-keyword__children", {"json-schema-2020-12-keyword__children--collapsed": !i})}, i && k().createElement(k().Fragment, null, r.name && k().createElement("li", {className: "json-schema-2020-12-property"}, k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "name"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, r.name))), r.namespace && k().createElement("li", {className: "json-schema-2020-12-property"}, k().createElement("div", {className: "json-schema-2020-12-keyword"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "namespace"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, r.namespace))), r.prefix && k().createElement("li", {className: "json-schema-2020-12-property"}, k().createElement("div", {className: "json-schema-2020-12-keyword"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "prefix"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, r.prefix)))))))
            }, Discriminator_DiscriminatorMapping = ({discriminator: e}) => {
                const t = e?.mapping || {};
                return 0 === Object.keys(t).length ? null : Object.entries(t).map((([e, t]) => k().createElement("div", {
                    key: `${e}-${t}`,
                    className: "json-schema-2020-12-keyword"
                }, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, e), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, t))))
            }, Discriminator_Discriminator = ({schema: e, getSystem: t}) => {
                const r = e?.discriminator || {}, {fn: a, getComponent: n} = t(), {
                        useIsExpandedDeeply: s,
                        useComponent: o
                    } = a.jsonSchema202012, l = s(), c = !!r.mapping, [i, p] = (0, N.useState)(l), [m, u] = (0, N.useState)(!1),
                    d = o("Accordion"), h = o("ExpandDeepButton"), g = n("JSONSchema202012DeepExpansionContext")(),
                    y = (0, N.useCallback)((() => {
                        p((e => !e))
                    }), []), f = (0, N.useCallback)(((e, t) => {
                        p(t), u(t)
                    }), []);
                return 0 === Object.keys(r).length ? null : k().createElement(g.Provider, {value: m}, k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--discriminator"}, c ? k().createElement(k().Fragment, null, k().createElement(d, {
                    expanded: i,
                    onChange: y
                }, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "Discriminator")), k().createElement(h, {
                    expanded: i,
                    onClick: f
                })) : k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "Discriminator"), r.propertyName && k().createElement("span", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--muted"}, r.propertyName), k().createElement("strong", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary"}, "object"), k().createElement("ul", {className: Fa()("json-schema-2020-12-keyword__children", {"json-schema-2020-12-keyword__children--collapsed": !i})}, i && k().createElement("li", {className: "json-schema-2020-12-property"}, k().createElement(Discriminator_DiscriminatorMapping, {discriminator: r})))))
            }, keywords_ExternalDocs = ({schema: e, getSystem: t}) => {
                const r = e?.externalDocs || {}, {fn: a, getComponent: n} = t(), {
                        useIsExpandedDeeply: s,
                        useComponent: o
                    } = a.jsonSchema202012, l = s(),
                    c = !(!r.description && !r.url), [i, p] = (0, N.useState)(l), [m, u] = (0, N.useState)(!1),
                    d = o("Accordion"), h = o("ExpandDeepButton"), g = n("JSONSchema202012KeywordDescription"),
                    y = n("Link"), f = n("JSONSchema202012DeepExpansionContext")(), S = (0, N.useCallback)((() => {
                        p((e => !e))
                    }), []), E = (0, N.useCallback)(((e, t) => {
                        p(t), u(t)
                    }), []);
                return 0 === Object.keys(r).length ? null : k().createElement(f.Provider, {value: m}, k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--externalDocs"}, c ? k().createElement(k().Fragment, null, k().createElement(d, {
                    expanded: i,
                    onChange: S
                }, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "External documentation")), k().createElement(h, {
                    expanded: i,
                    onClick: E
                })) : k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "External documentation"), k().createElement("strong", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary"}, "object"), k().createElement("ul", {className: Fa()("json-schema-2020-12-keyword__children", {"json-schema-2020-12-keyword__children--collapsed": !i})}, i && k().createElement(k().Fragment, null, r.description && k().createElement("li", {className: "json-schema-2020-12-property"}, k().createElement(g, {
                    schema: r,
                    getSystem: t
                })), r.url && k().createElement("li", {className: "json-schema-2020-12-property"}, k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "url"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, k().createElement(y, {
                    target: "_blank",
                    href: sanitizeUrl(r.url)
                }, r.url))))))))
            }, keywords_Description = ({schema: e, getSystem: t}) => {
                if (!e?.description) return null;
                const {getComponent: r} = t(), a = r("Markdown");
                return k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--description"}, k().createElement("div", {className: "json-schema-2020-12-core-keyword__value json-schema-2020-12-core-keyword__value--secondary"}, k().createElement(a, {source: e.description})))
            }, $s = createOnlyOAS31ComponentWrapper(keywords_Description),
            Ks = createOnlyOAS31ComponentWrapper((({schema: e, getSystem: t, originalComponent: r}) => {
                const {getComponent: a} = t(), n = a("JSONSchema202012KeywordDiscriminator"),
                    s = a("JSONSchema202012KeywordXml"), o = a("JSONSchema202012KeywordExample"),
                    l = a("JSONSchema202012KeywordExternalDocs");
                return k().createElement(k().Fragment, null, k().createElement(r, {schema: e}), k().createElement(n, {
                    schema: e,
                    getSystem: t
                }), k().createElement(s, {schema: e, getSystem: t}), k().createElement(l, {
                    schema: e,
                    getSystem: t
                }), k().createElement(o, {schema: e, getSystem: t}))
            })), Ds = Ks, keywords_Properties = ({schema: e, getSystem: t}) => {
                const {fn: r} = t(), {useComponent: a} = r.jsonSchema202012, {
                        getDependentRequired: n,
                        getProperties: s
                    } = r.jsonSchema202012.useFn(), o = r.jsonSchema202012.useConfig(),
                    l = Array.isArray(e?.required) ? e.required : [], c = a("JSONSchema"), i = s(e, o);
                return 0 === Object.keys(i).length ? null : k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--properties"}, k().createElement("ul", null, Object.entries(i).map((([t, r]) => {
                    const a = l.includes(t), s = n(t, e);
                    return k().createElement("li", {
                        key: t,
                        className: Fa()("json-schema-2020-12-property", {"json-schema-2020-12-property--required": a})
                    }, k().createElement(c, {name: t, schema: r, dependentRequired: s}))
                }))))
            }, Vs = createOnlyOAS31ComponentWrapper(keywords_Properties),
            getProperties = (e, {includeReadOnly: t, includeWriteOnly: r}) => {
                if (!e?.properties) return {};
                const a = Object.entries(e.properties).filter((([, e]) => (!(!0 === e?.readOnly) || t) && (!(!0 === e?.writeOnly) || r)));
                return Object.fromEntries(a)
            };
        const Ls = function afterLoad({fn: e, getSystem: t}) {
            if (e.jsonSchema202012) {
                const r = ((e, t) => {
                    const {fn: r} = t();
                    if ("function" != typeof e) return null;
                    const {hasKeyword: a} = r.jsonSchema202012;
                    return t => e(t) || a(t, "example") || t?.xml || t?.discriminator || t?.externalDocs
                })(e.jsonSchema202012.isExpandable, t);
                Object.assign(this.fn.jsonSchema202012, {isExpandable: r, getProperties})
            }
            if ("function" == typeof e.sampleFromSchema && e.jsonSchema202012) {
                const r = ((e, t) => {
                    const {fn: r, specSelectors: a} = t;
                    return Object.fromEntries(Object.entries(e).map((([e, t]) => {
                        const n = r[e];
                        return [e, (...e) => a.isOAS31() ? t(...e) : "function" == typeof n ? n(...e) : void 0]
                    })))
                })({
                    sampleFromSchema: e.jsonSchema202012.sampleFromSchema,
                    sampleFromSchemaGeneric: e.jsonSchema202012.sampleFromSchemaGeneric,
                    createXMLExample: e.jsonSchema202012.createXMLExample,
                    memoizedSampleFromSchema: e.jsonSchema202012.memoizedSampleFromSchema,
                    memoizedCreateXMLExample: e.jsonSchema202012.memoizedCreateXMLExample
                }, t());
                Object.assign(this.fn, r)
            }
        }, oas31 = ({fn: e}) => {
            const t = e.createSystemSelector || fn_createSystemSelector,
                r = e.createOnlyOAS31Selector || fn_createOnlyOAS31Selector;
            return {
                afterLoad: Ls,
                fn: {
                    isOAS31,
                    createSystemSelector: fn_createSystemSelector,
                    createOnlyOAS31Selector: fn_createOnlyOAS31Selector
                },
                components: {
                    Webhooks: webhooks,
                    JsonSchemaDialect: json_schema_dialect,
                    MutualTLSAuth: mutual_tls_auth,
                    OAS31Info: oas31_components_info,
                    OAS31License: components_license,
                    OAS31Contact: components_contact,
                    OAS31VersionPragmaFilter: version_pragma_filter,
                    OAS31Model: gs,
                    OAS31Models: models,
                    OAS31Auths: ys,
                    JSONSchema202012KeywordExample: keywords_Example,
                    JSONSchema202012KeywordXml: keywords_Xml,
                    JSONSchema202012KeywordDiscriminator: Discriminator_Discriminator,
                    JSONSchema202012KeywordExternalDocs: keywords_ExternalDocs
                },
                wrapComponents: {
                    InfoContainer: Es,
                    License: fs,
                    Contact: Ss,
                    VersionPragmaFilter: wrap_components_version_pragma_filter,
                    Model: vs,
                    Models: bs,
                    AuthItem: xs,
                    auths: Os,
                    JSONSchema202012KeywordDescription: $s,
                    JSONSchema202012KeywordDefault: Ds,
                    JSONSchema202012KeywordProperties: Vs
                },
                statePlugins: {
                    auth: {wrapSelectors: {definitionsToAuthorize: Ts}},
                    spec: {
                        selectors: {
                            isOAS31: t(ks),
                            license: selectors_license,
                            selectLicenseNameField,
                            selectLicenseUrlField,
                            selectLicenseIdentifierField: r(selectLicenseIdentifierField),
                            selectLicenseUrl: t(Is),
                            contact: selectors_contact,
                            selectContactNameField,
                            selectContactEmailField,
                            selectContactUrlField,
                            selectContactUrl: t(qs),
                            selectInfoTitleField,
                            selectInfoSummaryField: r(selectInfoSummaryField),
                            selectInfoDescriptionField,
                            selectInfoTermsOfServiceField,
                            selectInfoTermsOfServiceUrl: t(js),
                            selectExternalDocsDescriptionField,
                            selectExternalDocsUrlField,
                            selectExternalDocsUrl: t(Ps),
                            webhooks: r(selectors_webhooks),
                            selectWebhooksOperations: r(t(As)),
                            selectJsonSchemaDialectField,
                            selectJsonSchemaDialectDefault,
                            selectSchemas: t(Ms)
                        }, wrapSelectors: {isOAS3: wrap_selectors_isOAS3, selectLicenseUrl: Rs}
                    },
                    oas31: {selectors: {selectLicenseUrl: r(t(Js))}}
                }
            }
        }, Us = Ae().object, zs = Ae().bool, Bs = (Ae().oneOfType([Us, zs]), (0, N.createContext)(null));
        Bs.displayName = "JSONSchemaContext";
        const Fs = (0, N.createContext)(0);
        Fs.displayName = "JSONSchemaLevelContext";
        const Ws = (0, N.createContext)(!1);
        Ws.displayName = "JSONSchemaDeepExpansionContext";
        const Hs = (0, N.createContext)(new Set), useConfig = () => {
                const {config: e} = (0, N.useContext)(Bs);
                return e
            }, useComponent = e => {
                const {components: t} = (0, N.useContext)(Bs);
                return t[e] || null
            }, useFn = (e = void 0) => {
                const {fn: t} = (0, N.useContext)(Bs);
                return void 0 !== e ? t[e] : t
            }, useLevel = () => {
                const e = (0, N.useContext)(Fs);
                return [e, e + 1]
            }, useIsExpanded = () => {
                const [e] = useLevel(), {defaultExpandedLevels: t} = useConfig();
                return t - e > 0
            }, useIsExpandedDeeply = () => (0, N.useContext)(Ws), useRenderedSchemas = (e = void 0) => {
                if (void 0 === e) return (0, N.useContext)(Hs);
                const t = (0, N.useContext)(Hs);
                return new Set([...t, e])
            }, Xs = (0, N.forwardRef)((({
                                            schema: e, name: t = "", dependentRequired: r = [], onExpand: a = (() => {
                })
                                        }, n) => {
                const s = useFn(), o = useIsExpanded(),
                    l = useIsExpandedDeeply(), [c, i] = (0, N.useState)(o || l), [p, m] = (0, N.useState)(l), [u, d] = useLevel(),
                    h = (() => {
                        const [e] = useLevel();
                        return e > 0
                    })(), g = s.isExpandable(e) || r.length > 0, y = (e => useRenderedSchemas().has(e))(e),
                    f = useRenderedSchemas(e), S = s.stringifyConstraints(e), E = useComponent("Accordion"),
                    _ = useComponent("Keyword$schema"), v = useComponent("Keyword$vocabulary"),
                    w = useComponent("Keyword$id"), b = useComponent("Keyword$anchor"),
                    C = useComponent("Keyword$dynamicAnchor"), x = useComponent("Keyword$ref"),
                    O = useComponent("Keyword$dynamicRef"), A = useComponent("Keyword$defs"),
                    I = useComponent("Keyword$comment"), q = useComponent("KeywordAllOf"), j = useComponent("KeywordAnyOf"),
                    P = useComponent("KeywordOneOf"), M = useComponent("KeywordNot"), R = useComponent("KeywordIf"),
                    T = useComponent("KeywordThen"), J = useComponent("KeywordElse"),
                    $ = useComponent("KeywordDependentSchemas"), K = useComponent("KeywordPrefixItems"),
                    D = useComponent("KeywordItems"), V = useComponent("KeywordContains"),
                    L = useComponent("KeywordProperties"), U = useComponent("KeywordPatternProperties"),
                    z = useComponent("KeywordAdditionalProperties"), B = useComponent("KeywordPropertyNames"),
                    F = useComponent("KeywordUnevaluatedItems"), W = useComponent("KeywordUnevaluatedProperties"),
                    H = useComponent("KeywordType"), X = useComponent("KeywordEnum"), G = useComponent("KeywordConst"),
                    Y = useComponent("KeywordConstraint"), Q = useComponent("KeywordDependentRequired"),
                    Z = useComponent("KeywordContentSchema"), ee = useComponent("KeywordTitle"),
                    te = useComponent("KeywordDescription"), re = useComponent("KeywordDefault"),
                    ae = useComponent("KeywordDeprecated"), ne = useComponent("KeywordReadOnly"),
                    se = useComponent("KeywordWriteOnly"), oe = useComponent("ExpandDeepButton");
                (0, N.useEffect)((() => {
                    m(l)
                }), [l]), (0, N.useEffect)((() => {
                    m(p)
                }), [p]);
                const le = (0, N.useCallback)(((e, t) => {
                    i(t), !t && m(!1), a(e, t, !1)
                }), [a]), ce = (0, N.useCallback)(((e, t) => {
                    i(t), m(t), a(e, t, !0)
                }), [a]);
                return k().createElement(Fs.Provider, {value: d}, k().createElement(Ws.Provider, {value: p}, k().createElement(Hs.Provider, {value: f}, k().createElement("article", {
                    ref: n,
                    "data-json-schema-level": u,
                    className: Fa()("json-schema-2020-12", {
                        "json-schema-2020-12--embedded": h,
                        "json-schema-2020-12--circular": y
                    })
                }, k().createElement("div", {className: "json-schema-2020-12-head"}, g && !y ? k().createElement(k().Fragment, null, k().createElement(E, {
                    expanded: c,
                    onChange: le
                }, k().createElement(ee, {title: t, schema: e})), k().createElement(oe, {
                    expanded: c,
                    onClick: ce
                })) : k().createElement(ee, {
                    title: t,
                    schema: e
                }), k().createElement(ae, {schema: e}), k().createElement(ne, {schema: e}), k().createElement(se, {schema: e}), k().createElement(H, {
                    schema: e,
                    isCircular: y
                }), S.length > 0 && S.map((e => k().createElement(Y, {
                    key: `${e.scope}-${e.value}`,
                    constraint: e
                })))), k().createElement("div", {className: Fa()("json-schema-2020-12-body", {"json-schema-2020-12-body--collapsed": !c})}, c && k().createElement(k().Fragment, null, k().createElement(te, {schema: e}), !y && g && k().createElement(k().Fragment, null, k().createElement(L, {schema: e}), k().createElement(U, {schema: e}), k().createElement(z, {schema: e}), k().createElement(W, {schema: e}), k().createElement(B, {schema: e}), k().createElement(q, {schema: e}), k().createElement(j, {schema: e}), k().createElement(P, {schema: e}), k().createElement(M, {schema: e}), k().createElement(R, {schema: e}), k().createElement(T, {schema: e}), k().createElement(J, {schema: e}), k().createElement($, {schema: e}), k().createElement(K, {schema: e}), k().createElement(D, {schema: e}), k().createElement(F, {schema: e}), k().createElement(V, {schema: e}), k().createElement(Z, {schema: e})), k().createElement(X, {schema: e}), k().createElement(G, {schema: e}), k().createElement(Q, {
                    schema: e,
                    dependentRequired: r
                }), k().createElement(re, {schema: e}), k().createElement(_, {schema: e}), k().createElement(v, {schema: e}), k().createElement(w, {schema: e}), k().createElement(b, {schema: e}), k().createElement(C, {schema: e}), k().createElement(x, {schema: e}), !y && g && k().createElement(A, {schema: e}), k().createElement(O, {schema: e}), k().createElement(I, {schema: e})))))))
            })), Gs = Xs,
            keywords_$schema = ({schema: e}) => e?.$schema ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--$schema"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "$schema"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, e.$schema)) : null,
            $vocabulary_$vocabulary = ({schema: e}) => {
                const t = useIsExpanded(), r = useIsExpandedDeeply(), [a, n] = (0, N.useState)(t || r),
                    s = useComponent("Accordion"), o = (0, N.useCallback)((() => {
                        n((e => !e))
                    }), []);
                return e?.$vocabulary ? "object" != typeof e.$vocabulary ? null : k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--$vocabulary"}, k().createElement(s, {
                    expanded: a,
                    onChange: o
                }, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "$vocabulary")), k().createElement("strong", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary"}, "object"), k().createElement("ul", null, a && Object.entries(e.$vocabulary).map((([e, t]) => k().createElement("li", {
                    key: e,
                    className: Fa()("json-schema-2020-12-$vocabulary-uri", {"json-schema-2020-12-$vocabulary-uri--disabled": !t})
                }, k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, e)))))) : null
            },
            keywords_$id = ({schema: e}) => e?.$id ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--$id"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "$id"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, e.$id)) : null,
            keywords_$anchor = ({schema: e}) => e?.$anchor ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--$anchor"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "$anchor"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, e.$anchor)) : null,
            keywords_$dynamicAnchor = ({schema: e}) => e?.$dynamicAnchor ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--$dynamicAnchor"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "$dynamicAnchor"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, e.$dynamicAnchor)) : null,
            keywords_$ref = ({schema: e}) => e?.$ref ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--$ref"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "$ref"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, e.$ref)) : null,
            keywords_$dynamicRef = ({schema: e}) => e?.$dynamicRef ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--$dynamicRef"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "$dynamicRef"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, e.$dynamicRef)) : null,
            keywords_$defs = ({schema: e}) => {
                const t = e?.$defs || {}, r = useIsExpanded(),
                    a = useIsExpandedDeeply(), [n, s] = (0, N.useState)(r || a), [o, l] = (0, N.useState)(!1),
                    c = useComponent("Accordion"), i = useComponent("ExpandDeepButton"), p = useComponent("JSONSchema"),
                    m = (0, N.useCallback)((() => {
                        s((e => !e))
                    }), []), u = (0, N.useCallback)(((e, t) => {
                        s(t), l(t)
                    }), []);
                return 0 === Object.keys(t).length ? null : k().createElement(Ws.Provider, {value: o}, k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--$defs"}, k().createElement(c, {
                    expanded: n,
                    onChange: m
                }, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "$defs")), k().createElement(i, {
                    expanded: n,
                    onClick: u
                }), k().createElement("strong", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary"}, "object"), k().createElement("ul", {className: Fa()("json-schema-2020-12-keyword__children", {"json-schema-2020-12-keyword__children--collapsed": !n})}, n && k().createElement(k().Fragment, null, Object.entries(t).map((([e, t]) => k().createElement("li", {
                    key: e,
                    className: "json-schema-2020-12-property"
                }, k().createElement(p, {name: e, schema: t}))))))))
            },
            keywords_$comment = ({schema: e}) => e?.$comment ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--$comment"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary"}, "$comment"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary"}, e.$comment)) : null,
            keywords_AllOf = ({schema: e}) => {
                const t = e?.allOf || [], r = useFn(), a = useIsExpanded(),
                    n = useIsExpandedDeeply(), [s, o] = (0, N.useState)(a || n), [l, c] = (0, N.useState)(!1),
                    i = useComponent("Accordion"), p = useComponent("ExpandDeepButton"), m = useComponent("JSONSchema"),
                    u = useComponent("KeywordType"), d = (0, N.useCallback)((() => {
                        o((e => !e))
                    }), []), h = (0, N.useCallback)(((e, t) => {
                        o(t), c(t)
                    }), []);
                return Array.isArray(t) && 0 !== t.length ? k().createElement(Ws.Provider, {value: l}, k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--allOf"}, k().createElement(i, {
                    expanded: s,
                    onChange: d
                }, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "All of")), k().createElement(p, {
                    expanded: s,
                    onClick: h
                }), k().createElement(u, {schema: {allOf: t}}), k().createElement("ul", {className: Fa()("json-schema-2020-12-keyword__children", {"json-schema-2020-12-keyword__children--collapsed": !s})}, s && k().createElement(k().Fragment, null, t.map(((e, t) => k().createElement("li", {
                    key: `#${t}`,
                    className: "json-schema-2020-12-property"
                }, k().createElement(m, {name: `#${t} ${r.getTitle(e)}`, schema: e})))))))) : null
            }, keywords_AnyOf = ({schema: e}) => {
                const t = e?.anyOf || [], r = useFn(), a = useIsExpanded(),
                    n = useIsExpandedDeeply(), [s, o] = (0, N.useState)(a || n), [l, c] = (0, N.useState)(!1),
                    i = useComponent("Accordion"), p = useComponent("ExpandDeepButton"), m = useComponent("JSONSchema"),
                    u = useComponent("KeywordType"), d = (0, N.useCallback)((() => {
                        o((e => !e))
                    }), []), h = (0, N.useCallback)(((e, t) => {
                        o(t), c(t)
                    }), []);
                return Array.isArray(t) && 0 !== t.length ? k().createElement(Ws.Provider, {value: l}, k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--anyOf"}, k().createElement(i, {
                    expanded: s,
                    onChange: d
                }, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Any of")), k().createElement(p, {
                    expanded: s,
                    onClick: h
                }), k().createElement(u, {schema: {anyOf: t}}), k().createElement("ul", {className: Fa()("json-schema-2020-12-keyword__children", {"json-schema-2020-12-keyword__children--collapsed": !s})}, s && k().createElement(k().Fragment, null, t.map(((e, t) => k().createElement("li", {
                    key: `#${t}`,
                    className: "json-schema-2020-12-property"
                }, k().createElement(m, {name: `#${t} ${r.getTitle(e)}`, schema: e})))))))) : null
            }, keywords_OneOf = ({schema: e}) => {
                const t = e?.oneOf || [], r = useFn(), a = useIsExpanded(),
                    n = useIsExpandedDeeply(), [s, o] = (0, N.useState)(a || n), [l, c] = (0, N.useState)(!1),
                    i = useComponent("Accordion"), p = useComponent("ExpandDeepButton"), m = useComponent("JSONSchema"),
                    u = useComponent("KeywordType"), d = (0, N.useCallback)((() => {
                        o((e => !e))
                    }), []), h = (0, N.useCallback)(((e, t) => {
                        o(t), c(t)
                    }), []);
                return Array.isArray(t) && 0 !== t.length ? k().createElement(Ws.Provider, {value: l}, k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--oneOf"}, k().createElement(i, {
                    expanded: s,
                    onChange: d
                }, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "One of")), k().createElement(p, {
                    expanded: s,
                    onClick: h
                }), k().createElement(u, {schema: {oneOf: t}}), k().createElement("ul", {className: Fa()("json-schema-2020-12-keyword__children", {"json-schema-2020-12-keyword__children--collapsed": !s})}, s && k().createElement(k().Fragment, null, t.map(((e, t) => k().createElement("li", {
                    key: `#${t}`,
                    className: "json-schema-2020-12-property"
                }, k().createElement(m, {name: `#${t} ${r.getTitle(e)}`, schema: e})))))))) : null
            }, keywords_Not = ({schema: e}) => {
                const t = useFn(), r = useComponent("JSONSchema");
                if (!t.hasKeyword(e, "not")) return null;
                const a = k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Not");
                return k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--not"}, k().createElement(r, {
                    name: a,
                    schema: e.not
                }))
            }, keywords_If = ({schema: e}) => {
                const t = useFn(), r = useComponent("JSONSchema");
                if (!t.hasKeyword(e, "if")) return null;
                const a = k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "If");
                return k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--if"}, k().createElement(r, {
                    name: a,
                    schema: e.if
                }))
            }, keywords_Then = ({schema: e}) => {
                const t = useFn(), r = useComponent("JSONSchema");
                if (!t.hasKeyword(e, "then")) return null;
                const a = k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Then");
                return k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--then"}, k().createElement(r, {
                    name: a,
                    schema: e.then
                }))
            }, keywords_Else = ({schema: e}) => {
                const t = useFn(), r = useComponent("JSONSchema");
                if (!t.hasKeyword(e, "else")) return null;
                const a = k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Else");
                return k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--if"}, k().createElement(r, {
                    name: a,
                    schema: e.else
                }))
            }, keywords_DependentSchemas = ({schema: e}) => {
                const t = e?.dependentSchemas || [], r = useIsExpanded(),
                    a = useIsExpandedDeeply(), [n, s] = (0, N.useState)(r || a), [o, l] = (0, N.useState)(!1),
                    c = useComponent("Accordion"), i = useComponent("ExpandDeepButton"), p = useComponent("JSONSchema"),
                    m = (0, N.useCallback)((() => {
                        s((e => !e))
                    }), []), u = (0, N.useCallback)(((e, t) => {
                        s(t), l(t)
                    }), []);
                return "object" != typeof t || 0 === Object.keys(t).length ? null : k().createElement(Ws.Provider, {value: o}, k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--dependentSchemas"}, k().createElement(c, {
                    expanded: n,
                    onChange: m
                }, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Dependent schemas")), k().createElement(i, {
                    expanded: n,
                    onClick: u
                }), k().createElement("strong", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary"}, "object"), k().createElement("ul", {className: Fa()("json-schema-2020-12-keyword__children", {"json-schema-2020-12-keyword__children--collapsed": !n})}, n && k().createElement(k().Fragment, null, Object.entries(t).map((([e, t]) => k().createElement("li", {
                    key: e,
                    className: "json-schema-2020-12-property"
                }, k().createElement(p, {name: e, schema: t}))))))))
            }, keywords_PrefixItems = ({schema: e}) => {
                const t = e?.prefixItems || [], r = useFn(), a = useIsExpanded(),
                    n = useIsExpandedDeeply(), [s, o] = (0, N.useState)(a || n), [l, c] = (0, N.useState)(!1),
                    i = useComponent("Accordion"), p = useComponent("ExpandDeepButton"), m = useComponent("JSONSchema"),
                    u = useComponent("KeywordType"), d = (0, N.useCallback)((() => {
                        o((e => !e))
                    }), []), h = (0, N.useCallback)(((e, t) => {
                        o(t), c(t)
                    }), []);
                return Array.isArray(t) && 0 !== t.length ? k().createElement(Ws.Provider, {value: l}, k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--prefixItems"}, k().createElement(i, {
                    expanded: s,
                    onChange: d
                }, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Prefix items")), k().createElement(p, {
                    expanded: s,
                    onClick: h
                }), k().createElement(u, {schema: {prefixItems: t}}), k().createElement("ul", {className: Fa()("json-schema-2020-12-keyword__children", {"json-schema-2020-12-keyword__children--collapsed": !s})}, s && k().createElement(k().Fragment, null, t.map(((e, t) => k().createElement("li", {
                    key: `#${t}`,
                    className: "json-schema-2020-12-property"
                }, k().createElement(m, {name: `#${t} ${r.getTitle(e)}`, schema: e})))))))) : null
            }, keywords_Items = ({schema: e}) => {
                const t = useFn(), r = useComponent("JSONSchema");
                if (!t.hasKeyword(e, "items")) return null;
                const a = k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Items");
                return k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--items"}, k().createElement(r, {
                    name: a,
                    schema: e.items
                }))
            }, keywords_Contains = ({schema: e}) => {
                const t = useFn(), r = useComponent("JSONSchema");
                if (!t.hasKeyword(e, "contains")) return null;
                const a = k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Contains");
                return k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--contains"}, k().createElement(r, {
                    name: a,
                    schema: e.contains
                }))
            }, keywords_Properties_Properties = ({schema: e}) => {
                const t = useFn(), r = e?.properties || {}, a = Array.isArray(e?.required) ? e.required : [],
                    n = useComponent("JSONSchema");
                return 0 === Object.keys(r).length ? null : k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--properties"}, k().createElement("ul", null, Object.entries(r).map((([r, s]) => {
                    const o = a.includes(r), l = t.getDependentRequired(r, e);
                    return k().createElement("li", {
                        key: r,
                        className: Fa()("json-schema-2020-12-property", {"json-schema-2020-12-property--required": o})
                    }, k().createElement(n, {name: r, schema: s, dependentRequired: l}))
                }))))
            }, PatternProperties_PatternProperties = ({schema: e}) => {
                const t = e?.patternProperties || {}, r = useComponent("JSONSchema");
                return 0 === Object.keys(t).length ? null : k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--patternProperties"}, k().createElement("ul", null, Object.entries(t).map((([e, t]) => k().createElement("li", {
                    key: e,
                    className: "json-schema-2020-12-property"
                }, k().createElement(r, {name: e, schema: t}))))))
            }, keywords_AdditionalProperties = ({schema: e}) => {
                const t = useFn(), {additionalProperties: r} = e, a = useComponent("JSONSchema");
                if (!t.hasKeyword(e, "additionalProperties")) return null;
                const n = k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Additional properties");
                return k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--additionalProperties"}, !0 === r ? k().createElement(k().Fragment, null, n, k().createElement("span", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary"}, "allowed")) : !1 === r ? k().createElement(k().Fragment, null, n, k().createElement("span", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary"}, "forbidden")) : k().createElement(a, {
                    name: n,
                    schema: r
                }))
            }, keywords_PropertyNames = ({schema: e}) => {
                const t = useFn(), {propertyNames: r} = e, a = useComponent("JSONSchema"),
                    n = k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Property names");
                return t.hasKeyword(e, "propertyNames") ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--propertyNames"}, k().createElement(a, {
                    name: n,
                    schema: r
                })) : null
            }, keywords_UnevaluatedItems = ({schema: e}) => {
                const t = useFn(), {unevaluatedItems: r} = e, a = useComponent("JSONSchema");
                if (!t.hasKeyword(e, "unevaluatedItems")) return null;
                const n = k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Unevaluated items");
                return k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--unevaluatedItems"}, k().createElement(a, {
                    name: n,
                    schema: r
                }))
            }, keywords_UnevaluatedProperties = ({schema: e}) => {
                const t = useFn(), {unevaluatedProperties: r} = e, a = useComponent("JSONSchema");
                if (!t.hasKeyword(e, "unevaluatedProperties")) return null;
                const n = k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Unevaluated properties");
                return k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--unevaluatedProperties"}, k().createElement(a, {
                    name: n,
                    schema: r
                }))
            }, keywords_Type = ({schema: e, isCircular: t = !1}) => {
                const r = useFn().getType(e), a = t ? " [circular]" : "";
                return k().createElement("strong", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary"}, `${r}${a}`)
            }, Enum_Enum = ({schema: e}) => {
                const t = useFn();
                return Array.isArray(e?.enum) ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--enum"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Allowed values"), k().createElement("ul", null, e.enum.map((e => {
                    const r = t.stringify(e);
                    return k().createElement("li", {key: r}, k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const"}, r))
                })))) : null
            }, keywords_Const = ({schema: e}) => {
                const t = useFn();
                return t.hasKeyword(e, "const") ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--const"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Const"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const"}, t.stringify(e.const))) : null
            },
            Constraint = ({constraint: e}) => k().createElement("span", {className: `json-schema-2020-12__constraint json-schema-2020-12__constraint--${e.scope}`}, e.value),
            Ys = k().memo(Constraint),
            DependentRequired_DependentRequired = ({dependentRequired: e}) => 0 === e.length ? null : k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--dependentRequired"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Required when defined"), k().createElement("ul", null, e.map((e => k().createElement("li", {key: e}, k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--warning"}, e)))))),
            keywords_ContentSchema = ({schema: e}) => {
                const t = useFn(), r = useComponent("JSONSchema");
                if (!t.hasKeyword(e, "contentSchema")) return null;
                const a = k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Content schema");
                return k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--contentSchema"}, k().createElement(r, {
                    name: a,
                    schema: e.contentSchema
                }))
            }, Title_Title = ({title: e = "", schema: t}) => {
                const r = useFn();
                return e || r.getTitle(t) ? k().createElement("div", {className: "json-schema-2020-12__title"}, e || r.getTitle(t)) : null
            },
            keywords_Description_Description = ({schema: e}) => e?.description ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--description"}, k().createElement("div", {className: "json-schema-2020-12-core-keyword__value json-schema-2020-12-core-keyword__value--secondary"}, e.description)) : null,
            keywords_Default = ({schema: e}) => {
                const t = useFn();
                return t.hasKeyword(e, "default") ? k().createElement("div", {className: "json-schema-2020-12-keyword json-schema-2020-12-keyword--default"}, k().createElement("span", {className: "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary"}, "Default"), k().createElement("span", {className: "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const"}, t.stringify(e.default))) : null
            },
            keywords_Deprecated = ({schema: e}) => !0 !== e?.deprecated ? null : k().createElement("span", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--warning"}, "deprecated"),
            keywords_ReadOnly = ({schema: e}) => !0 !== e?.readOnly ? null : k().createElement("span", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--muted"}, "read-only"),
            keywords_WriteOnly = ({schema: e}) => !0 !== e?.writeOnly ? null : k().createElement("span", {className: "json-schema-2020-12__attribute json-schema-2020-12__attribute--muted"}, "write-only"),
            Accordion_Accordion = ({expanded: e = !1, children: t, onChange: r}) => {
                const a = useComponent("ChevronRightIcon"), n = (0, N.useCallback)((t => {
                    r(t, !e)
                }), [e, r]);
                return k().createElement("button", {
                    type: "button",
                    className: "json-schema-2020-12-accordion",
                    onClick: n
                }, k().createElement("div", {className: "json-schema-2020-12-accordion__children"}, t), k().createElement("span", {
                    className: Fa()("json-schema-2020-12-accordion__icon", {
                        "json-schema-2020-12-accordion__icon--expanded": e,
                        "json-schema-2020-12-accordion__icon--collapsed": !e
                    })
                }, k().createElement(a, null)))
            }, ExpandDeepButton_ExpandDeepButton = ({expanded: e, onClick: t}) => {
                const r = (0, N.useCallback)((r => {
                    t(r, !e)
                }), [e, t]);
                return k().createElement("button", {
                    type: "button",
                    className: "json-schema-2020-12-expand-deep-button",
                    onClick: r
                }, e ? "Collapse all" : "Expand all")
            }, icons_ChevronRight = () => k().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, k().createElement("path", {d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),
            fn_upperFirst = e => "string" == typeof e ? `${e.charAt(0).toUpperCase()}${e.slice(1)}` : e,
            getTitle = e => {
                const t = useFn();
                return e?.title ? t.upperFirst(e.title) : e?.$anchor ? t.upperFirst(e.$anchor) : e?.$id ? e.$id : ""
            }, getType = (e, t = new WeakSet) => {
                const r = useFn();
                if (null == e) return "any";
                if (r.isBooleanJSONSchema(e)) return e ? "any" : "never";
                if ("object" != typeof e) return "any";
                if (t.has(e)) return "any";
                t.add(e);
                const {type: a, prefixItems: n, items: s} = e, getArrayType = () => {
                    if (Array.isArray(n)) {
                        const e = n.map((e => getType(e, t))), r = s ? getType(s, t) : "any";
                        return `array<[${e.join(", ")}], ${r}>`
                    }
                    if (s) {
                        return `array<${getType(s, t)}>`
                    }
                    return "array<any>"
                };
                if (e.not && "any" === getType(e.not)) return "never";
                const handleCombiningKeywords = (r, a) => {
                        if (Array.isArray(e[r])) {
                            return `(${e[r].map((e => getType(e, t))).join(a)})`
                        }
                        return null
                    },
                    o = [Array.isArray(a) ? a.map((e => "array" === e ? getArrayType() : e)).join(" | ") : "array" === a ? getArrayType() : ["null", "boolean", "object", "array", "number", "integer", "string"].includes(a) ? a : (() => {
                        if (Object.hasOwn(e, "prefixItems") || Object.hasOwn(e, "items") || Object.hasOwn(e, "contains")) return getArrayType();
                        if (Object.hasOwn(e, "properties") || Object.hasOwn(e, "additionalProperties") || Object.hasOwn(e, "patternProperties")) return "object";
                        if (["int32", "int64"].includes(e.format)) return "integer";
                        if (["float", "double"].includes(e.format)) return "number";
                        if (Object.hasOwn(e, "minimum") || Object.hasOwn(e, "maximum") || Object.hasOwn(e, "exclusiveMinimum") || Object.hasOwn(e, "exclusiveMaximum") || Object.hasOwn(e, "multipleOf")) return "number | integer";
                        if (Object.hasOwn(e, "pattern") || Object.hasOwn(e, "format") || Object.hasOwn(e, "minLength") || Object.hasOwn(e, "maxLength")) return "string";
                        if (void 0 !== e.const) {
                            if (null === e.const) return "null";
                            if ("boolean" == typeof e.const) return "boolean";
                            if ("number" == typeof e.const) return Number.isInteger(e.const) ? "integer" : "number";
                            if ("string" == typeof e.const) return "string";
                            if (Array.isArray(e.const)) return "array<any>";
                            if ("object" == typeof e.const) return "object"
                        }
                        return null
                    })(), handleCombiningKeywords("oneOf", " | "), handleCombiningKeywords("anyOf", " | "), handleCombiningKeywords("allOf", " & ")].filter(Boolean).join(" | ");
                return t.delete(e), o || "any"
            }, isBooleanJSONSchema = e => "boolean" == typeof e,
            hasKeyword = (e, t) => null !== e && "object" == typeof e && Object.hasOwn(e, t), isExpandable = e => {
                const t = useFn();
                return e?.$schema || e?.$vocabulary || e?.$id || e?.$anchor || e?.$dynamicAnchor || e?.$ref || e?.$dynamicRef || e?.$defs || e?.$comment || e?.allOf || e?.anyOf || e?.oneOf || t.hasKeyword(e, "not") || t.hasKeyword(e, "if") || t.hasKeyword(e, "then") || t.hasKeyword(e, "else") || e?.dependentSchemas || e?.prefixItems || t.hasKeyword(e, "items") || t.hasKeyword(e, "contains") || e?.properties || e?.patternProperties || t.hasKeyword(e, "additionalProperties") || t.hasKeyword(e, "propertyNames") || t.hasKeyword(e, "unevaluatedItems") || t.hasKeyword(e, "unevaluatedProperties") || e?.description || e?.enum || t.hasKeyword(e, "const") || t.hasKeyword(e, "contentSchema") || t.hasKeyword(e, "default")
            },
            fn_stringify = e => null === e || ["number", "bigint", "boolean"].includes(typeof e) ? String(e) : Array.isArray(e) ? `[${e.map(fn_stringify).join(", ")}]` : JSON.stringify(e),
            stringifyConstraintRange = (e, t, r) => {
                const a = "number" == typeof t, n = "number" == typeof r;
                return a && n ? t === r ? `${t} ${e}` : `[${t}, ${r}] ${e}` : a ? `>= ${t} ${e}` : n ? `<= ${r} ${e}` : null
            }, stringifyConstraints = e => {
                const t = [], r = (e => {
                    if ("number" != typeof e?.multipleOf) return null;
                    if (e.multipleOf <= 0) return null;
                    if (1 === e.multipleOf) return null;
                    const {multipleOf: t} = e;
                    if (Number.isInteger(t)) return `multiple of ${t}`;
                    const r = 10 ** t.toString().split(".")[1].length;
                    return `multiple of ${t * r}/${r}`
                })(e);
                null !== r && t.push({scope: "number", value: r});
                const a = (e => {
                    const t = e?.minimum, r = e?.maximum, a = e?.exclusiveMinimum, n = e?.exclusiveMaximum,
                        s = "number" == typeof t, o = "number" == typeof r, l = "number" == typeof a,
                        c = "number" == typeof n, i = l && (!s || t < a), p = c && (!o || r > n);
                    if ((s || l) && (o || c)) return `${i ? "(" : "["}${i ? a : t}, ${p ? n : r}${p ? ")" : "]"}`;
                    if (s || l) return `${i ? ">" : "≥"} ${i ? a : t}`;
                    if (o || c) return `${p ? "<" : "≤"} ${p ? n : r}`;
                    return null
                })(e);
                null !== a && t.push({scope: "number", value: a}), e?.format && t.push({scope: "string", value: e.format});
                const n = stringifyConstraintRange("characters", e?.minLength, e?.maxLength);
                null !== n && t.push({scope: "string", value: n}), e?.pattern && t.push({
                    scope: "string",
                    value: `matches ${e?.pattern}`
                }), e?.contentMediaType && t.push({
                    scope: "string",
                    value: `media type: ${e.contentMediaType}`
                }), e?.contentEncoding && t.push({scope: "string", value: `encoding: ${e.contentEncoding}`});
                const s = stringifyConstraintRange(e?.hasUniqueItems ? "unique items" : "items", e?.minItems, e?.maxItems);
                null !== s && t.push({scope: "array", value: s});
                const o = stringifyConstraintRange("contained items", e?.minContains, e?.maxContains);
                null !== o && t.push({scope: "array", value: o});
                const l = stringifyConstraintRange("properties", e?.minProperties, e?.maxProperties);
                return null !== l && t.push({scope: "object", value: l}), t
            },
            getDependentRequired = (e, t) => t?.dependentRequired ? Array.from(Object.entries(t.dependentRequired).reduce(((t, [r, a]) => Array.isArray(a) && a.includes(e) ? (t.add(r), t) : t), new Set)) : [],
            withJSONSchemaContext = (e, t = {}) => {
                const r = {
                    components: {
                        JSONSchema: Gs,
                        Keyword$schema: keywords_$schema,
                        Keyword$vocabulary: $vocabulary_$vocabulary,
                        Keyword$id: keywords_$id,
                        Keyword$anchor: keywords_$anchor,
                        Keyword$dynamicAnchor: keywords_$dynamicAnchor,
                        Keyword$ref: keywords_$ref,
                        Keyword$dynamicRef: keywords_$dynamicRef,
                        Keyword$defs: keywords_$defs,
                        Keyword$comment: keywords_$comment,
                        KeywordAllOf: keywords_AllOf,
                        KeywordAnyOf: keywords_AnyOf,
                        KeywordOneOf: keywords_OneOf,
                        KeywordNot: keywords_Not,
                        KeywordIf: keywords_If,
                        KeywordThen: keywords_Then,
                        KeywordElse: keywords_Else,
                        KeywordDependentSchemas: keywords_DependentSchemas,
                        KeywordPrefixItems: keywords_PrefixItems,
                        KeywordItems: keywords_Items,
                        KeywordContains: keywords_Contains,
                        KeywordProperties: keywords_Properties_Properties,
                        KeywordPatternProperties: PatternProperties_PatternProperties,
                        KeywordAdditionalProperties: keywords_AdditionalProperties,
                        KeywordPropertyNames: keywords_PropertyNames,
                        KeywordUnevaluatedItems: keywords_UnevaluatedItems,
                        KeywordUnevaluatedProperties: keywords_UnevaluatedProperties,
                        KeywordType: keywords_Type,
                        KeywordEnum: Enum_Enum,
                        KeywordConst: keywords_Const,
                        KeywordConstraint: Ys,
                        KeywordDependentRequired: DependentRequired_DependentRequired,
                        KeywordContentSchema: keywords_ContentSchema,
                        KeywordTitle: Title_Title,
                        KeywordDescription: keywords_Description_Description,
                        KeywordDefault: keywords_Default,
                        KeywordDeprecated: keywords_Deprecated,
                        KeywordReadOnly: keywords_ReadOnly,
                        KeywordWriteOnly: keywords_WriteOnly,
                        Accordion: Accordion_Accordion,
                        ExpandDeepButton: ExpandDeepButton_ExpandDeepButton,
                        ChevronRightIcon: icons_ChevronRight, ...t.components
                    },
                    config: {
                        default$schema: "https://json-schema.org/draft/2020-12/schema",
                        defaultExpandedLevels: 0, ...t.config
                    },
                    fn: {
                        upperFirst: fn_upperFirst,
                        getTitle,
                        getType,
                        isBooleanJSONSchema,
                        hasKeyword,
                        isExpandable,
                        stringify: fn_stringify,
                        stringifyConstraints,
                        getDependentRequired, ...t.fn
                    }
                }, HOC = t => k().createElement(Bs.Provider, {value: r}, k().createElement(e, t));
                return HOC.contexts = {JSONSchemaContext: Bs}, HOC.displayName = e.displayName, HOC
            }, json_schema_2020_12 = () => ({
                components: {
                    JSONSchema202012: Gs,
                    JSONSchema202012Keyword$schema: keywords_$schema,
                    JSONSchema202012Keyword$vocabulary: $vocabulary_$vocabulary,
                    JSONSchema202012Keyword$id: keywords_$id,
                    JSONSchema202012Keyword$anchor: keywords_$anchor,
                    JSONSchema202012Keyword$dynamicAnchor: keywords_$dynamicAnchor,
                    JSONSchema202012Keyword$ref: keywords_$ref,
                    JSONSchema202012Keyword$dynamicRef: keywords_$dynamicRef,
                    JSONSchema202012Keyword$defs: keywords_$defs,
                    JSONSchema202012Keyword$comment: keywords_$comment,
                    JSONSchema202012KeywordAllOf: keywords_AllOf,
                    JSONSchema202012KeywordAnyOf: keywords_AnyOf,
                    JSONSchema202012KeywordOneOf: keywords_OneOf,
                    JSONSchema202012KeywordNot: keywords_Not,
                    JSONSchema202012KeywordIf: keywords_If,
                    JSONSchema202012KeywordThen: keywords_Then,
                    JSONSchema202012KeywordElse: keywords_Else,
                    JSONSchema202012KeywordDependentSchemas: keywords_DependentSchemas,
                    JSONSchema202012KeywordPrefixItems: keywords_PrefixItems,
                    JSONSchema202012KeywordItems: keywords_Items,
                    JSONSchema202012KeywordContains: keywords_Contains,
                    JSONSchema202012KeywordProperties: keywords_Properties_Properties,
                    JSONSchema202012KeywordPatternProperties: PatternProperties_PatternProperties,
                    JSONSchema202012KeywordAdditionalProperties: keywords_AdditionalProperties,
                    JSONSchema202012KeywordPropertyNames: keywords_PropertyNames,
                    JSONSchema202012KeywordUnevaluatedItems: keywords_UnevaluatedItems,
                    JSONSchema202012KeywordUnevaluatedProperties: keywords_UnevaluatedProperties,
                    JSONSchema202012KeywordType: keywords_Type,
                    JSONSchema202012KeywordEnum: Enum_Enum,
                    JSONSchema202012KeywordConst: keywords_Const,
                    JSONSchema202012KeywordConstraint: Ys,
                    JSONSchema202012KeywordDependentRequired: DependentRequired_DependentRequired,
                    JSONSchema202012KeywordContentSchema: keywords_ContentSchema,
                    JSONSchema202012KeywordTitle: Title_Title,
                    JSONSchema202012KeywordDescription: keywords_Description_Description,
                    JSONSchema202012KeywordDefault: keywords_Default,
                    JSONSchema202012KeywordDeprecated: keywords_Deprecated,
                    JSONSchema202012KeywordReadOnly: keywords_ReadOnly,
                    JSONSchema202012KeywordWriteOnly: keywords_WriteOnly,
                    JSONSchema202012Accordion: Accordion_Accordion,
                    JSONSchema202012ExpandDeepButton: ExpandDeepButton_ExpandDeepButton,
                    JSONSchema202012ChevronRightIcon: icons_ChevronRight,
                    withJSONSchema202012Context: withJSONSchemaContext,
                    JSONSchema202012DeepExpansionContext: () => Ws
                },
                fn: {
                    upperFirst: fn_upperFirst,
                    jsonSchema202012: {isExpandable, hasKeyword, useFn, useConfig, useComponent, useIsExpandedDeeply}
                }
            }), Qs = require("lodash/isPlainObject");
        var Zs = __webpack_require__.n(Qs);
        const array = (e, {sample: t}) => ((e, t = {}) => {
                const {minItems: r, maxItems: a, uniqueItems: n} = t, {contains: s, minContains: o, maxContains: l} = t;
                let c = [...e];
                if (null != s && "object" == typeof s) {
                    if (Number.isInteger(o) && o > 1) {
                        const e = c.at(0);
                        for (let t = 1; t < o; t += 1) c.unshift(e)
                    }
                    Number.isInteger(l)
                }
                if (Number.isInteger(a) && a > 0 && (c = e.slice(0, a)), Number.isInteger(r) && r > 0) for (let e = 0; c.length < r; e += 1) c.push(c[e % c.length]);
                return !0 === n && (c = Array.from(new Set(c))), c
            })(t, e), object = () => {
                throw new Error("Not implemented")
            }, bytes = e => ne()(e), pick = e => e.at(0), predicates_isBooleanJSONSchema = e => "boolean" == typeof e,
            isJSONSchemaObject = e => Zs()(e),
            isJSONSchema = e => predicates_isBooleanJSONSchema(e) || isJSONSchemaObject(e),
            email = () => "user@example.com", idn_email = () => "실례@example.com", hostname = () => "example.com",
            idn_hostname = () => "실례.com", ipv4 = () => "198.51.100.42",
            ipv6 = () => "2001:0db8:5b96:0000:0000:426f:8e17:642a", uri = () => "https://example.com/",
            uri_reference = () => "path/index.html", iri = () => "https://실례.com/",
            iri_reference = () => "path/실례.html", uuid = () => "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            uri_template = () => "https://example.com/dictionary/{term:1}/{term}", json_pointer = () => "/a/b/c",
            relative_json_pointer = () => "1/0", date_time = () => (new Date).toISOString(),
            date = () => (new Date).toISOString().substring(0, 10), time = () => (new Date).toISOString().substring(11),
            duration = () => "P3D", generators_password = () => "********", regex = () => "^[a-z]+$";
        const eo = class Registry {
                data = {};

                register(e, t) {
                    this.data[e] = t
                }

                unregister(e) {
                    void 0 === e ? this.data = {} : delete this.data[e]
                }

                get(e) {
                    return this.data[e]
                }
            }, to = new eo,
            api_formatAPI = (e, t) => "function" == typeof t ? to.register(e, t) : null === t ? to.unregister(e) : to.get(e);
        var ro = __webpack_require__(158).Buffer;
        const _7bit = e => ro.from(e).toString("ascii");
        var ao = __webpack_require__(158).Buffer;
        const _8bit = e => ao.from(e).toString("utf8");
        var no = __webpack_require__(158).Buffer;
        const binary = e => no.from(e).toString("binary"), quoted_printable = e => {
            let t = "";
            for (let r = 0; r < e.length; r++) {
                const a = e.charCodeAt(r);
                if (61 === a) t += "=3D"; else if (a >= 33 && a <= 60 || a >= 62 && a <= 126 || 9 === a || 32 === a) t += e.charAt(r); else if (13 === a || 10 === a) t += "\r\n"; else if (a > 126) {
                    const a = unescape(encodeURIComponent(e.charAt(r)));
                    for (let e = 0; e < a.length; e++) t += "=" + ("0" + a.charCodeAt(e).toString(16)).slice(-2).toUpperCase()
                } else t += "=" + ("0" + a.toString(16)).slice(-2).toUpperCase()
            }
            return t
        };
        var so = __webpack_require__(158).Buffer;
        const base16 = e => so.from(e).toString("hex");
        var oo = __webpack_require__(158).Buffer;
        const base32 = e => {
            const t = oo.from(e).toString("utf8"), r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
            let a = 0, n = "", s = 0, o = 0;
            for (let e = 0; e < t.length; e++) for (s = s << 8 | t.charCodeAt(e), o += 8; o >= 5;) n += r.charAt(s >>> o - 5 & 31), o -= 5;
            o > 0 && (n += r.charAt(s << 5 - o & 31), a = (8 - 8 * t.length % 5) % 5);
            for (let e = 0; e < a; e++) n += "=";
            return n
        };
        var lo = __webpack_require__(158).Buffer;
        const base64 = e => lo.from(e).toString("base64");
        var co = __webpack_require__(158).Buffer;
        const base64url = e => co.from(e).toString("base64url");
        const io = new class EncoderRegistry extends eo {
                #e = {
                    "7bit": _7bit,
                    "8bit": _8bit,
                    binary,
                    "quoted-printable": quoted_printable,
                    base16,
                    base32,
                    base64,
                    base64url
                };
                data = {...this.#e};

                get defaults() {
                    return {...this.#e}
                }
            },
            encoderAPI = (e, t) => "function" == typeof t ? io.register(e, t) : null === t ? io.unregister(e) : io.get(e);
        encoderAPI.getDefaults = () => io.defaults;
        const po = encoderAPI, mo = {
                "text/plain": () => "string",
                "text/css": () => ".selector { border: 1px solid red }",
                "text/csv": () => "value1,value2,value3",
                "text/html": () => "<p>content</p>",
                "text/calendar": () => "BEGIN:VCALENDAR",
                "text/javascript": () => "console.dir('Hello world!');",
                "text/xml": () => '<person age="30">John Doe</person>',
                "text/*": () => "string"
            }, uo = {"image/*": () => bytes(25).toString("binary")}, ho = {"audio/*": () => bytes(25).toString("binary")},
            go = {"video/*": () => bytes(25).toString("binary")}, yo = {
                "application/json": () => '{"key":"value"}',
                "application/ld+json": () => '{"name": "John Doe"}',
                "application/x-httpd-php": () => "<?php echo '<p>Hello World!</p>'; ?>",
                "application/rtf": () => String.raw`{\rtf1\adeflang1025\ansi\ansicpg1252\uc1`,
                "application/x-sh": () => 'echo "Hello World!"',
                "application/xhtml+xml": () => "<p>content</p>",
                "application/*": () => bytes(25).toString("binary")
            };
        const fo = new class MediaTypeRegistry extends eo {
            #e = {...mo, ...uo, ...ho, ...go, ...yo};
            data = {...this.#e};

            get defaults() {
                return {...this.#e}
            }
        }, mediaTypeAPI = (e, t) => {
            if ("function" == typeof t) return fo.register(e, t);
            if (null === t) return fo.unregister(e);
            const r = e.split(";").at(0), a = `${r.split("/").at(0)}/*`;
            return fo.get(e) || fo.get(r) || fo.get(a)
        };
        mediaTypeAPI.getDefaults = () => fo.defaults;
        const So = mediaTypeAPI, types_string = (e, {sample: t} = {}) => {
                const {contentEncoding: r, contentMediaType: a, contentSchema: n} = e, {pattern: s, format: o} = e,
                    l = po(r) || Ta();
                let c;
                if ("string" == typeof s) c = (e => {
                    try {
                        return new (Yt())(e).gen()
                    } catch {
                        return "string"
                    }
                })(s); else if ("string" == typeof o) c = (e => {
                    const {format: t} = e, r = api_formatAPI(t);
                    if ("function" == typeof r) return r(e);
                    switch (t) {
                        case"email":
                            return email();
                        case"idn-email":
                            return idn_email();
                        case"hostname":
                            return hostname();
                        case"idn-hostname":
                            return idn_hostname();
                        case"ipv4":
                            return ipv4();
                        case"ipv6":
                            return ipv6();
                        case"uri":
                            return uri();
                        case"uri-reference":
                            return uri_reference();
                        case"iri":
                            return iri();
                        case"iri-reference":
                            return iri_reference();
                        case"uuid":
                            return uuid();
                        case"uri-template":
                            return uri_template();
                        case"json-pointer":
                            return json_pointer();
                        case"relative-json-pointer":
                            return relative_json_pointer();
                        case"date-time":
                            return date_time();
                        case"date":
                            return date();
                        case"time":
                            return time();
                        case"duration":
                            return duration();
                        case"password":
                            return generators_password();
                        case"regex":
                            return regex()
                    }
                    return "string"
                })(e); else if (isJSONSchema(n) && "string" == typeof a && void 0 !== t) c = Array.isArray(t) || "object" == typeof t ? JSON.stringify(t) : String(t); else if ("string" == typeof a) {
                    const t = So(a);
                    "function" == typeof t && (c = t(e))
                } else c = "string";
                return l(((e, t = {}) => {
                    const {maxLength: r, minLength: a} = t;
                    let n = e;
                    if (Number.isInteger(r) && r > 0 && (n = n.slice(0, r)), Number.isInteger(a) && a > 0) {
                        let e = 0;
                        for (; n.length < a;) n += n[e++ % n.length]
                    }
                    return n
                })(c, e))
            }, generators_float = () => .1, generators_double = () => .1, types_number = e => {
                const {format: t} = e;
                let r;
                return r = "string" == typeof t ? (e => {
                    const {format: t} = e, r = api_formatAPI(t);
                    if ("function" == typeof r) return r(e);
                    switch (t) {
                        case"float":
                            return generators_float();
                        case"double":
                            return generators_double()
                    }
                    return 0
                })(e) : 0, ((e, t = {}) => {
                    const {minimum: r, maximum: a, exclusiveMinimum: n, exclusiveMaximum: s} = t, {multipleOf: o} = t,
                        l = Number.isInteger(e) ? 1 : Number.EPSILON;
                    let c = "number" == typeof r ? r : null, i = "number" == typeof a ? a : null, p = e;
                    if ("number" == typeof n && (c = null !== c ? Math.max(c, n + l) : n + l), "number" == typeof s && (i = null !== i ? Math.min(i, s - l) : s - l), p = c > i && e || c || i || p, "number" == typeof o && o > 0) {
                        const e = p % o;
                        p = 0 === e ? p : p + o - e
                    }
                    return p
                })(r, e)
            }, int32 = () => 2 ** 30 >>> 0, int64 = () => 2 ** 53 - 1, types_integer = e => {
                const {format: t} = e;
                return "string" == typeof t ? (e => {
                    const {format: t} = e, r = api_formatAPI(t);
                    if ("function" == typeof r) return r(e);
                    switch (t) {
                        case"int32":
                            return int32();
                        case"int64":
                            return int64()
                    }
                    return 0
                })(e) : 0
            }, types_boolean = e => "boolean" != typeof e.default || e.default, Eo = new Proxy({
                array,
                object,
                string: types_string,
                number: types_number,
                integer: types_integer,
                boolean: types_boolean,
                null: () => null
            }, {get: (e, t) => "string" == typeof t && Object.hasOwn(e, t) ? e[t] : () => `Unknown Type: ${t}`}),
            _o = ["array", "object", "number", "integer", "string", "boolean", "null"], hasExample = e => {
                if (!isJSONSchemaObject(e)) return !1;
                const {examples: t, example: r, default: a} = e;
                return !!(Array.isArray(t) && t.length >= 1) || (void 0 !== a || void 0 !== r)
            }, extractExample = e => {
                if (!isJSONSchemaObject(e)) return null;
                const {examples: t, example: r, default: a} = e;
                return Array.isArray(t) && t.length >= 1 ? t.at(0) : void 0 !== a ? a : void 0 !== r ? r : void 0
            }, vo = {
                array: ["items", "prefixItems", "contains", "maxContains", "minContains", "maxItems", "minItems", "uniqueItems", "unevaluatedItems"],
                object: ["properties", "additionalProperties", "patternProperties", "propertyNames", "minProperties", "maxProperties", "required", "dependentSchemas", "dependentRequired", "unevaluatedProperties"],
                string: ["pattern", "format", "minLength", "maxLength", "contentEncoding", "contentMediaType", "contentSchema"],
                integer: ["minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf"]
            };
        vo.number = vo.integer;
        const wo = "string",
            inferTypeFromValue = e => void 0 === e ? null : null === e ? "null" : Array.isArray(e) ? "array" : Number.isInteger(e) ? "integer" : typeof e,
            foldType = e => {
                if (Array.isArray(e) && e.length >= 1) {
                    if (e.includes("array")) return "array";
                    if (e.includes("object")) return "object";
                    {
                        const t = pick(e);
                        if (_o.includes(t)) return t
                    }
                }
                return _o.includes(e) ? e : null
            }, inferType = (e, t = new WeakSet) => {
                if (!isJSONSchemaObject(e)) return wo;
                if (t.has(e)) return wo;
                t.add(e);
                let {type: r, const: a} = e;
                if (r = foldType(r), "string" != typeof r) {
                    const t = Object.keys(vo);
                    e:for (let a = 0; a < t.length; a += 1) {
                        const n = t[a], s = vo[n];
                        for (let t = 0; t < s.length; t += 1) {
                            const a = s[t];
                            if (Object.hasOwn(e, a)) {
                                r = n;
                                break e
                            }
                        }
                    }
                }
                if ("string" != typeof r && void 0 !== a) {
                    const e = inferTypeFromValue(a);
                    r = "string" == typeof e ? e : r
                }
                if ("string" != typeof r) {
                    const combineTypes = r => {
                            if (Array.isArray(e[r])) {
                                const a = e[r].map((e => inferType(e, t)));
                                return foldType(a)
                            }
                            return null
                        }, a = combineTypes("allOf"), n = combineTypes("anyOf"), s = combineTypes("oneOf"),
                        o = e.not ? inferType(e.not, t) : null;
                    (a || n || s || o) && (r = foldType([a, n, s, o].filter(Boolean)))
                }
                if ("string" != typeof r && hasExample(e)) {
                    const t = extractExample(e), a = inferTypeFromValue(t);
                    r = "string" == typeof a ? a : r
                }
                return t.delete(e), r || wo
            }, type_getType = e => inferType(e),
            typeCast = e => predicates_isBooleanJSONSchema(e) ? (e => !1 === e ? {not: {}} : {})(e) : isJSONSchemaObject(e) ? e : {},
            merge = (e, t, r = {}) => {
                if (predicates_isBooleanJSONSchema(e) && !0 === e) return !0;
                if (predicates_isBooleanJSONSchema(e) && !1 === e) return !1;
                if (predicates_isBooleanJSONSchema(t) && !0 === t) return !0;
                if (predicates_isBooleanJSONSchema(t) && !1 === t) return !1;
                if (!isJSONSchema(e)) return t;
                if (!isJSONSchema(t)) return e;
                const a = {...t, ...e};
                if (t.type && e.type && Array.isArray(t.type) && "string" == typeof t.type) {
                    const r = normalizeArray(t.type).concat(e.type);
                    a.type = Array.from(new Set(r))
                }
                if (Array.isArray(t.required) && Array.isArray(e.required) && (a.required = [...new Set([...e.required, ...t.required])]), t.properties && e.properties) {
                    const n = new Set([...Object.keys(t.properties), ...Object.keys(e.properties)]);
                    a.properties = {};
                    for (const s of n) {
                        const n = t.properties[s] || {}, o = e.properties[s] || {};
                        n.readOnly && !r.includeReadOnly || n.writeOnly && !r.includeWriteOnly ? a.required = (a.required || []).filter((e => e !== s)) : a.properties[s] = merge(o, n, r)
                    }
                }
                return isJSONSchema(t.items) && isJSONSchema(e.items) && (a.items = merge(e.items, t.items, r)), isJSONSchema(t.contains) && isJSONSchema(e.contains) && (a.contains = merge(e.contains, t.contains, r)), isJSONSchema(t.contentSchema) && isJSONSchema(e.contentSchema) && (a.contentSchema = merge(e.contentSchema, t.contentSchema, r)), a
            }, bo = merge, main_sampleFromSchemaGeneric = (e, t = {}, r = void 0, a = !1) => {
                "function" == typeof e?.toJS && (e = e.toJS()), e = typeCast(e);
                let n = void 0 !== r || hasExample(e);
                const s = !n && Array.isArray(e.oneOf) && e.oneOf.length > 0,
                    o = !n && Array.isArray(e.anyOf) && e.anyOf.length > 0;
                if (!n && (s || o)) {
                    const r = typeCast(pick(s ? e.oneOf : e.anyOf));
                    !(e = bo(e, r, t)).xml && r.xml && (e.xml = r.xml), hasExample(e) && hasExample(r) && (n = !0)
                }
                const l = {};
                let {xml: c, properties: i, additionalProperties: p, items: m, contains: u} = e || {},
                    d = type_getType(e), {includeReadOnly: h, includeWriteOnly: g} = t;
                c = c || {};
                let y, {name: f, prefix: S, namespace: E} = c, _ = {};
                if (Object.hasOwn(e, "type") || (e.type = d), a && (f = f || "notagname", y = (S ? `${S}:` : "") + f, E)) {
                    l[S ? `xmlns:${S}` : "xmlns"] = E
                }
                a && (_[y] = []);
                const v = objectify(i);
                let w, b = 0;
                const hasExceededMaxProperties = () => Number.isInteger(e.maxProperties) && e.maxProperties > 0 && b >= e.maxProperties,
                    canAddProperty = t => !(Number.isInteger(e.maxProperties) && e.maxProperties > 0) || !hasExceededMaxProperties() && (!(t => !Array.isArray(e.required) || 0 === e.required.length || !e.required.includes(t))(t) || e.maxProperties - b - (() => {
                        if (!Array.isArray(e.required) || 0 === e.required.length) return 0;
                        let t = 0;
                        return a ? e.required.forEach((e => t += void 0 === _[e] ? 0 : 1)) : e.required.forEach((e => {
                            t += void 0 === _[y]?.find((t => void 0 !== t[e])) ? 0 : 1
                        })), e.required.length - t
                    })() > 0);
                if (w = a ? (r, n = void 0) => {
                    if (e && v[r]) {
                        if (v[r].xml = v[r].xml || {}, v[r].xml.attribute) {
                            const e = Array.isArray(v[r].enum) ? pick(v[r].enum) : void 0;
                            if (hasExample(v[r])) l[v[r].xml.name || r] = extractExample(v[r]); else if (void 0 !== e) l[v[r].xml.name || r] = e; else {
                                const e = typeCast(v[r]), t = type_getType(e), a = v[r].xml.name || r;
                                l[a] = Eo[t](e)
                            }
                            return
                        }
                        v[r].xml.name = v[r].xml.name || r
                    } else v[r] || !1 === p || (v[r] = {xml: {name: r}});
                    let s = main_sampleFromSchemaGeneric(v[r], t, n, a);
                    canAddProperty(r) && (b++, Array.isArray(s) ? _[y] = _[y].concat(s) : _[y].push(s))
                } : (r, n) => {
                    if (canAddProperty(r)) {
                        if (Zs()(e.discriminator?.mapping) && e.discriminator.propertyName === r && "string" == typeof e.$$ref) {
                            for (const t in e.discriminator.mapping) if (-1 !== e.$$ref.search(e.discriminator.mapping[t])) {
                                _[r] = t;
                                break
                            }
                        } else _[r] = main_sampleFromSchemaGeneric(v[r], t, n, a);
                        b++
                    }
                }, n) {
                    let n;
                    if (n = void 0 !== r ? r : extractExample(e), !a) {
                        if ("number" == typeof n && "string" === d) return `${n}`;
                        if ("string" != typeof n || "string" === d) return n;
                        try {
                            return JSON.parse(n)
                        } catch {
                            return n
                        }
                    }
                    if ("array" === d) {
                        if (!Array.isArray(n)) {
                            if ("string" == typeof n) return n;
                            n = [n]
                        }
                        let r = [];
                        return isJSONSchemaObject(m) && (m.xml = m.xml || c || {}, m.xml.name = m.xml.name || c.name, r = n.map((e => main_sampleFromSchemaGeneric(m, t, e, a)))), isJSONSchemaObject(u) && (u.xml = u.xml || c || {}, u.xml.name = u.xml.name || c.name, r = [main_sampleFromSchemaGeneric(u, t, void 0, a), ...r]), r = Eo.array(e, {sample: r}), c.wrapped ? (_[y] = r, Zt()(l) || _[y].push({_attr: l})) : _ = r, _
                    }
                    if ("object" === d) {
                        if ("string" == typeof n) return n;
                        for (const e in n) Object.hasOwn(n, e) && (v[e]?.readOnly && !h || v[e]?.writeOnly && !g || (v[e]?.xml?.attribute ? l[v[e].xml.name || e] = n[e] : w(e, n[e])));
                        return Zt()(l) || _[y].push({_attr: l}), _
                    }
                    return _[y] = Zt()(l) ? n : [{_attr: l}, n], _
                }
                if ("array" === d) {
                    let r = [];
                    if (isJSONSchemaObject(u)) if (a && (u.xml = u.xml || e.xml || {}, u.xml.name = u.xml.name || c.name), Array.isArray(u.anyOf)) r.push(...u.anyOf.map((e => main_sampleFromSchemaGeneric(bo(e, u, t), t, void 0, a)))); else if (Array.isArray(u.oneOf)) r.push(...u.oneOf.map((e => main_sampleFromSchemaGeneric(bo(e, u, t), t, void 0, a)))); else {
                        if (!(!a || a && c.wrapped)) return main_sampleFromSchemaGeneric(u, t, void 0, a);
                        r.push(main_sampleFromSchemaGeneric(u, t, void 0, a))
                    }
                    if (isJSONSchemaObject(m)) if (a && (m.xml = m.xml || e.xml || {}, m.xml.name = m.xml.name || c.name), Array.isArray(m.anyOf)) r.push(...m.anyOf.map((e => main_sampleFromSchemaGeneric(bo(e, m, t), t, void 0, a)))); else if (Array.isArray(m.oneOf)) r.push(...m.oneOf.map((e => main_sampleFromSchemaGeneric(bo(e, m, t), t, void 0, a)))); else {
                        if (!(!a || a && c.wrapped)) return main_sampleFromSchemaGeneric(m, t, void 0, a);
                        r.push(main_sampleFromSchemaGeneric(m, t, void 0, a))
                    }
                    return r = Eo.array(e, {sample: r}), a && c.wrapped ? (_[y] = r, Zt()(l) || _[y].push({_attr: l}), _) : r
                }
                if ("object" === d) {
                    for (let e in v) Object.hasOwn(v, e) && (v[e]?.deprecated || v[e]?.readOnly && !h || v[e]?.writeOnly && !g || w(e));
                    if (a && l && _[y].push({_attr: l}), hasExceededMaxProperties()) return _;
                    if (predicates_isBooleanJSONSchema(p) && p) a ? _[y].push({additionalProp: "Anything can be here"}) : _.additionalProp1 = {}, b++; else if (isJSONSchemaObject(p)) {
                        const r = p, n = main_sampleFromSchemaGeneric(r, t, void 0, a);
                        if (a && "string" == typeof r?.xml?.name && "notagname" !== r?.xml?.name) _[y].push(n); else {
                            const t = Number.isInteger(e.minProperties) && e.minProperties > 0 && b < e.minProperties ? e.minProperties - b : 3;
                            for (let e = 1; e <= t; e++) {
                                if (hasExceededMaxProperties()) return _;
                                if (a) {
                                    const t = {};
                                    t["additionalProp" + e] = n.notagname, _[y].push(t)
                                } else _["additionalProp" + e] = n;
                                b++
                            }
                        }
                    }
                    return _
                }
                let C;
                if (void 0 !== e.const) C = e.const; else if (e && Array.isArray(e.enum)) C = pick(normalizeArray(e.enum)); else {
                    const r = isJSONSchemaObject(e.contentSchema) ? main_sampleFromSchemaGeneric(e.contentSchema, t, void 0, a) : void 0;
                    C = Eo[d](e, {sample: r})
                }
                return a ? (_[y] = Zt()(l) ? C : [{_attr: l}, C], _) : C
            }, main_createXMLExample = (e, t, r) => {
                const a = main_sampleFromSchemaGeneric(e, t, r, !0);
                if (a) return "string" == typeof a ? a : Xt()(a, {declaration: !0, indent: "\t"})
            }, main_sampleFromSchema = (e, t, r) => main_sampleFromSchemaGeneric(e, t, r, !1),
            main_resolver = (e, t, r) => [e, JSON.stringify(t), JSON.stringify(r)],
            Co = utils_memoizeN(main_createXMLExample, main_resolver),
            xo = utils_memoizeN(main_sampleFromSchema, main_resolver),
            Oo = [{when: /json/, shouldStringifyTypes: ["string"]}], No = ["object"],
            fn_get_json_sample_schema = e => (t, r, a, n) => {
                const {fn: s} = e(), o = s.jsonSchema202012.memoizedSampleFromSchema(t, r, n), l = typeof o,
                    c = Oo.reduce(((e, t) => t.when.test(a) ? [...e, ...t.shouldStringifyTypes] : e), No);
                return G()(c, (e => e === l)) ? JSON.stringify(o, null, 2) : o
            }, fn_get_yaml_sample_schema = e => (t, r, a, n) => {
                const {fn: s} = e(), o = s.jsonSchema202012.getJsonSampleSchema(t, r, a, n);
                let l;
                try {
                    l = Re().dump(Re().load(o), {lineWidth: -1}, {schema: Me.JSON_SCHEMA}), "\n" === l[l.length - 1] && (l = l.slice(0, l.length - 1))
                } catch (e) {
                    return console.error(e), "error: could not generate yaml example"
                }
                return l.replace(/\t/g, "  ")
            }, fn_get_xml_sample_schema = e => (t, r, a) => {
                const {fn: n} = e();
                if (t && !t.xml && (t.xml = {}), t && !t.xml.name) {
                    if (!t.$$ref && (t.type || t.items || t.properties || t.additionalProperties)) return '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!-- XML example cannot be generated; root element name is undefined --\x3e';
                    if (t.$$ref) {
                        let e = t.$$ref.match(/\S*\/(\S+)$/);
                        t.xml.name = e[1]
                    }
                }
                return n.jsonSchema202012.memoizedCreateXMLExample(t, r, a)
            }, fn_get_sample_schema = e => (t, r = "", a = {}, n = void 0) => {
                const {fn: s} = e();
                return "function" == typeof t?.toJS && (t = t.toJS()), "function" == typeof n?.toJS && (n = n.toJS()), /xml/.test(r) ? s.jsonSchema202012.getXmlSampleSchema(t, a, n) : /(yaml|yml)/.test(r) ? s.jsonSchema202012.getYamlSampleSchema(t, a, r, n) : s.jsonSchema202012.getJsonSampleSchema(t, a, r, n)
            }, json_schema_2020_12_samples = ({getSystem: e}) => {
                const t = fn_get_json_sample_schema(e), r = fn_get_yaml_sample_schema(e), a = fn_get_xml_sample_schema(e),
                    n = fn_get_sample_schema(e);
                return {
                    fn: {
                        jsonSchema202012: {
                            sampleFromSchema: main_sampleFromSchema,
                            sampleFromSchemaGeneric: main_sampleFromSchemaGeneric,
                            sampleEncoderAPI: po,
                            sampleFormatAPI: api_formatAPI,
                            sampleMediaTypeAPI: So,
                            createXMLExample: main_createXMLExample,
                            memoizedSampleFromSchema: xo,
                            memoizedCreateXMLExample: Co,
                            getJsonSampleSchema: t,
                            getYamlSampleSchema: r,
                            getXmlSampleSchema: a,
                            getSampleSchema: n
                        }
                    }
                }
            };

        function PresetApis() {
            return [base, oas3, json_schema_2020_12, json_schema_2020_12_samples, oas31]
        }

        const {GIT_DIRTY: ko, GIT_COMMIT: Ao, PACKAGE_VERSION: Io, BUILD_TIME: qo} = {
            PACKAGE_VERSION: "5.11.8",
            GIT_COMMIT: "g925ff51d",
            GIT_DIRTY: !0,
            BUILD_TIME: "Fri, 23 Feb 2024 11:44:58 GMT"
        };

        function SwaggerUI(e) {
            U.versions = U.versions || {}, U.versions.swaggerUi = {
                version: Io,
                gitRevision: Ao,
                gitDirty: ko,
                buildTimestamp: qo
            };
            const t = {
                dom_id: null,
                domNode: null,
                spec: {},
                url: "",
                urls: null,
                layout: "BaseLayout",
                docExpansion: "list",
                maxDisplayedTags: null,
                filter: null,
                validatorUrl: "https://validator.swagger.io/validator",
                oauth2RedirectUrl: `${window.location.protocol}//${window.location.host}${window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"))}/oauth2-redirect.html`,
                persistAuthorization: !1,
                configs: {},
                custom: {},
                displayOperationId: !1,
                displayRequestDuration: !1,
                deepLinking: !1,
                tryItOutEnabled: !1,
                requestInterceptor: e => e,
                responseInterceptor: e => e,
                showMutatedRequest: !0,
                defaultModelRendering: "example",
                defaultModelExpandDepth: 1,
                defaultModelsExpandDepth: 1,
                showExtensions: !1,
                showCommonExtensions: !1,
                withCredentials: void 0,
                requestSnippetsEnabled: !1,
                requestSnippets: {
                    generators: {
                        curl_bash: {title: "cURL (bash)", syntax: "bash"},
                        curl_powershell: {title: "cURL (PowerShell)", syntax: "powershell"},
                        curl_cmd: {title: "cURL (CMD)", syntax: "bash"}
                    }, defaultExpanded: !0, languages: null
                },
                supportedSubmitMethods: ["get", "put", "post", "delete", "options", "head", "patch", "trace"],
                queryConfigEnabled: !1,
                presets: [PresetApis],
                plugins: [],
                pluginsOptions: {pluginLoadType: "legacy"},
                initialState: {},
                fn: {},
                components: {},
                syntaxHighlight: {activated: !0, theme: "agate"}
            };
            let r = e.queryConfigEnabled ? (() => {
                let e = {}, t = U.location.search;
                if (!t) return {};
                if ("" != t) {
                    let r = t.substr(1).split("&");
                    for (let t in r) Object.prototype.hasOwnProperty.call(r, t) && (t = r[t].split("="), e[decodeURIComponent(t[0])] = t[1] && decodeURIComponent(t[1]) || "")
                }
                return e
            })() : {};
            const a = e.domNode;
            delete e.domNode;
            const n = O()({}, t, e, r), s = {
                system: {configs: n.configs},
                plugins: n.presets,
                pluginsOptions: n.pluginsOptions,
                state: O()({
                    layout: {layout: n.layout, filter: n.filter},
                    spec: {spec: "", url: n.url},
                    requestSnippets: n.requestSnippets
                }, n.initialState)
            };
            if (n.initialState) for (var o in n.initialState) Object.prototype.hasOwnProperty.call(n.initialState, o) && void 0 === n.initialState[o] && delete s.state[o];
            var l = new Store(s);
            l.register([n.plugins, () => ({fn: n.fn, components: n.components, state: n.state})]);
            var c = l.getSystem();
            const downloadSpec = e => {
                let t = c.specSelectors.getLocalConfig ? c.specSelectors.getLocalConfig() : {},
                    s = O()({}, t, n, e || {}, r);
                if (a && (s.domNode = a), l.setConfigs(s), c.configsActions.loaded(), null !== e && (!r.url && "object" == typeof s.spec && Object.keys(s.spec).length ? (c.specActions.updateUrl(""), c.specActions.updateLoadingStatus("success"), c.specActions.updateSpec(JSON.stringify(s.spec))) : c.specActions.download && s.url && !s.urls && (c.specActions.updateUrl(s.url), c.specActions.download(s.url))), s.domNode) c.render(s.domNode, "App"); else if (s.dom_id) {
                    let e = document.querySelector(s.dom_id);
                    c.render(e, "App")
                } else null === s.dom_id || null === s.domNode || console.error("Skipped rendering: no `dom_id` or `domNode` was specified");
                return c
            }, i = r.config || n.configUrl;
            return i && c.specActions && c.specActions.getConfigByUrl ? (c.specActions.getConfigByUrl({
                url: i,
                loadRemoteConfig: !0,
                requestInterceptor: n.requestInterceptor,
                responseInterceptor: n.responseInterceptor
            }, downloadSpec), c) : downloadSpec()
        }

        SwaggerUI.System = Store, SwaggerUI.presets = {base, apis: PresetApis}, SwaggerUI.plugins = {
            Auth: auth,
            Configs: configsPlugin,
            DeepLining: deep_linking,
            Err: err,
            Filter: filter,
            Icons: icons,
            JSONSchema5Samples: json_schema_5_samples,
            JSONSchema202012: json_schema_2020_12,
            JSONSchema202012Samples: json_schema_2020_12_samples,
            Layout: plugins_layout,
            Logs: logs,
            OpenAPI30: oas3,
            OpenAPI31: oas3,
            OnComplete: on_complete,
            RequestSnippets: plugins_request_snippets,
            Spec: plugins_spec,
            SwaggerClient: swagger_client,
            Util: util,
            View: view,
            ViewLegacy: view_legacy,
            DownloadUrl: downloadUrlPlugin,
            SafeRender: safe_render
        };
        const jo = SwaggerUI
    })(), r = r.default
})()));
//# sourceMappingURL=swagger-ui.js.map