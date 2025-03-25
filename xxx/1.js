var body = $response.body;
var obj = JSON.parse(body);

// 示例：修改会员过期时间、会员类型及金币余额
obj.data.member_expire_time = "2099-12-31 23:59:59"; // 字符串类型
obj.data.member_type = 1;                            // 数值类型（0→1表示会员）
obj.data.coin_balance = 9999;                        // 数值类型

$done({ body: JSON.stringify(obj) });
