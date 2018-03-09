import * as omggif from 'omggif';

export function gen_anim (buf) {
    // The loop parameter is the number of times to loop, or 0 for forever.
    // A value of 1 will play twice (first time, and then one loop time).
    // To play only once do not specify loop or pass null.
    const gf = new omggif.GifWriter(buf, 2, 2, {loop: 0});
    gf.addFrame(0, 0, 2, 2,
                [0, 1, 1, 0],
                {palette: [0xff0000, 0x0000ff]});
    gf.addFrame(0, 0, 2, 2,
                [1, 0, 0, 1],
                {palette: [0xff0000, 0x0000ff],
                 delay: 10});  // Delay in hundredths of a sec (100 = 1s).
    return buf.slice(0, gf.end());
  }
