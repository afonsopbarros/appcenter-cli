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
 * Class representing a EventCountCountItem.
 */
class EventCountCountItem {
  /**
   * Create a EventCountCountItem.
   * @property {string} [datetime] The ISO 8601 datetime.
   * @property {number} [count] Count of the object.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventCountCountItem
   *
   * @returns {object} metadata of EventCountCountItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventCount_countItem',
      type: {
        name: 'Composite',
        className: 'EventCountCountItem',
        modelProperties: {
          datetime: {
            required: false,
            serializedName: 'datetime',
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

module.exports = EventCountCountItem;
