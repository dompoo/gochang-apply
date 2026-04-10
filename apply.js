// 고창농악 봄전수 빠른 신청 스크립트
// 사용법: 아래 CONFIG만 수정한 뒤, 신청 페이지에서 브라우저 콘솔(F12)에 붙여넣기 후 Enter

// ============================================================
// ▼▼▼ 여기만 수정하세요 ▼▼▼
// ============================================================
const CONFIG = {
  name: '이창근',             // 신청자 이름
  tel: '01012345678',       // 연락처 (숫자만)
  depositor: '이창근',        // 입금자명
  headcount: 1,             // 인원수
  affiliation: '개인',       // 소속 (개인 / 단체명)
  affiliationDetail: '개인', // 소속 상세

  // 참가자 목록 (여러 명이면 추가하세요)
  participants: [
    { name: '이창근', instrument: '쇠', gender: '남' },
    // { name: '홍길동', instrument: '장구', gender: '남' },
  ],

  autoSubmit: false,        // true로 바꾸면 자동 제출 (주의!)
};
// ============================================================
// ▲▲▲ 수정 끝 ▲▲▲
// ============================================================

(function(cfg) {
  // 신청자 정보
  $('input[name=wm_name]').val(cfg.name);
  $('input[name=wm_tel]').val(cfg.tel);
  $('input[name=wm_dpst]').val(cfg.depositor);
  $('#wm_prs').val(cfg.headcount).prop('selected', true);
  $('select[name=wm_afl]').val(cfg.affiliation).prop('selected', true);
  $('input[name=wm_afl_detail]').val(cfg.affiliationDetail);

  // 참가자 정보
  cfg.participants.forEach(function(p, i) {
    $('select[name="info[' + i + '][ins]"]').val(p.instrument).prop('selected', true);
    $('select[name="info[' + i + '][gender]"]').val(p.gender).prop('selected', true);
    $('input[name="info[' + i + '][name]"]').val(p.name);
  });

  // 동의 체크
  $('input[name=agree]').prop('checked', true);

  // 자동 제출
  if (cfg.autoSubmit) {
    $('form').submit();
  }
})(CONFIG);
