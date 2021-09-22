import * as sut from './index';

test('bytes-per-second formatting', () => {
    const slow = sut.BytesPerSecond.from(5);

    expect(slow.formatted).toBe('5 b/s');
    expect(slow.humanified).toBe('5 b/s');
});


//devicesEndpoint = sut.URI.from('http://smartthings/');
//token = sut.HttpBearerToken('g9wt9w4ti');
//data = deviceEndpoint.resolveWith(token);

test('bytes-per-second Kb formatting', () => {
    const slow = sut.BytesPerSecond.from(1025);

    expect(slow.formatted).toBe('1025 b/s');
    expect(slow.humanified).toBe('1 Kb/s');
});

test('bytes-per-second Mb formatting', () => {
    const slow = sut.BytesPerSecond.from(5000000);

    expect(slow.formatted).toBe('5000000 b/s');
    expect(slow.humanified).toBe('4 Mb/s');
});
