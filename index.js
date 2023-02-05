// These exports expose the v1 interface and objects.
var sdk = require("remote-pay-cloud-api");

// These exports expose the beta method of using the Clover device
//var Clover = require("./Clover.js");
//var CloverOAuth = require("./CloverOAuth.js");
//var CloverError = require("./CloverError.js");
//var CardEntryMethods = require("./CardEntryMethods.js");
//var WebSocketDevice = require("./WebSocketDevice.js");
//var RemoteMessageBuilder = require("./RemoteMessageBuilder.js");
//var LanMethod = require("./LanMethod.js");
//var XmlHttpSupport = require("./xmlHttpSupport.js");
//var Endpoints = require("./Endpoints.js");
var CloverID = require("./CloverID.js");
//var KeyPress = require("./KeyPress.js");
//var VoidReason = require("./VoidReason.js");
//var CookiePersistance = require("./CookiePersistance.js");
//var JSONToCustomObject = require("./JSONToCustomObject.js");
//var MethodToMessage = require("./MethodToMessage.js");

var base = sdk.base;
var customers = sdk.customers;
var device = sdk.device;
var hours = sdk.hours;
var inventory = sdk.inventory;
var order = sdk.order;
var payments = sdk.payments;
var printer = sdk.printer;
var remotepay = sdk.remotepay;
var remotemessage = sdk.remotemessage;

//var CloverConnectorImpl = require("./CloverConnectorImpl.js");
//var CloverConnectorFactory = require("./CloverConnectorFactory.js");
//var DelegateCloverConnectorListener = require("./DelegateCloverConnectorListener.js");
//var DebugCloverConnectorListener = require("./DebugCloverConnectorListener.js");

//var Logger = require('./Logger.js');

// These exports expose the v1.2 CloverConnector and supporting objects
var version = '1.2.0';
var CloverConnector = require('./dist/com/clover/remote/client/CloverConnector.js').CloverConnector;
var CloverDeviceFactory = require('./dist/com/clover/remote/client/device/CloverDeviceFactory.js').CloverDeviceFactory;

var Logger = require('./dist/com/clover/remote/client/util/Logger.js').Logger;
var DebugConfig = require('./dist/com/clover/remote/client/util/DebugConfig.js').DebugConfig;
var HttpSupport = require('./dist/com/clover/util/HttpSupport.js').HttpSupport;
var ImageUtil = require('./dist/com/clover/util/ImageUtil.js').ImageUtil;

var WebSocketCloverDeviceConfiguration = require('./dist/com/clover/remote/client/device/WebSocketCloverDeviceConfiguration.js').WebSocketCloverDeviceConfiguration;
var WebSocketPairedCloverDeviceConfiguration = require('./dist/com/clover/remote/client/device/WebSocketPairedCloverDeviceConfiguration.js').WebSocketPairedCloverDeviceConfiguration;
var WebSocketCloudCloverDeviceConfiguration = require('./dist/com/clover/remote/client/device/WebSocketCloudCloverDeviceConfiguration.js').WebSocketCloudCloverDeviceConfiguration;

var CloverTransport = require('./dist/com/clover/remote/client/transport/CloverTransport.js').CloverTransport;
var CloverTransportObserver = require('./dist/com/clover/remote/client/transport/CloverTransportObserver.js').CloverTransportObserver;
var WebSocketCloverTransport = require('./dist/com/clover/remote/client/transport/websocket/WebSocketCloverTransport.js').WebSocketCloverTransport;
var WebSocketState = require('./dist/com/clover/websocket/WebSocketState.js').WebSocketState;
var CloverWebSocketInterface = require('./dist/com/clover/websocket/CloverWebSocketInterface.js').CloverWebSocketInterface;
var BrowserWebSocketImpl = require('./dist/com/clover/websocket/BrowserWebSocketImpl.js').BrowserWebSocketImpl;


var CloverConnectorFactoryBuilder = require('./dist/com/clover/remote/client/CloverConnectorFactoryBuilder.js').CloverConnectorFactoryBuilder;
var ICloverConnectorFactory = require('./dist/com/clover/remote/client/ICloverConnectorFactory.js').ICloverConnectorFactory;
// Following is exported explicitly because of backwards compatibility
var CloverConnectorFactory = require('./dist/com/clover/remote/client/CloverConnectorFactory.js').CloverConnectorFactory;
var CardEntryMethods = require('./dist/com/clover/remote/client/CardEntryMethods.js').CardEntryMethods;


// Export all of the pieces.
module.exports = {
    base: base,
    customers: customers,
    device: device,
    hours: hours,
    inventory: inventory,
    order: order,
    payments: payments,
    printer: printer,
    remotepay: remotepay,
    remotemessage: remotemessage,

    CloverID: CloverID,
    DebugConfig: DebugConfig,
    version: version,
    CloverConnector: CloverConnector,
    CloverDeviceFactory: CloverDeviceFactory,
    CloverTransport: CloverTransport,
    CloverTransportObserver: CloverTransportObserver,
    WebSocketCloverTransport: WebSocketCloverTransport,
    CloverWebSocketInterface: CloverWebSocketInterface,
    BrowserWebSocketImpl: BrowserWebSocketImpl,
    ImageUtil: ImageUtil,
    Logger: Logger,
    HttpSupport: HttpSupport,
    WebSocketCloverDeviceConfiguration: WebSocketCloverDeviceConfiguration,
    WebSocketPairedCloverDeviceConfiguration: WebSocketPairedCloverDeviceConfiguration,
    WebSocketCloudCloverDeviceConfiguration: WebSocketCloudCloverDeviceConfiguration,
    WebSocketState: WebSocketState,
    CloverConnectorFactoryBuilder: CloverConnectorFactoryBuilder,
    ICloverConnectorFactory: ICloverConnectorFactory,
    CloverConnectorFactory: CloverConnectorFactory,
    CardEntryMethods: CardEntryMethods
};

//
// Expose the module.
//
// module.exports = exports['default'];
