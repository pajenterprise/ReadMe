import * as sdk from 'remote-pay-cloud-api';
import {Logger} from './util/Logger';

/**
 * Broadcasts events to a set of ICloverConnectorListener's
 *
 */
export class CloverConnectorBroadcaster
    // *JavaScript Implementation Note*:
    // The following causes type issues.
    //	extends Array<sdk.remotepay.ICloverConnectorListener>
{

    private listeners: Array<sdk.remotepay.ICloverConnectorListener>;

    private logger: Logger = Logger.create();

    constructor() {
        this.listeners = new Array<sdk.remotepay.ICloverConnectorListener>();
    }

    public clear(): void {
        this.listeners.splice(0, this.listeners.length);
    }

    public push(...items: Array<sdk.remotepay.ICloverConnectorListener>): number {
        if (items.length == 1) {
            return this.listeners.push(items[0]);
        } else {
            return this.listeners.push(<any>items);
        }
    }

    public indexOf(searchElement: sdk.remotepay.ICloverConnectorListener, fromIndex?: number): number {
        return this.listeners.indexOf(searchElement, fromIndex);
    }

    public splice(start: number, deleteCount: number, ...items: Array<sdk.remotepay.ICloverConnectorListener>): sdk.remotepay.ICloverConnectorListener[] {
        return (items && items.length > 0) ? this.listeners.splice(start, deleteCount, <any>items) : this.listeners.splice(start, deleteCount);
    }

    public notifyOnTipAdded(tip: number): void {
        this.logger.debug('Sending TipAdded notification to listeners');
        let tipAdded: sdk.remotepay.TipAdded = new sdk.remotepay.TipAdded();
        tipAdded.setTipAmount(tip);
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onTipAdded(tipAdded);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnRefundPaymentResponse(refundPaymentResponse: sdk.remotepay.RefundPaymentResponse): void {
        this.logger.debug('Sending RefundPaymentResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onRefundPaymentResponse(refundPaymentResponse);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyCloseout(closeoutResponse: sdk.remotepay.CloseoutResponse): void {
        this.logger.debug('Sending Closeout notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onCloseoutResponse(closeoutResponse);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnDeviceActivityStart(deviceEvent: sdk.remotepay.CloverDeviceEvent): void {
        this.logger.debug('Sending DeviceActivityStart notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onDeviceActivityStart(deviceEvent);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnDeviceActivityEnd(deviceEvent: sdk.remotepay.CloverDeviceEvent): void {
        this.logger.debug('Sending DeviceActivityEnd notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onDeviceActivityEnd(deviceEvent);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnSaleResponse(response: sdk.remotepay.SaleResponse): void {
        this.logger.debug('Sending SaleResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onSaleResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnAuthResponse(response: sdk.remotepay.AuthResponse): void {
        this.logger.debug('Sending AuthResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onAuthResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnManualRefundResponse(response: sdk.remotepay.ManualRefundResponse): void {
        this.logger.debug('Sending ManualRefundResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onManualRefundResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnVerifySignatureRequest(request: sdk.remotepay.VerifySignatureRequest): void {
        this.logger.debug('Sending VerifySignatureRequest notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onVerifySignatureRequest(request);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnVoidPaymentResponse(response: sdk.remotepay.VoidPaymentResponse): void {
        this.logger.debug('Sending VoidPaymentResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onVoidPaymentResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnVoidPaymentRefundResponse(response: sdk.remotepay.VoidPaymentRefundResponse): void {
        this.logger.debug('Sending VoidPaymentRefundResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onVoidPaymentRefundResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnConnect(): void {
        this.logger.debug('Sending Connect notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onDeviceConnected();
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnDisconnect(message?: string): void {
        this.logger.debug('Sending Disconnect notification to listeners', message);
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onDeviceDisconnected();  // changed from onDisconnected in 1.3
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnReady(merchantInfo: sdk.remotepay.MerchantInfo): void {
        this.logger.debug('Sending Ready notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onDeviceReady(merchantInfo);  // changed from onReady in 1.3
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnTipAdjustAuthResponse(response: sdk.remotepay.TipAdjustAuthResponse): void {
        this.logger.debug('Sending TipAdjustAuthResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onTipAdjustAuthResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnVaultCardRespose(ccr: sdk.remotepay.VaultCardResponse): void {
        this.logger.debug('Sending VaultCardResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onVaultCardResponse(ccr);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnPreAuthResponse(response: sdk.remotepay.PreAuthResponse): void {
        this.logger.debug('Sending PreAuthResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onPreAuthResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnCapturePreAuth(response: sdk.remotepay.CapturePreAuthResponse): void {
        this.logger.debug('Sending CapturePreAuth notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onCapturePreAuthResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnIncrementPreAuthResponse(response: sdk.remotepay.IncrementPreAuthResponse): void {
        this.logger.debug('Sending IncrementPreAuth notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onIncrementPreAuthResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnDeviceError(errorEvent: sdk.remotepay.CloverDeviceErrorEvent): void {
        this.logger.debug('Sending DeviceError notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onDeviceError(errorEvent);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnPrintRefundPaymentReceipt(printRefundPaymentReceiptResponse: sdk.remotepay.PrintRefundPaymentReceiptResponse): void {
        this.logger.debug('Sending PrintRefundPaymentReceipt notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onPrintRefundPaymentReceipt(printRefundPaymentReceiptResponse);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnPrintPaymentMerchantCopyReceipt(message: sdk.remotepay.PrintPaymentMerchantCopyReceiptMessage): void {
        this.logger.debug('Sending PrintPaymentMerchantCopyReceiptMessage notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onPrintPaymentMerchantCopyReceipt(message);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnPrintPaymentDeclineReceipt(message: sdk.remotepay.PrintPaymentDeclineReceiptMessage): void {
        this.logger.debug('Sending PrintPaymentDeclineReceiptMessage notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onPrintPaymentDeclineReceipt(message);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnPrintPaymentReceipt(message: sdk.remotepay.PrintPaymentReceiptMessage): void {
        this.logger.debug('Sending PrintPaymentReceiptMessage notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onPrintPaymentReceipt(message);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }


    public notifyOnPrintCreditReceipt(message: sdk.remotepay.PrintManualRefundReceiptMessage): void {
        this.logger.debug('Sending PrintManualRefundReceiptMessage notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onPrintManualRefundReceipt(message);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnPrintCreditDeclineReceipt(message: sdk.remotepay.PrintManualRefundDeclineReceiptMessage): void {
        this.logger.debug('Sending PrintManualRefundDeclineReceiptMessage notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onPrintManualRefundDeclineReceipt(message);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnConfirmPaymentRequest(confirmPaymentRequest: sdk.remotepay.ConfirmPaymentRequest): void {
        this.logger.debug('Sending ConfirmPaymentRequest notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onConfirmPaymentRequest(confirmPaymentRequest);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnRetrievePendingPaymentResponse(rppr: sdk.remotepay.RetrievePendingPaymentsResponse): void {
        this.logger.debug('Sending RetrievePendingPaymentResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onRetrievePendingPaymentsResponse(rppr);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnReadCardDataResponse(rcdr: sdk.remotepay.ReadCardDataResponse): void {
        this.logger.debug('Sending ReadCardDataResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onReadCardDataResponse(rcdr);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnActivityMessage(response: sdk.remotepay.MessageFromActivity): void {
        this.logger.debug('Sending MessageFromActivity notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onMessageFromActivity(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnActivityResponse(response: sdk.remotepay.CustomActivityResponse): void {
        this.logger.debug('Sending ActivityResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onCustomActivityResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnRetrieveDeviceStatusResponse(response: sdk.remotepay.RetrieveDeviceStatusResponse): void {
        this.logger.debug('Sending RetrieveDeviceStatusResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onRetrieveDeviceStatusResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnResetDeviceResponse(response: sdk.remotepay.ResetDeviceResponse): void {
        this.logger.debug('Sending ResetDeviceResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onResetDeviceResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnRetrievePaymentResponse(response: sdk.remotepay.RetrievePaymentResponse): void {
        this.logger.debug('Sending RetrievePaymentResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onRetrievePaymentResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnRetrievePrintersResponse(response: sdk.remotepay.RetrievePrintersResponse): void {
        this.logger.debug('Sending RetrievePrintersResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onRetrievePrintersResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnPrintJobStatusResponse(response: sdk.remotepay.PrintJobStatusResponse): void {
        this.logger.debug('Sending PrintJobStatusResponse notification to listeners');
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onPrintJobStatusResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnCustomerProvidedDataEvent(event: sdk.remotepay.CustomerProvidedDataEvent): void{
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try{
                listener.onCustomerProvidedData(event);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnDisplayReceiptOptionsResponse(response: sdk.remotepay.DisplayReceiptOptionsResponse): void {
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onDisplayReceiptOptionsResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnInvalidStateTransitionResponse(response: sdk.remotepay.InvalidStateTransitionResponse): void {
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onInvalidStateTransitionResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnSignatureCollected(response: sdk.remotepay.SignatureResponse): void {
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                // TODO - this will be implemented in the future - listener.onRequestSignatureResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnCheckBalanceResponse(response: sdk.remotepay.CheckBalanceResponse): void {
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                listener.onCheckBalanceResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

    public notifyOnTipResponse(response: sdk.remotepay.TipResponse): void {
        this.listeners.forEach((listener: sdk.remotepay.ICloverConnectorListener) => {
            try {
                // TODO - this will be implemented in the future - listener.onRequestTipResponse(response);
            } catch (e) {
                this.logger.error(e);
            }
        });
    }

}
