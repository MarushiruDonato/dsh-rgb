window.__ModuleLoader__.load({
  id: 'dsh-rgb',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'rgbRing';
    const STORE_KEY = 'rgb-composer-ring.style';
    const DEFAULTS = {
      enabled: true, mode: 'spectrum', palette: 'rainbow',
      color: '#7a8bff', colors: ['#ff2d55', '#00d1ff', '#7cff00'],
      thickness: 2, brightness: 100, speed: 6, dash: 15, direction: 'cw', offset: 0,
      followState: true,
      rail: { enabled: true, mode: 'flow', palette: 'inherit' },
      logo: { enabled: true, mode: 'flow', palette: 'inherit' },
      session: { enabled: true, mode: 'flow', palette: 'inherit' },
    };
    const MODES = ['static', 'spectrum', 'breath', 'breathSpectrum', 'wave', 'scanner'];
    const SURFACE_MODES = ['flow', 'static', 'spectrum', 'breath', 'breathSpectrum'];
    const LOGO_MODES = ['flow', 'static', 'breath', 'breathSpectrum'];
    const PALETTES = {
      rainbow: ['#ff8a5b', '#ffd84d', '#6dffb0', '#4ee0ff', '#7a8bff', '#e46bff'],
      aurora: ['#00ffc3', '#00b3ff', '#7a5cff', '#00ffc3'],
      sunset: ['#ff2d55', '#ff9f0a', '#ffe066', '#ff2d55'],
      neon: ['#ff00e5', '#00e5ff', '#9dff00', '#ff00e5'],
      gold: ['#f7e3a1', '#c9a227', '#fff6cf', '#c9a227'],
    };
    const PALETTE_KEYS = Object.keys(PALETTES).concat(['solid', 'custom']);
    const SURFACE_PALETTES = ['inherit'].concat(PALETTE_KEYS);

    const WHALE_PATH = "M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746L11.1749 14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z";
    const WORDMARK_PATHS = ["M68.416 18.2447H67.0501V16.1272H68.416C69.2619 16.1272 70.1166 15.9163 70.6671 15.3304C71.2181 14.7444 71.426 13.8455 71.426 12.9471C71.426 12.0487 71.2268 11.1498 70.6671 10.5643C70.1083 9.97831 69.2619 9.76744 68.416 9.76744C67.5701 9.76744 66.7154 9.97831 66.1639 10.5643C65.6129 11.1503 65.4049 12.0487 65.4049 12.9471V21.6435H63.009V7.6582H65.4049V8.54883H65.8442C65.8918 8.49393 65.9394 8.44728 65.9875 8.40064C66.5871 7.85353 67.5049 7.6582 68.4072 7.6582C69.8212 7.6582 71.2341 8.00998 72.1607 8.98662C73.0868 9.96325 73.4143 11.4632 73.4143 12.9558C73.4143 14.4485 73.0785 15.9406 72.1607 16.925C71.2424 17.9094 69.8212 18.2457 68.416 18.2457V18.2447Z","M31.9551 8.03497H33.3204V10.1525H31.9551C31.1087 10.1525 30.2545 10.3633 29.7035 10.9493C29.1525 11.5353 28.945 12.4342 28.945 13.3326C28.945 14.231 29.1447 15.1294 29.7035 15.7154C30.2623 16.3014 31.1087 16.5122 31.9551 16.5122C32.8015 16.5122 33.6562 16.3014 34.2072 15.7154C34.7582 15.1294 34.9657 14.231 34.9657 13.3326V4.62842H37.3611V18.6219H34.9657V17.7313H34.5264C34.4783 17.7857 34.4307 17.8329 34.3826 17.8795C33.7835 18.4261 32.8652 18.6219 31.9629 18.6219C30.5494 18.6219 29.136 18.2707 28.2099 17.294C27.2838 16.3174 26.9563 14.817 26.9563 13.3248C26.9563 11.8327 27.2916 10.34 28.2099 9.35561C29.136 8.37898 30.5494 8.03497 31.9551 8.03497Z","M49.3786 13.1431V13.9948H42.9984V12.2996H47.2305C47.1348 11.6825 46.9113 11.1043 46.5119 10.682C45.9371 10.0727 45.0503 9.85409 44.1723 9.85409C43.2943 9.85409 42.4076 10.0727 41.8328 10.682C41.258 11.2913 41.05 12.2213 41.05 13.1435C41.05 14.0658 41.2575 15.003 41.8328 15.6046C42.4076 16.2061 43.2939 16.433 44.1723 16.433C45.0508 16.433 45.9371 16.2143 46.5119 15.6046C46.5916 15.5186 46.6635 15.4248 46.7354 15.331H49.0992C48.8918 16.0657 48.5643 16.7299 48.0691 17.2454C47.111 18.2531 45.6339 18.6205 44.1723 18.6205C42.7108 18.6205 41.2337 18.2609 40.2755 17.2454C39.3174 16.2299 38.9661 14.6828 38.9661 13.1435C38.9661 11.6043 39.3096 10.0494 40.2755 9.04168C41.242 8.03396 42.7108 7.66663 44.1723 7.66663C45.6339 7.66663 47.111 8.02618 48.0691 9.04168C49.0351 10.0572 49.3786 11.6043 49.3786 13.1435V13.1431Z","M61.4045 13.1431V13.9948H55.0243V12.2996H59.2564C59.1602 11.6825 58.9372 11.1043 58.5378 10.682C57.963 10.0727 57.0762 9.85409 56.1982 9.85409C55.3202 9.85409 54.4335 10.0727 53.8587 10.682C53.2839 11.2913 53.0759 12.2213 53.0759 13.1435C53.0759 14.0658 53.2834 15.003 53.8587 15.6046C54.4335 16.2061 55.3202 16.433 56.1982 16.433C57.0762 16.433 57.963 16.2143 58.5378 15.6046C58.6179 15.5186 58.6894 15.4248 58.7608 15.331H61.1251C60.9171 16.0657 60.5897 16.7299 60.0945 17.2454C59.1364 18.2531 57.6593 18.6205 56.1982 18.6205C54.7372 18.6205 53.2596 18.2609 52.3014 17.2454C51.3432 16.2299 50.9919 14.6828 50.9919 13.1435C50.9919 11.6043 51.3355 10.0494 52.3014 9.04168C53.2678 8.03396 54.7367 7.66663 56.1982 7.66663C57.6598 7.66663 59.1364 8.02618 60.0945 9.04168C61.061 10.0572 61.4045 11.6043 61.4045 13.1435V13.1431Z","M80.242 18.6214C81.7035 18.6214 83.1801 18.4105 84.1383 17.809C85.0965 17.2075 85.4482 16.2931 85.4482 15.3869C85.4482 14.4807 85.1042 13.5585 84.1383 12.9647C83.1801 12.371 81.703 12.1518 80.242 12.1518C79.6186 12.1518 79.0438 12.0658 78.6366 11.8394C78.2294 11.6047 78.0778 11.2534 78.0778 10.9017C78.0778 10.5499 78.2216 10.1908 78.6366 9.9639C79.0438 9.72921 79.6749 9.65147 80.2973 9.65147C80.9198 9.65147 81.5509 9.73747 81.9591 9.9639C82.3663 10.1986 82.5179 10.5499 82.5179 10.9017H84.9531C84.9531 9.99499 84.6421 9.07327 83.7719 8.47951C82.9017 7.88576 81.5679 7.66663 80.2424 7.66663C78.9169 7.66663 77.5837 7.8775 76.713 8.47951C75.8427 9.08104 75.5308 9.99499 75.5308 10.9017C75.5308 11.8083 75.8423 12.73 76.713 13.3238C77.5832 13.9176 78.9165 14.1367 80.2424 14.1367C80.929 14.1367 81.688 14.2227 82.1428 14.4491C82.5985 14.676 82.7579 15.0351 82.7579 15.3869C82.7579 15.7387 82.5985 16.0977 82.1428 16.3246C81.688 16.5511 80.9931 16.6371 80.3066 16.6371C79.62 16.6371 78.9169 16.5511 78.4694 16.3246C78.0224 16.0982 77.8543 15.7387 77.8543 15.3869H75.0435C75.0435 16.2935 75.3865 17.2153 76.3534 17.809C77.3194 18.4028 78.7809 18.6214 80.2424 18.6214H80.242Z","M97.4733 13.1431V13.9948H91.0932V12.2996H95.3252C95.23 11.6825 95.006 11.1043 94.6071 10.682C94.0313 10.0727 93.1456 9.85409 92.2666 9.85409C91.3876 9.85409 90.5018 10.0727 89.927 10.682C89.3522 11.2913 89.1452 12.2213 89.1452 13.1435C89.1452 14.0658 89.3522 15.003 89.927 15.6046C90.5018 16.2061 91.3886 16.433 92.2666 16.433C93.1446 16.433 94.0313 16.2143 94.6071 15.6046C94.6863 15.5186 94.7587 15.4248 94.8301 15.331H97.1935C96.9855 16.0657 96.6585 16.7299 96.1639 17.2454C95.2057 18.2531 93.7281 18.6205 92.2666 18.6205C90.805 18.6205 89.3284 18.2609 88.3703 17.2454C87.4121 16.2299 87.0613 14.6828 87.0613 13.1435C87.0613 11.6043 87.4043 10.0494 88.3703 9.04168C89.3367 8.03396 90.806 7.66663 92.2666 7.66663C93.7272 7.66663 95.2057 8.02618 96.1639 9.04168C97.1298 10.0572 97.4729 11.6043 97.4729 13.1435L97.4733 13.1431Z","M109.499 13.1431V13.9948H103.119V12.2996H107.351C107.256 11.6825 107.032 11.1043 106.632 10.682C106.057 10.0727 105.172 9.85409 104.293 9.85409C103.414 9.85409 102.528 10.0727 101.953 10.682C101.378 11.2913 101.17 12.2213 101.17 13.1435C101.17 14.0658 101.378 15.003 101.953 15.6046C102.528 16.2061 103.415 16.433 104.293 16.433C105.171 16.433 106.057 16.2143 106.632 15.6046C106.712 15.5186 106.784 15.4248 106.856 15.331H109.22C109.012 16.0657 108.685 16.7299 108.19 17.2454C107.231 18.2531 105.754 18.6205 104.293 18.6205C102.831 18.6205 101.355 18.2609 100.396 17.2454C99.4382 16.2299 99.0864 14.6828 99.0864 13.1435C99.0864 11.6043 99.4295 10.0494 100.396 9.04168C101.362 8.03396 102.832 7.66663 104.293 7.66663C105.754 7.66663 107.231 8.02618 108.19 9.04168C109.156 10.0572 109.499 11.6043 109.499 13.1435V13.1431Z","M113.5 4.62817H111.104V18.6217H113.5V4.62817Z","M117.589 12.8154L121.517 18.6208H118.554L114.625 12.8154L118.554 8.15088H121.517L117.589 12.8154Z"];
    const BADGE_PATHS = ["M132.848 8.93205H134.08V16.137H132.848V8.93205ZM136.5 8.93205H137.732V16.137H136.5V8.93205ZM133.365 13.024V11.99H137.193V13.024H133.365Z","M140.397 14.432L140.672 13.453H143.202L143.532 14.432H140.397ZM140.287 16.137H139.055L141.277 8.93205H142.201L142.146 9.74605L140.947 13.915H140.969L140.287 16.137ZM145.039 16.137H143.741L143.07 13.948L143.081 13.937L141.871 9.74605L141.926 8.93205H142.817L145.039 16.137Z","M146.846 8.93205H149.068C149.852 8.93205 150.443 9.11538 150.839 9.48205C151.235 9.84138 151.433 10.3327 151.433 10.956C151.433 11.22 151.396 11.4657 151.323 11.693C151.249 11.9204 151.125 12.1257 150.949 12.309C150.773 12.4924 150.531 12.65 150.223 12.782C149.922 12.9067 149.541 13.0057 149.079 13.079V13.321H146.846V12.639L148.023 12.485C148.631 12.4044 149.09 12.298 149.398 12.166C149.706 12.034 149.915 11.8764 150.025 11.693C150.135 11.5024 150.19 11.2934 150.19 11.066C150.19 10.6994 150.083 10.417 149.871 10.219C149.658 10.021 149.324 9.92205 148.87 9.92205H146.846V8.93205ZM146.395 8.93205H147.627V16.137H146.395V8.93205ZM151.917 16.093V16.137H150.366L149.024 14.322C148.87 14.1094 148.73 13.9407 148.606 13.816C148.481 13.684 148.345 13.5887 148.199 13.53C148.052 13.464 147.872 13.42 147.66 13.398C147.447 13.3687 147.176 13.3504 146.846 13.343V13.145H149.079C149.233 13.211 149.368 13.2844 149.486 13.365C149.61 13.4457 149.735 13.5447 149.86 13.662C149.992 13.7794 150.138 13.937 150.3 14.135L151.917 16.093Z","M153.58 9.57005L153.591 8.93205H154.46L157.584 15.51V16.137H156.704L153.58 9.57005ZM158.024 16.137H156.968L156.88 8.93205H158.024V16.137ZM154.24 16.137H153.096V8.93205H154.152L154.24 16.137Z","M159.963 8.93205H161.206V16.137H159.963V8.93205ZM160.095 9.96605V8.93205H164.858V9.96605H160.095ZM160.095 16.137V15.103H164.902V16.137H160.095ZM160.095 13.013V11.99H164.374V13.013H160.095Z","M169.052 15.257C169.543 15.257 169.895 15.1654 170.108 14.982C170.328 14.7987 170.438 14.5457 170.438 14.223C170.438 14.047 170.405 13.8967 170.339 13.772C170.273 13.6474 170.152 13.5337 169.976 13.431C169.807 13.321 169.558 13.2147 169.228 13.112L168.491 12.881C167.846 12.6757 167.38 12.4044 167.094 12.067C166.808 11.7297 166.665 11.3007 166.665 10.78C166.665 10.428 166.76 10.1017 166.951 9.80105C167.142 9.50038 167.428 9.25838 167.809 9.07505C168.19 8.89172 168.663 8.80005 169.228 8.80005C169.631 8.80005 169.998 8.82938 170.328 8.88805C170.665 8.93938 171.039 9.01638 171.45 9.11905L171.274 10.175C170.834 10.0504 170.442 9.96238 170.097 9.91105C169.76 9.85238 169.463 9.82305 169.206 9.82305C168.737 9.82305 168.403 9.90738 168.205 10.076C168.007 10.2374 167.908 10.439 167.908 10.681C167.908 10.857 167.941 11.0147 168.007 11.154C168.073 11.286 168.19 11.407 168.359 11.517C168.535 11.627 168.784 11.7334 169.107 11.836L169.866 12.078C170.526 12.276 170.995 12.5327 171.274 12.848C171.553 13.156 171.692 13.585 171.692 14.135C171.692 14.5604 171.589 14.9344 171.384 15.257C171.179 15.5797 170.878 15.8327 170.482 16.016C170.093 16.1994 169.609 16.291 169.03 16.291C168.627 16.291 168.212 16.247 167.787 16.159C167.362 16.071 166.9 15.9427 166.401 15.774L166.665 14.718C167.156 14.894 167.6 15.0297 167.996 15.125C168.399 15.213 168.751 15.257 169.052 15.257Z","M175.809 15.257C176.3 15.257 176.652 15.1654 176.865 14.982C177.085 14.7987 177.195 14.5457 177.195 14.223C177.195 14.047 177.162 13.8967 177.096 13.772C177.03 13.6474 176.909 13.5337 176.733 13.431C176.564 13.321 176.315 13.2147 175.985 13.112L175.248 12.881C174.603 12.6757 174.137 12.4044 173.851 12.067C173.565 11.7297 173.422 11.3007 173.422 10.78C173.422 10.428 173.517 10.1017 173.708 9.80105C173.899 9.50038 174.185 9.25838 174.566 9.07505C174.947 8.89172 175.42 8.80005 175.985 8.80005C176.388 8.80005 176.755 8.82938 177.085 8.88805C177.422 8.93938 177.796 9.01638 178.207 9.11905L178.031 10.175C177.591 10.0504 177.199 9.96238 176.854 9.91105C176.517 9.85238 176.22 9.82305 175.963 9.82305C175.494 9.82305 175.16 9.90738 174.962 10.076C174.764 10.2374 174.665 10.439 174.665 10.681C174.665 10.857 174.698 11.0147 174.764 11.154C174.83 11.286 174.947 11.407 175.116 11.517C175.292 11.627 175.541 11.7334 175.864 11.836L176.623 12.078C177.283 12.276 177.752 12.5327 178.031 12.848C178.31 13.156 178.449 13.585 178.449 14.135C178.449 14.5604 178.346 14.9344 178.141 15.257C177.936 15.5797 177.635 15.8327 177.239 16.016C176.85 16.1994 176.366 16.291 175.787 16.291C175.384 16.291 174.969 16.247 174.544 16.159C174.119 16.071 173.657 15.9427 173.158 15.774L173.422 14.718C173.913 14.894 174.357 15.0297 174.753 15.125C175.156 15.213 175.508 15.257 175.809 15.257Z"];

    // One static stylesheet. Preferences arrive as <html> data-* flags and --rgb-*
    // variables, so changing a setting never re-registers a slot entry or rebuilds CSS.
    const STYLESHEET = '@property --rgb-angle{syntax:"<angle>";initial-value:0deg;inherits:true}'
      + '@property --rgb-hue{syntax:"<angle>";initial-value:0deg;inherits:true}'
      + '@property --rgb-breath{syntax:"<number>";initial-value:1;inherits:true}'
      + '@keyframes rgb-hue{to{--rgb-hue:360deg}}'
      + '@keyframes rgb-breath{from{--rgb-breath:.04}to{--rgb-breath:1}}'
      + '@keyframes rgb-logo-breath{from{opacity:.58}to{opacity:1}}'
      + '@keyframes rgb-spin{to{--rgb-angle:360deg}}'
      + '[data-composer-card]{position:relative}'
      + '[data-composer-card]::before{content:"";position:absolute;inset:calc(-1 * var(--rgb-offset,0px));'
      + 'border-radius:inherit;padding:var(--rgb-width,2px);pointer-events:none;'
      + 'background:conic-gradient(from 180deg,var(--rgb-state-stops,var(--rgb-stops)));'
      + 'opacity:calc(var(--rgb-brightness,1) * var(--rgb-breath,1));'
      + 'filter:hue-rotate(var(--rgb-hue,0deg));transition:filter .25s ease;'
      + '-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);'
      + 'mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);'
      + '-webkit-mask-composite:xor;mask-composite:exclude}'
      + 'html[data-rgb-off] [data-composer-card]::before{display:none}'
      + 'html[data-rgb-mode="spectrum"] [data-composer-card]::before{'
      + 'animation:rgb-hue calc(var(--rgb-period,6s) * var(--rgb-factor,1)) linear infinite var(--rgb-dir,normal)}'
      + 'html[data-rgb-mode="breath"] [data-composer-card]::before{'
      + 'animation:rgb-breath calc(var(--rgb-period,6s) / 2) ease-in-out infinite alternate}'
      + 'html[data-rgb-mode="breathSpectrum"] [data-composer-card]::before{'
      + 'animation:rgb-breath calc(var(--rgb-period,6s) / 2) ease-in-out infinite alternate,'
      + 'rgb-hue calc(var(--rgb-period,6s) * var(--rgb-factor,1)) linear infinite var(--rgb-dir,normal)}'
      + 'html[data-rgb-mode="wave"] [data-composer-card]::before{'
      + 'background:conic-gradient(from var(--rgb-angle,0deg),var(--rgb-state-stops,var(--rgb-stops)));'
      + 'animation:rgb-spin calc(var(--rgb-period,6s) * var(--rgb-factor,1)) linear infinite var(--rgb-dir,normal)}'
      + 'html[data-rgb-mode="scanner"] [data-composer-card]::before{'
      + 'background:conic-gradient(from var(--rgb-angle,0deg),'
      + 'var(--rgb-state-color,var(--rgb-color)) 0deg,transparent var(--rgb-span,60deg) 360deg)}'
      + 'html[data-rgb-state="running"]{--rgb-factor:.35}'
      + 'html[data-rgb-state="attention"]{--rgb-factor:2;--rgb-state-stops:#f59e0b,#fbbf24,#fcd34d,#f59e0b;'
      + '--rgb-state-color:#fbbf24}'
      + 'html[data-rgb-state="error"]{--rgb-factor:.6;--rgb-state-stops:#ef4444,#f87171,#fca5a5,#ef4444;'
      + '--rgb-state-color:#ef4444}'
      + 'html[data-rgb-celebrate] [data-composer-card]::before{'
      + 'filter:hue-rotate(var(--rgb-hue,0deg)) brightness(1.8) saturate(1.3)}'
      + '[data-composer-card]:focus-within::before{'
      + 'filter:hue-rotate(var(--rgb-hue,0deg)) brightness(1.25) saturate(1.15)}'
      // Sidebar right edge: the Rail component tags the left column, this paints it.
      + '@keyframes rgb-rail-scroll{from{background-position:0 0}to{background-position:0 200%}}'
      + '[data-rgb-rail]{position:relative}'
      + '[data-rgb-rail]::after{content:"";position:absolute;top:0;bottom:0;right:0;'
      + 'width:var(--rgb-width,2px);pointer-events:none;'
      + 'background:linear-gradient(180deg,var(--rgb-state-stops,var(--rgb-rail-stops,var(--rgb-stops))));'
      + 'background-size:100% 200%;'
      + 'opacity:var(--rgb-brightness,1);filter:hue-rotate(var(--rgb-hue,0deg))}'
      + 'html[data-rgb-rail-mode="flow"] [data-rgb-rail]::after{'
      + 'animation:rgb-rail-scroll calc(var(--rgb-period,6s) * var(--rgb-factor,1)) linear infinite var(--rgb-dir,normal)}'
      + 'html[data-rgb-rail-mode="spectrum"] [data-rgb-rail]::after{'
      + 'animation:rgb-hue calc(var(--rgb-period,6s) * var(--rgb-factor,1)) linear infinite var(--rgb-dir,normal)}'
      + 'html[data-rgb-rail-mode="breath"] [data-rgb-rail]::after{'
      + 'animation:rgb-breath calc(var(--rgb-period,6s) / 2) ease-in-out infinite alternate}'
      + 'html[data-rgb-rail-mode="breathSpectrum"] [data-rgb-rail]::after{'
      + 'animation:rgb-breath calc(var(--rgb-period,6s) / 2) ease-in-out infinite alternate,'
      + 'rgb-hue calc(var(--rgb-period,6s) * var(--rgb-factor,1)) linear infinite var(--rgb-dir,normal)}'
      + 'html[data-rgb-rail-mode="static"] [data-rgb-rail]::after{'
      + 'animation:none}'
      + 'html[data-rgb-rail-off] [data-rgb-rail]::after{display:none}'
      // Active session indicator
      + '[data-row-key^="session:"][aria-selected="true"],'
      + '[class*="_sessionRow"][class*="_selected"]{position:relative}'
      + '[data-row-key^="session:"][aria-selected="true"]::before,'
      + '[class*="_sessionRow"][class*="_selected"]::before{'
      + 'content:"";position:absolute;left:2px;top:5px;bottom:5px;width:3px;'
      + 'border-radius:2px;pointer-events:none;'
      + 'background:linear-gradient(180deg,var(--rgb-state-stops,var(--rgb-session-stops,var(--rgb-stops))));'
      + 'background-size:100% 200%;'
      + 'opacity:var(--rgb-brightness,1);filter:hue-rotate(var(--rgb-hue,0deg))}'
      + 'body[data-ds-dark-theme] [data-row-key^="session:"][aria-selected="true"]::before,'
      + 'body[data-ds-dark-theme] [class*="_sessionRow"][class*="_selected"]::before{'
      + 'filter:drop-shadow(0 0 3px rgba(100,180,255,0.45)) hue-rotate(var(--rgb-hue,0deg))}'
      + 'html[data-rgb-session-mode="flow"] [data-row-key^="session:"][aria-selected="true"]::before,'
      + 'html[data-rgb-session-mode="flow"] [class*="_sessionRow"][class*="_selected"]::before{'
      + 'animation:rgb-rail-scroll calc(var(--rgb-period,6s) * var(--rgb-factor,1)) linear infinite var(--rgb-dir,normal)}'
      + 'html[data-rgb-session-mode="spectrum"] [data-row-key^="session:"][aria-selected="true"]::before,'
      + 'html[data-rgb-session-mode="spectrum"] [class*="_sessionRow"][class*="_selected"]::before{'
      + 'animation:rgb-hue calc(var(--rgb-period,6s) * var(--rgb-factor,1)) linear infinite var(--rgb-dir,normal)}'
      + 'html[data-rgb-session-mode="breath"] [data-row-key^="session:"][aria-selected="true"]::before,'
      + 'html[data-rgb-session-mode="breath"] [class*="_sessionRow"][class*="_selected"]::before{'
      + 'animation:rgb-breath calc(var(--rgb-period,6s) / 2) ease-in-out infinite alternate}'
      + 'html[data-rgb-session-mode="breathSpectrum"] [data-row-key^="session:"][aria-selected="true"]::before,'
      + 'html[data-rgb-session-mode="breathSpectrum"] [class*="_sessionRow"][class*="_selected"]::before{'
      + 'animation:rgb-breath calc(var(--rgb-period,6s) / 2) ease-in-out infinite alternate,'
      + 'rgb-hue calc(var(--rgb-period,6s) * var(--rgb-factor,1)) linear infinite var(--rgb-dir,normal)}'
      + 'html[data-rgb-session-off] [data-row-key^="session:"][aria-selected="true"]::before,'
      + 'html[data-rgb-session-off] [class*="_sessionRow"][class*="_selected"]::before,'
      + 'html[data-rgb-off] [data-row-key^="session:"][aria-selected="true"]::before,'
      + 'html[data-rgb-off] [class*="_sessionRow"][class*="_selected"]::before{display:none}'
      + '[data-rgb-brand-svg]{pointer-events:none;overflow:visible;transition:filter .2s ease}'
      + 'body[data-ds-dark-theme] [data-rgb-brand-svg]{'
      + '--rgb-logo-glow:drop-shadow(0 0 3px rgba(100,180,255,0.35));'
      + '--rgb-logo-tune:saturate(1.22) brightness(calc(var(--rgb-brightness,1) * 1.15)) contrast(1.04)}'
      + 'body:not([data-ds-dark-theme]) [data-rgb-brand-svg]{'
      + '--rgb-logo-glow:drop-shadow(0 1px 1.5px rgba(0,0,0,0.15));'
      + '--rgb-logo-tune:saturate(1.35) brightness(calc(var(--rgb-brightness,1) * 0.82)) contrast(1.08)}'
      + '@media (prefers-reduced-motion:reduce){html[data-rgb-mode] [data-composer-card]::before{animation:none}'
      + 'html[data-rgb-rail-mode] [data-rgb-rail]::after{animation:none}'
      + '[data-row-key^="session:"][aria-selected="true"]::before{animation:none!important}'
      + '[data-rgb-brand-svg]{animation:none!important}}';
    const PUBLISHED = ['--rgb-stops', '--rgb-color', '--rgb-width', '--rgb-period',
      '--rgb-dir', '--rgb-brightness', '--rgb-offset'];
    const FLAGS = ['rgbMode', 'rgbOff', 'rgbState', 'rgbCelebrate'];

    const en = {
      section: 'RGB Composer Ring',
      enable: 'Enable ring',
      followState: 'Follow session state',
      'followState.hint': 'Faster while running, amber while waiting, red on error',
      mode: 'Mode',
      palette: 'Palette',
      brightness: 'Brightness',
      thickness: 'Thickness',
      speed: 'Speed',
      'speed.hint': '0 keeps it still',
      dash: 'Dash length',
      'dash.hint': 'Share of the ring the scanner covers',
      direction: 'Direction',
      offset: 'Outset',
      'offset.hint': 'Negative pulls the ring inside the card',
      rail: 'Sidebar strip',
      'rail.hint': 'Vertical light bar on the sidebar edge',
      logo: 'Brand logo',
      'logo.hint': 'RGB effect on top-left whale mark and wordmark',
      session: 'Active session bar',
      'session.hint': 'Glowing indicator beside the active session in sidebar',
      effect: 'Effect',
      'mode.flow': 'Flow',
      'palette.inherit': 'Match the ring',
      'mode.static': 'Static gradient',
      'mode.spectrum': 'Spectrum cycle',
      'mode.breath': 'Breathing',
      'mode.breathSpectrum': 'Breathing spectrum',
      'mode.wave': 'Rainbow wave',
      'mode.scanner': 'Scanner',
      'direction.cw': 'Clockwise',
      'direction.ccw': 'Counter-clockwise',
      'palette.rainbow': 'Rainbow',
      'palette.aurora': 'Aurora',
      'palette.sunset': 'Sunset',
      'palette.neon': 'Neon',
      'palette.gold': 'Gold',
      'palette.solid': 'Single color',
      'palette.custom': 'Custom colors',
      color: 'Color',
      colors: 'Colors',
      add: 'Add a color',
      remove: 'Remove the last color',
    };
    const zh = {
      section: 'RGB 输入框光环',
      enable: '启用光环',
      followState: '跟随会话状态',
      'followState.hint': '运行中加速、等待时琥珀、出错变红',
      mode: '模式',
      palette: '配色',
      brightness: '亮度',
      thickness: '粗细',
      speed: '速度',
      'speed.hint': '0 表示静止',
      dash: '光段长度',
      'dash.hint': '扫描线占整圈的比例',
      direction: '方向',
      offset: '外扩偏移',
      'offset.hint': '负数把光环收进卡片内侧',
      rail: '侧边光条',
      'rail.hint': '侧边栏右缘的竖向光条',
      logo: '左上角 Logo',
      'logo.hint': '左上角鲸鱼图标与品牌文字的 RGB 效果',
      session: '活跃会话指示条',
      'session.hint': '侧边栏当前激活会话左侧的流光指示条',
      effect: '效果',
      'mode.flow': '流动',
      'palette.inherit': '跟随主环',
      'mode.static': '静态渐变',
      'mode.spectrum': '光谱循环',
      'mode.breath': '呼吸',
      'mode.breathSpectrum': '呼吸光谱',
      'mode.wave': '彩虹流动',
      'mode.scanner': '扫描线',
      'direction.cw': '顺时针',
      'direction.ccw': '逆时针',
      'palette.rainbow': '彩虹',
      'palette.aurora': '极光',
      'palette.sunset': '日落',
      'palette.neon': '霓虹',
      'palette.gold': '香槟金',
      'palette.solid': '单色',
      'palette.custom': '自选多色',
      color: '颜色',
      colors: '颜色数',
      add: '增加一个颜色',
      remove: '去掉最后一个颜色',
    };

    let style = read();
    const listeners = new Set();
    // One sidebar surface's own effect, validated field by field.
    function surface(fallback, raw, modes) {
      const source = raw && typeof raw === 'object' ? raw : {};
      return {
        enabled: typeof source.enabled === 'boolean' ? source.enabled : fallback.enabled,
        mode: modes.includes(source.mode) ? source.mode : fallback.mode,
        palette: SURFACE_PALETTES.includes(source.palette) ? source.palette : fallback.palette,
      };
    }
    function read() {
      try {
        const next = { ...DEFAULTS, ...JSON.parse(localStorage.getItem(STORE_KEY) || '{}') };
        // A mode or palette removed from the lists would otherwise leave a dead value.
        if (!MODES.includes(next.mode)) next.mode = DEFAULTS.mode;
        if (!PALETTE_KEYS.includes(next.palette)) next.palette = DEFAULTS.palette;
        if (!Array.isArray(next.colors) || next.colors.length < 2) next.colors = DEFAULTS.colors.slice();
        next.colors = next.colors.slice(0, 6);
        // Stored values from older slider ranges must land inside the current ones.
        next.thickness = Math.min(5, Math.max(1, Math.round(next.thickness) || DEFAULTS.thickness));
        next.rail = surface(DEFAULTS.rail, next.rail, SURFACE_MODES);
        next.logo = surface(DEFAULTS.logo, next.logo, LOGO_MODES);
        next.session = surface(DEFAULTS.session, next.session, SURFACE_MODES);
        return next;
      } catch { return { ...DEFAULTS }; }
    }
    function write(patch) {
      style = { ...style, ...patch };
      try { localStorage.setItem(STORE_KEY, JSON.stringify(style)); } catch {}
      publish(style);
      listeners.forEach((fn) => fn());
    }
    function useStyle() {
      const [, bump] = React.useState(0);
      React.useEffect(() => {
        const fn = () => bump((n) => n + 1);
        listeners.add(fn);
        return () => { listeners.delete(fn); };
      }, []);
      return style;
    }

    function colorsOf(s, key) {
      if (key === 'solid') return [s.color];
      if (key === 'custom') return s.colors.length > 1 ? s.colors : s.colors.concat(s.colors[0]);
      return PALETTES[key] || PALETTES.rainbow;
    }
    function colors(s) { return colorsOf(s, s.palette); }
    function stopsOf(s, key) {
      const list = colorsOf(s, key);
      return list.concat(list[0]).join(',');
    }
    function sweep(s) { return stopsOf(s, s.palette); }
    // Swatch preview: solid and custom read the live store values, inherit the main ring.
    function sweepOf(s, key) {
      return key === 'inherit' ? sweep(s) : stopsOf(s, key);
    }

    function publish(s) {
      const root = document.documentElement;
      if (s.enabled) delete root.dataset.rgbOff; else root.dataset.rgbOff = '1';
      root.dataset.rgbMode = s.mode;
      root.style.setProperty('--rgb-stops', sweep(s));
      root.style.setProperty('--rgb-color', colors(s)[0]);
      root.style.setProperty('--rgb-width', s.thickness + 'px');
      root.style.setProperty('--rgb-period', s.speed + 's');
      root.style.setProperty('--rgb-dir', s.direction === 'ccw' ? 'reverse' : 'normal');
      root.style.setProperty('--rgb-brightness', String(s.brightness / 100));
      root.style.setProperty('--rgb-offset', s.offset + 'px');
      for (const name of ['rail', 'session']) {
        const own = s[name] || DEFAULTS[name];
        const flagName = 'rgb' + name[0].toUpperCase() + name.slice(1);
        root.dataset[flagName + 'Mode'] = own.mode;
        if (own.enabled) delete root.dataset[flagName + 'Off'];
        else root.dataset[flagName + 'Off'] = '1';
        const list = own.palette === 'inherit' ? colors(s) : colorsOf(s, own.palette);
        root.style.setProperty('--rgb-' + name + '-stops', list.concat(list[0]).join(','));
      }
    }

    function unpublish() {
      const root = document.documentElement;
      PUBLISHED.forEach((name) => root.style.removeProperty(name));
      ['rail', 'session'].forEach((name) => {
        const flagName = 'rgb' + name[0].toUpperCase() + name.slice(1);
        root.style.removeProperty('--rgb-' + name + '-stops');
        delete root.dataset[flagName + 'Mode'];
        delete root.dataset[flagName + 'Off'];
      });
      // In case topbar flag or property remained from previous session
      delete root.dataset.rgbTopbarMode;
      delete root.dataset.rgbTopbarOff;
      root.style.removeProperty('--rgb-topbar-stops');
      root.style.removeProperty('--rgb-glow');
      root.style.removeProperty('--rgb-glow-px');
      root.style.removeProperty('--rgb-neon-c1');
      root.style.removeProperty('--rgb-neon-c2');
      FLAGS.forEach((flag) => { delete root.dataset[flag]; });
    }

    // Angle whose ray from the box centre meets the perimeter at distance `s`
    // (0 = top centre, clockwise). Constant angular speed crawls along the middle of
    // the long edges and snaps around them, so the sweep is driven by distance instead.
    // shortcut: corners are treated as square, so speed dips slightly on the arc ends.
    function angleAt(w, h, s) {
      const a = w / 2;
      const b = h / 2;
      const d = ((s % (2 * (w + h))) + 2 * (w + h)) % (2 * (w + h));
      let deg;
      if (d < w) deg = Math.atan2(d - a, b);
      else if (d < w + h) deg = Math.atan2(a, b - (d - w));
      else if (d < 2 * w + h) deg = Math.atan2(a - (d - w - h), -b);
      else deg = Math.atan2(-a, d - 2 * w - h - b);
      return (((deg * 180) / Math.PI) + 360) % 360;
    }

    
    function getLogoStops(list) {
      if (list.length < 3) return { mark: list, name: list };
      return { mark: [list[0], list[1]], name: list.slice(1) };
    }

    function makeStops(list) {
      const safe = list.length > 1 ? list : [list[0], list[0]];
      return safe.map((c, i) => h('stop', {
        key: i,
        offset: Math.round((i / (safe.length - 1)) * 100) + '%',
        stopColor: c,
      }));
    }

    function getSurfaceAnimation(mode, s) {
      const base = {
        filter: 'var(--rgb-logo-glow) var(--rgb-logo-tune)',
        pointerEvents: 'none',
        overflow: 'visible',
      };
      if (mode === 'static' || s.speed <= 0) return base;
      const period = s.speed + 's';
      const factor = 'var(--rgb-factor, 1)';
      const dir = s.direction === 'ccw' ? 'reverse' : 'normal';
      if (mode === 'flow') {
        return {
          ...base,
          filter: 'var(--rgb-logo-glow) hue-rotate(var(--rgb-hue, 0deg)) var(--rgb-logo-tune)',
          animation: 'rgb-hue calc(' + period + ' * ' + factor + ') linear infinite ' + dir,
        };
      }
      if (mode === 'breath') {
        return {
          ...base,
          animation: 'rgb-logo-breath calc(' + period + ' / 2) ease-in-out infinite alternate',
        };
      }
      if (mode === 'breathSpectrum') {
        return {
          ...base,
          filter: 'var(--rgb-logo-glow) hue-rotate(var(--rgb-hue, 0deg)) var(--rgb-logo-tune)',
          animation: 'rgb-logo-breath calc(' + period + ' / 2) ease-in-out infinite alternate, rgb-hue calc(' + period + ' * ' + factor + ') linear infinite ' + dir,
        };
      }
      return base;
    }

    function BrandMark(props) {
      const size = props && typeof props.size === 'number' ? props.size : 24;
      const s = useStyle();
      const logo = s.logo || DEFAULTS.logo || { enabled: true, mode: 'flow', palette: 'inherit' };
      const list = logo.palette === 'inherit' ? colors(s) : colorsOf(s, logo.palette);
      const stops = getLogoStops(list).mark;
      const enabled = s.enabled && logo.enabled;
      const anim = getSurfaceAnimation(logo.mode, s);

      return h('svg', {
        width: size,
        height: (size * 17.04) / 23.16,
        viewBox: '0 0 23.16 17.04',
        fill: 'none',
        'aria-hidden': 'true',
        'data-rgb-brand-svg': 'true',
        style: enabled ? anim : { pointerEvents: 'none' },
      }, [
        h('defs', { key: 'defs' }, [
          h('linearGradient', {
            id: 'rgb-mark-grad',
            key: 'grad',
            x1: '0%', y1: '0%', x2: '100%', y2: '0%',
          }, makeStops(stops)),
        ]),
        h('path', {
          key: 'whale',
          d: WHALE_PATH,
          fill: enabled ? 'url(#rgb-mark-grad)' : 'currentColor',
        }),
      ]);
    }

    function BrandName() {
      const s = useStyle();
      const logo = s.logo || DEFAULTS.logo || { enabled: true, mode: 'flow', palette: 'inherit' };
      const list = logo.palette === 'inherit' ? colors(s) : colorsOf(s, logo.palette);
      const stops = getLogoStops(list).name;
      const enabled = s.enabled && logo.enabled;
      const anim = getSurfaceAnimation(logo.mode, s);

      return h('svg', {
        width: 156,
        height: 24,
        viewBox: '26 0 156 24',
        fill: 'none',
        'aria-hidden': 'true',
        'data-rgb-brand-svg': 'true',
        style: enabled ? anim : { pointerEvents: 'none' },
      }, [
        h('defs', { key: 'defs' }, [
          h('linearGradient', {
            id: 'rgb-name-grad',
            key: 'grad',
            gradientUnits: 'userSpaceOnUse',
            x1: '26', y1: '0', x2: '182', y2: '0',
          }, makeStops(stops)),
          h('clipPath', { id: 'dsh-rgb-badge-clip', key: 'clip' }, [
            h('rect', { width: '46', height: '14', fill: 'white', transform: 'translate(132.348 5.5)' }),
          ]),
        ]),
        ...WORDMARK_PATHS.map((d, i) => h('path', {
          key: 'letter-' + i,
          d,
          fill: enabled ? 'url(#rgb-name-grad)' : 'currentColor',
        })),
        h('rect', {
          key: 'badge-rect',
          x: '129.348', y: '5.5', width: '52', height: '14', rx: '2.5',
          fill: 'currentColor',
          fillOpacity: enabled ? '0.08' : '1',
          stroke: enabled ? 'url(#rgb-name-grad)' : 'none',
          strokeWidth: enabled ? '1' : '0',
        }),
        h('g', {
          key: 'badge-text',
          clipPath: enabled ? undefined : 'url(#dsh-rgb-badge-clip)',
        }, BADGE_PATHS.map((d, i) => h('path', {
          key: 'harness-' + i,
          d,
          fill: enabled ? 'url(#rgb-name-grad)' : 'var(--dsw-alias-label-primary-inverted)',
        }))),
      ]);
    }

    // Renders nothing: drives the scanner angle on the composer card and projects the
    // session state that turns the ring into a status light.
    function Driver(props) {
      const s = useStyle();
      const anchor = React.useRef(null);

      React.useEffect(() => {
        if (s.mode !== 'scanner' || !s.enabled || s.speed <= 0) return;
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let card = null;
        let w = 0;
        let h = 0;
        const measure = () => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          w = rect.width;
          h = rect.height;
        };
        const observer = new ResizeObserver(measure);
        const start = performance.now();
        let frameId = 0;
        const tick = (now) => {
          if (anchor.current && (!card || !card.isConnected)) {
            card = anchor.current.closest('[data-composer-card]');
            if (card) { measure(); observer.disconnect(); observer.observe(card); }
          }
          if (card && w > 0) {
            const perimeter = 2 * (w + h);
            const lap = ((now - start) / 1000 / s.speed) % 1;
            const at = (s.direction === 'ccw' ? 1 - lap : lap) * perimeter;
            const head = angleAt(w, h, at);
            card.style.setProperty('--rgb-angle', head + 'deg');
            const tail = angleAt(w, h, at + Math.max(8, (perimeter * s.dash) / 100));
            card.style.setProperty('--rgb-span', (((tail - head) % 360) + 360) % 360 + 'deg');
          }
          frameId = requestAnimationFrame(tick);
        };
        frameId = requestAnimationFrame(tick);
        return () => {
          cancelAnimationFrame(frameId);
          observer.disconnect();
          if (card) {
            card.style.removeProperty('--rgb-angle');
            card.style.removeProperty('--rgb-span');
          }
        };
      }, [s.mode, s.enabled, s.speed, s.dash, s.direction]);

      const sessionState = props.useSession((snapshot) => (
        snapshot.promptError || snapshot.lastAgentError ? 'error'
          : snapshot.running ? 'running' : 'idle'
      ));
      const attention = props.useSessionStatus((map) => map.get(props.sessionId)?.pendingInteraction !== undefined);
      const wasRunning = React.useRef(false);
      const celebrateTimer = React.useRef(0);

      React.useEffect(() => {
        const root = document.documentElement;
        if (!s.followState) {
          delete root.dataset.rgbState;
          delete root.dataset.rgbCelebrate;
          return;
        }
        root.dataset.rgbState = sessionState === 'error' ? 'error'
          : attention ? 'attention'
            : sessionState === 'running' ? 'running' : 'idle';
        if (root.dataset.rgbState === 'idle') delete root.dataset.rgbState;
        if (wasRunning.current && sessionState === 'idle' && !attention) {
          root.dataset.rgbCelebrate = '1';
          clearTimeout(celebrateTimer.current);
          celebrateTimer.current = setTimeout(() => { delete root.dataset.rgbCelebrate; }, 900);
        }
        wasRunning.current = sessionState === 'running';
      }, [sessionState, attention, s.followState]);

      React.useEffect(() => () => {
        clearTimeout(celebrateTimer.current);
        delete document.documentElement.dataset.rgbState;
        delete document.documentElement.dataset.rgbCelebrate;
      }, []);

      return h('span', { ref: anchor, style: { display: 'none' } });
    }

    // Renders nothing: tags the left column so the stylesheet can paint its right edge.
    // The shell frame's first element child is the sidebar column (DocumentTitle renders
    // null), and the frame is found through the always-present overlay layer.
    function Rail() {
      const anchor = React.useRef(null);
      React.useEffect(() => {
        const overlay = document.querySelector('[data-shell-overlay]');
        const shell = overlay && overlay.parentElement;
        const column = shell && shell.firstElementChild;
        if (!column || column === overlay) return;
        column.dataset.rgbRail = '1';
        return () => { delete column.dataset.rgbRail; };
      }, []);
      return h('span', { ref: anchor, style: { display: 'none' } });
    }

    const labelStyle = { color: 'var(--dsw-alias-label-primary)', fontSize: 13 };
    const hintStyle = { color: 'var(--dsw-alias-label-secondary)', fontSize: 12 };
    const valueStyle = {
      width: 48, textAlign: 'right', fontVariantNumeric: 'tabular-nums',
      color: 'var(--dsw-alias-label-secondary)', fontSize: 12,
    };
    const controlStyle = {
      padding: '4px 8px', borderRadius: 8, fontSize: 13, minWidth: 168,
      background: 'var(--dsw-alias-bg-layer-2)', color: 'var(--dsw-alias-label-primary)',
      border: '1px solid var(--dsw-alias-border-l1)',
    };
    const miniButtonStyle = {
      width: 24, height: 24, padding: 0, borderRadius: 6, cursor: 'pointer', fontSize: 14,
      lineHeight: 1, background: 'var(--dsw-alias-bg-layer-2)',
      color: 'var(--dsw-alias-label-secondary)', border: '1px solid var(--dsw-alias-border-l1)',
    };
    const colorInputStyle = {
      width: 28, height: 28, padding: 0, borderRadius: 8, cursor: 'pointer',
      background: 'transparent', border: '1px solid var(--dsw-alias-border-l1)',
    };

    function Row(props) {
      return h('div', {
        style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, minHeight: 32 },
      }, h('div', { style: { display: 'flex', flexDirection: 'column', gap: 2 } },
        h('span', { style: labelStyle }, props.label),
        props.hint ? h('span', { style: hintStyle }, props.hint) : null), props.children);
    }

    function Toggle(props) {
      return h('button', {
        type: 'button', role: 'switch', 'aria-checked': props.checked, 'aria-label': props.label,
        onClick: () => props.onChange(!props.checked),
        style: {
          width: 38, height: 22, padding: 2, borderRadius: 11, cursor: 'pointer', flex: 'none',
          display: 'flex', alignItems: 'center',
          justifyContent: props.checked ? 'flex-end' : 'flex-start',
          border: '1px solid var(--dsw-alias-border-l2)',
          background: props.checked ? 'var(--dsw-alias-brand-primary)' : 'var(--dsw-alias-bg-layer-2)',
        },
      }, h('span', {
        // Not plain white: the brand color itself is near-white in the dark theme.
        style: {
          width: 16, height: 16, borderRadius: '50%',
          background: props.checked ? 'var(--dsw-alias-bg-base)' : 'var(--dsw-alias-label-primary)',
        },
      }));
    }

    function ColorInput(props) {
      return h('input', {
        type: 'color', value: props.value, 'aria-label': props.label, style: colorInputStyle,
        onChange: (event) => props.onChange(event.target.value),
      });
    }

    function Slider(props) {
      return h('div', { style: { display: 'flex', alignItems: 'center', gap: 10 } },
        h('input', {
          type: 'range', min: props.min, max: props.max, step: 1, value: props.value,
          'aria-label': props.label, onChange: (event) => props.onChange(Number(event.target.value)),
          style: { width: 168, accentColor: 'var(--dsw-alias-brand-primary)' },
        }),
        h('span', { style: valueStyle }, props.value + props.suffix));
    }

    function PaletteRow(props) {
      const s = props.store;
      return h('div', { style: { display: 'flex', gap: 8 } }, props.keys.map((key) => h('button', {
        key, type: 'button', title: props.t('palette.' + key), 'aria-label': props.t('palette.' + key),
        'aria-pressed': props.value === key, onClick: () => props.onChange(key),
        style: {
          width: 28, height: 28, padding: 0, borderRadius: 8, cursor: 'pointer',
          background: 'conic-gradient(from 180deg,' + sweepOf(s, key) + ')',
          border: '1px solid var(--dsw-alias-border-l1)',
          // Outline, not a thicker border: no layout shift and readable on both themes.
          outline: props.value === key ? '2px solid var(--dsw-alias-label-primary)' : 'none',
          outlineOffset: 2,
        },
      })));
    }

    function Surface(props) {
      const s = props.store;
      const own = s[props.name] || DEFAULTS[props.name] || { enabled: true, mode: 'flow', palette: 'inherit' };
      const t = props.t;
      return h(React.Fragment, null,
        h(Row, { label: t(props.name), hint: t(props.name + '.hint') },
          h(Toggle, {
            checked: own.enabled, label: t(props.name),
            onChange: (v) => write({ [props.name]: { ...own, enabled: v } }),
          })),
        own.enabled
          ? h(Row, { label: t('effect') },
            h('select', {
              value: own.mode, 'aria-label': t('effect'), style: controlStyle,
              onChange: (event) => write({ [props.name]: { ...own, mode: event.target.value } }),
            }, (props.name === 'logo' ? LOGO_MODES : SURFACE_MODES).map((mode) => (
              h('option', { key: mode, value: mode }, t('mode.' + mode))))))
          : null,
        own.enabled
          ? h(Row, { label: t('palette') }, h(PaletteRow, {
            store: s, keys: SURFACE_PALETTES, value: own.palette, t,
            onChange: (key) => write({ [props.name]: { ...own, palette: key } }),
          }))
          : null);
    }

    function Section(props) {
      const s = useStyle();
      const t = props.t;
      return h('div', { style: { display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 560 } },
        h(Row, { label: t('enable') },
          h(Toggle, { checked: s.enabled, onChange: (v) => write({ enabled: v }), label: t('enable') })),
        h(Row, { label: t('followState'), hint: t('followState.hint') },
          h(Toggle, {
            checked: s.followState, label: t('followState'),
            onChange: (v) => write({ followState: v }),
          })),
        h(Row, { label: t('mode') },
          h('select', {
            value: s.mode, 'aria-label': t('mode'), style: controlStyle,
            onChange: (event) => write({ mode: event.target.value }),
          }, MODES.map((mode) => h('option', { key: mode, value: mode }, t('mode.' + mode))))),
        h(Row, { label: t('palette') },
          h(PaletteRow, {
            store: s, keys: PALETTE_KEYS, value: s.palette, t,
            onChange: (key) => write({ palette: key }),
          })),
        s.palette === 'solid'
          ? h(Row, { label: t('color') }, h(ColorInput, {
            value: s.color, label: t('color'), onChange: (v) => write({ color: v }),
          }))
          : null,
        s.palette === 'custom'
          ? h(Row, { label: t('colors') },
            h('div', { style: { display: 'flex', alignItems: 'center', gap: 6 } },
              s.colors.map((value, i) => h(ColorInput, {
                key: i, value, label: t('colors'),
                onChange: (v) => write({ colors: s.colors.map((old, j) => (j === i ? v : old)) }),
              })),
              h('button', {
                type: 'button', title: t('add'), 'aria-label': t('add'),
                onClick: () => write({ colors: s.colors.concat(s.colors[s.colors.length - 1]) }),
                style: { ...miniButtonStyle, display: s.colors.length < 6 ? undefined : 'none' },
              }, '+'),
              h('button', {
                type: 'button', title: t('remove'), 'aria-label': t('remove'),
                onClick: () => write({ colors: s.colors.slice(0, -1) }),
                style: { ...miniButtonStyle, display: s.colors.length > 2 ? undefined : 'none' },
              }, '−')))
          : null,
        h(Row, { label: t('brightness') },
          h(Slider, {
            value: s.brightness, min: 20, max: 100, suffix: '%', label: t('brightness'),
            onChange: (v) => write({ brightness: v }),
          })),
        h(Row, { label: t('thickness') },
          h(Slider, {
            value: s.thickness, min: 1, max: 5, suffix: ' px', label: t('thickness'),
            onChange: (v) => write({ thickness: v }),
          })),
        h(Row, { label: t('speed'), hint: t('speed.hint') },
          h(Slider, {
            value: s.speed, min: 0, max: 20, suffix: ' s', label: t('speed'),
            onChange: (v) => write({ speed: v }),
          })),
        h(Row, { label: t('dash'), hint: t('dash.hint') },
          h(Slider, {
            value: s.dash, min: 2, max: 60, suffix: '%', label: t('dash'),
            onChange: (v) => write({ dash: v }),
          })),
        h(Row, { label: t('direction') },
          h('div', { style: { display: 'flex', gap: 6 } }, ['cw', 'ccw'].map((key) => h('button', {
            key, type: 'button', title: t('direction.' + key), 'aria-label': t('direction.' + key),
            'aria-pressed': s.direction === key, onClick: () => write({ direction: key }),
            style: {
              width: 34, height: 28, borderRadius: 8, cursor: 'pointer', fontSize: 14,
              background: s.direction === key ? 'var(--dsw-alias-brand-primary)' : 'var(--dsw-alias-bg-layer-2)',
              // bg-base instead of #fff: the brand color is near-white in the dark theme.
              color: s.direction === key ? 'var(--dsw-alias-bg-base)' : 'var(--dsw-alias-label-secondary)',
              border: '1px solid var(--dsw-alias-border-l1)',
            },
          }, key === 'cw' ? '↻' : '↺')))),
        h(Row, { label: t('offset'), hint: t('offset.hint') },
          h(Slider, {
            value: s.offset, min: -4, max: 8, suffix: ' px', label: t('offset'),
            onChange: (v) => write({ offset: v }),
          })),
        h(Surface, { store: s, name: 'rail', t }),
        h(Surface, { store: s, name: 'logo', t }),
        h(Surface, { store: s, name: 'session', t }));
    }

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        const active = ctx.locale.getLocale().active;
        const dictFor = (id) => (String(id).toLowerCase().startsWith('zh') ? zh : en);
        const dicts = { en, zh, [active]: dictFor(active) };
        ctx.effect(() => {
          const offs = Object.keys(dicts).map((id) => ctx.locale.register(NS, id, dicts[id]));
          return () => { offs.forEach((off) => off()); };
        });
        ctx.effect(() => {
          const tag = document.createElement('style');
          tag.setAttribute('data-plugin', '@local/rgb-composer-ring');
          tag.textContent = STYLESHEET;
          document.head.appendChild(tag);
          publish(style);
          return () => { tag.remove(); unpublish(); };
        });
        const t = ctx.locale.bind(NS);
        ctx.slots.inject('conversation.input.overlay', () => ctx.slots.register({
          name: 'conversation.input.overlay', id: 'rgb-composer-ring', order: -1,
        }, Driver));
        ctx.slots.inject('shell.overlay', () => ctx.slots.register({
          name: 'shell.overlay', id: 'rgb-composer-ring-rail', order: 90,
        }, Rail));
        ctx.slots.inject('sidebar.brand.mark', () => ctx.slots.register({
          name: 'sidebar.brand.mark',
          priority: -1,
        }, BrandMark));
        ctx.slots.inject('sidebar.brand.name', () => ctx.slots.register({
          name: 'sidebar.brand.name',
          priority: -1,
        }, BrandName));
        ctx.slots.inject('settings.section', () => ctx.slots.register({
          name: 'settings.section', id: 'rgb-composer-ring', order: 26, label: () => t('section'),
        }, (props) => h(Section, { ...props, t })));
      },
    };
  },
});
