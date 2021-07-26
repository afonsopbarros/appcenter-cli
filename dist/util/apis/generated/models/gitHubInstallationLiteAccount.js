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
 * The GitHub Installation
 *
 */
class GitHubInstallationLiteAccount {
  /**
   * Create a GitHubInstallationLiteAccount.
   * @property {string} [id] GitHub Account Id
   * @property {string} [login] GitHub Account Login Name
   * @property {string} [type] GitHub Account Type
   * @property {string} [url] GitHub Account Url
   */
  constructor() {
  }

  /**
   * Defines the metadata of GitHubInstallationLiteAccount
   *
   * @returns {object} metadata of GitHubInstallationLiteAccount
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GitHubInstallationLite_account',
      type: {
        name: 'Composite',
        className: 'GitHubInstallationLiteAccount',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          login: {
            required: false,
            serializedName: 'login',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GitHubInstallationLiteAccount;
