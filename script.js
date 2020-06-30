       var url=`https://restcountries.eu/rest/v2/all`;
       fetch(url).then((response)=>{
           return response.json();
       }).then((result)=>{
           console.log(result);
           result.forEach(value => {

            /* //container
            var container=document.createElement("div");
            container.setAttribute("class","container");
            document.body.appendChild(container); */
            //row
            /* var row=document.createElement("div");
            row.setAttribute("class","row");
           // container.appendChild(row);
            document.querySelector(".container").appendChild(row) */
            
            //column
            var column=document.createElement("div");
            column.setAttribute("class","col-sm-6 col-lg-4");
           // row.appendChild(column); 
            document.querySelector(".row").appendChild(column);


            //card
            var card=document.createElement("div");
            card.setAttribute("class","card my-3");
            column.appendChild(card)
            //document.querySelector(".col-sm").appendChild(card)

            //card-header
           var cardHeader=document.createElement("div");
           cardHeader.setAttribute("class","card-header h3");
           cardHeader.innerText=value.name;
           card.appendChild(cardHeader);
            //card-body
           var cardBody=document.createElement("div");
           cardBody.setAttribute("class","card-body border border-primary");
            card.appendChild(cardBody);

           //img-container
           var imgContiner=document.createElement("div");
           imgContiner.setAttribute("id","img-container");
           cardBody.appendChild(imgContiner);

           //image Display
           var image=document.createElement("img");
           image.src=value.flag;
           image.setAttribute("class","baner-img img-fluid img-thumbnail");
           image.setAttribute("alt","imageFlag")
           cardBody.appendChild(image);

           //region
           var region=document.createElement("div");
           region.setAttribute("id","region");
           region.setAttribute("class","heading font-weight-bold mt-1")
           region.innerText="Region:"+" "+value.region;
           cardBody.appendChild(region);

           //languages
           var lang=document.createElement("div");
           lang.setAttribute("id","lang-container");
           lang.setAttribute("class","heading font-weight-bold")
           lang.innerText="Languages:"
            value.languages.forEach(element=>{
                var lang1=document.createElement("div");
                lang1.setAttribute("id","lang");
                var list=document.createElement("li");
                list.innerText="Name:"+element.name+" "+"Nativename:"+element.nativeName;
                lang1.appendChild(list);
                lang.appendChild(lang1);
            })
           cardBody.appendChild(lang);


           /* var img=new Image();
           img.src=value.flag;
           img.setAttribute("class","baner-img");
           img.setAttribute("alt","imageFlag")
           document.getElementById("img-container").appendChild(img); */

           /* result.forEach(value => {
           var img=new Image();
           img.src=value.flag;
           img.setAttribute("class","baner-img");
           img.setAttribute("alt","imageFlag")
           document.getElementById("img-container").appendChild(img);
           }); */
        });
       }).catch((err)=>{
           console.log(err);
       });