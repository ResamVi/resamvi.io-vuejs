<template>
<Entry>
    <template slot="date">11. April, 2020</template>
    <template slot="title">
        <router-link class="nostyle" to="/eintrag/Speedtest">VueJS, VanillaJS und Website Optimierung</router-link>
    </template>
    <template slot="content">
        <p>
            Dieser Blog hier wurde mit Vue.js geschrieben und die leichte Entwicklung
            die Vue.js gewährt hat nur einen Haken: Zu jedem Aufruf, muss die Vue.js Runtime
            geladen werden.
        </p>

        <p>
            Mit der Zeit liest man Dinge zu JS Frameworks und Vanilla JS, wo einem die
            Frage hochkommt ob man die richtige Entscheidung gemacht hat, weil Vanilla JS einfach
            viel performanter ist:
        </p>

        <p>Speed Vergleich</p>
        <div style="overflow-x:auto;">
            <table class="comparison">
                <tbody>
                    <tr>
                        <td class="corner "></td>
                        <th>Code</th>
                        <th>ops / sec</th>
                    </tr>
                    <tr>
                        <th><span class="vanillajs ">Vanilla JS</span></th>
                        <td class="code ">document.getElementById('test-table');</td>
                        <td class="ops ">
                            <div class="container "><span class="label ">12,137,211 </span>
                                <div class="bar " style="width:100.00%; ">&nbsp;</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Dojo</th>
                        <td class="code ">dojo.byId('test-table');</td>
                        <td class="ops ">
                            <div class="container "><span class="label ">5,443,343 </span>
                                <div class="bar " style="width:44.85%; ">&nbsp;</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Prototype JS</th>
                        <td class="code ">$('test-table')</td>
                        <td class="ops ">
                            <div class="container "><span class="label ">2,940,734 </span>
                                <div class="bar " style="width:24.23%; ">&nbsp;</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Ext JS</th>
                        <td class="code ">delete Ext.elCache['test-table']; Ext.get('test-table');</td>
                        <td class="ops ">
                            <div class="container "><span class="label ">997,562 </span>
                                <div class="bar " style="width:8.22%; ">&nbsp;</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>jQuery</th>
                        <td class="code ">$jq('#test-table');</td>
                        <td class="ops ">
                            <div class="container "><span class="label ">350,557 </span>
                                <div class="bar " style="width:2.89%; ">&nbsp;</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>YUI</th>
                        <td class="code ">YAHOO.util.Dom.get('test-table');</td>
                        <td class="ops ">
                            <div class="container "><span class="label ">326,534 </span>
                                <div class="bar " style="width:2.69%; ">&nbsp;</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>MooTools</th>
                        <td class="code ">document.id('test-table');</td>
                        <td class="ops ">
                            <div class="container "><span class="label ">78,802 </span>
                                <div class="bar " style="width:0.65%; ">&nbsp;</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <cite>Von <a href="http://vanilla-js.com/ ">http://vanilla-js.com/</a></cite>

        <p>Kommentaren</p>
        <blockquote>"We recently upgraded our B2C website, which is a SPA/vue affair. After going through the development
            and upgrade of the site, and seeing first-hand what the code looks like after having to do some debugging in it,
            I will clearly
            keep the SPA/js hammer in the tool drawer unless I have a very specific nail to hit. "</blockquote>
        Von <cite><a href="https://news.ycombinator.com/item?id=19506816 ">User laurentl</a></cite>

        <p>
            Die Benchmarks wurden mit <a href="https://github.com/krausest/js-framework-benchmark ">js-framework-benchmark</a>
            auf meinem Lenovo T440, Intel Core i5, 8GB RAM, Arch Linux Laptop ausgeführt.
        </p>

        <div style="overflow-x:auto;">
            <table class="results ">
                <thead>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">Name</a><br>Duration for...</th>
                        <th class=" ">vanillajs-keyed</th>
                        <th class=" ">vue-vinvalid (no package-lock)-keyed</th>
                        <th class=" ">angular-vinvalid (no package-lock)-keyed</th>
                        <th class=" ">react-vinvalid (no package-lock)-keyed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">create rows</a>
                            <div class="rowCount ">creating 1,000 rows</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">209.7</span><span class="deviation ">15.2</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(180, 214, 128); color: rgb(0, 0, 0); "><span class="mean ">318.2</span><span class="deviation ">9.8</span><br><span class="factor ">(1.52)</span></td>
                        <td style="background-color: rgb(171, 212, 128); color: rgb(0, 0, 0); "><span class="mean ">305.9</span><span class="deviation ">13.2</span><br><span class="factor ">(1.46)</span></td>
                        <td style="background-color: rgb(200, 220, 129); color: rgb(0, 0, 0); "><span class="mean ">345.9</span><span class="deviation ">12.8</span><br><span class="factor ">(1.65)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">replace all rows</a>
                            <div class="rowCount ">updating all 1,000 rows (5 warmup runs).</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">179.6</span><span class="deviation ">2.0</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(131, 200, 126); color: rgb(0, 0, 0); "><span class="mean ">216.5</span><span class="deviation ">5.2</span><br><span class="factor ">(1.21)</span></td>
                        <td style="background-color: rgb(145, 204, 126); color: rgb(0, 0, 0); "><span class="mean ">233.1</span><span class="deviation ">6.9</span><br><span class="factor ">(1.30)</span></td>
                        <td style="background-color: rgb(153, 207, 127); color: rgb(0, 0, 0); "><span class="mean ">242.3</span><span class="deviation ">5.0</span><br><span class="factor ">(1.35)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">partial update</a>
                            <div class="rowCount ">updating every 10th row for 1,000 rows (3 warmup runs). 16x CPU slowdown.
                            </div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">273.5</span><span class="deviation ">2.5</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(188, 217, 129); color: rgb(0, 0, 0); "><span class="mean ">429.8</span><span class="deviation ">26.9</span><br><span class="factor ">(1.57)</span></td>
                        <td style="background-color: rgb(100, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">274.5</span><span class="deviation ">3.0</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(158, 208, 127); color: rgb(0, 0, 0); "><span class="mean ">376.5</span><span class="deviation ">4.7</span><br><span class="factor ">(1.38)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">select row</a>
                            <div class="rowCount ">highlighting a selected row. (5 warmup runs). 16x CPU slowdown.</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">38.1</span><span class="deviation ">1.7</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(249, 105, 108); color: rgb(0, 0, 0); "><span class="mean ">175.0</span><span class="deviation ">4.8</span><br><span class="factor ">(4.59)</span></td>
                        <td style="background-color: rgb(163, 209, 127); color: rgb(0, 0, 0); "><span class="mean ">53.7</span><span class="deviation ">2.6</span><br><span class="factor ">(1.41)</span></td>
                        <td style="background-color: rgb(253, 193, 124); color: rgb(0, 0, 0); "><span class="mean ">101.4</span><span class="deviation ">4.0</span><br><span class="factor ">(2.66)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">swap rows</a>
                            <div class="rowCount ">swap 2 rows for table with 1,000 rows. (5 warmup runs). 4x CPU slowdown.
                            </div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">96.9</span><span class="deviation ">6.5</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(151, 206, 127); color: rgb(0, 0, 0); "><span class="mean ">129.5</span><span class="deviation ">8.3</span><br><span class="factor ">(1.34)</span></td>
                        <td style="background-color: rgb(249, 105, 108); color: rgb(0, 0, 0); "><span class="mean ">811.5</span><span class="deviation ">5.5</span><br><span class="factor ">(8.38)</span></td>
                        <td style="background-color: rgb(249, 105, 108); color: rgb(0, 0, 0); "><span class="mean ">822.9</span><span class="deviation ">11.8</span><br><span class="factor ">(8.49)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">remove row</a>
                            <div class="rowCount ">removing one row. (5 warmup runs).</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">67.0</span><span class="deviation ">1.0</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(124, 198, 125); color: rgb(0, 0, 0); "><span class="mean ">77.6</span><span class="deviation ">1.6</span><br><span class="factor ">(1.16)</span></td>
                        <td style="background-color: rgb(129, 200, 126); color: rgb(0, 0, 0); "><span class="mean ">79.9</span><span class="deviation ">4.8</span><br><span class="factor ">(1.19)</span></td>
                        <td style="background-color: rgb(113, 195, 125); color: rgb(0, 0, 0); "><span class="mean ">72.8</span><span class="deviation ">2.9</span><br><span class="factor ">(1.09)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">create many rows</a>
                            <div class="rowCount ">creating 10,000 rows</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">1,653.4</span><span class="deviation ">18.7</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(152, 206, 127); color: rgb(0, 0, 0); "><span class="mean ">2,216.5</span><span class="deviation ">56.7</span><br><span class="factor ">(1.34)</span></td>
                        <td style="background-color: rgb(163, 209, 127); color: rgb(0, 0, 0); "><span class="mean ">2,328.0</span><span class="deviation ">69.5</span><br><span class="factor ">(1.41)</span></td>
                        <td style="background-color: rgb(223, 227, 130); color: rgb(0, 0, 0); "><span class="mean ">2,969.0</span><span class="deviation ">121.1</span><br><span class="factor ">(1.80)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">append rows to large table</a>
                            <div class="rowCount ">appending 1,000 to a table of 10,000 rows. 2x CPU slowdown</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">397.3</span><span class="deviation ">10.2</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(164, 210, 127); color: rgb(0, 0, 0); "><span class="mean ">563.4</span><span class="deviation ">23.1</span><br><span class="factor ">(1.42)</span></td>
                        <td style="background-color: rgb(150, 206, 127); color: rgb(0, 0, 0); "><span class="mean ">527.8</span><span class="deviation ">12.8</span><br><span class="factor ">(1.33)</span></td>
                        <td style="background-color: rgb(189, 217, 129); color: rgb(0, 0, 0); "><span class="mean ">627.1</span><span class="deviation ">8.6</span><br><span class="factor ">(1.58)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">clear rows</a>
                            <div class="rowCount ">clearing a table with 1,000 rows. 8x CPU slowdown</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">208.7</span><span class="deviation ">4.1</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(165, 210, 127); color: rgb(0, 0, 0); "><span class="mean ">296.5</span><span class="deviation ">8.3</span><br><span class="factor ">(1.42)</span></td>
                        <td style="background-color: rgb(254, 216, 128); color: rgb(0, 0, 0); "><span class="mean ">480.8</span><span class="deviation ">8.1</span><br><span class="factor ">(2.30)</span></td>
                        <td style="background-color: rgb(154, 207, 127); color: rgb(0, 0, 0); "><span class="mean ">282.2</span><span class="deviation ">7.8</span><br><span class="factor ">(1.35)</span></td>
                    </tr>
                    <tr>
                        <th><a href="# " class="sortKey ">slowdown geometric mean</a></th>
                        <th style="background-color: rgb(99, 191, 124); ">1.00</th>
                        <th style="background-color: rgb(187, 216, 128); ">1.56</th>
                        <th style="background-color: rgb(207, 222, 130); ">1.69</th>
                        <th style="background-color: rgb(236, 230, 131); ">1.88</th>
                    </tr>
                </tbody>
            </table>
        </div>

        <br />

        <div style="overflow-x:auto;">
            <table class="results ">
                <thead>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">Name</a></th>
                        <th>vanillajs-keyed</th>
                        <th>vue-vinvalid (no package-lock)-keyed</th>
                        <th>angular-vinvalid (no package-lock)-keyed</th>
                        <th>react-vinvalid (no package-lock)-keyed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">consistently interactive</a>
                            <div class="rowCount ">a pessimistic TTI - when the CPU and network are both definitely very idle.
                                (no more CPU tasks over 50ms)</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">1,881.1</span><span class="deviation ">2.0</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(133, 201, 126); color: rgb(0, 0, 0); "><span class="mean ">2,292.9</span><span class="deviation ">74.6</span><br><span class="factor ">(1.22)</span></td>
                        <td style="background-color: rgb(182, 215, 128); color: rgb(0, 0, 0); "><span class="mean ">2,885.8</span><span class="deviation ">4.7</span><br><span class="factor ">(1.53)</span></td>
                        <td style="background-color: rgb(152, 206, 127); color: rgb(0, 0, 0); "><span class="mean ">2,517.0</span><span class="deviation ">2.5</span><br><span class="factor ">(1.34)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">script bootup time</a>
                            <div class="rowCount ">the total ms required to parse/compile/evaluate all the page's scripts</div>
                        </th>
                        <td style="background-color: rgb(112, 195, 125); color: rgb(0, 0, 0); "><span class="mean ">19.0</span><span class="deviation ">0.5</span><br><span class="factor ">(1.08)</span></td>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">17.6</span><span class="deviation ">1.4</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(249, 105, 108); color: rgb(0, 0, 0); "><span class="mean ">210.7</span><span class="deviation ">10.1</span><br><span class="factor ">(11.99)</span></td>
                        <td style="background-color: rgb(249, 105, 108); color: rgb(0, 0, 0); "><span class="mean ">76.6</span><span class="deviation ">1.2</span><br><span class="factor ">(4.36)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">total kilobyte weight</a>
                            <div class="rowCount ">network transfer cost (post-compression) of all the resources loaded into the
                                page.</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">146.8</span><span class="deviation ">0.0</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(167, 211, 127); color: rgb(0, 0, 0); "><span class="mean ">210.9</span><span class="deviation ">0.0</span><br><span class="factor ">(1.44)</span></td>
                        <td style="background-color: rgb(255, 232, 131); color: rgb(0, 0, 0); "><span class="mean ">302.1</span><span class="deviation ">0.0</span><br><span class="factor ">(2.06)</span></td>
                        <td style="background-color: rgb(220, 226, 130); color: rgb(0, 0, 0); "><span class="mean ">261.0</span><span class="deviation ">0.0</span><br><span class="factor ">(1.78)</span></td>
                    </tr>
                    <tr>
                        <th><a href="# " class=" ">slowdown geometric mean</a></th>
                        <th style="background-color: rgb(103, 192, 124); ">1.03</th>
                        <th style="background-color: rgb(131, 200, 126); ">1.21</th>
                        <th style="background-color: rgb(251, 147, 116); ">3.36</th>
                        <th style="background-color: rgb(254, 224, 130); ">2.18</th>
                    </tr>
                </tbody>
            </table>
        </div>

        <br />

        <div style="overflow-x:auto;">
            <table class="results ">
                <thead>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">Name</a></th>
                        <th>vanillajs-keyed</th>
                        <th>vue-vinvalid (no package-lock)-keyed</th>
                        <th>angular-vinvalid (no package-lock)-keyed</th>
                        <th>react-vinvalid (no package-lock)-keyed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">ready memory</a>
                            <div class="rowCount ">Memory usage after page load.</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">1.1</span><span class="deviation ">0.0</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(123, 198, 125); color: rgb(0, 0, 0); "><span class="mean ">1.2</span><span class="deviation ">0.0</span><br><span class="factor ">(1.15)</span></td>
                        <td style="background-color: rgb(253, 200, 125); color: rgb(0, 0, 0); "><span class="mean ">2.7</span><span class="deviation ">0.0</span><br><span class="factor ">(2.54)</span></td>
                        <td style="background-color: rgb(134, 201, 126); color: rgb(0, 0, 0); "><span class="mean ">1.3</span><span class="deviation ">0.0</span><br><span class="factor ">(1.22)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">run memory</a>
                            <div class="rowCount ">Memory usage after adding 1000 rows.</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">1.6</span><span class="deviation ">0.0</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(253, 203, 126); color: rgb(0, 0, 0); "><span class="mean ">4.0</span><span class="deviation ">0.0</span><br><span class="factor ">(2.51)</span></td>
                        <td style="background-color: rgb(251, 157, 117); color: rgb(0, 0, 0); "><span class="mean ">5.1</span><span class="deviation ">0.0</span><br><span class="factor ">(3.21)</span></td>
                        <td style="background-color: rgb(253, 188, 123); color: rgb(0, 0, 0); "><span class="mean ">4.4</span><span class="deviation ">0.0</span><br><span class="factor ">(2.73)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">update eatch 10th row for 1k rows (5 cycles)</a>
                            <div class="rowCount ">Memory usage after clicking update every 10th row 5 times</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">1.9</span><span class="deviation ">0.0</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(254, 219, 129); color: rgb(0, 0, 0); "><span class="mean ">4.4</span><span class="deviation ">0.0</span><br><span class="factor ">(2.26)</span></td>
                        <td style="background-color: rgb(252, 181, 122); color: rgb(0, 0, 0); "><span class="mean ">5.5</span><span class="deviation ">0.0</span><br><span class="factor ">(2.84)</span></td>
                        <td style="background-color: rgb(253, 194, 124); color: rgb(0, 0, 0); "><span class="mean ">5.1</span><span class="deviation ">0.0</span><br><span class="factor ">(2.65)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">replace 1k rows (5 cycles)</a>
                            <div class="rowCount ">Memory usage after clicking create 1000 rows 5 times</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">2.2</span><span class="deviation ">0.0</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(255, 233, 131); color: rgb(0, 0, 0); "><span class="mean ">4.6</span><span class="deviation ">0.0</span><br><span class="factor ">(2.05)</span></td>
                        <td style="background-color: rgb(253, 193, 124); color: rgb(0, 0, 0); "><span class="mean ">5.9</span><span class="deviation ">0.0</span><br><span class="factor ">(2.66)</span></td>
                        <td style="background-color: rgb(252, 173, 120); color: rgb(0, 0, 0); "><span class="mean ">6.6</span><span class="deviation ">0.0</span><br><span class="factor ">(2.97)</span></td>
                    </tr>
                    <tr>
                        <th class="benchname "><a href="# " class=" ">creating/clearing 1k rows (5 cycles)</a>
                            <div class="rowCount ">Memory usage after creating and clearing 1000 rows 5 times</div>
                        </th>
                        <td style="background-color: rgb(99, 191, 124); color: rgb(0, 0, 0); "><span class="mean ">2.3</span><span class="deviation ">0.0</span><br><span class="factor ">(1.00)</span></td>
                        <td style="background-color: rgb(124, 198, 125); color: rgb(0, 0, 0); "><span class="mean ">2.6</span><span class="deviation ">0.0</span><br><span class="factor ">(1.16)</span></td>
                        <td style="background-color: rgb(238, 231, 131); color: rgb(0, 0, 0); "><span class="mean ">4.3</span><span class="deviation ">0.0</span><br><span class="factor ">(1.89)</span></td>
                        <td style="background-color: rgb(195, 219, 129); color: rgb(0, 0, 0); "><span class="mean ">3.7</span><span class="deviation ">0.0</span><br><span class="factor ">(1.61)</span></td>
                    </tr>
                    <tr>
                        <th><a href="# " class=" ">slowdown geometric mean</a></th>
                        <th style="background-color: rgb(99, 191, 124); ">1.00</th>
                        <th style="background-color: rgb(213, 224, 130); ">1.73</th>
                        <th style="background-color: rgb(253, 197, 125); ">2.59</th>
                        <th style="background-color: rgb(255, 229, 131); ">2.11</th>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>
            Was sie grob zeigen ist, dass eine Verlangsamung erkennbar ist.
            Jetzt ist der Blog hier keine dynamische, intensiv-dynamische Anwendung,
            also haben die meisten Metriken keine Bedeutung aber der Punkt bleibt: <br />
            VanillaJS würde doch ausreichen.
        </p>

        <p>
            jQuery hat das Schicksal, dass es zunehmend durch von Browsern unterstützten
            nativen Funktionen obsolet gemacht worden ist (<a href="http://youmightnotneedjquery.com/ ">http://youmightnotneedjquery.com/</a>).
            Kann das auch mit Vue.js/React/Angular passieren?
        </p>

        <p>
            Aufjedenfall besteht ein Case dafür, dass ich mal versuche diese Webseite
            umzuschreiben. Schauen, ob die Ladezeiten sich reduzieren.
        </p>

        <h2>Umschreiben</h2>

        <p>
            In einer Vorlesung zu Web-Anwendungen & Serviceorienterte Anwendungen (WASA)
            wurden uns Web Components vorgestellt. Die Wiederbenutzbarkeit von
            Single File Components in Vue.js lassen sich mit Shadow DOM und templates
            in Vanilla JS realisieren.
        </p>

        <h2>Speed Tests</h2>

        <p>Ich gehe alle Speed Tests druch auf der ersten Seite einer Google Suche</p>

        <h3>GTmetrix <a href="https://gtmetrix.com/">[link]</a></h3>

        <h4 class="center">Current</h4>
        <img src="@/assets/015_speedtest/gtmetrix_prod.webp" class="img-responsive" loading="lazy">

        <h4 class="center">New</h4>
        <img src="@/assets/015_speedtest/gtmetrix_beta.webp" class="img-responsive" loading="lazy">

        <p>
            Spricht von einer Verbesserung der Ladezeit aber gibt mir heftige Abzüge,
            weil die Bilder nicht skaliert sind, kein optimiertes Format haben und
            kein explizites Caching vorhanden ist.
        </p>

        <h3>webpagetest <a href="https://www.webpagetest.org/">[link]</a></h3>

        <h4 class="center">Current</h4>
        <img src="@/assets/015_speedtest/webpagetest_beta.webp" class="img-responsive" loading="lazy">

        <h4 class="center">new</h4>
        <img src="@/assets/015_speedtest/webpagetest_prod.webp" class="img-responsive" loading="lazy">

        <p>
            Diese Speed Ergebnissen widersprichen sich wiederum den obigen. Jedoch
            rechnen sie mir auch schlecht an, dass Bilder nicht compressed sind,
            kein caching benutzt wird und keine CDN benutzt wird.
        </p>

        <h3>Lighthouse</h3>
        Erreichbar über (Chrome Dev Tools > Audits) oder
        <a href="https://web.dev/measure/">https://web.dev/measure</a> oder
        <a href="https://developers.google.com/speed/pagespeed/insights/">https://developers.google.com/speed/pagespeed/insights/</a>

        <h4 class="center">Current</h4>
        <img src="@/assets/015_speedtest/lighthouse_prod.webp" class="img-responsive" loading="lazy">

        <h4 class="center">New</h4>
        <img src="@/assets/015_speedtest/lighthouse_beta.webp" class="img-responsive" loading="lazy">

        <p>
            Google will die Bilder richtig dimensioniert haben, in modernen Formaten
            und effizient codiert.
        </p>

        <h3>pingdom <a href="https://tools.pingdom.com/">[link]</a></h3>
        <h4 class="center">Current</h4>
        <img src="@/assets/015_speedtest/pingdom_prod.webp" class="img-responsive" loading="lazy">

        <h4 class="center">New</h4>
        <img src="@/assets/015_speedtest/pingdom_beta.webp" class="img-responsive" loading="lazy">

        <p>
            Voll die widersprüchlichen Ergebnisse:
            Zwei Tests sagen, dass ich ich mich verbessere, zwei Tests sagen
            ich bin langsamer geworden lol.
            VanillaJS folgt zwar dem eigentlichen Spirit des Webs mit einzelnen HTML-Dokumenten pro Seite
            aber Infinite Scrolling war für mich ein hartes Kriterium.
        </p>
        <p>
            SPA mit Text ist für mich kein Overkill, deswegen belasse ich es mal. Google's Crawler kommen
            auf JavaScript mittlerweile klar also sollte es auch keine SEO Einbuße geben.
        </p>

        <h2>Optimierungen</h2>

        <p>

        <h4>Bilder zu WebP konvertieren</h4>

        <p>Das Google Tool cwebp und folgendes bash-Skript um mehrere Bilder umzuwandeln:</p>
        <pre>
<div style="overflow-x:auto;">
<code>
for file in *.webp
do
cwebp -q 80 "$file" -o \"\${file%.png}.webp\"
done
</code>
</div>
            </pre>

        <h4>Dimension der Bilder kleiner machen</h4>
        <img src="@/assets/015_speedtest/du compare.webp" class="img-responsive" loading="lazy">
        <p>57% eingesparterr Platz</p>

        <h4>Skripte aufschieben</h4>
        <p>Mit <code>defer</code> sofern nötig</p>

        <h2>Schlusswort</h2>
        <p>
            Das ist jetzt schon das 3. Mal, dass die Webseite umgeschrieben ist.
            Frontend-Entwicklung ändert sich. Ständig. <br />
            Von nacktem HTML/CSS/JS. Zu jQuery. Zu Task Runners, um Builds zu entwickeln Grunt, dann Gulp.<br />
        </p>
        <p>
            Dann Tools um Module zu importieren wie Browserify, requirejs, Webpack.<br />
            Dann Frameworks wie Angular, Vue, React.<br />
            Jetzt zurück zu VanillaJS. Full circle.
        </p>
    </template>
</Entry>
</template>

<script>
import Entry from '@/components/Entry.vue';

export default {
  name: 'Speedtest',
  components: {
    Entry,
  },
};
</script>
