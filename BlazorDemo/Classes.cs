using System;
namespace BlazorDemo
{
    public class Asteroid
    {
        public Asteroid(int x, int y, int radius)
        {
            X = x; Y = y; Radius = radius;
        }
        public int X { get; set; }
        public int Y { get; set; }
        public int Radius { get; set; }

    }

    public static class OnKeyUp
    {
        public static Action<string> Action { get; set; }
        public static void Handler(string value)
        {
            Action?.Invoke(value);
        }
    }
}