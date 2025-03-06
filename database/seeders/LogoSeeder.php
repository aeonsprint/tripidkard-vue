<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LogoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = DB::table('users')->pluck('id');

        foreach ($users as $userId) {
            $folderPath = storage_path("app/public/photos/Logo/{$userId}/");

            // ✅ Check if folder exists
            if (!file_exists($folderPath)) {
                dump("Folder does not exist: {$folderPath}");
                continue;
            }

            // 🛠 Debug: List files inside the folder
            $files = scandir($folderPath);
            dump("Files found in {$folderPath}:", $files);

            // Get one image from the folder
            $avatar = $this->getFirstImageFromFolder($folderPath);

            // 🛠 Debug: Show what will be updated
            dump([
                'user_id' => $userId,
                'avatar' => $avatar
            ]);

            // Update only if an avatar exists
            if ($avatar) {
                DB::table('users')->where('id', $userId)->update([
                    'avatar' => $avatar,
                ]);
            }
        }
    }

    /**
     * Get the first image file from a folder.
     */
    private function getFirstImageFromFolder($folderPath)
    {
        $files = scandir($folderPath);

        foreach ($files as $file) {
            if (preg_match('/\.(jpg|jpeg|png|tiff)$/i', $file)) {
                // 🛠 Debug: Show found image
                dump("Found avatar: {$file}");

                return "photos/Logo/" . basename($folderPath) . "/{$file}";
            }
        }

        return null;
    }
}
