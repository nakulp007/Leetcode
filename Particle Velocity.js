/*
You are a programmer in a scientific team doing research into particles.As an experiment, you have measured the position of a single particle in N equally distributed moments of time.The measurement made in moment K is recorded in an array particles as particles[K].

Now, your job is to count all the periods of time when the movement of the particle was stable.Those are the periods during which the particle doesn't change its velocity: i.e. the difference between any two consecutive position measurements remains the same. Note that you need at least three measurements to be sure that the particle didn't change its velocity.

For Example
1, 3, 5, 7, 9 is stable(velocity is 2)
7, 7, 7, 7 is stable(particle stays in place)
3, -1, -5, -9 is stable(velocity is 4)
0, 1 is not stable(you need at least three measurements)
1, 1, 2, 5, 7 is not stable(velocity changes between measurements)
More formally, your task is to find all the periods of time particles[P], particles[P + 1], ....particles[Q](of length at least 3) during which the movement of the particle is stable.Note that some periods of time might be contained in others(see below example).

    Example:
Input: [-1, 1, 3, 3, 3, 2, 3, 2, 1, 0]
Output: 5
Explanation:
Possible periods of time for which velocity is stable are:

values	location(from, to)	Velocity
[-1, 1, 3](0, 2)	2
[3, 3, 3](2, 4)	0
[3, 2, 1, 0](6, 9) - 1
[3, 2, 1](6, 8) - 1
[2, 1, 0](7, 9) - 1
*/

function particleVelocity(particles) {
    let total_periods = 0;
    const particles_size = particles.length;
    for (let i = 0; i < particles_size; i++) {
        for (let count = 0; i + 2 < particles_size && particles[i + 1] - particles[i] === particles[i + 2] - particles[i + 1]; i++) {
            count++;
            total_periods += count;
        }
    }
    return total_periods < 1000000000 ? total_periods : -1;
}