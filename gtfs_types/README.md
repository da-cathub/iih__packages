# `@isithere/gtfs`

Make, Preprocess and Interact with GTFS feeds with ease!

---

## Install

```bash
# using NPM
npm i @isithere/gtfs

# using pnpm
pnpm i @isithere/gtfs
```

## Usage

```javascript
// using ModuleJS and the Everything Export
import { Route, Trip, Stop } from "@isithere/gtfs"

// using CommonJS and the Everything Export
const { Route, Trip, Stop } = require("@isithere/gtfs")

// using ModuleJS with direct Exports
import { Route } from "@isithere/gtfs/Route"
import { Trip } from "@isithere/gtfs/Trip"
import { Stop } from "@isithere/gtfs/Stop"

// using CommonJS with direct Exports
const { Route } = require("@isithere/gtfs/Route")
const { Trip } = require("@isithere/gtfs/Trip")
const { Stop } = require("@isithere/gtfs/Stop")
```

### Using Types

Almost every module also exports a `GTFS<Sheet Name>Object` interface

```typescript
import { GTFSStopObject } from "@isithere/gtfs/Stop"
```

### Building Feeds with Classes

Every module exports a class. These classes support both raw GTFS Entities converted to JS Objects and the easy to write custom notations.
```typescript
import { Stop, StopLocationType } from "@isithere/gtfs/Stop"

let customNotationStop = new Stop({
	id: "1",
	name: "Trnavské Mýto",
	longitude: 17.127401,
	latitude: 48.157644,
	zone: 100,
	locationType: StopLocationType.Station
})

console.log(customNotationStop.toJSON())	// Outputs JSONated GTFS Stop Notation.
											// Which you can pass into any CSV Converter

```

## Currenly Suported

These GTFS Sheets are currenly suported

- Agency
- Area
- Calendar
- CalendarDate
- FareAttribution
- FareLegRules
- FareMedia
- FareProduct
- FareRule
- FareTransferRule
- FeedInfo
- Network
- Route
- Stop
- StopTime
- Timeframe
- Trip

## Transparency Notice

This package is maintained by [IsItHere's Developer XP Team](https://iih.icu/devs) and is dogfooded internally by IsItHere in everyday Feed Processing and Data Enchancement.
Certain Edge cases might be missing or added in, could be not coresponding with the current GTFS specification. For any bugs, questions and ideas, please visit [IsItHere Packages Issue Tracker](https://github.com/da-cathub/iih__packages)

**Made in Bratislava**
IsItHere • isithere.sk
