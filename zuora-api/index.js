'use strict';

const accountingCodes = require('./accounting-codes');
const accountingPeriods = require('./accounting-periods');
const accounts = require('./accounts');
const actions = require('./actions');
const amendments = require('./amendments');
const attachments = require('./attachments');
const catalog = require('./catalog');
const chargeRevenueSummaries = require('./charge-revenue-summaries');
const connections = require('./connections');
const files = require('./files');
const hmacSignatures = require('./hmac-signatures');
const hostedPages = require('./hosted-pages');
const invoiceAdjustments = require('./invoice-adjustments');
const invoiceItems = require('./invoice-items');
const journalEntries = require('./journal-entries');
const journalRuns = require('./journal-runs');
const massUpdater = require('./journal-entries');
const notificationHistory = require('./notification-history');
const operations = require('./operations');
const payments = require('./payments');
const paymentMethods = require('./payment-methods');
const quotesDocument = require('./quotes-document');
const refunds = require('./refunds');
const revenueEvents = require('./revenue-events');
const revenueItems = require('./revenue-items');
const revenueRules = require('./revenue-rules');
const revenueSchedules = require('./revenue-schedules');
const rsaSignatures = require('./rsa-signatures');
const settings = require('./settings');
const subscriptions = require('./subscriptions');
const transactions = require('./transactions');
const usage = require('./usage');
const object = require('./zuora-object-resource');

module.exports = {
  accounting: {
    codes: accountingCodes,
    periods: accountingPeriods
  },
  accounts,
  actions,
  amendments,
  attachments,
  catalog,
  chargeRevenueSummaries,
  connections,
  files,
  hmacSignatures,
  hostedPages,
  invoiceAdjustments,
  invoiceItems,
  journal: {
    entries: journalEntries,
    runs: journalRuns
  },
  massUpdater,
  notificationHistory,
  operations,
  payments,
  paymentMethods,
  quotesDocument,
  refunds,
  revenue: {
    events: revenueEvents,
    items: revenueItems,
    rules: revenueRules,
    schedules: revenueSchedules
  },
  rsaSignatures,
  settings,
  subscriptions,
  transactions,
  usage,
  object
};
