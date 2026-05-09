export enum RouteVehicleType {

	// # Regular Types from https://gtfs.org/schedule/reference/#routestxt

	Tram		= 0,	// @ Any light rail or street level system within a metropolitan area.
	Streetcar	= 0,
	LightRail	= 0,
	Subway		= 1,	// @ Any underground rail system within a metropolitan area.
	Metro		= 1,
	Rail		= 2,	// @ Used for intercity or long-distance travel.
	Bus			= 3,	// @ Used for short- and long-distance bus routes.
	Ferry		= 4,	// @ Used for short- and long-distance boat service.
	CableCar	= 5,	// @ Used for street-level rail cars where the cable runs beneath the vehicle (e.g., cable car in San Francisco).
	ArealLift	= 6,	// @ Cable transport where cabins, cars, gondolas or open chairs are suspended by means of one or more cables.
	Gondola		= 6,
	Funicular	= 7,	// @ Any rail system designed for steep inclines.
	Trolleybus	= 11,	// @ Electric buses that draw power from overhead wires using poles.
	Monorail	= 12,	// @ Railway in which the track consists of a single rail or a beam.
	
}

export enum RouteVehicleTypeExtended {

	// # Extended Types from https://developers.google.com/transit/gtfs/reference/extended-route-types

	// RAIL
	RailwayService			= 100,
	HighSpeedRail			= 101,
	LongDistanceTrain		= 102,
	InterRegionalRail		= 103,
//	CarRransportRail		= 104,		// @ Unsupported
	SleeperRail				= 105,
	RegionalRail			= 106,
	TouristRail				= 107,
	RailShuttleInComplex	= 108,
	SuburbanRail			= 109,
//	ReplacementRailService	= 110,		// @ Unsupported
//	SpecialRailService		= 111,		// @ Unsupported
//	LorryTransportRail		= 112,		// @ Unsupported
//	AllRailServices			= 113,		// @ Unsupported
//	XCountryRail			= 114,		// @ Unsupported
//	VehicleTransportRail	= 115,		// @ Unsupported
//	RackAndPinionRailway	= 116,		// @ Unsupported
//	AdditionalRailService	= 117,		// @ Unsupported

	// COACH
	CoachService			= 200,
	InternationalCoach		= 201,
	NationalCoach			= 202,
//	ShuttleCoach			= 203,		// @ Unsupported
	RegionalCoach			= 204,
//	SpecialCoach			= 205,		// @ Unsupported
//	SightseeingCoach		= 206,		// @ Unsupported
//	TouristCoach			= 207,		// @ Unsupported
//	CommuterCoach			= 208,		// @ Unsupported
//	AllCoachServices		= 209,		// @ Unsupported

	// URBAN RAILWAY
	UrbanRailwayService		= 400,
	Metro					= 401,
	Underground				= 402,
	UrbanRailwayService2	= 403,		// TODO: Get Better Name
//	AllUrbanRailwayServices	= 404,		// @ Unsupported

	// BUS
	BusService				= 700,
	RegionalBus				= 701,
	ExpressBus				= 702,
//	StoppingBus				= 703,		// @ Unsupported
	LocalBus				= 704,
//	NightBus				= 705,		// @ Unsupported
//	PostBus					= 706,		// @ Unsupported
//	SpecialNeedBus			= 707,		// @ Unsupported
//	MobilityBus				= 708,		// @ Unsupported
//	MobilityBusRegDisabled	= 709,		// @ Unsupported
//	SightseeingBus			= 710,		// @ Unsupported
//	ShuttleBus				= 711,		// @ Unsupported
//	SchoolBus				= 712,		// @ Unsupported
//	SchoolAndPublicBus		= 713,		// @ Unsupported
//	RailReplacementBus		= 714,		// @ Unsupported
	DemandResponseBus		= 715,
//	AllBusServices			= 716,		// @ Unsupported

	// TROLLEYBUS
	TrolleybusService		= 800,

	// TRAM
	TramService				= 900,
//	CityTram				= 901,		// @ Unsupported
//	LocalTram				= 902,		// @ Unsupported
//	RegionalTram			= 903,		// @ Unsupported
//	SightseeingTram			= 904,		// @ Unsupported
//	ShuttleTram				= 905,		// @ Unsupported
//	AllTramServices			= 906,		// @ Unsupported

	// WATER TRANSPORT
	WaterTransportService	= 1000,

	// AIR
	AirService				= 1100,

	// FERRY
	FerryService			= 1200,

	// AREAL LIFT
	ArealLiftService		= 1300,
	TelecabinService		= 1301,
//	CableCar				= 1302,		// @ Unsupported
//	Elevator				= 1303,		// @ Unsupported
//	ChairLift				= 1304,		// @ Unsupported
//	DragLift				= 1305,		// @ Unsupported
//	SmallTelecabin			= 1306,		// @ Unsupported
//	AllTelecabinServices	= 1307,		// @ Unsupported

	// FUNICULAR
	FunicularServices		= 1400,

	// TAXI
//	TaxiService				= 1500,		// @ Unsupported
	ComunalTaxi				= 1501,
//	WaterTaxi				= 1502,		// @ Unsupported
//	RailTaxi				= 1503,		// @ Unsupported
//	Biketaxi				= 1504,		// @ Unsupported
//	Licesnsedtaxi			= 1505,		// @ Unsupported
//	PrivateHireTaxi			= 1506,		// @ Unsupported
//	AlltaxiServices			= 1507,		// @ Unsupported

	// MISCELLANEOUS
	MiscellaneousService	= 1700,
	HorseDrawnCarriage		= 1702,

}