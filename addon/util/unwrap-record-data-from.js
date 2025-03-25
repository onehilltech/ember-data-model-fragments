import { gte } from "ember-compatibility-helpers";

export default function unwrapRecordDataFrom (recordData) {
  if (gte ('ember-data', '4.7.0') && recordData && recordData.__private_1_recordData) {
    return recordData.__private_1_recordData;
  }
  else {
    return recordData;
  }
}
