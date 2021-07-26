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
 * Access token details
 *
 */
class AlertingAccessTokenResponse {
  /**
   * Create a AlertingAccessTokenResponse.
   * @property {string} accessTokenId ID of the access token
   * @property {string} externalProviderName External provider name. Possible
   * values include: 'github', 'vsts', 'jira'
   * @property {string} externalUserEmail The email of external user that used
   * to authenticate aginst the external oauth provider
   * @property {string} externalAccountName The account name of external user
   * that used to authenticate against the external oauth provider or basic
   * auth
   */
  constructor() {
  }

  /**
   * Defines the metadata of AlertingAccessTokenResponse
   *
   * @returns {object} metadata of AlertingAccessTokenResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AlertingAccessTokenResponse',
      type: {
        name: 'Composite',
        className: 'AlertingAccessTokenResponse',
        modelProperties: {
          accessTokenId: {
            required: true,
            serializedName: 'access_token_id',
            type: {
              name: 'String'
            }
          },
          externalProviderName: {
            required: true,
            serializedName: 'external_provider_name',
            type: {
              name: 'String'
            }
          },
          externalUserEmail: {
            required: true,
            serializedName: 'external_user_email',
            type: {
              name: 'String'
            }
          },
          externalAccountName: {
            required: true,
            serializedName: 'external_account_name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AlertingAccessTokenResponse;
