import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthBillingInternalModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Get user's subscriptions
     * GET /_internal/billing/subscriptions
     */
    getSubscriptions(userId?: string): Promise<Labrinth.Billing.Internal.UserSubscription[]>;
    /**
     * Get available products for purchase
     * GET /_internal/billing/products
     */
    getProducts(): Promise<Labrinth.Billing.Internal.Product[]>;
    /**
     * Get Stripe customer information
     * GET /_internal/billing/customer
     */
    getCustomer(): Promise<unknown>;
    /**
     * Edit a subscription (change product, interval, cancel, etc.)
     * PATCH /_internal/billing/subscription/{id}
     */
    editSubscription(id: string, edit: Labrinth.Billing.Internal.EditSubscriptionRequest, dry?: boolean): Promise<Labrinth.Billing.Internal.EditSubscriptionResponse | void>;
    /**
     * Get user's payment methods
     * GET /_internal/billing/payment_methods
     */
    getPaymentMethods(): Promise<unknown[]>;
    /**
     * Initiate flow to add a new payment method
     * POST /_internal/billing/payment_method
     */
    addPaymentMethodFlow(): Promise<Labrinth.Billing.Internal.AddPaymentMethodFlowResponse>;
    /**
     * Edit a payment method (set as primary)
     * PATCH /_internal/billing/payment_method/{id}
     */
    editPaymentMethod(id: string, body: Labrinth.Billing.Internal.EditPaymentMethodRequest): Promise<void>;
    /**
     * Remove a payment method
     * DELETE /_internal/billing/payment_method/{id}
     */
    removePaymentMethod(id: string): Promise<void>;
    /**
     * Get payment history (charges)
     * GET /_internal/billing/payments
     */
    getPayments(userId?: string): Promise<Labrinth.Billing.Internal.Charge[]>;
    /**
     * Initiate a payment
     * POST /_internal/billing/payment
     */
    initiatePayment(request: Labrinth.Billing.Internal.InitiatePaymentRequest): Promise<Labrinth.Billing.Internal.InitiatePaymentResponse>;
    /**
     * Refund a charge (Admin only)
     * POST /_internal/billing/charge/{id}/refund
     */
    refundCharge(id: string, refund: Labrinth.Billing.Internal.RefundChargeRequest): Promise<void>;
    /**
     * Credit subscriptions (Admin only)
     * POST /_internal/billing/credit
     */
    credit(request: Labrinth.Billing.Internal.CreditRequest): Promise<void>;
}
