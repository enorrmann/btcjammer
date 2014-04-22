function replaceAll(find, replace, str) {
	return str.replace(new RegExp(find, 'g'), replace);
}

self.port
		.on(
				"replacePage",
				function(jm) {

					var respString = jm;
					respString = respString.replace(/['()]/g, "");
					respString = replaceAll(" estimated", "", respString);

					var resp = JSON.parse(respString);

					var jammertable = "";

					jammertable += '<div class="span"style="width:88%;">';
					jammertable += '<div class="row" style="width:100%;">';
					jammertable += '<div class="widgetlight">';
					jammertable += '<h3>Jammer Data</h3>';
					jammertable += '<div class="widgetcontent">';
					jammertable += '<table class="jammerTable">';
					jammertable += '<tr><th></th><th>Investments</th><th>Loans</th><th>Debt</th></tr>';
					jammertable += '<tr><td>Active</td><td class="invActive">1</td><td class="loansActive">2</td><td class="debtActive">3</td></tr>';
					jammertable += '<tr><td>Funding</td><td class="invFunding">1</td><td class="loansFunding">2</td><td class="debtFunding">3</td></tr>';
					jammertable += '<tr><td>Overdue</td><td class="invOverdue">1</td><td class="loansOverdue">2</td><td class="debtOverdue">3</td></tr>';
					jammertable += '</table>';
					jammertable += '</div>';
					jammertable += '</div>';
					jammertable += '</div>';
					jammertable += '</div>';

					$('div.row:nth-child(3)').before(jammertable);

					$('td.invActive').html(resp[0].data.Investments);
					$('td.invFunding').html(resp[2].data.Investments);
					$('td.invOverdue').html(resp[1].data.Investments);

					$('td.loansActive').html(resp[0].data.Loans);
					$('td.loansFunding').html(resp[2].data.Loans);
					$('td.loansOverdue').html(resp[1].data.Loans);

					$('td.debtActive').html(resp[0].data.Debt);
					$('td.debtFunding').html(resp[2].data.Debt);
					$('td.debtOverdue').html(resp[1].data.Debt);

				});
