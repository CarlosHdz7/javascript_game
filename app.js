 function Player(player_name){
     
     this.nickname = player_name;
     this.lifePoints = 100;
     this.specialPoints = 100;

     this.heal = function( targetPlayer ){

        if( this.specialPoints >= 40){
            this.specialPoints -= 40;
            targetPlayer.lifePoints +=20; 
        }
        else{
            console.info(this.nickname + " Doesn't have special points ");
        }
        this.stats( targetPlayer ); 
     }

     this.attack = function( targetPlayer){
         if( targetPlayer.lifePoints > 40){
             targetPlayer.lifePoints -= 40;
         }
         else{
             targetPlayer.lifePoints = 0;
             console.error( targetPlayer.nickname + " died!!!" );
         }
        this.stats( targetPlayer ); 
         
     }

     this.stats = function( targetPlayer ){
        console.info(this);
        console.info( targetPlayer );
     }
 };

 var carlos = new Player("Carlos");
 var erick = new  Player("Erick");

 

 console.log(carlos);
 console.log(erick);
 console.warn("Fight!")


