function pre_cal()
{
//alert("in");
var income=document.getElementById("income").value;
var age=parseInt(document.getElementById("age").value);

if(income<=400000)
{


 let a= document.getElementById("container");

 a.innerHTML=`<table>
 <thead>
     <tr>
         <th>Company</th>
         <th>Benifit age</th>
         <th>Duration</th>
         <th>Premium</th>
         <th>Total Bouns</th>
         <th>Benifit  Amuont</th>
         <th>Go to</th>
     </tr>
 </thead>
 <tbody>
     <tr>
         <td>
         <img src="https://m.media-amazon.com/images/I/61uJyfixlRL._SL1218_.jpg"
                 alt=""></td>
         <td>${age+20}</td>
         <td>20</td>
         <td>22,000</td>
         <td>52,80,000</td>
         <td>70,00,000</td>
         <td onclick><span class="action-btn"> <a href="https://www.licindia.in/">policies</a> </span></td>
     </tr>
     <tr>
         <td><img src="sbi.jpg" alt=""></td>
         <td>${age+20}</td>
         <td>20</td>
         <td>13000</td>
         <td>31,20,000</td>
         <td>39,50,000</td>
         <td><span class="action-btn"> <a href="https://www.sbilife.co.in/">policies</a> </span></td>
     </tr>
     <tr>
         <td><img src="PNB.png" alt=""></td>
         <td>${age+20}</td>
         <td>20</td>
         <td>19,000</td>
         <td>45,60,000</td>
         <td>57,00,000</td>
         <td><span class="action-btn"> <a href="https://www.pnbmetlife.com/">policies</a> </span></td>
     </tr>
     <tr>
         <td><img src="kotak.png" alt=""></td>
         <td>${age+20}</td>
         <td>20</td>
         <td>25000</td>
         <td>60,00,000</td>
         <td>70,50,000</td>
         <td><span class="action-btn"> <a
                     href="https://www.kotaklife.com/buy-online-term-insurance/?utm_source=search_brand&utm_medium=cpc&utm_campaign=Kotak-Life-Term-Search-Brand-Other-Exact-May-23&utm_ad_group=Kotak-Insurance&utm_keyword=kotak%20insurance&utm_content=rsa&campaign_id=20058880535&pl=&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena_2sIDIql3EWpbJpW_TopXz2nUb4VFCtHl5K4SrXhvRAk7VUEuuVtRoCWNUQAvD_BwE&gclsrc=aw.ds">policies</a>
             </span></td>
     </tr>
     <tr>
         <td><img src="icici.jfif" alt=""></td>
         <td>${age+20}</td>
         <td>20</td>
         <td>15,550</td>
         <td>37,32,000</td>
         <td>42,50,000</td>
         <td><span class="action-btn"> <a
                     href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.policybachat.com%2Farticles%2Ftata-aia-life-insurance&psig=AOvVaw3z7fCvyuN9hfnEzishC-Em&ust=1684994491748000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMC3veKjjf8CFQAAAAAdAAAAABAr">policies</a>
             </span></td>
     </tr>
     <tr>
         <td><img src="Tata.jpg" alt=""></td>
         <td>${age+20}</td>
         <td>20</td>
         <td>25,650</td>
         <td>61,56,000</td>
         <td>70,80,000</td>
         <td><span class="action-btn"> <a
                     href="https://www.tataaia.com/SRS-leadpage-1cr-plan-1.html?utm_code=NLANKWGSCMPSRS01&camcode=1136&utm_content=Comp&cid=google-search:cpc:ls_srs_google_search_comp_india_all_term_25to44:ls_srs_google_search_comp_india_all_term_25to44_comp+generic:icici_insurance:1136&&utm_source=google-search&utm_medium=cpc&utm_campaign=LS_SRS_Google_Search_Comp_India_All_Term_25to44&utm_adgroup=LS_SRS_Google_Search_Comp_India_All_Term_25to44_Comp+Generic&utm_term=icici%20insurance&utm_network=g&utm_matchtype=p&utm_device=c&utm_placement=&utm_Adposition=&utm_location=9299458&utm_Sitelink=&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena8XAzo4pvvKXVFxISadfJgLScj-RClwrwWCRFrPwrBiB5gqpEEPSGBoC_y8QAvD_BwE&gclsrc=aw.ds">policies</a>
             </span></td>
     </tr>
 </tbody>
</table>`;
}
if(income >400000 && income<=1500000)
{
    let a= document.getElementById("container");
    a.innerHTML="";
      a.innerHTML=`<table>
     <thead>
      <tr>
                
                <th>Company</th>
                <th>Benifit  age</th>
                <th>Duration</th>
                <th>Premium</th>
                <th>Total Bouns</th>
                <th>Benifit  Amuont</th>
                <th>Go to</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                
                <td><img src="data:image/png;base64,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" alt=""></td>
                <td>${age+20}</td>
                <td>20</td>
                <td>33000</td>
                <td>79,20,000</td>
                <td>90,50,000</td>
                <td><span class="action-btn">
                    <a href="https://www.licindia.in/">policies</a>
                </span></td>
                 </tr>
                 <tr>
                    <td><img src="sbi.jpg" alt=""></td>
                    <td>${age+20}</td>
                    <td>20</td>
                    <td>39000</td>
                    <td>93,60,000</td>
                    <td>1,60,00,000</td>
                    <td><span class="action-btn">
                        <a href="https://www.sbilife.co.in/">policies</a>
                    </span></td>
                 </tr>
                 <tr>
                    <td><img src="PNB.png" alt=""></td>
                    <td>${age+20}</td>
                    <td>20</td>
                    <td>45,000</td>
                    <td>1,08,00,000</td>
                    <td>1,60,00,000</td>
                    <td><span class="action-btn">
                        <a href="https://www.pnbmetlife.com/">policies</a>
                    </span></td>
                     </tr>
                     <tr>
                        <td><img src="kotak.png" alt=""></td>
                        <td>${age+20}</td>
                        <td>20</td>
                        <td>40000</td>
                        <td>96,00,000</td>
                        <td>1,05,00,000</td>
                        <td><span class="action-btn">
                            <a href="https://www.kotaklife.com/buy-online-term-insurance/?utm_source=search_brand&utm_medium=cpc&utm_campaign=Kotak-Life-Term-Search-Brand-Other-Exact-May-23&utm_ad_group=Kotak-Insurance&utm_keyword=kotak%20insurance&utm_content=rsa&campaign_id=20058880535&pl=&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena_2sIDIql3EWpbJpW_TopXz2nUb4VFCtHl5K4SrXhvRAk7VUEuuVtRoCWNUQAvD_BwE&gclsrc=aw.ds">policies</a>
                        </span></td>
                         </tr>
                         <tr>
                            <td><img src="icici.jfif" alt=""></td>
                            <td>${age+20}</td>
                            <td>20</td>
                            <td>36000</td>
                            <td>86,40,000</td>
                            <td>1,00,00,000</td>
                            <td><span class="action-btn">
                                <a href="https://www.icicilombard.com/motor-insurance/car-insurance?utm_source=google_PerfMax&utm_medium=CPC&utm_campaign=FourWheeler_Search_PerfMax_NonConverters_Org_SEM_20.01.2023&utm_adgroup=&utm_keyword=&utm_device=c&utm_ad=&utm_placement=&utm_network=x&utm_matchtype=&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena1RvtF9gggnx2qN8_IwhY2j3vBGUXRmtuQ4QjLumcp0xRIstXFAfuBoCvukQAvD_BwE">policies</a>
                            </span></td>
                             </tr>
                             <tr>
                                <td><img src="Tata.jpg" alt=""></td>
                                <td>${age+20}</td>
                                <td>20</td>
                                <td>30000</td>
                                <td>72,00,000</td>
                                <td>90,50,000</td>
                                <td><span class="action-btn">
                                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.policybachat.com%2Farticles%2Ftata-aia-life-insurance&psig=AOvVaw3z7fCvyuN9hfnEzishC-Em&ust=1684994491748000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMC3veKjjf8CFQAAAAAdAAAAABAr">policies</a>
                                </span></td>
                                 </tr>
                 

                 

                </tbody>
              
         </table>`;
}
if(income>1500000 && income<=3000000)
{
    let a= document.getElementById("container");
    a.innerHTML=`<table>
    <thead>
            <tr>
                
                <th>Company</th>
                <th>Benifit  age</th>
                <th>Duration</th>
                <th>Premium</th>
                <th>Total Bouns</th>
                <th>Benifit  Amuont</th>
                <th>Go to</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                
                <td><img src="data:image/png;base64,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" alt=""></td>
                <td>${age+20}</td>
                <td>20</td>
                <td>50000</td>
                <td>1,20,00,000</td>
                <td>2,00,00,000</td>
                <td><span class="action-btn">
                    <a href="https://www.licindia.in/">policies</a>
                </span></td>
                 </tr>
                 <tr>
                    <td><img src="sbi.jpg" alt=""></td>
                    <td>${age+20}</td>
                    <td>20</td>
                    <td>49000</td>
                    <td>1,17,60,000</td>
                    <td>1,90,00,000</td>
                    <td><span class="action-btn">
                        <a href="https://www.sbilife.co.in/">policies</a>
                    </span></td>
                 </tr>
                 <tr>
                    <td><img src="PNB.png" alt=""></td>
                    <td>${age+20}</td>
                    <td>20</td>
                    <td>54000</td>
                    <td>1,29,60,000</td>
                    <td>2,55,50,000</td>
                    <td><span class="action-btn">
                        <a href="https://www.pnbmetlife.com/">policies</a>
                    </span></td>
                     </tr>
                     <tr>
                        <td><img src="kotak.png" alt=""></td>
                        <td>${age+20}</td>
                        <td>20</td>
                        <td>60000</td>
                        <td>1,44,00,000</td>
                        <td>2,88,00,000</td>
                        <td><span class="action-btn">
                            <a href="https://www.kotaklife.com/buy-online-term-insurance/?utm_source=search_brand&utm_medium=cpc&utm_campaign=Kotak-Life-Term-Search-Brand-Other-Exact-May-23&utm_ad_group=Kotak-Insurance&utm_keyword=kotak%20insurance&utm_content=rsa&campaign_id=20058880535&pl=&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena_2sIDIql3EWpbJpW_TopXz2nUb4VFCtHl5K4SrXhvRAk7VUEuuVtRoCWNUQAvD_BwE&gclsrc=aw.ds">policies</a>
                        </span></td>
                         </tr>
                         <tr>
                            <td><img src="icici.jfif" alt=""></td>
                            <td>${age+20}</td>
                            <td>20</td>
                            <td>45234</td>
                            <td>1,08,56,160</td>
                            <td>1,90,00,000</td>
                            <td><span class="action-btn">
                                <a href="https://www.icicilombard.com/motor-insurance/car-insurance?utm_source=google_PerfMax&utm_medium=CPC&utm_campaign=FourWheeler_Search_PerfMax_NonConverters_Org_SEM_20.01.2023&utm_adgroup=&utm_keyword=&utm_device=c&utm_ad=&utm_placement=&utm_network=x&utm_matchtype=&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena1RvtF9gggnx2qN8_IwhY2j3vBGUXRmtuQ4QjLumcp0xRIstXFAfuBoCvukQAvD_BwE">policies</a>
                            </span></td>
                             </tr>
                             <tr>
                                <td><img src="Tata.jpg" alt=""></td>
                                <td>${age+20}</td>
                                <td>20</td>
                                <td>53245</td>
                                <td>1,27,78,000</td>
                                <td>2,10,00,000</td>
                                <td><span class="action-btn">
                                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.policybachat.com%2Farticles%2Ftata-aia-life-insurance&psig=AOvVaw3z7fCvyuN9hfnEzishC-Em&ust=1684994491748000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMC3veKjjf8CFQAAAAAdAAAAABAr">policies</a>
                                </span></td>
                                 </tr>
                 

                 

                </tbody>
              


    </table>`;
}

if(income>3000000)
{
    let a= document.getElementById("container");
    a.innerHTML=`<table>
    <thead>
            <tr>
                
                <th>Company</th>
                <th>Benifit age</th>
                <th>Duration</th>
                <th>Premium</th>
                <th>Total Bouns</th>
                <th>Benifit  Amuont</th>
                <th>Go to</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                
                <td><img src="data:image/png;base64,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" alt=""></td>
                <td>${age+20}</td>
                <td>20</td>
                <td>59000</td>
                <td>1,41,60,000</td>
                <td>1,90,50,000</td>
                <td><span class="action-btn">
                    <a href="https://www.licindia.in/">policies</a>
                </span></td>
                 </tr>
                 <tr>
                    <td><img src="sbi.jpg" alt=""></td>
                    <td>${age+20}</td>
                    <td>20</td>
                    <td>62000</td>
                    <td>1,48,00,000</td>
                    <td>1,99,90,000</td>
                    <td><span class="action-btn">
                        <a href="https://www.sbilife.co.in/">policies</a>
                    </span></td>
                 </tr>
                 <tr>
                    <td><img src="PNB.png" alt=""></td>
                    <td>${age+20}</td>
                    <td>20</td>
                    <td>70,000</td>
                    <td>1,68,00,000</td>
                    <td>2,40,00,000</td>
                    <td><span class="action-btn">
                        <a href="https://www.pnbmetlife.com/">policies</a>
                    </span></td>
                     </tr>
                     <tr>
                        <td><img src="kotak.png" alt=""></td>
                        <td>${age+20}</td>
                        <td>20</td>
                        <td>73,200</td>
                        <td>1,75,00,000</td>
                        <td>2,10,00,000</td>
                        <td><span class="action-btn">
                            <a href="https://www.kotaklife.com/buy-online-term-insurance/?utm_source=search_brand&utm_medium=cpc&utm_campaign=Kotak-Life-Term-Search-Brand-Other-Exact-May-23&utm_ad_group=Kotak-Insurance&utm_keyword=kotak%20insurance&utm_content=rsa&campaign_id=20058880535&pl=&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena_2sIDIql3EWpbJpW_TopXz2nUb4VFCtHl5K4SrXhvRAk7VUEuuVtRoCWNUQAvD_BwE&gclsrc=aw.ds">policies</a>
                        </span></td>
                         </tr>
                         <tr>
                            <td><img src="icici.jfif" alt=""></td>
                            <td>${age+20}</td>
                            <td>20</td>
                            <td>77787</td>
                            <td>1,86,68,880</td>
                            <td>2,80,60,000</td>
                            <td><span class="action-btn">
                                <a href="https://www.icicilombard.com/motor-insurance/car-insurance?utm_source=google_PerfMax&utm_medium=CPC&utm_campaign=FourWheeler_Search_PerfMax_NonConverters_Org_SEM_20.01.2023&utm_adgroup=&utm_keyword=&utm_device=c&utm_ad=&utm_placement=&utm_network=x&utm_matchtype=&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena1RvtF9gggnx2qN8_IwhY2j3vBGUXRmtuQ4QjLumcp0xRIstXFAfuBoCvukQAvD_BwE">policies</a>
                            </span></td>
                             </tr>
                             <tr>
                                <td><img src="Tata.jpg" alt=""></td>
                                <td>${age+20}</td>
                                <td>20</td>
                                <td>87600</td>
                                <td>2,10,24,000</td>
                                <td>3,00,00,000</td>
                                <td><span class="action-btn">
                                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.policybachat.com%2Farticles%2Ftata-aia-life-insurance&psig=AOvVaw3z7fCvyuN9hfnEzishC-Em&ust=1684994491748000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMC3veKjjf8CFQAAAAAdAAAAABAr">policies</a>
                                </span></td>
                                 </tr>
                 

                 

                </tbody>


    </table>`;
}

}
