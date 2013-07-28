exports.findAllCountryCodes = function(req, res) {
    res.send(
    	[
    		{name:'it'}, 
    		{name:'de'}, 
    		{name:'uk'}
    	]
    );
};
 
exports.findCountryById = function(req, res) {
    res.send(
    	{
    		id:req.params.id, 
    		name: "Italia", 
    		code: "it"
    	}
    );
};