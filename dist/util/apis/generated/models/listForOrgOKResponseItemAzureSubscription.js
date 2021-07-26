/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ListForOrgOKResponseItemAzureSubscription.
 */
class ListForOrgOKResponseItemAzureSubscription {
  /**
   * Create a ListForOrgOKResponseItemAzureSubscription.
   * @property {uuid} subscriptionId The azure subscription id
   * @property {uuid} tenantId The tenant id of the azure subscription belongs
   * to
   * @property {string} subscriptionName The name of the azure subscription
   * @property {boolean} [isBilling] If the subscription is used for billing
   * @property {boolean} [isBillable] If the subscription can be used for
   * billing
   * @property {boolean} [isMicrosoftInternal] If the subscription is internal
   * Microsoft subscription
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListForOrgOKResponseItemAzureSubscription
   *
   * @returns {object} metadata of ListForOrgOKResponseItemAzureSubscription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListForOrgOKResponseItem_azure_subscription',
      type: {
        name: 'Composite',
        className: 'ListForOrgOKResponseItemAzureSubscription',
        modelProperties: {
          subscriptionId: {
            required: true,
            serializedName: 'subscription_id',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: true,
            serializedName: 'tenant_id',
            type: {
              name: 'String'
            }
          },
          subscriptionName: {
            required: true,
            serializedName: 'subscription_name',
            type: {
              name: 'String'
            }
          },
          isBilling: {
            required: false,
            serializedName: 'is_billing',
            type: {
              name: 'Boolean'
            }
          },
          isBillable: {
            required: false,
            serializedName: 'is_billable',
            type: {
              name: 'Boolean'
            }
          },
          isMicrosoftInternal: {
            required: false,
            serializedName: 'is_microsoft_internal',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ListForOrgOKResponseItemAzureSubscription;
