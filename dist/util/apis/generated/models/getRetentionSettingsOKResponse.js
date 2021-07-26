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
 * Class representing a GetRetentionSettingsOKResponse.
 */
class GetRetentionSettingsOKResponse {
  /**
   * Create a GetRetentionSettingsOKResponse.
   * @property {number} retentionInDays
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetRetentionSettingsOKResponse
   *
   * @returns {object} metadata of GetRetentionSettingsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetRetentionSettingsOKResponse',
      type: {
        name: 'Composite',
        className: 'GetRetentionSettingsOKResponse',
        modelProperties: {
          retentionInDays: {
            required: true,
            serializedName: 'retention_in_days',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = GetRetentionSettingsOKResponse;
