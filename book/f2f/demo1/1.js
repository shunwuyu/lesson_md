const template = (text) => `
                 __._                                   
                / ___)_                                 
               (_/Y ===\\                            __ 
               |||.==. =).                            | 
               |((| o |p|      |  ${text}
            _./| \\(  /=\\ )     |__                    
          /  |@\\ ||||||||.                             
         /    \\@\\ ||||||||\\                          
        /   \\  \\@\\ ||||||//\\                        
       (     Y  \\@\\|||| // _\\                        
       |    -\\   \\@\\ \\\\//    \\                    
       |     -\\__.-./ //\\.---.^__                        
       | \\    /  |@|__/\\_|@|  |  |                         
       \\__\\      |@||| |||@|     |                    
       <@@@|     |@||| |||@|    /                       
      / ---|     /@||| |||@|   /                                 
     |    /|    /@/ || |||@|  /|                        
     |   //|   /@/  ||_|||@| / |                        
     |  // \\ ||@|   /|=|||@| | |                       
     \\ //   \\||@|  / |/|||@| \\ |                     
     |//     ||@| /  ,/|||@|   |                        
     //      ||@|/  /|/||/@/   |                        
    //|   ,  ||//  /\\|/\\/@/  / /                      
   //\\   /   \\|/  /H\\|/H\\/  /_/                     
  // |\\_/     |__/|H\\|/H|\\_/                         
 |/  |\\        /  |H===H| |                            
     ||\\      /|  |H|||H| |                            
     ||______/ |  |H|||H| |                             
      \\_/ _/  _/  |L|||J| \\_                          
      _/  ___/   ___\\__/___ '-._                       
     /__________/===\\__/===\\---'                      
                                                        
`;

const argv = process.argv;
console.log(argv);
console.log(template(argv[2] || '有朋自远方来，不亦乐乎！'));