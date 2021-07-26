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
 * Notification failure outcome count
 *
 */
class NotificationDetailsResultFailureOutcomesItem {
  /**
   * Create a NotificationDetailsResultFailureOutcomesItem.
   * @property {string} [failureReason] The reason of the notification failure
   * @property {number} [count] count of this type of failure
   */
  constructor() {
  }

  /**
   * Defines the metadata of NotificationDetailsResultFailureOutcomesItem
   *
   * @returns {object} metadata of NotificationDetailsResultFailureOutcomesItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NotificationDetailsResult_failure_outcomesItem',
      type: {
        name: 'Composite',
        className: 'NotificationDetailsResultFailureOutcomesItem',
        modelProperties: {
          failureReason: {
            required: false,
            serializedName: 'failure_reason',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationDetailsResultFailureOutcomesItem;
