import { c as createLucideIcon, V as Vector3, S as Spherical, Q as Quaternion, O as OrthographicCamera, a as Vector2, P as PerspectiveCamera, M as MOUSE, T as TOUCH, R as Ray, b as Plane, r as reactExports, u as useThree, d as useFrame, j as jsxRuntimeExports, m as motion, C as Canvas, B as BufferGeometry, e as BufferAttribute, f as Color } from "./index-BHvqWtiJ.js";
import { _ as _extends, u as useDeviceCapability, H as Html } from "./useDeviceCapability-Dm0MY_lC.js";
import { E as ExternalLink } from "./external-link-DlD4cFq0.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode);
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, key + "", value);
  return value;
};
class EventDispatcher {
  constructor() {
    __publicField$1(this, "_listeners");
  }
  /**
   * Adds a listener to an event type.
   * @param type The type of event to listen to.
   * @param listener The function that gets called when the event is fired.
   */
  addEventListener(type, listener) {
    if (this._listeners === void 0)
      this._listeners = {};
    const listeners = this._listeners;
    if (listeners[type] === void 0) {
      listeners[type] = [];
    }
    if (listeners[type].indexOf(listener) === -1) {
      listeners[type].push(listener);
    }
  }
  /**
      * Checks if listener is added to an event type.
      * @param type The type of event to listen to.
      * @param listener The function that gets called when the event is fired.
      */
  hasEventListener(type, listener) {
    if (this._listeners === void 0)
      return false;
    const listeners = this._listeners;
    return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
  }
  /**
      * Removes a listener from an event type.
      * @param type The type of the listener that gets removed.
      * @param listener The listener function that gets removed.
      */
  removeEventListener(type, listener) {
    if (this._listeners === void 0)
      return;
    const listeners = this._listeners;
    const listenerArray = listeners[type];
    if (listenerArray !== void 0) {
      const index = listenerArray.indexOf(listener);
      if (index !== -1) {
        listenerArray.splice(index, 1);
      }
    }
  }
  /**
      * Fire an event type.
      * @param event The event that gets fired.
      */
  dispatchEvent(event) {
    if (this._listeners === void 0)
      return;
    const listeners = this._listeners;
    const listenerArray = listeners[event.type];
    if (listenerArray !== void 0) {
      event.target = this;
      const array = listenerArray.slice(0);
      for (let i = 0, l = array.length; i < l; i++) {
        array[i].call(this, event);
      }
      event.target = null;
    }
  }
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const _ray = /* @__PURE__ */ new Ray();
const _plane = /* @__PURE__ */ new Plane();
const TILT_LIMIT = Math.cos(70 * (Math.PI / 180));
const moduloWrapAround = (offset, capacity) => (offset % capacity + capacity) % capacity;
let OrbitControls$1 = class OrbitControls extends EventDispatcher {
  constructor(object, domElement) {
    super();
    __publicField(this, "object");
    __publicField(this, "domElement");
    __publicField(this, "enabled", true);
    __publicField(this, "target", new Vector3());
    __publicField(this, "minDistance", 0);
    __publicField(this, "maxDistance", Infinity);
    __publicField(this, "minZoom", 0);
    __publicField(this, "maxZoom", Infinity);
    __publicField(this, "minPolarAngle", 0);
    __publicField(this, "maxPolarAngle", Math.PI);
    __publicField(this, "minAzimuthAngle", -Infinity);
    __publicField(this, "maxAzimuthAngle", Infinity);
    __publicField(this, "enableDamping", false);
    __publicField(this, "dampingFactor", 0.05);
    __publicField(this, "enableZoom", true);
    __publicField(this, "zoomSpeed", 1);
    __publicField(this, "enableRotate", true);
    __publicField(this, "rotateSpeed", 1);
    __publicField(this, "enablePan", true);
    __publicField(this, "panSpeed", 1);
    __publicField(this, "screenSpacePanning", true);
    __publicField(this, "keyPanSpeed", 7);
    __publicField(this, "zoomToCursor", false);
    __publicField(this, "autoRotate", false);
    __publicField(this, "autoRotateSpeed", 2);
    __publicField(this, "reverseOrbit", false);
    __publicField(this, "reverseHorizontalOrbit", false);
    __publicField(this, "reverseVerticalOrbit", false);
    __publicField(this, "keys", { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" });
    __publicField(this, "mouseButtons", {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.PAN
    });
    __publicField(this, "touches", { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN });
    __publicField(this, "target0");
    __publicField(this, "position0");
    __publicField(this, "zoom0");
    __publicField(this, "_domElementKeyEvents", null);
    __publicField(this, "getPolarAngle");
    __publicField(this, "getAzimuthalAngle");
    __publicField(this, "setPolarAngle");
    __publicField(this, "setAzimuthalAngle");
    __publicField(this, "getDistance");
    __publicField(this, "getZoomScale");
    __publicField(this, "listenToKeyEvents");
    __publicField(this, "stopListenToKeyEvents");
    __publicField(this, "saveState");
    __publicField(this, "reset");
    __publicField(this, "update");
    __publicField(this, "connect");
    __publicField(this, "dispose");
    __publicField(this, "dollyIn");
    __publicField(this, "dollyOut");
    __publicField(this, "getScale");
    __publicField(this, "setScale");
    this.object = object;
    this.domElement = domElement;
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;
    this.getPolarAngle = () => spherical.phi;
    this.getAzimuthalAngle = () => spherical.theta;
    this.setPolarAngle = (value) => {
      let phi = moduloWrapAround(value, 2 * Math.PI);
      let currentPhi = spherical.phi;
      if (currentPhi < 0)
        currentPhi += 2 * Math.PI;
      if (phi < 0)
        phi += 2 * Math.PI;
      let phiDist = Math.abs(phi - currentPhi);
      if (2 * Math.PI - phiDist < phiDist) {
        if (phi < currentPhi) {
          phi += 2 * Math.PI;
        } else {
          currentPhi += 2 * Math.PI;
        }
      }
      sphericalDelta.phi = phi - currentPhi;
      scope.update();
    };
    this.setAzimuthalAngle = (value) => {
      let theta = moduloWrapAround(value, 2 * Math.PI);
      let currentTheta = spherical.theta;
      if (currentTheta < 0)
        currentTheta += 2 * Math.PI;
      if (theta < 0)
        theta += 2 * Math.PI;
      let thetaDist = Math.abs(theta - currentTheta);
      if (2 * Math.PI - thetaDist < thetaDist) {
        if (theta < currentTheta) {
          theta += 2 * Math.PI;
        } else {
          currentTheta += 2 * Math.PI;
        }
      }
      sphericalDelta.theta = theta - currentTheta;
      scope.update();
    };
    this.getDistance = () => scope.object.position.distanceTo(scope.target);
    this.listenToKeyEvents = (domElement2) => {
      domElement2.addEventListener("keydown", onKeyDown);
      this._domElementKeyEvents = domElement2;
    };
    this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
      this._domElementKeyEvents = null;
    };
    this.saveState = () => {
      scope.target0.copy(scope.target);
      scope.position0.copy(scope.object.position);
      scope.zoom0 = scope.object.zoom;
    };
    this.reset = () => {
      scope.target.copy(scope.target0);
      scope.object.position.copy(scope.position0);
      scope.object.zoom = scope.zoom0;
      scope.object.updateProjectionMatrix();
      scope.dispatchEvent(changeEvent);
      scope.update();
      state = STATE.NONE;
    };
    this.update = (() => {
      const offset = new Vector3();
      const up = new Vector3(0, 1, 0);
      const quat = new Quaternion().setFromUnitVectors(object.up, up);
      const quatInverse = quat.clone().invert();
      const lastPosition = new Vector3();
      const lastQuaternion = new Quaternion();
      const twoPI = 2 * Math.PI;
      return function update() {
        const position = scope.object.position;
        quat.setFromUnitVectors(object.up, up);
        quatInverse.copy(quat).invert();
        offset.copy(position).sub(scope.target);
        offset.applyQuaternion(quat);
        spherical.setFromVector3(offset);
        if (scope.autoRotate && state === STATE.NONE) {
          rotateLeft(getAutoRotationAngle());
        }
        if (scope.enableDamping) {
          spherical.theta += sphericalDelta.theta * scope.dampingFactor;
          spherical.phi += sphericalDelta.phi * scope.dampingFactor;
        } else {
          spherical.theta += sphericalDelta.theta;
          spherical.phi += sphericalDelta.phi;
        }
        let min = scope.minAzimuthAngle;
        let max = scope.maxAzimuthAngle;
        if (isFinite(min) && isFinite(max)) {
          if (min < -Math.PI)
            min += twoPI;
          else if (min > Math.PI)
            min -= twoPI;
          if (max < -Math.PI)
            max += twoPI;
          else if (max > Math.PI)
            max -= twoPI;
          if (min <= max) {
            spherical.theta = Math.max(min, Math.min(max, spherical.theta));
          } else {
            spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
          }
        }
        spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
        spherical.makeSafe();
        if (scope.enableDamping === true) {
          scope.target.addScaledVector(panOffset, scope.dampingFactor);
        } else {
          scope.target.add(panOffset);
        }
        if (scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera) {
          spherical.radius = clampDistance(spherical.radius);
        } else {
          spherical.radius = clampDistance(spherical.radius * scale);
        }
        offset.setFromSpherical(spherical);
        offset.applyQuaternion(quatInverse);
        position.copy(scope.target).add(offset);
        if (!scope.object.matrixAutoUpdate)
          scope.object.updateMatrix();
        scope.object.lookAt(scope.target);
        if (scope.enableDamping === true) {
          sphericalDelta.theta *= 1 - scope.dampingFactor;
          sphericalDelta.phi *= 1 - scope.dampingFactor;
          panOffset.multiplyScalar(1 - scope.dampingFactor);
        } else {
          sphericalDelta.set(0, 0, 0);
          panOffset.set(0, 0, 0);
        }
        let zoomChanged = false;
        if (scope.zoomToCursor && performCursorZoom) {
          let newRadius = null;
          if (scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera) {
            const prevRadius = offset.length();
            newRadius = clampDistance(prevRadius * scale);
            const radiusDelta = prevRadius - newRadius;
            scope.object.position.addScaledVector(dollyDirection, radiusDelta);
            scope.object.updateMatrixWorld();
          } else if (scope.object.isOrthographicCamera) {
            const mouseBefore = new Vector3(mouse.x, mouse.y, 0);
            mouseBefore.unproject(scope.object);
            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
            scope.object.updateProjectionMatrix();
            zoomChanged = true;
            const mouseAfter = new Vector3(mouse.x, mouse.y, 0);
            mouseAfter.unproject(scope.object);
            scope.object.position.sub(mouseAfter).add(mouseBefore);
            scope.object.updateMatrixWorld();
            newRadius = offset.length();
          } else {
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
            scope.zoomToCursor = false;
          }
          if (newRadius !== null) {
            if (scope.screenSpacePanning) {
              scope.target.set(0, 0, -1).transformDirection(scope.object.matrix).multiplyScalar(newRadius).add(scope.object.position);
            } else {
              _ray.origin.copy(scope.object.position);
              _ray.direction.set(0, 0, -1).transformDirection(scope.object.matrix);
              if (Math.abs(scope.object.up.dot(_ray.direction)) < TILT_LIMIT) {
                object.lookAt(scope.target);
              } else {
                _plane.setFromNormalAndCoplanarPoint(scope.object.up, scope.target);
                _ray.intersectPlane(_plane, scope.target);
              }
            }
          }
        } else if (scope.object instanceof OrthographicCamera && scope.object.isOrthographicCamera) {
          zoomChanged = scale !== 1;
          if (zoomChanged) {
            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
            scope.object.updateProjectionMatrix();
          }
        }
        scale = 1;
        performCursorZoom = false;
        if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
          scope.dispatchEvent(changeEvent);
          lastPosition.copy(scope.object.position);
          lastQuaternion.copy(scope.object.quaternion);
          zoomChanged = false;
          return true;
        }
        return false;
      };
    })();
    this.connect = (domElement2) => {
      scope.domElement = domElement2;
      scope.domElement.style.touchAction = "none";
      scope.domElement.addEventListener("contextmenu", onContextMenu);
      scope.domElement.addEventListener("pointerdown", onPointerDown);
      scope.domElement.addEventListener("pointercancel", onPointerUp);
      scope.domElement.addEventListener("wheel", onMouseWheel);
    };
    this.dispose = () => {
      var _a, _b, _c, _d, _e, _f;
      if (scope.domElement) {
        scope.domElement.style.touchAction = "auto";
      }
      (_a = scope.domElement) == null ? void 0 : _a.removeEventListener("contextmenu", onContextMenu);
      (_b = scope.domElement) == null ? void 0 : _b.removeEventListener("pointerdown", onPointerDown);
      (_c = scope.domElement) == null ? void 0 : _c.removeEventListener("pointercancel", onPointerUp);
      (_d = scope.domElement) == null ? void 0 : _d.removeEventListener("wheel", onMouseWheel);
      (_e = scope.domElement) == null ? void 0 : _e.ownerDocument.removeEventListener("pointermove", onPointerMove);
      (_f = scope.domElement) == null ? void 0 : _f.ownerDocument.removeEventListener("pointerup", onPointerUp);
      if (scope._domElementKeyEvents !== null) {
        scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
      }
    };
    const scope = this;
    const changeEvent = { type: "change" };
    const startEvent = { type: "start" };
    const endEvent = { type: "end" };
    const STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let state = STATE.NONE;
    const EPS = 1e-6;
    const spherical = new Spherical();
    const sphericalDelta = new Spherical();
    let scale = 1;
    const panOffset = new Vector3();
    const rotateStart = new Vector2();
    const rotateEnd = new Vector2();
    const rotateDelta = new Vector2();
    const panStart = new Vector2();
    const panEnd = new Vector2();
    const panDelta = new Vector2();
    const dollyStart = new Vector2();
    const dollyEnd = new Vector2();
    const dollyDelta = new Vector2();
    const dollyDirection = new Vector3();
    const mouse = new Vector2();
    let performCursorZoom = false;
    const pointers = [];
    const pointerPositions = {};
    function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    }
    function getZoomScale() {
      return Math.pow(0.95, scope.zoomSpeed);
    }
    function rotateLeft(angle) {
      if (scope.reverseOrbit || scope.reverseHorizontalOrbit) {
        sphericalDelta.theta += angle;
      } else {
        sphericalDelta.theta -= angle;
      }
    }
    function rotateUp(angle) {
      if (scope.reverseOrbit || scope.reverseVerticalOrbit) {
        sphericalDelta.phi += angle;
      } else {
        sphericalDelta.phi -= angle;
      }
    }
    const panLeft = (() => {
      const v = new Vector3();
      return function panLeft2(distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 0);
        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    })();
    const panUp = (() => {
      const v = new Vector3();
      return function panUp2(distance, objectMatrix) {
        if (scope.screenSpacePanning === true) {
          v.setFromMatrixColumn(objectMatrix, 1);
        } else {
          v.setFromMatrixColumn(objectMatrix, 0);
          v.crossVectors(scope.object.up, v);
        }
        v.multiplyScalar(distance);
        panOffset.add(v);
      };
    })();
    const pan = (() => {
      const offset = new Vector3();
      return function pan2(deltaX, deltaY) {
        const element = scope.domElement;
        if (element && scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera) {
          const position = scope.object.position;
          offset.copy(position).sub(scope.target);
          let targetDistance = offset.length();
          targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180);
          panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
          panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
        } else if (element && scope.object instanceof OrthographicCamera && scope.object.isOrthographicCamera) {
          panLeft(
            deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth,
            scope.object.matrix
          );
          panUp(
            deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight,
            scope.object.matrix
          );
        } else {
          console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
          scope.enablePan = false;
        }
      };
    })();
    function setScale(newScale) {
      if (scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera || scope.object instanceof OrthographicCamera && scope.object.isOrthographicCamera) {
        scale = newScale;
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
        scope.enableZoom = false;
      }
    }
    function dollyOut(dollyScale) {
      setScale(scale / dollyScale);
    }
    function dollyIn(dollyScale) {
      setScale(scale * dollyScale);
    }
    function updateMouseParameters(event) {
      if (!scope.zoomToCursor || !scope.domElement) {
        return;
      }
      performCursorZoom = true;
      const rect = scope.domElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const w = rect.width;
      const h = rect.height;
      mouse.x = x / w * 2 - 1;
      mouse.y = -(y / h) * 2 + 1;
      dollyDirection.set(mouse.x, mouse.y, 1).unproject(scope.object).sub(scope.object.position).normalize();
    }
    function clampDistance(dist) {
      return Math.max(scope.minDistance, Math.min(scope.maxDistance, dist));
    }
    function handleMouseDownRotate(event) {
      rotateStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownDolly(event) {
      updateMouseParameters(event);
      dollyStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownPan(event) {
      panStart.set(event.clientX, event.clientY);
    }
    function handleMouseMoveRotate(event) {
      rotateEnd.set(event.clientX, event.clientY);
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      const element = scope.domElement;
      if (element) {
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      }
      rotateStart.copy(rotateEnd);
      scope.update();
    }
    function handleMouseMoveDolly(event) {
      dollyEnd.set(event.clientX, event.clientY);
      dollyDelta.subVectors(dollyEnd, dollyStart);
      if (dollyDelta.y > 0) {
        dollyOut(getZoomScale());
      } else if (dollyDelta.y < 0) {
        dollyIn(getZoomScale());
      }
      dollyStart.copy(dollyEnd);
      scope.update();
    }
    function handleMouseMovePan(event) {
      panEnd.set(event.clientX, event.clientY);
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
      scope.update();
    }
    function handleMouseWheel(event) {
      updateMouseParameters(event);
      if (event.deltaY < 0) {
        dollyIn(getZoomScale());
      } else if (event.deltaY > 0) {
        dollyOut(getZoomScale());
      }
      scope.update();
    }
    function handleKeyDown(event) {
      let needsUpdate = false;
      switch (event.code) {
        case scope.keys.UP:
          pan(0, scope.keyPanSpeed);
          needsUpdate = true;
          break;
        case scope.keys.BOTTOM:
          pan(0, -scope.keyPanSpeed);
          needsUpdate = true;
          break;
        case scope.keys.LEFT:
          pan(scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;
        case scope.keys.RIGHT:
          pan(-scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;
      }
      if (needsUpdate) {
        event.preventDefault();
        scope.update();
      }
    }
    function handleTouchStartRotate() {
      if (pointers.length == 1) {
        rotateStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        rotateStart.set(x, y);
      }
    }
    function handleTouchStartPan() {
      if (pointers.length == 1) {
        panStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        panStart.set(x, y);
      }
    }
    function handleTouchStartDolly() {
      const dx = pointers[0].pageX - pointers[1].pageX;
      const dy = pointers[0].pageY - pointers[1].pageY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }
    function handleTouchStartDollyPan() {
      if (scope.enableZoom)
        handleTouchStartDolly();
      if (scope.enablePan)
        handleTouchStartPan();
    }
    function handleTouchStartDollyRotate() {
      if (scope.enableZoom)
        handleTouchStartDolly();
      if (scope.enableRotate)
        handleTouchStartRotate();
    }
    function handleTouchMoveRotate(event) {
      if (pointers.length == 1) {
        rotateEnd.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);
        const x = 0.5 * (event.pageX + position.x);
        const y = 0.5 * (event.pageY + position.y);
        rotateEnd.set(x, y);
      }
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      const element = scope.domElement;
      if (element) {
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      }
      rotateStart.copy(rotateEnd);
    }
    function handleTouchMovePan(event) {
      if (pointers.length == 1) {
        panEnd.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);
        const x = 0.5 * (event.pageX + position.x);
        const y = 0.5 * (event.pageY + position.y);
        panEnd.set(x, y);
      }
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
    }
    function handleTouchMoveDolly(event) {
      const position = getSecondPointerPosition(event);
      const dx = event.pageX - position.x;
      const dy = event.pageY - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      dollyEnd.set(0, distance);
      dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
      dollyOut(dollyDelta.y);
      dollyStart.copy(dollyEnd);
    }
    function handleTouchMoveDollyPan(event) {
      if (scope.enableZoom)
        handleTouchMoveDolly(event);
      if (scope.enablePan)
        handleTouchMovePan(event);
    }
    function handleTouchMoveDollyRotate(event) {
      if (scope.enableZoom)
        handleTouchMoveDolly(event);
      if (scope.enableRotate)
        handleTouchMoveRotate(event);
    }
    function onPointerDown(event) {
      var _a, _b;
      if (scope.enabled === false)
        return;
      if (pointers.length === 0) {
        (_a = scope.domElement) == null ? void 0 : _a.ownerDocument.addEventListener("pointermove", onPointerMove);
        (_b = scope.domElement) == null ? void 0 : _b.ownerDocument.addEventListener("pointerup", onPointerUp);
      }
      addPointer(event);
      if (event.pointerType === "touch") {
        onTouchStart(event);
      } else {
        onMouseDown(event);
      }
    }
    function onPointerMove(event) {
      if (scope.enabled === false)
        return;
      if (event.pointerType === "touch") {
        onTouchMove(event);
      } else {
        onMouseMove(event);
      }
    }
    function onPointerUp(event) {
      var _a, _b, _c;
      removePointer(event);
      if (pointers.length === 0) {
        (_a = scope.domElement) == null ? void 0 : _a.releasePointerCapture(event.pointerId);
        (_b = scope.domElement) == null ? void 0 : _b.ownerDocument.removeEventListener("pointermove", onPointerMove);
        (_c = scope.domElement) == null ? void 0 : _c.ownerDocument.removeEventListener("pointerup", onPointerUp);
      }
      scope.dispatchEvent(endEvent);
      state = STATE.NONE;
    }
    function onMouseDown(event) {
      let mouseAction;
      switch (event.button) {
        case 0:
          mouseAction = scope.mouseButtons.LEFT;
          break;
        case 1:
          mouseAction = scope.mouseButtons.MIDDLE;
          break;
        case 2:
          mouseAction = scope.mouseButtons.RIGHT;
          break;
        default:
          mouseAction = -1;
      }
      switch (mouseAction) {
        case MOUSE.DOLLY:
          if (scope.enableZoom === false)
            return;
          handleMouseDownDolly(event);
          state = STATE.DOLLY;
          break;
        case MOUSE.ROTATE:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enablePan === false)
              return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          } else {
            if (scope.enableRotate === false)
              return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          }
          break;
        case MOUSE.PAN:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enableRotate === false)
              return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          } else {
            if (scope.enablePan === false)
              return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          }
          break;
        default:
          state = STATE.NONE;
      }
      if (state !== STATE.NONE) {
        scope.dispatchEvent(startEvent);
      }
    }
    function onMouseMove(event) {
      if (scope.enabled === false)
        return;
      switch (state) {
        case STATE.ROTATE:
          if (scope.enableRotate === false)
            return;
          handleMouseMoveRotate(event);
          break;
        case STATE.DOLLY:
          if (scope.enableZoom === false)
            return;
          handleMouseMoveDolly(event);
          break;
        case STATE.PAN:
          if (scope.enablePan === false)
            return;
          handleMouseMovePan(event);
          break;
      }
    }
    function onMouseWheel(event) {
      if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) {
        return;
      }
      event.preventDefault();
      scope.dispatchEvent(startEvent);
      handleMouseWheel(event);
      scope.dispatchEvent(endEvent);
    }
    function onKeyDown(event) {
      if (scope.enabled === false || scope.enablePan === false)
        return;
      handleKeyDown(event);
    }
    function onTouchStart(event) {
      trackPointer(event);
      switch (pointers.length) {
        case 1:
          switch (scope.touches.ONE) {
            case TOUCH.ROTATE:
              if (scope.enableRotate === false)
                return;
              handleTouchStartRotate();
              state = STATE.TOUCH_ROTATE;
              break;
            case TOUCH.PAN:
              if (scope.enablePan === false)
                return;
              handleTouchStartPan();
              state = STATE.TOUCH_PAN;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        case 2:
          switch (scope.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (scope.enableZoom === false && scope.enablePan === false)
                return;
              handleTouchStartDollyPan();
              state = STATE.TOUCH_DOLLY_PAN;
              break;
            case TOUCH.DOLLY_ROTATE:
              if (scope.enableZoom === false && scope.enableRotate === false)
                return;
              handleTouchStartDollyRotate();
              state = STATE.TOUCH_DOLLY_ROTATE;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        default:
          state = STATE.NONE;
      }
      if (state !== STATE.NONE) {
        scope.dispatchEvent(startEvent);
      }
    }
    function onTouchMove(event) {
      trackPointer(event);
      switch (state) {
        case STATE.TOUCH_ROTATE:
          if (scope.enableRotate === false)
            return;
          handleTouchMoveRotate(event);
          scope.update();
          break;
        case STATE.TOUCH_PAN:
          if (scope.enablePan === false)
            return;
          handleTouchMovePan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_PAN:
          if (scope.enableZoom === false && scope.enablePan === false)
            return;
          handleTouchMoveDollyPan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_ROTATE:
          if (scope.enableZoom === false && scope.enableRotate === false)
            return;
          handleTouchMoveDollyRotate(event);
          scope.update();
          break;
        default:
          state = STATE.NONE;
      }
    }
    function onContextMenu(event) {
      if (scope.enabled === false)
        return;
      event.preventDefault();
    }
    function addPointer(event) {
      pointers.push(event);
    }
    function removePointer(event) {
      delete pointerPositions[event.pointerId];
      for (let i = 0; i < pointers.length; i++) {
        if (pointers[i].pointerId == event.pointerId) {
          pointers.splice(i, 1);
          return;
        }
      }
    }
    function trackPointer(event) {
      let position = pointerPositions[event.pointerId];
      if (position === void 0) {
        position = new Vector2();
        pointerPositions[event.pointerId] = position;
      }
      position.set(event.pageX, event.pageY);
    }
    function getSecondPointerPosition(event) {
      const pointer = event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];
      return pointerPositions[pointer.pointerId];
    }
    this.dollyIn = (dollyScale = getZoomScale()) => {
      dollyIn(dollyScale);
      scope.update();
    };
    this.dollyOut = (dollyScale = getZoomScale()) => {
      dollyOut(dollyScale);
      scope.update();
    };
    this.getScale = () => {
      return scale;
    };
    this.setScale = (newScale) => {
      setScale(newScale);
      scope.update();
    };
    this.getZoomScale = () => {
      return getZoomScale();
    };
    if (domElement !== void 0)
      this.connect(domElement);
    this.update();
  }
};
const OrbitControls2 = /* @__PURE__ */ reactExports.forwardRef(({
  makeDefault,
  camera,
  regress,
  domElement,
  enableDamping = true,
  keyEvents = false,
  onChange,
  onStart,
  onEnd,
  ...restProps
}, ref) => {
  const invalidate = useThree((state) => state.invalidate);
  const defaultCamera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const events = useThree((state) => state.events);
  const setEvents = useThree((state) => state.setEvents);
  const set = useThree((state) => state.set);
  const get = useThree((state) => state.get);
  const performance = useThree((state) => state.performance);
  const explCamera = camera || defaultCamera;
  const explDomElement = domElement || events.connected || gl.domElement;
  const controls = reactExports.useMemo(() => new OrbitControls$1(explCamera), [explCamera]);
  useFrame(() => {
    if (controls.enabled) controls.update();
  }, -1);
  reactExports.useEffect(() => {
    if (keyEvents) {
      controls.connect(keyEvents === true ? explDomElement : keyEvents);
    }
    controls.connect(explDomElement);
    return () => void controls.dispose();
  }, [keyEvents, explDomElement, regress, controls, invalidate]);
  reactExports.useEffect(() => {
    const callback = (e) => {
      invalidate();
      if (regress) performance.regress();
      if (onChange) onChange(e);
    };
    const onStartCb = (e) => {
      if (onStart) onStart(e);
    };
    const onEndCb = (e) => {
      if (onEnd) onEnd(e);
    };
    controls.addEventListener("change", callback);
    controls.addEventListener("start", onStartCb);
    controls.addEventListener("end", onEndCb);
    return () => {
      controls.removeEventListener("start", onStartCb);
      controls.removeEventListener("end", onEndCb);
      controls.removeEventListener("change", callback);
    };
  }, [onChange, onStart, onEnd, controls, invalidate, setEvents]);
  reactExports.useEffect(() => {
    if (makeDefault) {
      const old = get().controls;
      set({
        controls
      });
      return () => set({
        controls: old
      });
    }
  }, [makeDefault, controls]);
  return /* @__PURE__ */ reactExports.createElement("primitive", _extends({
    ref,
    object: controls,
    enableDamping
  }, restProps));
});
const GALAXY_COLORS = [
  [0, 0.83, 1],
  // cyan
  [0.51, 0.55, 0.97],
  // indigo
  [0.96, 0.44, 0.71],
  // pink
  [0.98, 0.75, 0.14],
  // gold
  [0.2, 0.83, 0.6],
  // teal
  [1, 1, 1],
  // white
  [0.66, 0.33, 0.97]
  // purple
];
const BRIGHT_STARS = [
  {
    id: "star-red",
    pos: [1.8, 0.05, 1.2],
    color: "#ff3333"
  },
  {
    id: "star-blue",
    pos: [-2.4, -0.03, 0.8],
    color: "#4488ff"
  },
  {
    id: "star-pink",
    pos: [1, 0.08, -2.8],
    color: "#ff88ff"
  },
  {
    id: "star-cyan",
    pos: [-1.6, 0.02, -1.9],
    color: "#00ccff"
  },
  {
    id: "star-orange",
    pos: [3.2, -0.05, -0.6],
    color: "#ffaa00"
  },
  {
    id: "star-purple",
    pos: [-3, 0.04, -1],
    color: "#cc44ff"
  },
  {
    id: "star-red2",
    pos: [2.6, 0.06, 2.2],
    color: "#ff4444"
  },
  {
    id: "star-teal",
    pos: [-2, -0.02, 2.6],
    color: "#44ffcc"
  }
];
const SKILL_PLANETS = [
  {
    skill: "React",
    radius: 0.9,
    angleOffset: 0,
    speed: 0.32,
    color: "#61DAFB",
    size: 0.072
  },
  {
    skill: "Node.js",
    radius: 1.15,
    angleOffset: 1.2,
    speed: 0.27,
    color: "#68A063",
    size: 0.065
  },
  {
    skill: "Python",
    radius: 1.35,
    angleOffset: 2.5,
    speed: 0.23,
    color: "#FFD43B",
    size: 0.078
  },
  {
    skill: "TypeScript",
    radius: 1.55,
    angleOffset: 0.7,
    speed: 0.19,
    color: "#3B9AE1",
    size: 0.065
  },
  {
    skill: "Next.js",
    radius: 1.8,
    angleOffset: 1.9,
    speed: 0.16,
    color: "#e0e0e0",
    size: 0.072
  },
  {
    skill: "MongoDB",
    radius: 2.05,
    angleOffset: 3.3,
    speed: 0.135,
    color: "#47A248",
    size: 0.065
  },
  {
    skill: "AI/Automation",
    radius: 2.25,
    angleOffset: 0.5,
    speed: 0.115,
    color: "#f472b6",
    size: 0.09
  },
  {
    skill: "GraphQL",
    radius: 2.45,
    angleOffset: 2,
    speed: 0.095,
    color: "#E535AB",
    size: 0.062
  },
  {
    skill: "Django",
    radius: 2.6,
    angleOffset: 4.2,
    speed: 0.085,
    color: "#092E20",
    size: 0.068
  },
  {
    skill: "WordPress",
    radius: 2.75,
    angleOffset: 1,
    speed: 0.078,
    color: "#21759B",
    size: 0.072
  },
  {
    skill: "Shopify",
    radius: 2.92,
    angleOffset: 3.8,
    speed: 0.068,
    color: "#96BF48",
    size: 0.065
  },
  {
    skill: "SEO",
    radius: 3.05,
    angleOffset: 2.8,
    speed: 0.058,
    color: "#34d399",
    size: 0.082
  },
  {
    skill: "System Design",
    radius: 3.18,
    angleOffset: 0.3,
    speed: 0.052,
    color: "#a855f7",
    size: 0.072
  },
  {
    skill: "REST APIs",
    radius: 1.68,
    angleOffset: 3.6,
    speed: 0.175,
    color: "#fb923c",
    size: 0.065
  }
];
function ParticleField({ count }) {
  const ref = reactExports.useRef(null);
  const geometry = reactExports.useMemo(() => {
    const geo = new BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const c = GALAXY_COLORS[Math.floor(Math.random() * GALAXY_COLORS.length)];
      colors[i * 3] = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];
    }
    geo.setAttribute("position", new BufferAttribute(positions, 3));
    geo.setAttribute("color", new BufferAttribute(colors, 3));
    return geo;
  }, [count]);
  const { camera } = useThree();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.012;
      ref.current.rotation.x += delta * 5e-3;
    }
    const mx = state.mouse.x * 0.3;
    const my = state.mouse.y * 0.3;
    camera.position.x += (mx - camera.position.x) * delta * 2;
    camera.position.y += (my - camera.position.y) * delta * 2;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("points", { ref, geometry, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "pointsMaterial",
    {
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true
    }
  ) });
}
function FloatingObject({
  position,
  color,
  speed,
  type
}) {
  const ref = reactExports.useRef(null);
  const offset = reactExports.useRef(Math.random() * Math.PI * 2);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + offset.current) * 0.3;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, children: [
    type === "ico" && /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [0.25, 0] }),
    type === "oct" && /* @__PURE__ */ jsxRuntimeExports.jsx("octahedronGeometry", { args: [0.2, 0] }),
    type === "box" && /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.22, 0.22, 0.22] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        wireframe: true,
        color,
        emissive: color,
        emissiveIntensity: 0.7
      }
    )
  ] });
}
function BrightStar({
  position,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.07, 8, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color, transparent: true, opacity: 0.4 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.03, 8, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color })
    ] })
  ] });
}
function SkillPlanet({
  skill,
  radius,
  angleOffset,
  speed,
  color,
  size
}) {
  const groupRef = reactExports.useRef(null);
  const meshRef = reactExports.useRef(null);
  const [hovered, setHovered] = reactExports.useState(false);
  useFrame((state) => {
    if (groupRef.current) {
      const angle = state.clock.elapsedTime * speed + angleOffset;
      groupRef.current.position.x = Math.cos(angle) * radius;
      groupRef.current.position.z = Math.sin(angle) * radius;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * speed * 0.4 + angleOffset) * 0.12;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.015;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: groupRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [size * 1.8, 8, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshBasicMaterial",
        {
          color,
          transparent: true,
          opacity: hovered ? 0.28 : 0.14
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "mesh",
      {
        ref: meshRef,
        onPointerEnter: () => setHovered(true),
        onPointerLeave: () => setHovered(false),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [size, 14, 14] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "meshStandardMaterial",
            {
              color,
              emissive: color,
              emissiveIntensity: hovered ? 0.9 : 0.55,
              roughness: 0.45,
              metalness: 0.3
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Html,
      {
        position: [0, size * 3.2, 0],
        center: true,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              color,
              fontSize: "8.5px",
              fontFamily: "'Space Mono', 'Courier New', monospace",
              fontWeight: "700",
              whiteSpace: "nowrap",
              textShadow: `0 0 10px ${color}, 0 0 20px ${color}80`,
              background: "rgba(0, 0, 0, 0.65)",
              backdropFilter: "blur(4px)",
              padding: "2px 6px",
              borderRadius: "4px",
              border: `1px solid ${color}50`,
              letterSpacing: "0.04em",
              opacity: hovered ? 1 : 0.88,
              transform: hovered ? "scale(1.15)" : "scale(1)",
              transition: "all 0.2s ease"
            },
            children: skill
          }
        )
      }
    )
  ] });
}
function InteractiveGalaxyMesh() {
  const groupRef = reactExports.useRef(null);
  const { positions, colors } = reactExports.useMemo(() => {
    const totalParticles = 7e3;
    const coreCount = Math.floor(totalParticles * 0.25);
    const armCount = totalParticles - coreCount;
    const pos = new Float32Array(totalParticles * 3);
    const col = new Float32Array(totalParticles * 3);
    const coreRadius = 0.4;
    const maxRadius = 3.2;
    for (let i = 0; i < coreCount; i++) {
      const r = Math.random() * coreRadius;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * 0.3;
      pos[i * 3] = r * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * 0.12;
      pos[i * 3 + 2] = r * Math.sin(theta);
      const t = r / coreRadius;
      const c = new Color();
      c.lerpColors(
        new Color(1, 0.98, 0.95),
        new Color(1, 0.55, 0.15),
        t
      );
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    for (let i = 0; i < armCount; i++) {
      const idx = coreCount + i;
      const armIndex = Math.floor(Math.random() * 3);
      const baseAngle = armIndex / 3 * Math.PI * 2;
      const radius = coreRadius + Math.random() ** 0.6 * (maxRadius - coreRadius);
      const spiralAngle = baseAngle + radius * 1.8 + (Math.random() - 0.5) * 0.5;
      const x = radius * Math.cos(spiralAngle);
      const z = radius * Math.sin(spiralAngle);
      const y = (Math.random() - 0.5) * radius * 0.08;
      pos[idx * 3] = x;
      pos[idx * 3 + 1] = y;
      pos[idx * 3 + 2] = z;
      const t = (radius - coreRadius) / (maxRadius - coreRadius);
      const c = new Color();
      if (t < 0.5) {
        c.lerpColors(
          new Color(1, 0.95, 0.88),
          new Color(0.75, 0.85, 1),
          t * 2
        );
      } else {
        c.lerpColors(
          new Color(0.75, 0.85, 1),
          new Color(0.45, 0.3, 0.85),
          (t - 0.5) * 2
        );
      }
      col[idx * 3] = c.r;
      col[idx * 3 + 1] = c.g;
      col[idx * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: groupRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("bufferGeometry", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-color", args: [colors, 3] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "pointsMaterial",
        {
          size: 0.025,
          vertexColors: true,
          transparent: true,
          opacity: 0.95,
          sizeAttenuation: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.22, 16, 16] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#ff6600", transparent: true, opacity: 0.3 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.12, 16, 16] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#ffaa44" })
    ] }),
    BRIGHT_STARS.map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(BrightStar, { position: star.pos, color: star.color }, star.id)),
    SKILL_PLANETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillPlanet, { ...p }, p.skill))
  ] });
}
function CameraAnimator() {
  const { camera } = useThree();
  const progress = reactExports.useRef(0);
  const started = reactExports.useRef(false);
  useFrame((_, delta) => {
    if (!started.current) {
      camera.position.set(0, 0, 14);
      started.current = true;
    }
    if (progress.current < 1) {
      progress.current = Math.min(1, progress.current + delta * 0.6);
      const t = 1 - (1 - progress.current) ** 3;
      camera.position.z = 14 - t * 8;
    }
  });
  return null;
}
function BackgroundCanvas({
  particleCount,
  isMobile
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      camera: { position: [0, 0, 14], fov: 65 },
      gl: { antialias: true, alpha: true },
      dpr: [1, 2],
      style: { position: "absolute", inset: 0, touchAction: "none" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-5, 5, 5], color: "#00d4ff", intensity: 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CameraAnimator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleField, { count: particleCount }),
        !isMobile && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FloatingObject,
            {
              position: [-4, 2, -2],
              color: "#f472b6",
              speed: 0.5,
              type: "ico"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FloatingObject,
            {
              position: [-5, -1, -1],
              color: "#fbbf24",
              speed: 0.3,
              type: "oct"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FloatingObject,
            {
              position: [5, -2, -3],
              color: "#34d399",
              speed: 0.4,
              type: "box"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FloatingObject,
            {
              position: [4, 3, -2],
              color: "#818cf8",
              speed: 0.6,
              type: "ico"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FloatingObject,
            {
              position: [-2, -3, -2],
              color: "#fb923c",
              speed: 0.35,
              type: "oct"
            }
          )
        ] })
      ]
    }
  );
}
function InteractiveGalaxyCanvas() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute hidden md:block",
      style: {
        right: 0,
        top: 0,
        width: "50%",
        height: "100%",
        zIndex: 6,
        cursor: "grab"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Canvas,
        {
          camera: { position: [0, 3, 8], fov: 55 },
          gl: { antialias: true, alpha: true },
          dpr: [1, 2],
          style: { width: "100%", height: "100%", touchAction: "none" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.3 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 5, 5], color: "#00d4ff", intensity: 1.2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, -3, 3], color: "#a855f7", intensity: 0.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InteractiveGalaxyMesh, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              OrbitControls2,
              {
                enableZoom: true,
                enablePan: false,
                autoRotate: false,
                enableDamping: true,
                dampingFactor: 0.06,
                minDistance: 4,
                maxDistance: 14,
                rotateSpeed: 0.6,
                zoomSpeed: 0.8
              }
            )
          ]
        }
      )
    }
  );
}
function HeroSection() {
  const { particleCount } = useDeviceCapability();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const scrollToProjects = () => {
    var _a;
    (_a = document.querySelector("#projects")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    var _a;
    (_a = document.querySelector("#about")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative overflow-hidden flex items-center",
      style: { minHeight: "100svh", background: "transparent" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: { height: isMobile ? "50vh" : "100%" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              BackgroundCanvas,
              {
                particleCount: isMobile ? Math.floor(particleCount * 0.4) : particleCount,
                isMobile
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InteractiveGalaxyCanvas, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 60% 40% at 70% 50%, oklch(0.82 0.18 220 / 5%) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 70% 40%, oklch(0.65 0.28 295 / 4%) 0%, transparent 50%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 80% 80% at center, transparent 40%, oklch(0.05 0.02 254 / 60%) 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-24 sm:py-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.3 },
              className: "text-sm font-medium tracking-[0.2em] uppercase mb-4",
              style: { color: "#818cf8" },
              children: "Hello, I'm"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.4 },
              className: "hero-name text-gradient mb-4",
              children: [
                "Moeed Rizwan",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Farooq"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.55 },
              className: "inline-flex items-center gap-2 glass-light rounded-full px-4 py-2 mb-5",
              style: { border: "1px solid oklch(0.82 0.18 220 / 30%)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-2 h-2 rounded-full animate-pulse",
                    style: { background: "#34d399" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-white", children: "Full Stack Developer & AI Automation Expert" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.65 },
              className: "text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-xl",
              children: "Building Scalable Systems, Smart Automations & High-Performance Web Apps with 7+ years of international experience."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.75 },
              className: "flex flex-wrap gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: scrollToProjects,
                    "data-ocid": "hero.primary_button",
                    className: "btn-primary text-white font-semibold px-7 py-3 rounded-full flex items-center gap-2 w-full sm:w-auto justify-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16 }),
                      "View Projects"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "hero.secondary_button",
                    className: "glass text-white font-semibold px-7 py-3 rounded-full flex items-center gap-2 hover:border-opacity-60 transition-all w-full sm:w-auto justify-center",
                    style: { border: "1px solid oklch(0.82 0.18 220 / 30%)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16 }),
                      "Download CV"
                    ]
                  }
                )
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            onClick: scrollToAbout,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.2, duration: 0.6 },
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-white transition-colors animate-float z-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-widest uppercase", children: "Scroll" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 18 })
            ]
          }
        )
      ]
    }
  );
}
export {
  HeroSection as default
};
