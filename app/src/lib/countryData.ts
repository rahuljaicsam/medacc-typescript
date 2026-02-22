export interface CountryData {
  name: string;
  code: string;
  currency: string;
  currencySymbol: string;
}

export const countries: CountryData[] = [
  // A
  { name: 'Afghanistan', code: 'AF', currency: 'AFN', currencySymbol: '؋' },
  { name: 'Albania', code: 'AL', currency: 'ALL', currencySymbol: 'L' },
  { name: 'Algeria', code: 'DZ', currency: 'DZD', currencySymbol: 'د.ج' },
  { name: 'Andorra', code: 'AD', currency: 'EUR', currencySymbol: '€' },
  { name: 'Angola', code: 'AO', currency: 'AOA', currencySymbol: 'Kz' },
  { name: 'Antigua and Barbuda', code: 'AG', currency: 'XCD', currencySymbol: '$' },
  { name: 'Argentina', code: 'AR', currency: 'ARS', currencySymbol: '$' },
  { name: 'Armenia', code: 'AM', currency: 'AMD', currencySymbol: '֏' },
  { name: 'Australia', code: 'AU', currency: 'AUD', currencySymbol: 'A$' },
  { name: 'Austria', code: 'AT', currency: 'EUR', currencySymbol: '€' },
  { name: 'Azerbaijan', code: 'AZ', currency: 'AZN', currencySymbol: '₼' },

  // B
  { name: 'Bahamas', code: 'BS', currency: 'BSD', currencySymbol: '$' },
  { name: 'Bahrain', code: 'BH', currency: 'BHD', currencySymbol: '.د.ب' },
  { name: 'Bangladesh', code: 'BD', currency: 'BDT', currencySymbol: '৳' },
  { name: 'Barbados', code: 'BB', currency: 'BBD', currencySymbol: '$' },
  { name: 'Belarus', code: 'BY', currency: 'BYN', currencySymbol: 'Br' },
  { name: 'Belgium', code: 'BE', currency: 'EUR', currencySymbol: '€' },
  { name: 'Belize', code: 'BZ', currency: 'BZD', currencySymbol: '$' },
  { name: 'Benin', code: 'BJ', currency: 'XOF', currencySymbol: 'Fr' },
  { name: 'Bhutan', code: 'BT', currency: 'BTN', currencySymbol: 'Nu.' },
  { name: 'Bolivia', code: 'BO', currency: 'BOB', currencySymbol: 'Bs.' },
  { name: 'Bosnia and Herzegovina', code: 'BA', currency: 'BAM', currencySymbol: 'KM' },
  { name: 'Botswana', code: 'BW', currency: 'BWP', currencySymbol: 'P' },
  { name: 'Brazil', code: 'BR', currency: 'BRL', currencySymbol: 'R$' },
  { name: 'Brunei', code: 'BN', currency: 'BND', currencySymbol: '$' },
  { name: 'Bulgaria', code: 'BG', currency: 'BGN', currencySymbol: 'лв' },
  { name: 'Burkina Faso', code: 'BF', currency: 'XOF', currencySymbol: 'Fr' },
  { name: 'Burundi', code: 'BI', currency: 'BIF', currencySymbol: 'Fr' },

  // C
  { name: 'Cabo Verde', code: 'CV', currency: 'CVE', currencySymbol: 'Esc' },
  { name: 'Cambodia', code: 'KH', currency: 'KHR', currencySymbol: '៛' },
  { name: 'Cameroon', code: 'CM', currency: 'XAF', currencySymbol: 'Fr' },
  { name: 'Canada', code: 'CA', currency: 'CAD', currencySymbol: 'C$' },
  { name: 'Central African Republic', code: 'CF', currency: 'XAF', currencySymbol: 'Fr' },
  { name: 'Chad', code: 'TD', currency: 'XAF', currencySymbol: 'Fr' },
  { name: 'Chile', code: 'CL', currency: 'CLP', currencySymbol: '$' },
  { name: 'China', code: 'CN', currency: 'CNY', currencySymbol: '¥' },
  { name: 'Colombia', code: 'CO', currency: 'COP', currencySymbol: '$' },
  { name: 'Comoros', code: 'KM', currency: 'KMF', currencySymbol: 'Fr' },
  { name: 'Congo (Congo-Brazzaville)', code: 'CG', currency: 'XAF', currencySymbol: 'Fr' },
  { name: 'Costa Rica', code: 'CR', currency: 'CRC', currencySymbol: '₡' },
  { name: 'Croatia', code: 'HR', currency: 'EUR', currencySymbol: '€' },
  { name: 'Cuba', code: 'CU', currency: 'CUP', currencySymbol: '$' },
  { name: 'Cyprus', code: 'CY', currency: 'EUR', currencySymbol: '€' },
  { name: 'Czechia (Czech Republic)', code: 'CZ', currency: 'CZK', currencySymbol: 'Kč' },

  // D
  { name: 'Democratic Republic of the Congo', code: 'CD', currency: 'CDF', currencySymbol: 'Fr' },
  { name: 'Denmark', code: 'DK', currency: 'DKK', currencySymbol: 'kr' },
  { name: 'Djibouti', code: 'DJ', currency: 'DJF', currencySymbol: 'Fr' },
  { name: 'Dominica', code: 'DM', currency: 'XCD', currencySymbol: '$' },
  { name: 'Dominican Republic', code: 'DO', currency: 'DOP', currencySymbol: '$' },

  // E
  { name: 'Ecuador', code: 'EC', currency: 'USD', currencySymbol: '$' },
  { name: 'Egypt', code: 'EG', currency: 'EGP', currencySymbol: '£' },
  { name: 'El Salvador', code: 'SV', currency: 'USD', currencySymbol: '$' },
  { name: 'Equatorial Guinea', code: 'GQ', currency: 'XAF', currencySymbol: 'Fr' },
  { name: 'Eritrea', code: 'ER', currency: 'ERN', currencySymbol: 'Nfk' },
  { name: 'Estonia', code: 'EE', currency: 'EUR', currencySymbol: '€' },
  { name: 'Eswatini', code: 'SZ', currency: 'SZL', currencySymbol: 'L' },
  { name: 'Ethiopia', code: 'ET', currency: 'ETB', currencySymbol: 'Br' },

  // F
  { name: 'Fiji', code: 'FJ', currency: 'FJD', currencySymbol: '$' },
  { name: 'Finland', code: 'FI', currency: 'EUR', currencySymbol: '€' },
  { name: 'France', code: 'FR', currency: 'EUR', currencySymbol: '€' },

  // G
  { name: 'Gabon', code: 'GA', currency: 'XAF', currencySymbol: 'Fr' },
  { name: 'Gambia', code: 'GM', currency: 'GMD', currencySymbol: 'D' },
  { name: 'Georgia', code: 'GE', currency: 'GEL', currencySymbol: '₾' },
  { name: 'Germany', code: 'DE', currency: 'EUR', currencySymbol: '€' },
  { name: 'Ghana', code: 'GH', currency: 'GHS', currencySymbol: '₵' },
  { name: 'Greece', code: 'GR', currency: 'EUR', currencySymbol: '€' },
  { name: 'Grenada', code: 'GD', currency: 'XCD', currencySymbol: '$' },
  { name: 'Guatemala', code: 'GT', currency: 'GTQ', currencySymbol: 'Q' },
  { name: 'Guinea', code: 'GN', currency: 'GNF', currencySymbol: 'Fr' },
  { name: 'Guinea-Bissau', code: 'GW', currency: 'XOF', currencySymbol: 'Fr' },
  { name: 'Guyana', code: 'GY', currency: 'GYD', currencySymbol: '$' },

  // H
  { name: 'Haiti', code: 'HT', currency: 'HTG', currencySymbol: 'G' },
  { name: 'Honduras', code: 'HN', currency: 'HNL', currencySymbol: 'L' },
  { name: 'Hungary', code: 'HU', currency: 'HUF', currencySymbol: 'Ft' },

  // I
  { name: 'Iceland', code: 'IS', currency: 'ISK', currencySymbol: 'kr' },
  { name: 'India', code: 'IN', currency: 'INR', currencySymbol: '₹' },
  { name: 'Indonesia', code: 'ID', currency: 'IDR', currencySymbol: 'Rp' },
  { name: 'Iran', code: 'IR', currency: 'IRR', currencySymbol: '﷼' },
  { name: 'Iraq', code: 'IQ', currency: 'IQD', currencySymbol: 'ع.د' },
  { name: 'Ireland', code: 'IE', currency: 'EUR', currencySymbol: '€' },
  { name: 'Israel', code: 'IL', currency: 'ILS', currencySymbol: '₪' },
  { name: 'Italy', code: 'IT', currency: 'EUR', currencySymbol: '€' },
  { name: 'Ivory Coast', code: 'CI', currency: 'XOF', currencySymbol: 'Fr' },

  // J
  { name: 'Jamaica', code: 'JM', currency: 'JMD', currencySymbol: '$' },
  { name: 'Japan', code: 'JP', currency: 'JPY', currencySymbol: '¥' },
  { name: 'Jordan', code: 'JO', currency: 'JOD', currencySymbol: 'د.ا' },

  // K
  { name: 'Kazakhstan', code: 'KZ', currency: 'KZT', currencySymbol: '₸' },
  { name: 'Kenya', code: 'KE', currency: 'KES', currencySymbol: 'Sh' },
  { name: 'Kiribati', code: 'KI', currency: 'AUD', currencySymbol: '$' },
  { name: 'Kuwait', code: 'KW', currency: 'KWD', currencySymbol: 'د.ك' },
  { name: 'Kyrgyzstan', code: 'KG', currency: 'KGS', currencySymbol: 'с' },

  // L
  { name: 'Laos', code: 'LA', currency: 'LAK', currencySymbol: '₭' },
  { name: 'Latvia', code: 'LV', currency: 'EUR', currencySymbol: '€' },
  { name: 'Lebanon', code: 'LB', currency: 'LBP', currencySymbol: 'ل.ل' },
  { name: 'Lesotho', code: 'LS', currency: 'LSL', currencySymbol: 'L' },
  { name: 'Liberia', code: 'LR', currency: 'LRD', currencySymbol: '$' },
  { name: 'Libya', code: 'LY', currency: 'LYD', currencySymbol: 'ل.د' },
  { name: 'Liechtenstein', code: 'LI', currency: 'CHF', currencySymbol: 'Fr' },
  { name: 'Lithuania', code: 'LT', currency: 'EUR', currencySymbol: '€' },
  { name: 'Luxembourg', code: 'LU', currency: 'EUR', currencySymbol: '€' },

  // M
  { name: 'Madagascar', code: 'MG', currency: 'MGA', currencySymbol: 'Ar' },
  { name: 'Malawi', code: 'MW', currency: 'MWK', currencySymbol: 'MK' },
  { name: 'Malaysia', code: 'MY', currency: 'MYR', currencySymbol: 'RM' },
  { name: 'Maldives', code: 'MV', currency: 'MVR', currencySymbol: 'Rf' },
  { name: 'Mali', code: 'ML', currency: 'XOF', currencySymbol: 'Fr' },
  { name: 'Malta', code: 'MT', currency: 'EUR', currencySymbol: '€' },
  { name: 'Marshall Islands', code: 'MH', currency: 'USD', currencySymbol: '$' },
  { name: 'Mauritania', code: 'MR', currency: 'MRU', currencySymbol: 'UM' },
  { name: 'Mauritius', code: 'MU', currency: 'MUR', currencySymbol: '₨' },
  { name: 'Mexico', code: 'MX', currency: 'MXN', currencySymbol: '$' },
  { name: 'Micronesia', code: 'FM', currency: 'USD', currencySymbol: '$' },
  { name: 'Moldova', code: 'MD', currency: 'MDL', currencySymbol: 'L' },
  { name: 'Monaco', code: 'MC', currency: 'EUR', currencySymbol: '€' },
  { name: 'Mongolia', code: 'MN', currency: 'MNT', currencySymbol: '₮' },
  { name: 'Montenegro', code: 'ME', currency: 'EUR', currencySymbol: '€' },
  { name: 'Morocco', code: 'MA', currency: 'MAD', currencySymbol: 'د.م.' },
  { name: 'Mozambique', code: 'MZ', currency: 'MZN', currencySymbol: 'MT' },
  { name: 'Myanmar', code: 'MM', currency: 'MMK', currencySymbol: 'Ks' },

  // N
  { name: 'Namibia', code: 'NA', currency: 'NAD', currencySymbol: '$' },
  { name: 'Nauru', code: 'NR', currency: 'AUD', currencySymbol: '$' },
  { name: 'Nepal', code: 'NP', currency: 'NPR', currencySymbol: '₨' },
  { name: 'Netherlands', code: 'NL', currency: 'EUR', currencySymbol: '€' },
  { name: 'New Zealand', code: 'NZ', currency: 'NZD', currencySymbol: '$' },
  { name: 'Nicaragua', code: 'NI', currency: 'NIO', currencySymbol: 'C$' },
  { name: 'Niger', code: 'NE', currency: 'XOF', currencySymbol: 'Fr' },
  { name: 'Nigeria', code: 'NG', currency: 'NGN', currencySymbol: '₦' },
  { name: 'North Korea', code: 'KP', currency: 'KPW', currencySymbol: '₩' },
  { name: 'North Macedonia', code: 'MK', currency: 'MKD', currencySymbol: 'ден' },
  { name: 'Norway', code: 'NO', currency: 'NOK', currencySymbol: 'kr' },

  // O
  { name: 'Oman', code: 'OM', currency: 'OMR', currencySymbol: 'ر.ع.' },

  // P
  { name: 'Pakistan', code: 'PK', currency: 'PKR', currencySymbol: '₨' },
  { name: 'Palau', code: 'PW', currency: 'USD', currencySymbol: '$' },
  { name: 'Palestine State', code: 'PS', currency: 'ILS', currencySymbol: '₪' },
  { name: 'Panama', code: 'PA', currency: 'PAB', currencySymbol: 'B/.' },
  { name: 'Papua New Guinea', code: 'PG', currency: 'PGK', currencySymbol: 'K' },
  { name: 'Paraguay', code: 'PY', currency: 'PYG', currencySymbol: '₲' },
  { name: 'Peru', code: 'PE', currency: 'PEN', currencySymbol: 'S/.' },
  { name: 'Philippines', code: 'PH', currency: 'PHP', currencySymbol: '₱' },
  { name: 'Poland', code: 'PL', currency: 'PLN', currencySymbol: 'zł' },
  { name: 'Portugal', code: 'PT', currency: 'EUR', currencySymbol: '€' },

  // Q
  { name: 'Qatar', code: 'QA', currency: 'QAR', currencySymbol: 'ر.ق' },

  // R
  { name: 'Romania', code: 'RO', currency: 'RON', currencySymbol: 'lei' },
  { name: 'Russia', code: 'RU', currency: 'RUB', currencySymbol: '₽' },
  { name: 'Rwanda', code: 'RW', currency: 'RWF', currencySymbol: 'Fr' },

  // S
  { name: 'Saint Kitts and Nevis', code: 'KN', currency: 'XCD', currencySymbol: '$' },
  { name: 'Saint Lucia', code: 'LC', currency: 'XCD', currencySymbol: '$' },
  { name: 'Saint Vincent and the Grenadines', code: 'VC', currency: 'XCD', currencySymbol: '$' },
  { name: 'Samoa', code: 'WS', currency: 'WST', currencySymbol: 'T' },
  { name: 'San Marino', code: 'SM', currency: 'EUR', currencySymbol: '€' },
  { name: 'Sao Tome and Principe', code: 'ST', currency: 'STN', currencySymbol: 'Db' },
  { name: 'Saudi Arabia', code: 'SA', currency: 'SAR', currencySymbol: 'ر.س' },
  { name: 'Senegal', code: 'SN', currency: 'XOF', currencySymbol: 'Fr' },
  { name: 'Serbia', code: 'RS', currency: 'RSD', currencySymbol: 'дин' },
  { name: 'Seychelles', code: 'SC', currency: 'SCR', currencySymbol: '₨' },
  { name: 'Sierra Leone', code: 'SL', currency: 'SLL', currencySymbol: 'Le' },
  { name: 'Singapore', code: 'SG', currency: 'SGD', currencySymbol: '$' },
  { name: 'Slovakia', code: 'SK', currency: 'EUR', currencySymbol: '€' },
  { name: 'Slovenia', code: 'SI', currency: 'EUR', currencySymbol: '€' },
  { name: 'Solomon Islands', code: 'SB', currency: 'SBD', currencySymbol: '$' },
  { name: 'Somalia', code: 'SO', currency: 'SOS', currencySymbol: 'Sh' },
  { name: 'South Africa', code: 'ZA', currency: 'ZAR', currencySymbol: 'R' },
  { name: 'South Korea', code: 'KR', currency: 'KRW', currencySymbol: '₩' },
  { name: 'South Sudan', code: 'SS', currency: 'SSP', currencySymbol: '£' },
  { name: 'Spain', code: 'ES', currency: 'EUR', currencySymbol: '€' },
  { name: 'Sri Lanka', code: 'LK', currency: 'LKR', currencySymbol: 'Rs' },
  { name: 'Sudan', code: 'SD', currency: 'SDG', currencySymbol: 'ج.س.' },
  { name: 'Suriname', code: 'SR', currency: 'SRD', currencySymbol: '$' },
  { name: 'Sweden', code: 'SE', currency: 'SEK', currencySymbol: 'kr' },
  { name: 'Switzerland', code: 'CH', currency: 'CHF', currencySymbol: 'Fr' },
  { name: 'Syria', code: 'SY', currency: 'SYP', currencySymbol: '£' },

  // T
  { name: 'Tajikistan', code: 'TJ', currency: 'TJS', currencySymbol: 'ЅМ' },
  { name: 'Tanzania', code: 'TZ', currency: 'TZS', currencySymbol: 'Sh' },
  { name: 'Thailand', code: 'TH', currency: 'THB', currencySymbol: '฿' },
  { name: 'Timor-Leste', code: 'TL', currency: 'USD', currencySymbol: '$' },
  { name: 'Togo', code: 'TG', currency: 'XOF', currencySymbol: 'Fr' },
  { name: 'Tonga', code: 'TO', currency: 'TOP', currencySymbol: 'T$' },
  { name: 'Trinidad and Tobago', code: 'TT', currency: 'TTD', currencySymbol: '$' },
  { name: 'Tunisia', code: 'TN', currency: 'TND', currencySymbol: 'د.ت' },
  { name: 'Turkey', code: 'TR', currency: 'TRY', currencySymbol: '₺' },
  { name: 'Turkmenistan', code: 'TM', currency: 'TMT', currencySymbol: 'm' },
  { name: 'Tuvalu', code: 'TV', currency: 'AUD', currencySymbol: '$' },

  // U
  { name: 'Uganda', code: 'UG', currency: 'UGX', currencySymbol: 'Sh' },
  { name: 'Ukraine', code: 'UA', currency: 'UAH', currencySymbol: '₴' },
  { name: 'United Arab Emirates', code: 'AE', currency: 'AED', currencySymbol: 'د.إ' },
  { name: 'United Kingdom', code: 'UK', currency: 'GBP', currencySymbol: '£' },
  { name: 'United States', code: 'US', currency: 'USD', currencySymbol: '$' },
  { name: 'Uruguay', code: 'UY', currency: 'UYU', currencySymbol: '$U' },
  { name: 'Uzbekistan', code: 'UZ', currency: 'UZS', currencySymbol: 'лв' },

  // V
  { name: 'Vanuatu', code: 'VU', currency: 'VUV', currencySymbol: 'Vt' },
  { name: 'Venezuela', code: 'VE', currency: 'VES', currencySymbol: 'Bs.' },
  { name: 'Vietnam', code: 'VN', currency: 'VND', currencySymbol: '₫' },

  // Y
  { name: 'Yemen', code: 'YE', currency: 'YER', currencySymbol: '﷼' },

  // Z
  { name: 'Zambia', code: 'ZM', currency: 'ZMW', currencySymbol: 'ZK' },
  { name: 'Zimbabwe', code: 'ZW', currency: 'ZWL', currencySymbol: '$' }
];

export const getCurrencySymbol = (countryName: string): string => {
  const country = countries.find(c => c.name === countryName);
  return country ? country.currencySymbol : '₹'; // Default to INR
};
