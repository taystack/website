import { useEffect } from "react";


export default (global.GA || (global.GA = new GoogleAnalytics()));

function GoogleAnalytics() {
  this.trackers = {};
  this.events = {};
  this.globalOptions = {};

  this.hasTrackers = () => { return Object.keys(this.trackers).length > 0; };
}

class UseGoogleAnalyticsNotInitialized extends Error {
  constructor() { super("Must initialize @taystack/use-google-analytics somewhere in your code before using any hooks, eg; import GoogleAnalytics from \"@taystack/use-google-analytics\"; GoogleAnalytics.initialize(TRACKING_CODE);"); }
}
class UseGoogleAnalyticsEventCategoryMissing extends Error {
  constructor(category) { super(`GoogleAnalytics.addEvent expects a STRING category as the first argument. ${category ? ` You provided ${category}` : ""}`); }
}

Object.defineProperty(GoogleAnalytics.prototype, "initialize", {
  writable: false,
  value: function(trackingCodes = {}, options = {}) {
    console.log(`useGoogleAnalytics initializing with tracking codes ${Object.keys(trackingCodes)}`);
    this.globalOptions = { ...options };
    try {
      Object.keys(trackingCodes).forEach(code => {
        this.addTrackingCode(code, trackingCodes[code]);
      });
    } catch(e) {
      console.log("useGoogleAnalytics had an oopsie", e);
    }
    return this;
  }
});

GoogleAnalytics.prototype.addTrackingCode = function(trackingCode, options = {}) {
  try {
    this.trackers[trackingCode] = { ...options };
    console.log(`useGoogleAnalytics added tracking code ${trackingCode}`);
  } catch(e) {
    console.log("useGoogleAnalytics had an oopsie", e);
  }
  return this;
}

GoogleAnalytics.prototype.addEvent = function(category = "", options = {}) {
  try {
    if (category.length === 0) throw new UseGoogleAnalyticsEventCategoryMissing();
  } catch (e) { throw new UseGoogleAnalyticsEventCategoryMissing(category); }

  if (!this.events[category]) this.events[category] = { ...options };

  return this.events[category];
}

export function useGoogleAnalytics(page) {
  // Throw if we don't have a tracking code
  if (!global.GA.hasTrackers()) throw new UseGoogleAnalyticsNotInitialized();

  // Watch for argument changes...
  useEffect(() => {

    console.log(`useGoogleAnalytics with tracking code ${Object.keys(global.GA.trackers)} on page ${page}`);

  }, [page]);

  // Return
  return global.GA.code;
}
