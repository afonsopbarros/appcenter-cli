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
 * @summary Test Run Summary
  *
 * Most important information about a test run.
 *
 */
class PatchTestSeriesOKResponseTestRunsItem {
  /**
   * Create a PatchTestSeriesOKResponseTestRunsItem.
   * @property {string} [date] Date of the test run.
   * @property {string} [statusDescription] Human-readable status of the test
   * run.
   * @property {number} [failed] Number of failed tests
   * @property {number} [passed] Number of passed tests
   * @property {boolean} [completed] Tells whether the test run has completed
   */
  constructor() {
  }

  /**
   * Defines the metadata of PatchTestSeriesOKResponseTestRunsItem
   *
   * @returns {object} metadata of PatchTestSeriesOKResponseTestRunsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PatchTestSeriesOKResponse_testRunsItem',
      type: {
        name: 'Composite',
        className: 'PatchTestSeriesOKResponseTestRunsItem',
        modelProperties: {
          date: {
            required: false,
            serializedName: 'date',
            type: {
              name: 'String'
            }
          },
          statusDescription: {
            required: false,
            serializedName: 'statusDescription',
            type: {
              name: 'String'
            }
          },
          failed: {
            required: false,
            serializedName: 'failed',
            type: {
              name: 'Number'
            }
          },
          passed: {
            required: false,
            serializedName: 'passed',
            type: {
              name: 'Number'
            }
          },
          completed: {
            required: false,
            serializedName: 'completed',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = PatchTestSeriesOKResponseTestRunsItem;
