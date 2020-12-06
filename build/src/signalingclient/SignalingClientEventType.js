"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalingClientEventType = void 0;
/** Defines the event types generated by SignalingClient and the underlying WebSocket connection. */
var SignalingClientEventType;
(function (SignalingClientEventType) {
    SignalingClientEventType[SignalingClientEventType["WebSocketConnecting"] = 0] = "WebSocketConnecting";
    SignalingClientEventType[SignalingClientEventType["WebSocketOpen"] = 1] = "WebSocketOpen";
    SignalingClientEventType[SignalingClientEventType["WebSocketError"] = 2] = "WebSocketError";
    SignalingClientEventType[SignalingClientEventType["WebSocketClosing"] = 3] = "WebSocketClosing";
    SignalingClientEventType[SignalingClientEventType["WebSocketClosed"] = 4] = "WebSocketClosed";
    SignalingClientEventType[SignalingClientEventType["WebSocketFailed"] = 5] = "WebSocketFailed";
    SignalingClientEventType[SignalingClientEventType["WebSocketMessage"] = 6] = "WebSocketMessage";
    SignalingClientEventType[SignalingClientEventType["WebSocketSendMessageFailure"] = 7] = "WebSocketSendMessageFailure";
    SignalingClientEventType[SignalingClientEventType["WebSocketSentMessage"] = 8] = "WebSocketSentMessage";
    SignalingClientEventType[SignalingClientEventType["ProtocolDecodeFailure"] = 9] = "ProtocolDecodeFailure";
    SignalingClientEventType[SignalingClientEventType["ReceivedSignalFrame"] = 10] = "ReceivedSignalFrame";
    SignalingClientEventType[SignalingClientEventType["WebSocketSkippedMessage"] = 11] = "WebSocketSkippedMessage";
})(SignalingClientEventType = exports.SignalingClientEventType || (exports.SignalingClientEventType = {}));
exports.default = SignalingClientEventType;
//# sourceMappingURL=SignalingClientEventType.js.map