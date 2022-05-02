async function navbar(){
    
    return `
    <div>
            <img id="icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAMAAAC4uKf/AAAAZlBMVEX/////uw7/89r//fn/9uT/+O3/wzr+yEz/viT/14T/4aX/vRv/7Mf+y1r/9+j/0Gz/wTD/zWH/6sH/2pH/03b/1Hz/46r/7s7/3pn/5bL/xUP/+/P/2Yz/89z/zWT/wjf/68T/3p4R7K9KAAADMUlEQVRoge1YybarIBAUTYzRDHrNbIbr///kfdKNCt04YBZvQS1ylDpS0BYFJgg8PDw8PDw8PDw8PP4fXI+JSI47jgrPuciKn69JRWcBOK4JtUWqIJQbqr1QiFeTKTdEhewshy61CUSglcjfR/UFsacUCYPXo7nY9ylZw3wXHKToe7nWVY69qdFaTu7WUT/NfRb+u6ri5vKyVCuS80l7nb8UVUnxUl7v5JCWmuTS9PKJ4GajVUvWN8c3JV/sdplWJEdf452cmrjCzTrrV/VXUsscmcrKteXJe1OTExMt9WnuzovEYt1mINBYAidWtFSpD8sBULd7ex/K+1NzWbPUjfYxGYVeKqxj1pgiZqncXWstO9z0WiAlU1x+GnWSLWxYT4K0h3j2Wu5KA7ouCeVuEbmuxG+v5QCpu4oSQq0gJyNHLexZcxjkcboDqqJUX38OZHqIj9YG5dvDNvbQqLdYkiLvzugtwPG4q+jUjRnbZEQZs3SwfkK5sgdYlOIVuADcLfTjxbovpvscHOK40dzQeXpr0hMzwiljajsVEB+Z0dqdOkRiULBS3EIkUwtYw7kTM6kTW4pJgGQVR6O57sTMtMC634P5gPjREqnBTydmRjw+8QzmY8uPM+zETArtuw/mY8/ZW/P+1aAOvG+mAPxB12jWihEn2NpHgcMU5Jwbt2Ik4D98Mcaxs9WkXWhWKiXEGGDjNIK9wUmJWan5wb+1WeupxIrpz4wB9hcm6W5KjFI1EPMD62EryUWJUepuc84Y0OH0INhGiJ2a6321dunu1G6f1HQYIWS1j0GlEk3VNq8o9bIyw1Djpwt0pcToPwQqCGrCDEO965AwbTjScVTImDvFGNDFzPElEtZxqHCceywu8bmDtUdODA8ocz/l1e7P/N+gYp8xOByKyXlhDEfskVmf6nzFTBqTIJ4pprKdoXL7pOF8NTuv8DFu143tYjhE8/g3hscSMa4eQ8BNl/tMUGLM63zbxzGExP6qY/vwla0Y7ziKbb4uJuwrZhUCBsXCy2V69g+IDUCdT15BWp6nn3vcxFTuhEF6K6d/qC0Vu9bp9/6k9vDw8PDw8PDw8PBwwR8iGRtroyF0kgAAAABJRU5ErkJggg=="
                alt="Icon"/>
        </div>

        <div id="anchorTag">
            <h3><a href="./index.html">Search Receipe</a></h3>
            
            <h3><a href="./getReceipe.html">Get Receipe</a></h3>
            
            <h3><a href="./random.html">Random Receipe</a></h3>

            <h3><a href="./login.html">Login</a></h3>
            <h3><a href="./signup.html">Signup</a></h3>
            
        </div>    
    `;
}

export default navbar;