import { environment } from '../environments/environment';

export class Apilink {
  readonly baseUrl = environment.baseUrl;
  readonly activateSim = this.baseUrl + 'sim-activation/activate'; // create endpoint and link a sim also activate it
  readonly verifySim = this.baseUrl + 'sim-activation/validate/'; // create endpoint and link a sim also activate it
  // readonly all_Esim_Plans = this.baseUrl + 'rb_plans/user'; // get all e-SIM plans
  readonly all_Esim_Plans = this.baseUrl + 'plans/all'; // get all e-SIM plans //WL
  // readonly countryWisePlans = this.baseUrl + 'rb_plans/user/countrieswise/'; // get all e-SIM plans countrywise
  readonly countryWisePlans = this.baseUrl + 'plans/countrywise/'; // get all e-SIM plans countrywise //WL
  readonly getPlanThroughId = this.baseUrl + 'plans/';
  // readonly getAllCountriesFromPlan = this.baseUrl + 'rb_plans/rb_plan_countries'; // get all countries from plans
  readonly getAllCountriesFromPlan = this.baseUrl + 'plans/all/countries'; // get all countries from plans //WL
  readonly getAllRegionFromPlan = this.baseUrl + 'plans/all/regions'; // get all region from plans
  readonly regionWisePlans = this.baseUrl + 'plans/regionwise/'; // get all e-SIM plans regionwise
  readonly getAllGlobalWise = this.baseUrl + 'plans/global';

  readonly planById = this.baseUrl + 'plans/'

  readonly purchaseOrder = this.baseUrl + 'product-orders/purchase'; // get all products
  // readonly authToken =
  //   this.baseUrl + 'users/refreshToken/' + environment.accessToken; // get authorization key and store to localhost
  readonly walletInfo = this.baseUrl + 'wallet'; // get wallet info
  readonly walletTransaction = this.baseUrl + 'wallet/transactions'; // get wallet transaction history
  readonly userAuthenticate = this.baseUrl + 'customer/authenticate';
  readonly userVerify = this.baseUrl + 'customer/verify/email/';
  readonly passwordChange = this.baseUrl + 'customer/change-password';
  readonly customerProfile = this.baseUrl + 'customer/details/';
  readonly customerEsimOrderHistory = this.baseUrl + 'orders/esims/';
  readonly customerTopupOrderHistory = this.baseUrl + 'orders/recharge/';
  readonly saveCustomerDetails = this.baseUrl + 'rb';

  // API links for payments gateway

  // abandon cart API

  readonly abandonCart = this.baseUrl + 'rb_orders/save_abandon_cart'

  // rb wallet payment

  readonly rb_wallet = this.baseUrl + 'wallet/payment'; //hit

  // dpo payment gateway
  readonly mpesaDPO = this.baseUrl + 'dpos/mpesa';
  readonly mepsaVerify = this.baseUrl + 'dpos/verify/';
  readonly airtelDPO = this.baseUrl + 'dpos/airtel';
  readonly creditCardDPO = this.baseUrl + 'dpos/CreditCard';
  readonly getTransactionToken = this.baseUrl + 'dpos/TransactionToken';

  // flutterwaves payment gateway
  readonly mpesaFlutterwavesTrans = this.baseUrl + 'flutterwaves/mpesa/transaction';
  readonly airtelFlutterwavesTrans = this.baseUrl + 'flutterwaves/airtel/transaction';

  readonly mpesaFlutterwavesChargeInit = this.baseUrl + 'flutterwaves/mpesa';

  readonly airtelFlutterwavesChargeInit = this.baseUrl + 'flutterwaves/airtel';

  // stripe payment gateway
  readonly stripe = this.baseUrl + 'stripe'; //hit
  readonly stripePaymentIntent = this.baseUrl + 'stripe/paymentIntent'; //get client secret
  readonly stripeCustomerPaymentIntent = this.baseUrl + 'stripe/customer/topup/paymentIntent';
  readonly stripeCustomerTopup = this.baseUrl + 'stripe/customer/topup';

  // get country + state + city

  // readonly country = this.baseUrl + 'countries';

  readonly country = this.baseUrl + 'countries';

  // get all states by country name
  readonly state = this.baseUrl + 'countries/id/';

  // get all city by state name
  readonly city = this.baseUrl + 'countries/state/id/';

  // get all regions for sim
  readonly regions = this.baseUrl + 'plans/all/regions';


  // get all devices

  readonly allDevices = this.baseUrl + 'devices/all'

  // get all IOS devices

  readonly iosDevices = this.baseUrl + 'devices/ios';

  // get all Android devices

  readonly androidDevices = this.baseUrl + 'devices/android';

  readonly faq = this.baseUrl + 'faq/all'

  // search plans through country or region

  readonly planSearch = this.baseUrl + 'plans/all/search/';

  // contactus API

  readonly contact = this.baseUrl + 'contact/create';
  readonly leadDYno_partner = this.baseUrl + 'contact/affiliate';
  readonly reseller_partner = this.baseUrl + 'contact/reseller';

  readonly getAllPRBlans = this.baseUrl + 'plans';
  readonly stripeCustomerPlanPaymentIntent = this.baseUrl + 'stripe/customer/plantopup/paymentIntent';
  readonly customerTopupEsim = this.baseUrl + 'stripe/customer/topup/check_package';
  readonly rechargeEsimCountryByIccid = this.baseUrl + 'customer/recharge/data/';
  readonly rechargeEsimDataByCountryIccid = this.baseUrl + 'customer/recharge/country';
  readonly rechargeEsimPackages = this.baseUrl + 'customer/recharge/packages';
  readonly rechageESIMGoWithWallet = this.baseUrl + 'customer/recharge/eSim';

  readonly usersICC_ID = this.baseUrl + 'customer/recharge/eSim/list';
  readonly getAllPlansByIccId = this.baseUrl + 'customer/recharge/packages/';
  readonly getAllPlansByWLAcc = this.baseUrl + 'rb_plans/getPlansByWlAccount';

  readonly createCustomer = this.baseUrl + 'customer/create';

  readonly requestOrder = this.baseUrl + 'orders/request';
  readonly confirmOrder = this.baseUrl + 'orders/confirm';

  readonly walletTopupCard = this.baseUrl + 'customer/topup/card';
  readonly walletTopupMobile = this.baseUrl + 'customer/topup/mobile-money';
  // readonly walletTopupMobile = this.baseUrl + 'customer/topup/mobile-money/pawa-pay';

  readonly amountAfterCoupon = this.baseUrl + 'coupon/calculate?'

  readonly confirmMobileMoney = this.baseUrl + 'orders/mobile-payment/status/'

  readonly confirmMobileMoneyRecharge = this.baseUrl + 'customer/recharge/payment/status/'

  readonly confirmMobileMoneyTopup = this.baseUrl + 'customer/topup/mobile-money/pawa-pay/status/'

  readonly mobileGatewayPawa = this.baseUrl + 'orders/mobile-gateways'


}
