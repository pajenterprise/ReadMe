import {WebSocketCloudCloverTransport} from '../transport/websocket/WebSocketCloudCloverTransport';
import {CloverTransport} from '../transport/CloverTransport';
import {WebsocketCloudCloverDevice} from './WebsocketCloudCloverDevice';

import {WebSocketCloverDeviceConfiguration} from './WebSocketCloverDeviceConfiguration';
import {HttpSupport} from '../../../util/HttpSupport';
import {IImageUtil} from '../../../util/IImageUtil';

/**
 * Configuration used to create a connection to a device via the Clover cloud.
 */
export class WebSocketCloudCloverDeviceConfiguration extends WebSocketCloverDeviceConfiguration {

    private cloverServer: string;
    private accessToken: string;
    private httpSupport: HttpSupport;
    private merchantId: string;
    private deviceId: string;
    private friendlyId: string;
    private forceConnect: boolean;

    /**
     *
     * @param {string} applicationId - the applicationId that uniquely identifies the POS.
     *    e.g. com.company.MyPOS:2.3.1 for the first connection
     * @param {Object} webSocketFactoryFunction - the function that will return an instance of the
     *  CloverWebSocketInterface that will be used when connecting.  For Browser implementations, this can be
     *  BrowserWebSocketImpl.createInstance.  For NodeJS implementations, this will be defined differently.
     * @param {IImageUtil} imageUtil - utility to translate images into base64 strings.
     * @param {string} cloverServer the base url for the clover server used in the cloud connection.
     *    EX:  https://www.clover.com, http://localhost:9000
     * @param {string} accessToken - the OAuth access token that will be used when contacting the clover server
     * @param {HttpSupport} httpSupport - the helper object used when making http requests.
     * @param {string} merchantId - the merchant the device belongs to.
     * @param {string} deviceId - the id (not uuid) of the device to connect to
     * @param {string} friendlyId - an identifier for the specific terminal connected to this device.  This id is used
     *  in debugging and may be sent to other clients if they attempt to connect to the same device.  It will also be
     *  sent to other clients that are currently connected if this device does a forceConnect.
     * @param {boolean} forceConnect - if true, overtake any existing connection.
     * @param {number} heartbeatInterval - duration to wait for a PING before disconnecting
     * @param {number} reconnectDelay - duration to wait until a reconnect is attempted
     */
    constructor(applicationId: string,
                webSocketFactoryFunction: any,
                imageUtil: IImageUtil,
                cloverServer: string,
                accessToken: string,
                httpSupport: HttpSupport,
                merchantId: string,
                deviceId: string,
                friendlyId: string,
                forceConnect: boolean = false,
                heartbeatInterval?: number,
                reconnectDelay?: number) {
        super(applicationId,
            webSocketFactoryFunction,
            imageUtil,
            heartbeatInterval,
            reconnectDelay);
        this.cloverServer = cloverServer;
        this.accessToken = accessToken;
        this.httpSupport = httpSupport;
        this.merchantId = merchantId;
        this.deviceId = deviceId;
        this.friendlyId = friendlyId;
        this.forceConnect = forceConnect;
    }

    public getMessagePackageName(): string {
        return 'com.clover.remote.protocol.websocket';
    }

    public getName(): string {
        return 'Clover Cloud WebSocket Connector';
    }

    public getCloverDeviceType(): any {
        return WebsocketCloudCloverDevice;
    }

    public getCloverTransport(): CloverTransport {
        // this is where we determine more about the transport...
        // The connection is paired:
        let transport = new WebSocketCloudCloverTransport(
            this.heartbeatInterval,
            this.reconnectDelay,
            this.pingRetryCountBeforeReconnect,
            this.webSocketImplClass,

            this.cloverServer,
            this.merchantId,
            this.accessToken,
            this.deviceId,
            this.friendlyId,
            this.forceConnect,
            this.httpSupport
        );
        return transport;
    }
}
