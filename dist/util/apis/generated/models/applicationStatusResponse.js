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
 * The status information from Itunes portal
 *
 */
class ApplicationStatusResponse {
  /**
   * Create a ApplicationStatusResponse.
   * @property {string} versionType The type of version being returned
   * (production/edit/test flight).
   * @property {string} [version] The version of the application
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationStatusResponse
   *
   * @returns {object} metadata of ApplicationStatusResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationStatusResponse',
      type: {
        name: 'Composite',
        className: 'ApplicationStatusResponse',
        modelProperties: {
          versionType: {
            required: true,
            serializedName: 'version_type',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationStatusResponse;
