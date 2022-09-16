"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnimatedLatestValue = void 0;
var react_1 = __importDefault(require("react"));
exports.useAnimatedLatestValue = function (animatedValue, initial) {
    //If we're given an initial value then we can pretend we've received a value from the listener already
    var latestValueRef = react_1.default.useRef(initial !== null && initial !== void 0 ? initial : 0);
    var initialized = react_1.default.useRef(typeof initial == 'number');
    react_1.default.useEffect(function () {
        var id = animatedValue.addListener(function (v) {
            //Store the latest animated value
            latestValueRef.current = v.value;
            //Indicate that we've recieved a value
            initialized.current = true;
        });
        //Return a deregister function to clean up
        return function () { return animatedValue.removeListener(id); };
        //Note that the behavior here isn't 100% correct if the animatedValue changes -- the returned ref
        //may refer to the previous animatedValue's latest value until the new listener returns a value
    }, [animatedValue]);
    return [latestValueRef, initialized];
};
