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
 * Represents database usage metrics.
 *
 */
class MetricsResponseMetrics {
  /**
   * Create a MetricsResponseMetrics.
   * @property {number} [interval]
   * @property {number} [totalRequests]
   * @property {number} [totalRequestUnits]
   * @property {number} [dataUsage]
   * @property {number} [indexUsage]
   * @property {object} [latencyMetrics]
   * @property {object} [latencyMetrics.readLatencyMetrics]
   * @property {string} [latencyMetrics.readLatencyMetrics.name]
   * @property {string} [latencyMetrics.readLatencyMetrics.unit]
   * @property {date} [latencyMetrics.readLatencyMetrics.startTime]
   * @property {date} [latencyMetrics.readLatencyMetrics.endTime]
   * @property {array} [latencyMetrics.readLatencyMetrics.metricValues]
   * @property {object} [latencyMetrics.writeLatencyMetrics]
   * @property {string} [latencyMetrics.writeLatencyMetrics.name]
   * @property {string} [latencyMetrics.writeLatencyMetrics.unit]
   * @property {date} [latencyMetrics.writeLatencyMetrics.startTime]
   * @property {date} [latencyMetrics.writeLatencyMetrics.endTime]
   * @property {array} [latencyMetrics.writeLatencyMetrics.metricValues]
   */
  constructor() {
  }

  /**
   * Defines the metadata of MetricsResponseMetrics
   *
   * @returns {object} metadata of MetricsResponseMetrics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MetricsResponse_metrics',
      type: {
        name: 'Composite',
        className: 'MetricsResponseMetrics',
        modelProperties: {
          interval: {
            required: false,
            serializedName: 'interval',
            type: {
              name: 'Number'
            }
          },
          totalRequests: {
            required: false,
            serializedName: 'totalRequests',
            type: {
              name: 'Number'
            }
          },
          totalRequestUnits: {
            required: false,
            serializedName: 'totalRequestUnits',
            type: {
              name: 'Number'
            }
          },
          dataUsage: {
            required: false,
            serializedName: 'dataUsage',
            type: {
              name: 'Number'
            }
          },
          indexUsage: {
            required: false,
            serializedName: 'indexUsage',
            type: {
              name: 'Number'
            }
          },
          latencyMetrics: {
            required: false,
            serializedName: 'latencyMetrics',
            type: {
              name: 'Composite',
              className: 'MetricsResponseMetricsLatencyMetrics'
            }
          }
        }
      }
    };
  }
}

module.exports = MetricsResponseMetrics;
