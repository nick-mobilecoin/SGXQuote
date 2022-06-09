function init(){
    var quote = struct({
        header: header(),
    });
    return quote;
}

function header(){
    var header = struct({
        version: uint16(),
        key_type: uint16(),
        reserved: uint32(),
        qe_svn: uint16(),
        pce_svn: uint16(),
        qe_vendor_id: array(uint8(), 16),
        qe_id: array(uint8(), 16),
        user_data: array(uint8(), 4),
    });
    return header;
}
