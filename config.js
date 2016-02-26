// Copy to app/scripts/config.js

window.nodelistconfig = {
	dataPath: 'https://mesh.ffnord.net/data/',
	mapPath: 'https://mesh.ffnord.net/',
	siteName: 'Freifunk Nord',
	
	nodeUpStartColor:   {h:  61, s: 100, l: 50},
	nodeUpEndColor:     {h: 122, s:  97, l: 50},
	nodeUpGamma:        0.5,
	nodeUpDays:         30,
	/// TODO The same for down hosts
	// nodeDownStartColor: {h:  22, s: 100, l: 82},
	// nodeDownEndColor:   {h:   0, s: 100, l: 70},
	
	dataMagnitudes: [
		{threshold: Math.pow(1024, 2), suffix: 'KiB', scale: Math.pow(1024, 1), tailing: 3},
		{threshold: Math.pow(1024, 3), suffix: 'MiB', scale: Math.pow(1024, 2), tailing: 3},
		{threshold: Math.pow(1024, 4), suffix: 'GiB', scale: Math.pow(1024, 3), tailing: 3},
		{threshold: Math.pow(1024, 5), suffix: 'TiB', scale: Math.pow(1024, 4), tailing: 3},
	],
	
	showCols: [
		'hasVpn',
		'hasLocation',
		'neighbourCnt',
		'id',
		'hostname',
		'owner',
		'version',
		'model',
		'autoupdater',
		'clients',
		'gateway',
		'site',
		'uptime',
		'firstSeen',
		'lastSeen',
		'rootfsUsage',
		'memoryUsage',
		'traFwdRate',
		'traTxRate',
		'traMgmtTxRate',
	],
};
