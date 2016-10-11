var _global_console = global.console;
var _global_location;
var _secure_origin;
if (typeof _global_location === 'undefined') {
    _secure_origin = true;
} else {
    _secure_origin = !global.location.protocol.search( /https:|file:|chrome:|chrome-extension:/ );
}

if ( !_secure_origin && _global_console !== undefined ) {
    _global_console.warn("asmCrypto seems to be load from an insecure origin; this may cause to MitM-attack vulnerability. Consider using secure transport protocol.");
}
