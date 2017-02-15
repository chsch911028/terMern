var kakaopay = () => {
  var IMP = window.IMP;

  IMP.init('imp10130927');
  IMP.request_pay({
    pg : 'kakao',
    pay_method : 'card',
    merchant_uid : 'merchant_' + new Date().getTime(),
    name : '실리콘밸리코딩 구두',
    amount : 500,
    buyer_email : 'iamport@siot.do',
    buyer_name : '구매자이름',
    buyer_addr : '서울특별시 강남구 삼성동',
    buyer_postcode : '123-456'
  }, function(rsp) {
    if ( rsp.success ) {
        var msg = '결제가 완료되었습니다.';
        msg += '고유ID : ' + rsp.imp_uid;
        msg += '상점 거래ID : ' + rsp.merchant_uid;
        msg += '결제 금액 : ' + rsp.paid_amount;
        msg += '카드 승인번호 : ' + rsp.apply_num;
    } else {
        var msg = '결제에 실패하였습니다. 왜 일까요?';
        msg += '\n에러내용 : ' + rsp.error_msg.split('.')[0] + '.\n' + rsp.error_msg.split('. ')[1];
    }

    alert(msg);
  });
};

export default kakaopay;