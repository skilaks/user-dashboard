export const UserFinancially = [
    {
        nationalCode: '-',//کد ملی کاربر
        inventory: 0,//موجودی کاربر
        payments: [{ date: '', amount: '', lCode: '', token: '' }],//واریزی ها
        totalPayments: 0,//کل واریزی ها به استاد
        companyProfit: 0,
    },
    {
        nationalCode: '0923687602',//کد ملی کاربر
        inventory: 200000,//موجودی کاربر
        payments: [
            { date: '1400/08/25', amount: '2900000', lCode: '01', token: '' },
            { date: '1400/06/02', amount: '3000000', lCode: '02', token: '' },
            { date: '1400/02/01', amount: '800000', lCode: '03', token: '' },
        ],//واریزی ها
        totalPayments: '6700000',//کل واریزی ها
        companyProfit: '-',
    },
  
]

export const LessonFinancially = [
    {
        lCode: '',//کد درس
        price: 0,//قیمت
        payments: [{ date: '', amount: '', nCode: '', token: '' }],//واریزی ها
        amountsReleased: [{ date: '', amount: '', token: '' }],//مبالغ آزاد سازی شده
        totalReleased: 0,//مجموع آزاد سازی شده
        totalPayments: 0,//مجموع واریزی ها
        companyProfit: 0,//سود شرکت,
        teachingRights: 0,//حق التدریس استاد
        interestRates: 0,//درصد سود
        netProfit: 0,//سود خالص
    },
    {
        lCode: '01',//کد درس
        price: 2900000,//قیمت
        payments: [{ date: '1400/08/25', amount: '2900000', nCode: '0923687602', token: '' }],//واریزی ها
        amountsReleased: [{ date: '1400/08/26', amount: '2500000', token: '' }],//مبالغ آزاد سازی شده
        totalReleased: 2500000,//مجموع آزاد سازی شده
        totalPayments: 2900000,//مجموع واریزی ها
        companyProfit: 400000,//سود شرکت,
        teachingRights: 2500000,//حق التدریس استاد
        interestRates: 0,//درصد سود
        netProfit: 400000,//سود خالص
    },
]