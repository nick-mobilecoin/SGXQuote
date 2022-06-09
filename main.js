function init(){
    var quote = struct({
        header: header(),
        enclave_report: report_body(),
        quote_length: uint32(),
        quote_signature: ecdsa_signature_data(),
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

function ecdsa_signature_data(){
    var data = struct({
        isv_signature: ecdsa_signature(),
        attestation_key: ecdsa_key(),
        qe_report: report_body(),
        qe_report_signature: ecdsa_signature(),
        qe_authentication_data: authentication_data(),
        qe_certification_data: certification_data(),
    });
    return data;
}

function ecdsa_signature(){
    var signature = struct({
        r: array(uint8(), 32),
        s: array(uint8(), 32),
    });
    return signature;
}

function ecdsa_key(){
    var key = struct({
        x: array(uint8(), 32),
        y: array(uint8(), 32),
    });
    return key;
}

function authentication_data(){
    var data = struct({
        size: uint16(),
        data: array(uint8(), function(){ return this.size; }),
    });
    return data;
}

function certification_data(){
    var data = struct({
        type: uint16(),
        size: uint32(),
        data: array(uint8(), function(){ return this.size; }),
    });
    return data;
}

function report_body(){
    var report = struct({
        cpu_svn: array(uint8(), 16),
        miscselect: uint32(),
        reserved_1: array(uint8(), 28),
        attributes: array(uint8(), 16),
        MRENCLAVE: array(uint8(), 32),
        reserved_2: array(uint8(), 32),
        MRSIGNER: array(uint8(), 32),
        reserved_3: array(uint8(), 96),
        isv_prod_id: uint16(),
        isv_svn: uint16(),
        reserved_4: array(uint8(), 60),
        report_data: array(uint8(), 64),
    });
    return report;
}
