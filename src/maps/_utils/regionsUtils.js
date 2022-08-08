export const getRegion = (countryCode) => {

  let region;

  switch(countryCode) {
    case "VE" :
    case "UY" :
    case "FK" :
    case "SR" :
    case "PE" :
    case "PY" :
    case "GF" :
    case "EC" :
    case "GY" :
    case "CO" :
    case "CL" :
    case "BO" :
    case "BR" :
    case "AR" : region = "South America"; break;
    case "KM" :
    case "MU" :
    case "TZ" :
    case "EH" :
    case "CD" :
    case "SO" :
    case "KE" :
    case "SD" :
    case "TD" :
    case "ZA" :
    case "LS" :
    case "ZW" :
    case "BW" :
    case "NA" :
    case "SN" :
    case "ML" :
    case "MR" :
    case "BJ" :
    case "NE" :
    case "NG" :
    case "CM" :
    case "TG" :
    case "GH" :
    case "CI" :
    case "GN" :
    case "GW" :
    case "LR" :
    case "SL" :
    case "BF" :
    case "CF" :
    case "CG" :
    case "GA" :
    case "GQ" :
    case "ZM" :
    case "MW" :
    case "MZ" :
    case "SZ" :
    case "AO" :
    case "BI" :
    case "MG" :
    case "GM" :
    case "TN" :
    case "DZ" :
    case "ER" :
    case "MA" :
    case "EG" :
    case "LY" :
    case "ET" :
    case "DJ" :
    case "UG" :
    case "RW" :
    case "SS" :
    case "YT" :
    case "RE" :
    case "SC" : region = "Africa"; break;
    case "UZ" :
    case "TM" :
    case "TJ" :
    case "KG" :
    case "KZ" :
    case "TW" :
    case "KR" :
    case "KP" :
    case "MN" :
    case "JP" :
    case "CN" :
    case "MO" :
    case "HK" :
    case "VN" :
    case "TL" :
    case "TH" :
    case "SG" :
    case "PH" :
    case "MY" :
    case "LA" :
    case "ID" :
    case "KH" :
    case "MM" :
    case "BN" :
    case "LK" :
    case "PK" :
    case "NP" :
    case "MV" :
    case "IR" :
    case "BT" :
    case "BD" :
    case "AF" :
    case "IN" :
    case "YE" :
    case "AE" :
    case "TR" :
    case "SY" :
    case "SA" :
    case "QA" :
    case "OM" :
    case "LB" :
    case "KW" :
    case "JO" :
    case "IL" :
    case "PS" :
    case "IQ" :
    case "GE" :
    case "CY" :
    case "BH" :
    case "AZ" :
    case "AM" : region = "Asia"; break;
    case "CC" :
    case "NZ" :
    case "VU" :
    case "FM" :
    case "SB" :
    case "PW" :
    case "NR" :
    case "NC" :
    case "AU" :
    case "PG" :
    case "FJ" :
    case "GU" :
    case "MH" :
    case "MP" :
    case "TV" : region = "Oceania"; break;
    case "VI" :
    case "CA" :
    case "BM" :
    case "US" :
    case "GL" :
    case "MX" :
    case "PM" :
    case "PA" :
    case "NI" :
    case "HN" :
    case "GT" :
    case "SV" :
    case "CR" :
    case "BZ" :
    case "PR" :
    case "AI" :
    case "KY" :
    case "VG" :
    case "TC" :
    case "MS" :
    case "TT" :
    case "VC" :
    case "LC" :
    case "KN" :
    case "BQ" :
    case "JM" :
    case "HT" :
    case "GD" :
    case "MQ" :
    case "GP" :
    case "MF" :
    case "BL" :
    case "DO" :
    case "DM" :
    case "CU" :
    case "BB" :
    case "BS" :
    case "SX" :
    case "AG" :
    case "AW" :
    case "CW" : region = "North America"; break;
    case "NL" :
    case "VA" :
    case "JE" :
    case "IM" :
    case "GB" :
    case "UA" :
    case "CH" :
    case "SE" :
    case "ES" :
    case "SK" :
    case "SI" :
    case "RS" :
    case "SM" :
    case "RO" :
    case "PT" :
    case "PL" :
    case "ME" :
    case "MD" :
    case "MT" :
    case "MK" :
    case "LU" :
    case "LT" :
    case "LI" :
    case "LV" :
    case "XK" :
    case "IT" :
    case "IE" :
    case "IS" :
    case "HU" :
    case "GR" :
    case "DE" :
    case "AX" :
    case "FI" :
    case "EE" :
    case "FO" :
    case "DK" :
    case "CZ" :
    case "HR" :
    case "BG" :
    case "BA" :
    case "BE" :
    case "BY" :
    case "AT" :
    case "AD" :
    case "AL" :
    case "FR" :
    case "NO" :
    case "MC" : region = "Europe"; break;
    default : region = "none";
  }

  return region;
}
