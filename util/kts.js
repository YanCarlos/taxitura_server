const __config = require('../config')

module.exports = {
  conf: {
    utf8: 'UTF-8'
  },
  time: {
    onMyWay: __config.timeOnMyWay
  },
  config: {
    views: 'views',
    hbsPoint: '.hbs',
    hbs: 'hbs',
    viewEngine: 'view engine'
  },
  socket: {
    connection: 'connection',
    getBot: 'getBot',
    getClient: 'getClient',
    responseClient: 'responseClient',
    responseBot: 'responseBot',
    createService: 'createService',
    receiveService: 'receiveService',
    responseService: 'responseService',
    responseOrder: 'responseOrder',
    acceptService: 'acceptService',
    processService: 'processService',
    acceptCancel: 'acceptCancel',
    orderCanceled: 'orderCanceled',
    savePositionCab: 'savePositionCab',
    serviceInMemory: 'serviceInMemory',
    isServiceInMemory: 'isServiceInMemory',
    addServiceList: 'addServiceList',
    addServiceCanceled: 'addServiceCanceled',
    nextService: 'nextService',
    quality: 'quality',
    getPositionBot: 'getPositionBot',
    returnPositionBot: 'returnPositionBot',
    onMyWay: 'onMyWay',
    notFoundService: 'notFoundService',
    notFoundCabman: 'notFoundCabman',
    notSentPetition: 'notSentPetition',
    cancelService: 'cancelService',
    cancelSuccess: 'cancelSuccess',
    cancelDenied: 'cancelDenied',
    cancelTime: 'cancelTime',
    notSentPetitionCancel: 'notSentPetitionCancel',
    errorMessageQueue: 'errorMessageQueue',
    orderInProcess: 'orderInProcess',
    orderProcessing: 'orderProcessing',
    outOfCity: 'outOfCity',
    disconnect: 'disconnect',
    errorFetch: 'errorFetch',
    sessionEnd: 'sessionEnd',
    sessionStart: 'sessionStart',
    withoutCab: 'withoutCab',
    changeSocket: 'changeSocket',
    validateServiceProcess: 'validateServiceProcess',
    withoutServices: 'withoutServices',
    cancelServiceCab: 'cancelServiceCab',
    responseCancelServiceCab: 'responseCancelServiceCab',
    scoreCab: 'scoreCab',
    cabmancantAccept: 'cabmancantAccept'
  },
  action: {
    order: 'order',
    accept: 'accept',
    arrive: 'arrive',
    aboard: 'aboard',
    end: 'end',
    cancel: 'cancel',
    cancelTime: 'cancelTime',
    outOfCity: 'outOfcity',
    withoutCab: 'withoutCab'
  },
  json: {
    service: 'service',
    facebook: 'facebook',
    withoutOrigin: null,
    addressFull: 'addressFull',
    address: 'address',
    quality: 'quality',
    channel: 'channel',
    onMyWay: 'onMyWay',
    interface: 'interface',
    queue: 'queue',
    try: 'try',
    accept: 'accept',
    arrive: 'arrive',
    aboard: 'aboard',
    end: 'end',
    cancel: 'cancel',
    cancelTime: 'cancelTime',
    cancelCab: 'cancelCab',
    err: 'error'
  },
  operators: {
    coma: ','
  },
  method: {
    get: 'GET',
    put: 'PUT',
    post: 'POST'
  },
  header: {
    contentType: 'Content-Type',
    multiparFormData: 'multipart/form-data',
    applicationJson: 'application/json'
  }
}
